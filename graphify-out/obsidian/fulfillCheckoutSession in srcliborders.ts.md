---
source_file: "AGENTS.md"
type: "concept"
community: "Orders Webhook & Stock"
location: "L49"
tags:
  - graphify/concept
  - graphify/EXTRACTED
  - community/Orders_Webhook__Stock
---

# fulfillCheckoutSession in src/lib/orders.ts

## Connections
- [[Idempotency via orders.stripe_checkout_session_id UNIQUE]] - `references` [EXTRACTED]
- [[Stock decrement floored at zero (accepted oversell window)]] - `references` [EXTRACTED]
- [[Stripe webhook route srcappapistripewebhookroute.ts]] - `calls` [EXTRACTED]
- [[order_items purchase-time snapshot with Stripe amounts]] - `references` [EXTRACTED]

#graphify/concept #graphify/EXTRACTED #community/Orders_Webhook__Stock