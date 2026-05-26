# Case 02 — Order Orchestration with Routing & Error Handling

**Pattern:** SOAP/XML in → normalize with XSLT → content-based routing → REST out, with a
robust Exception Subprocess.

## Business scenario

A legacy system sends orders in SOAP/XML. Depending on the order **region** (EU / US /
REST), the order must be delivered to a different fulfillment REST API. If a downstream
call fails, the flow must log the error, build an alert payload, and route it to an error
endpoint — without silently losing the message.

## Flow

```
SOAP Sender (receives Order XML)
   → XSLT: legacy-to-canonical          (normalize to canonical Order)
   → Content Modifier                   (extract /Order/Region to a property)
   → Router
        ├── Region = EU   → Request Reply → EU fulfillment API
        ├── Region = US   → Request Reply → US fulfillment API
        └── default       → Request Reply → ROW fulfillment API
   [Exception Subprocess]
        → Groovy: logError
        → Groovy: buildAlert
        → Request Reply → error/alert endpoint
```

## Build steps (Cloud Integration)

1. **Create the iFlow** `02_Order_Orchestration`.
2. **Sender → SOAP (SOAP 1.x)**: expose an endpoint address, e.g. `/orders`. Connection:
   no authentication for the trial (or Basic with trial user).
3. **XSLT Mapping**: upload [`xslt/legacy-to-canonical.xsl`](./xslt/legacy-to-canonical.xsl).
   It maps the legacy structure to a canonical `<Order>`.
4. **Content Modifier**: create an **Exchange Property** `Region` with type *XPath*,
   value `/Order/Region`.
5. **Router**: add 3 branches based on `${property.Region}`:
   - `EU`  → EU receiver (`https://httpbin.org/post`)
   - `US`  → US receiver (`https://reqres.in/api/orders`)
   - **Default** → ROW receiver (`https://jsonplaceholder.typicode.com/posts`)
6. **Exception Subprocess**: add to the integration process.
   - Groovy `logError` → [`groovy/logError.groovy`](./groovy/logError.groovy)
   - Groovy `buildAlert` → [`groovy/buildAlert.groovy`](./groovy/buildAlert.groovy)
   - Request Reply → error endpoint (`https://httpbin.org/status/200`)
7. **Deploy.**

## How to test

Send the sample orders with Postman or SoapUI to the SOAP endpoint:

- [`payloads/sample-order-eu.xml`](./payloads/sample-order-eu.xml) → should hit the EU branch.
- [`payloads/sample-order-us.xml`](./payloads/sample-order-us.xml) → should hit the US branch.

To test error handling, point one receiver to `https://httpbin.org/status/500` and confirm
the Exception Subprocess fires and the alert payload is produced.

## Externalized parameters

| Parameter | Example |
|-----------|---------|
| `EuFulfillmentUrl` | `https://httpbin.org/post` |
| `UsFulfillmentUrl` | `https://reqres.in/api/orders` |
| `RowFulfillmentUrl` | `https://jsonplaceholder.typicode.com/posts` |
| `AlertUrl` | `https://httpbin.org/status/200` |

## What I learned

- A **canonical intermediate format** decouples routing from the legacy schema — change the
  legacy XML and only the XSLT changes, not the router.
- An **Exception Subprocess** turns silent failures into actionable alerts with context
  (which step, which message ID, what error).
