# SAP Integration Cases

Hands-on SAP Integration Suite (Cloud Integration) scenarios I built to deepen my
understanding of common integration patterns. Each case is designed to be built on a
**free SAP BTP trial** using **public APIs**, so anyone can reproduce it without a
licensed S/4HANA system.

> These are **learning/demo scenarios with public data**. They contain **no
> confidential client information**.

## The cases

| # | Case | Pattern | Key skills |
|---|------|---------|-----------|
| 01 | [Product catalog sync](./01-product-catalog-sync) | Scheduled REST poll → transform → load | REST, JSON↔XML, Message Mapping, Groovy |
| 02 | [Order orchestration](./02-order-orchestration) | SOAP in → route → REST out + error handling | SOAP, XSLT, Content Router, Exception Subprocess |
| 03 | [Master data distribution](./03-masterdata-distribution) | IDoc in → fan-out to N systems | IDoc, Multicast, multiple mappings |

## How to set up the free environment

1. **Create an SAP BTP trial account** at <https://www.sap.com/products/technology-platform/trial.html>.
2. In the trial subaccount, enable **Integration Suite** (Booster: *"Set up Integration Suite"*).
   - If Integration Suite is not available in your trial region, the **BTP free tier**
     also offers a Cloud Integration plan in some regions.
3. Open **Cloud Integration** → *Design* → create an **Integration Package** per case.
4. Create the iFlow following each case's `README.md`.

### Public APIs used (no auth required)

| API | Use | URL |
|-----|-----|-----|
| Fake Store API | Sample product catalog (JSON) | `https://fakestoreapi.com/products` |
| reqres.in | Mock REST receiver (echoes POST) | `https://reqres.in/api/...` |
| httpbin.org | Inspect what you send | `https://httpbin.org/post` |
| jsonplaceholder | Generic mock REST endpoints | `https://jsonplaceholder.typicode.com` |

### Tools to send test messages

- **Postman** — to call the iFlow endpoint (REST/SOAP) and inspect responses.
- **SoapUI** (optional) — handy for the SOAP sender in case 02.

## Folder layout per case

```
NN-case-name/
├── README.md        ← step-by-step build guide
├── groovy/          ← Groovy scripts ready to paste into a Script step
├── xslt/ or mapping/← XSLT files and/or mapping specifications
└── payloads/        ← sample input/output messages for testing
```

## What I focused on while building these

- Writing **defensive Groovy** (null-safe, with clear MPL logging) instead of happy-path only.
- Keeping **endpoints and credentials externalized** so the same iFlow promotes cleanly
  across Dev / QA / Prod.
- Designing **error handling** as a first-class concern, not an afterthought.
