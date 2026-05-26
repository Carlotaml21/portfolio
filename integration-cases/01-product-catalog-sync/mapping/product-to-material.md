# Message Mapping — Product → Material

Source: external product (JSON converted to XML). Target: `Materials/Material`.

| Target field | Source field | Notes |
|--------------|--------------|-------|
| `MaterialNumber` | `product/id` | 1:1 |
| `Description` | `product/title` | 1:1 |
| `MaterialGroup` | `product/category` | 1:1 (could go through a Value Mapping to SAP material groups) |
| `Price` | `product/price` | rounded later in `enrichProduct.groovy` |
| `Currency` | — | left empty; defaulted in Groovy from `DefaultCurrency` |
| `Plant` | — | left empty; defaulted in Groovy from `DefaultPlant` |
| `SourceSystem` | — | stamped in Groovy |
| `LoadTimestamp` | — | stamped in Groovy |

## Notes / decisions

- **Why default Currency/Plant in Groovy and not the mapping?** They depend on
  environment/config, not on the source payload — so they belong with the externalized
  parameters, keeping the mapping purely structural.
- **Value Mapping idea:** `category` → SAP material group code is a natural fit for a
  Value Mapping artifact (e.g. `men's clothing` → `MG010`). Left as 1:1 here to keep the
  demo self-contained.
- The JSON array must be wrapped by the **JSON to XML Converter** so each element becomes a
  repeating `product` node the mapping can iterate.
