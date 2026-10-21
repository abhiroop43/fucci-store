# Graph Report - fucci-store  (2026-10-21)

## Corpus Check
- Corpus is ~2,391 words - fits in a single context window. You may not need a graph.

## Summary
- 151 nodes · 169 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 90% EXTRACTED · 9% INFERRED · 1% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.83)
- Token cost: 86,477 input · 0 output

## Community Hubs (Navigation)
- Bag, Money & Data Rules
- Package & Lint Config
- Auth & Catalogue Schema
- TypeScript Config
- Auth & DB Runtime Code
- Dev Dependencies
- App Shell & Next Config
- Orders Webhook & Stock
- npm Scripts
- Runtime Dependencies
- Next & Vercel Logos
- File Icon
- Globe Icon
- Window Icon

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `AGENTS.md (Claude Code guidance)` - 12 edges
3. `scripts` - 10 edges
4. `Single schema file src/db/schema.ts` - 7 edges
5. `Catalogue tables (categories, products, product_images)` - 6 edges
6. `Stripe-hosted checkout via startCheckout (src/lib/checkout.ts)` - 5 edges
7. `better-auth` - 4 edges
8. `next` - 4 edges
9. `Next.js 16 App Router + React 19` - 4 edges
10. `Money is integer cents` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Next.js + TypeScript + Tailwind + Better Auth + Drizzle + Neon` --conceptually_related_to--> `Next.js 16 App Router + React 19`  [INFERRED]
  README.md → AGENTS.md
- `auth:generate script (src/db/auth-schema.ts)` --conceptually_related_to--> `Single schema file src/db/schema.ts`  [AMBIGUOUS]
  README.md → AGENTS.md
- `drizzle.config.ts drizzle-kit config` --conceptually_related_to--> `Single schema file src/db/schema.ts`  [INFERRED]
  README.md → AGENTS.md
- `auth:generate script (src/db/auth-schema.ts)` --conceptually_related_to--> `Better Auth tables (user, session, account, verification)`  [INFERRED]
  README.md → AGENTS.md
- `Setup steps` --conceptually_related_to--> `Versioned SQL migrations under drizzle/`  [INFERRED]
  README.md → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Bag to checkout to webhook order fulfillment flow** — agents_cart_module, agents_stripe_hosted_checkout, agents_stripe_webhook_route, agents_fulfillcheckoutsession, agents_webhook_idempotency_unique [EXTRACTED 1.00]
- **Money integrity rules (cents, live prices, formatting)** — agents_money_integer_cents, agents_cart_items_no_price, agents_price_data_not_price_objects, agents_money_formatting, agents_order_items_snapshot [INFERRED 0.85]
- **Better Auth integration** — agents_better_auth_server, agents_auth_catchall_route, agents_auth_client, agents_better_auth_tables [EXTRACTED 1.00]
- **create-next-app default 16x16 grey icon set** — public_file_file_icon, public_globe_globe_icon, public_window_window_icon [INFERRED 0.85]

## Communities (14 total, 4 thin omitted)

### Community 0 - "Bag, Money & Data Rules"
Cohesion: 0.11
Nodes (13): AGENTS.md (Claude Code guidance), src/lib/cart.ts cart db owner, DATABASE_URL (pooled Neon string), Environment variables (.env), mapProduct() in src/lib/products.ts, Next.js 16 async params/searchParams and PageProps/LayoutProps, Next.js 16 App Router + React 19, src/lib/products.ts query functions (Product type) (+5 more)

### Community 1 - "Package & Lint Config"
Cohesion: 0.11
Nodes (17): eslintConfig, name, private, version, auth, dotenv, drizzle-kit, eslint (+9 more)

### Community 2 - "Auth & Catalogue Schema"
Cohesion: 0.13
Nodes (13): Auth catch-all route src/app/api/auth/[...all]/route.ts, Better Auth React client src/lib/auth-client.ts, Better Auth server instance src/lib/auth.ts, Better Auth tables (user, session, account, verification), Catalogue tables (categories, products, product_images), npm scripts (dev/build/lint/db:*), scripts/seed.ts idempotent seed, auth:generate script (src/db/auth-schema.ts) (+5 more)

### Community 3 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 4 - "Auth & DB Runtime Code"
Cohesion: 0.19
Nodes (9): better-auth, drizzle-orm, @neondatabase/serverless, GET, POST, db, sql, auth (+1 more)

### Community 5 - "Dev Dependencies"
Cohesion: 0.17
Nodes (12): devDependencies, auth, dotenv, drizzle-kit, eslint, eslint-config-next, tailwindcss, @tailwindcss/turbopack (+4 more)

### Community 6 - "App Shell & Next Config"
Cohesion: 0.18
Nodes (5): nextConfig, next, geistMono, geistSans, metadata

### Community 7 - "Orders Webhook & Stock"
Cohesion: 0.20
Nodes (3): fulfillCheckoutSession in src/lib/orders.ts, stockState() in src/lib/stock.ts, Stripe webhook route src/app/api/stripe/webhook/route.ts

### Community 8 - "npm Scripts"
Cohesion: 0.20
Nodes (10): scripts, auth:generate, build, db:generate, db:migrate, db:push, db:studio, dev (+2 more)

### Community 9 - "Runtime Dependencies"
Cohesion: 0.29
Nodes (7): dependencies, better-auth, drizzle-orm, @neondatabase/serverless, next, react, react-dom

## Ambiguous Edges - Review These
- `Single schema file src/db/schema.ts` → `auth:generate script (src/db/auth-schema.ts)`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps
- **19 isolated node(s):** `react`, `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 86 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AGENTS.md (Claude Code guidance)` connect `Bag, Money & Data Rules` to `Auth & Catalogue Schema`, `Orders Webhook & Stock`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **What connects `react`, `react-dom`, `@tailwindcss/turbopack` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Bag, Money & Data Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package & Lint Config`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `Package & Lint Config` be split into smaller, more focused modules?**
  _Cohesion score 0.11052631578947368 - nodes in this community are weakly interconnected._
- **Why does `next` connect `App Shell & Next Config` to `Package & Lint Config`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Single schema file src/db/schema.ts` and `auth:generate script (src/db/auth-schema.ts)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._