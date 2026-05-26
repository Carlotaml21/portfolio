# Case 03 — Master Data Distribution (IDoc → Fan-out)

**Pattern:** IDoc in → transform → distribute in parallel to N downstream systems
(Multicast).

## Business scenario

S/4HANA emits a Business Partner / customer IDoc (e.g. `DEBMAS`) whenever a partner is
created or changed. That data must reach **two systems at once**, each with its own JSON
shape:

- a **CRM** (rich JSON), and
- an **Analytics** platform (flat JSON).

On a trial there's no S/4HANA to emit IDocs, so the **IDoc is simulated** with the sample
payload in `payloads/`, sent via an HTTPS sender (or a Content Modifier with a static
body). The pattern and mappings are identical to a real IDoc adapter scenario.

## Flow

```
IDoc Sender (or HTTPS sender with sample IDoc XML)
   → Content Modifier            (extract Partner key + role to properties)
   → Multicast (Parallel)
        ├── Branch CRM       → Message Mapping → CRM JSON     → REST receiver
        └── Branch Analytics → Message Mapping → flat JSON    → REST receiver
   → Gather (optional)
   → Groovy: correlateAndLog     (per-destination trace)
```

## Build steps (Cloud Integration)

1. **Create the iFlow** `03_MasterData_Distribution`.
2. **Sender**: for the trial use an **HTTPS** sender (address `/bp`) and POST the sample
   IDoc XML. (In a real landscape: **IDoc** adapter.)
3. **Content Modifier**: properties via XPath
   - `PartnerId` = `//DEBMAS/IDOC/E1KNA1M/KUNNR`
   - `PartnerName` = `//DEBMAS/IDOC/E1KNA1M/NAME1`
4. **Multicast** → *Parallel Multicast*, 2 branches.
5. **Branch CRM**: Message Mapping per [`mapping/idoc-to-crm.md`](./mapping/idoc-to-crm.md)
   → receiver `https://reqres.in/api/crm`.
6. **Branch Analytics**: Message Mapping per
   [`mapping/idoc-to-analytics.md`](./mapping/idoc-to-analytics.md)
   → receiver `https://httpbin.org/post`.
7. **Groovy `correlateAndLog`** → [`groovy/correlateAndLog.groovy`](./groovy/correlateAndLog.groovy).
8. **Deploy** and POST `payloads/sample-debmas.xml`.

## Expected outputs

- CRM branch → [`payloads/expected-crm.json`](./payloads/expected-crm.json)
- Analytics branch → [`payloads/expected-analytics.json`](./payloads/expected-analytics.json)

## What I learned

- Modeling a **1→N fan-out** with Multicast keeps each destination's logic isolated —
  far cleaner than one giant conditional mapping.
- Splitting **one mapping per destination** makes future changes safe: touching the CRM
  shape never risks the Analytics feed.
- Reading IDoc **segment structure** (`E1xxxx`) and pulling key fields into properties for
  correlation/logging.
