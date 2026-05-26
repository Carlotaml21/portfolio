/*
 * buildAlert.groovy
 * --------------------------------------------------------------------------
 * Case 02 — Order Orchestration (Exception Subprocess)
 *
 * Builds a compact JSON alert from the error context produced by
 * logError.groovy, ready to POST to an alerting endpoint (or a ticketing
 * webhook in a real landscape).
 * --------------------------------------------------------------------------
 */
import com.sap.gateway.ip.core.customdev.util.Message
import groovy.json.JsonOutput

Message processData(Message message) {
    def props = message.getProperties()

    String errorText = (props.get("ErrorMessage") ?: "Unknown error").toString()
    String region    = (props.get("Region") ?: "n/a").toString()
    String iFlow     = (props.get("SAP_ApplicationID") ?: "02_Order_Orchestration").toString()
    String now       = new Date().format("yyyy-MM-dd'T'HH:mm:ss'Z'", TimeZone.getTimeZone("UTC"))

    def alert = [
        severity : "ERROR",
        iflow    : iFlow,
        region   : region,
        message  : errorText,
        timestamp: now
    ]

    message.setBody(JsonOutput.prettyPrint(JsonOutput.toJson(alert)))
    message.setHeader("Content-Type", "application/json")
    return message
}
