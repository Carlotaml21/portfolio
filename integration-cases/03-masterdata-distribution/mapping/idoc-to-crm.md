# Message Mapping — IDoc (DEBMAS) → CRM JSON

Source: `DEBMAS/IDOC`. Target: CRM partner JSON (see `payloads/expected-crm.json`).

| Target | Source | Notes |
|--------|--------|-------|
| `partner.externalId` | `E1KNA1M/KUNNR` | customer number |
| `partner.displayName` | `E1KNA1M/NAME1` | |
| `partner.vatNumber` | `E1KNA1M/STCEG` | VAT / tax id |
| `partner.address.country` | `E1KNA1M/LAND1` | |
| `partner.address.city` | `E1KNA1M/ORT01` | |
| `partner.address.postalCode` | `E1KNA1M/PSTLZ` | |
| `source` | `EDI_DC40/SNDPRN` | sending partner/system |

Target produced as JSON via an **XML to JSON Converter** after the mapping, or with a
JSON-typed target message.
