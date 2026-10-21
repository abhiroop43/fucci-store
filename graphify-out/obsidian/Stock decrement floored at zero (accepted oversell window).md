---
source_file: "AGENTS.md"
type: "rationale"
community: "Orders Webhook & Stock"
location: "L49"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Orders_Webhook__Stock
---

# Stock decrement floored at zero (accepted oversell window)

## Connections
- [[Stock as quantity plus madeToOrder flag]] - `conceptually_related_to` [INFERRED]
- [[db.batch() instead of transactions]] - `references` [EXTRACTED]
- [[fulfillCheckoutSession in srcliborders.ts]] - `references` [EXTRACTED]

#graphify/rationale #graphify/EXTRACTED #community/Orders_Webhook__Stock