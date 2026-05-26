/*
 * logError.groovy
 * --------------------------------------------------------------------------
 * Case 02 — Order Orchestration (Exception Subprocess)
 *
 * Captures the failure context into the MPL: the exception message, the
 * failing step, and the inbound message id. Keeps the original body as an
 * attachment so the failed payload can be reprocessed if needed.
 * --------------------------------------------------------------------------
 */
import com.sap.gateway.ip.core.customdev.util.Message

Message processData(Message message) {
    def props = message.getProperties()

    // CPI exposes the caught exception under this property in an Exception Subprocess
    def ex = props.get("CamelExceptionCaught")
    String errorText = ex != null ? ex.getMessage() : "Unknown error"

    String msgId = message.getHeaders().get("SAP_MessageProcessingLogID")
    String body  = message.getBody(String) ?: ""

    def messageLog = messageLogFactory.getMessageLog(message)
    if (messageLog != null) {
        messageLog.setStringProperty("ErrorMessage", errorText)
        messageLog.setStringProperty("FailedMessageId", msgId ?: "n/a")
        messageLog.addAttachmentAsString("FailedPayload", body, "application/xml")
    }

    // Make the error available to the next step (buildAlert)
    message.setProperty("ErrorMessage", errorText)
    return message
}
