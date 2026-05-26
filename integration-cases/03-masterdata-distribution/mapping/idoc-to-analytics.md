# Message Mapping — IDoc (DEBMAS) → Analytics JSON (flat)

Source: `DEBMAS/IDOC`. Target: flat analytics record (see
`payloads/expected-analytics.json`).

| Target | Source | Notes |
|--------|--------|-------|
| `customer_id` | `E1KNA1M/KUNNR` | |
| `name` | `E1KNA1M/NAME1` | |
| `country` | `E1KNA1M/LAND1` | |
| `city` | `E1KNA1M/ORT01` | |

Deliberately **flat and minimal** — the analytics platform only needs dimensions for
reporting, not the full partner record. Keeping it as its own mapping means changes to the
CRM shape never affect this feed.
