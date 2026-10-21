---
type: community
members: 24
---

# Bag, Money & Data Rules

**Members:** 24 nodes

## Members
- [[AGENTS.md (Claude Code guidance)]] - document - AGENTS.md
- [[BETTER_AUTH_SECRET]] - concept - README.md
- [[DATABASE_URL (pooled Neon string)]] - concept - AGENTS.md
- [[DB-backed signed-in-only bag (carts unique user_id)]] - rationale - AGENTS.md
- [[Data layer Drizzle over Neon HTTP driver]] - rationale - AGENTS.md
- [[Environment variables (.env)]] - concept - AGENTS.md
- [[Inline Drizzle relational 'with' blocks]] - rationale - AGENTS.md
- [[Money is integer cents]] - rationale - AGENTS.md
- [[Next.js 16 App Router + React 19]] - concept - AGENTS.md
- [[Next.js 16 async paramssearchParams and PagePropsLayoutProps]] - concept - AGENTS.md
- [[No bag count on catalogue routes' SiteHeader]] - rationale - AGENTS.md
- [[Omit payment_method_types for dynamic payment methods]] - rationale - AGENTS.md
- [[Static catalogue routes (revalidate 300, generateStaticParams)]] - concept - AGENTS.md
- [[Stripe-hosted checkout via startCheckout (srclibcheckout.ts)]] - concept - AGENTS.md
- [[Tailwind v4 (PostCSS only, theme in globals.css)]] - concept - AGENTS.md
- [[cart_items stores no price]] - rationale - AGENTS.md
- [[currency (catalogue-only) vs formatCents]] - rationale - AGENTS.md
- [[mapProduct() in srclibproducts.ts]] - concept - AGENTS.md
- [[price_data instead of Stripe Price objects]] - rationale - AGENTS.md
- [[srclibcart-types.ts shared shapes]] - rationale - AGENTS.md
- [[srclibcart.ts cart db owner]] - concept - AGENTS.md
- [[srclibproducts.ts query functions (Product type)]] - concept - AGENTS.md
- [[srclibsample-data.ts static chrome only]] - concept - AGENTS.md
- [[srclibstripe.ts validates env on first use]] - rationale - AGENTS.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/Bag_Money__Data_Rules
SORT file.name ASC
```

## Connections to other communities
- 6 edges to [[_COMMUNITY_Auth & Catalogue Schema]]
- 2 edges to [[_COMMUNITY_Orders Webhook & Stock]]

## Top bridge nodes
- [[AGENTS.md (Claude Code guidance)]] - degree 12, connects to 2 communities
- [[Next.js 16 App Router + React 19]] - degree 4, connects to 1 community
- [[Money is integer cents]] - degree 4, connects to 1 community
- [[Data layer Drizzle over Neon HTTP driver]] - degree 3, connects to 1 community
- [[BETTER_AUTH_SECRET]] - degree 2, connects to 1 community