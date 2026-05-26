/*
 * enrichProduct.groovy
 * --------------------------------------------------------------------------
 * Case 01 — Product Catalog Sync
 *
 * Runs AFTER the message mapping. Takes the mapped Material XML and:
 *   - applies a default currency and plant when missing (from iFlow params)
 *   - rounds the price to 2 decimals
 *   - stamps audit fields (source system + load timestamp)
 *
 * Reads externalized properties so the same script works across Dev/QA/Prod.
 * --------------------------------------------------------------------------
 */
import com.sap.gateway.ip.core.customdev.util.Message
import groovy.xml.XmlUtil

Message processData(Message message) {
    String body = message.getBody(String) ?: ""

    // Externalized parameters (set them as iFlow externalized properties)
    def props = message.getProperties()
    String defaultCurrency = (props.get("DefaultCurrency") ?: "EUR")
    String defaultPlant     = (props.get("DefaultPlant") ?: "1000")

    def materials = new XmlSlurper().parseText(body)
    String now = new Date().format("yyyy-MM-dd'T'HH:mm:ss'Z'", TimeZone.getTimeZone("UTC"))

    materials.Material.each { mat ->
        // Default currency if empty
        if (!mat.Currency.text()?.trim()) {
            mat.Currency.replaceBody(defaultCurrency)
        }
        // Default plant if empty
        if (!mat.Plant.text()?.trim()) {
            mat.Plant.replaceBody(defaultPlant)
        }
        // Round price to 2 decimals (guard against bad/empty values)
        String raw = mat.Price.text()?.trim()
        if (raw) {
            try {
                BigDecimal price = new BigDecimal(raw).setScale(2, BigDecimal.ROUND_HALF_UP)
                mat.Price.replaceBody(price.toPlainString())
            } catch (NumberFormatException e) {
                mat.Price.replaceBody("0.00")
            }
        }
        // Audit fields
        mat.appendNode {
            SourceSystem("FAKESTORE")
            LoadTimestamp(now)
        }
    }

    message.setBody(XmlUtil.serialize(materials))
    // Surface a quick count in the MPL header for monitoring
    message.setHeader("MaterialCount", materials.Material.size().toString())
    return message
}
