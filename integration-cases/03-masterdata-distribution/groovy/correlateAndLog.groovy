/*
 * correlateAndLog.groovy
 * --------------------------------------------------------------------------
 * Case 03 — Master Data Distribution
 *
 * Adds a correlation id (partner id + timestamp) and writes a per-destination
 * trace to the MPL so each downstream delivery is auditable. Drop one copy in
 * each Multicast branch and pass the branch name via the "Destination" property.
 * --------------------------------------------------------------------------
 */
import com.sap.gateway.ip.core.customdev.util.Message

Message processData(Message message) {
    def props = message.getProperties()

    String partnerId   = (props.get("PartnerId") ?: "UNKNOWN").toString()
    String destination = (props.get("Destination") ?: "UNSPECIFIED").toString()
    String now         = new Date().format("yyyyMMddHHmmssSSS", TimeZone.getTimeZone("UTC"))

    String correlationId = "${partnerId}-${now}"
    message.setHeader("X-Correlation-Id", correlationId)

    def messageLog = messageLogFactory.getMessageLog(message)
    if (messageLog != null) {
        messageLog.setStringProperty("Destination", destination)
        messageLog.setStringProperty("PartnerId", partnerId)
        messageLog.setStringProperty("CorrelationId", correlationId)
    }
    return message
}
