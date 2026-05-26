# Case 01 — Product Catalog Sync

**Pattern:** Scheduled poll of an external REST API → transform → prepare load into S/4HANA.

## Business scenario

An e-commerce platform exposes its product catalog through a REST API (JSON). The
business wants those products synced into S/4HANA as material master data on a schedule,
with prices/currency normalized and missing fields defaulted before the load.

Since a real S/4HANA isn't available on a trial, the **target is mocked**: we send the
transformed payload to an echo endpoint (`reqres.in` / `httpbin.org`) or write it to a
data store. In a real landscape the receiver would be an **OData** or **IDoc** adapter to
S/4HANA.

## Flow

```
Timer (hourly)
   → Request Reply ── GET https://fakestoreapi.com/products  (JSON array)
   → JSON to XML Converter
   → Message Mapping        (external product → Material structure)
   → Groovy: enrichProduct  (defaults, currency, audit fields)
   → Groovy: logPayload      (write transformed payload to MPL)
   → Request Reply ── POST mock S/4HANA receiver
```

## Build steps (Cloud Integration)

1. **Create the iFlow** in your Integration Package: `01_Product_Catalog_Sync`.
2. **Sender → Timer**: schedule *Run Once* while testing (switch to *Schedule on Day*
   every 1 hour later).
3. **Request Reply + HTTP receiver**:
   - Address: `https://fakestoreapi.com/products`
   - Method: `GET`
4. **JSON to XML Converter**: default settings. This wraps the JSON array into XML so the
   mapping and XSLT can process it. Use `root` element name `products` and add a wrapper.
5. **Message Mapping**: import `payloads/sample-source.json` (converted to XML) as source
   and `payloads/expected-target.xml` as target. Map fields per
   [`mapping/product-to-material.md`](./mapping/product-to-material.md).
6. **Groovy Script `enrichProduct`**: paste [`groovy/enrichProduct.groovy`](./groovy/enrichProduct.groovy).
7. **Groovy Script `logPayload`**: paste [`groovy/logPayload.groovy`](./groovy/logPayload.groovy).
8. **Request Reply + HTTP receiver (mock target)**:
   - Address: `https://httpbin.org/post` (it echoes what you send, great for verifying)
   - Method: `POST`
9. **Deploy** and check **Monitor → Message Processing** for status `Completed`.

## How to test

- Trigger the Timer (Run Once) or deploy and wait.
- Open **Monitor → All Integration Flows → Completed message → Logs** to see the
  `logPayload` trace and the attachment.
- The `httpbin.org` response will echo the transformed material payload back.

## Externalized parameters (good practice)

| Parameter | Example value |
|-----------|---------------|
| `SourceProductsUrl` | `https://fakestoreapi.com/products` |
| `TargetMaterialUrl` | `https://httpbin.org/post` |
| `DefaultCurrency` | `EUR` |
| `DefaultPlant` | `1000` |

Use the **Externalize** option on each adapter/parameter so the same iFlow promotes across
Dev / QA / Prod without edits.

## What I learned

- Decoupling cadence (Timer) from the API call keeps the design simple and re-runnable.
- Normalizing currency/units **in the mapping/Groovy** — before the target — avoids dirty
  master data downstream.
- A small `logPayload` step pays off massively when debugging in Monitor.
