---
type: community
members: 10
---

# Orders Webhook & Stock

**Members:** 10 nodes

## Members
- [[Idempotency via orders.stripe_checkout_session_id UNIQUE]] - rationale - AGENTS.md
- [[Keep api out of srcproxy.ts matcher]] - rationale - AGENTS.md
- [[Orders created by webhook, never success page]] - rationale - AGENTS.md
- [[Stock as quantity plus madeToOrder flag]] - rationale - AGENTS.md
- [[Stock decrement floored at zero (accepted oversell window)]] - rationale - AGENTS.md
- [[Stripe webhook route srcappapistripewebhookroute.ts]] - concept - AGENTS.md
- [[db.batch() instead of transactions]] - rationale - AGENTS.md
- [[fulfillCheckoutSession in srcliborders.ts]] - concept - AGENTS.md
- [[order_items purchase-time snapshot with Stripe amounts]] - rationale - AGENTS.md
- [[stockState() in srclibstock.ts]] - concept - AGENTS.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Orders_Webhook__Stock
SORT file.name ASC
```

## Connections to other communities
- 2 edges to [[_COMMUNITY_Bag, Money & Data Rules]]

## Top bridge nodes
- [[db.batch() instead of transactions]] - degree 2, connects to 1 community
- [[Orders created by webhook, never success page]] - degree 2, connects to 1 community