/*
 * logPayload.groovy
 * --------------------------------------------------------------------------
 * Case 01 — Product Catalog Sync
 *
 * Reusable logging helper. Attaches the current payload to the Message
 * Processing Log (MPL) so it can be inspected in Monitor without enabling
 * full trace. Safe to drop into any iFlow.
 * --------------------------------------------------------------------------
 */
import com.sap.gateway.ip.core.customdev.util.Message

Message processData(Message message) {
    String body = message.getBody(String) ?: ""

    def messageLog = messageLogFactory.getMessageLog(message)
    if (messageLog != null) {
        messageLog.setStringProperty("Step", "After enrichProduct")
        messageLog.addAttachmentAsString("TransformedMaterials", body, "application/xml")
    }
    return message
}
