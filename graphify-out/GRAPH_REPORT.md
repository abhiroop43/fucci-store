# Graph Report - fucci-store (2026-10-21)

## Corpus Check

- 26 files · ~5,143 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file (s) not represented in the graph (top: .example 1, (none) 1, .ico 1)

## Summary

- 201 nodes · 285 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `d00b437a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- Bag, Money & Data Rules
- Package & Lint Config
- page.tsx
- TypeScript Config
- Auth & DB Runtime Code
- Dev Dependencies
- layout.tsx
- Orders Webhook & Stock
- npm Scripts
- Runtime Dependencies
- Next & Vercel Logos
- File Icon
- Globe Icon
- Window Icon
- products.ts

## God Nodes (most connected - your core abstractions)

1. `compilerOptions` - 16 edges
2. `AGENTS.md (Claude Code guidance)` - 12 edges
3. `scripts` - 10 edges
4. `next` - 9 edges
5. `SiteHeader()` - 8 edges
6. `Single schema file src/db/schema.ts` - 7 edges
7. `Home()` - 6 edges
8. `Icon()` - 6 edges
9. `Catalogue tables (categories, products, product_images)` - 6 edges
10. `MobileMenu()` - 5 edges

## Surprising Connections (you probably didn't know these)

- `auth:generate script (src/db/auth-schema.ts)` --conceptually_related_to-->
  `Single schema file src/db/schema.ts`  [AMBIGUOUS]
  README.md → AGENTS.md
- `drizzle.config.ts drizzle-kit config` --conceptually_related_to--> `Single schema file src/db/schema.ts`  [INFERRED]
  README.md → AGENTS.md
- `Home()` --calls--> `SiteFooter()`  [EXTRACTED]
  src/app/page.tsx → src/components/site-footer.tsx
- `Home()` --calls--> `SiteHeader()`  [EXTRACTED]
  src/app/page.tsx → src/components/site-header.tsx
- `BETTER_AUTH_SECRET` --conceptually_related_to--> `Environment variables (.env)`  [INFERRED]
  README.md → AGENTS.md

## Import Cycles

- None detected.

## Hyperedges (group relationships)

- **Better Auth integration** — agents_better_auth_server, agents_auth_catchall_route, agents_auth_client,
  agents_better_auth_tables [EXTRACTED 1.00]
- **Bag to checkout to webhook order fulfillment flow** — agents_cart_module, agents_stripe_hosted_checkout,
  agents_stripe_webhook_route, agents_fulfillcheckoutsession, agents_webhook_idempotency_unique [EXTRACTED 1.00]
- **Money integrity rules (cents, live prices, formatting)** — agents_money_integer_cents, agents_cart_items_no_price,
  agents_price_data_not_price_objects, agents_money_formatting, agents_order_items_snapshot [INFERRED 0.85]
- **create-next-app default 16x16 grey icon set** — public_file_file_icon, public_globe_globe_icon,
  public_window_window_icon [INFERRED 0.85]

## Communities (15 total, 4 thin omitted)

### Community 0 - "Bag, Money & Data Rules"

Cohesion: 0.06 Nodes (26): AGENTS.md (Claude Code guidance), Auth catch-all route src/app/api/auth/[...all]/route.ts,
Better Auth React client src/lib/auth-client.ts, Better Auth server instance src/lib/auth.ts, Better Auth tables (user,
session, account, verification), src/lib/cart.ts cart db owner, Catalogue tables (categories, products, product_images),
DATABASE_URL (pooled Neon string) (+18 more)

### Community 1 - "Package & Lint Config"

Cohesion: 0.12 Nodes (16): eslintConfig, name, private, version, auth, dotenv, drizzle-kit, eslint (+8 more)

### Community 2 - "page.tsx"

Cohesion: 0.17 Nodes (21): nextConfig, next, react, AccountIcon (), BagIcon (), CloseIcon (), Icon (), MenuIcon () (+13
more)

### Community 3 - "TypeScript Config"

Cohesion: 0.11 Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module
(+10 more)

### Community 4 - "Auth & DB Runtime Code"

Cohesion: 0.19 Nodes (9): better-auth, drizzle-orm, @neondatabase/serverless, GET, POST, db, sql, auth (+1 more)

### Community 5 - "Dev Dependencies"

Cohesion: 0.17 Nodes (12): devDependencies, auth, dotenv, drizzle-kit, eslint, eslint-config-next, tailwindcss,
@tailwindcss/turbopack (+4 more)

### Community 6 - "layout.tsx"

Cohesion: 0.29 Nodes (4): bodoni, geistSans, metadata, viewport

### Community 7 - "Orders Webhook & Stock"

Cohesion: 0.20 Nodes (3): fulfillCheckoutSession in src/lib/orders.ts, stockState () in src/lib/stock.ts, Stripe webhook
route src/app/api/stripe/webhook/route.ts

### Community 8 - "npm Scripts"

Cohesion: 0.20 Nodes (10): scripts, auth:generate, build, db:generate, db:migrate, db:push, db:studio, dev (+2 more)

### Community 9 - "Runtime Dependencies"

Cohesion: 0.29 Nodes (7): dependencies, better-auth, drizzle-orm, @neondatabase/serverless, next, react, react-dom

### Community 14 - "products.ts"

Cohesion: 0.12 Nodes (21): Home (), ProductCard (), currency (), wholeDollars, categoryName, Collection, getCollections
(), getHomepageProducts () (+13 more)

## Ambiguous Edges - Review These

- `auth:generate script (src/db/auth-schema.ts)` → `Single schema file src/db/schema.ts`  [AMBIGUOUS]
  README.md · relation: conceptually_related_to

## Knowledge Gaps

- **18 isolated node (s):** `react-dom`, `@tailwindcss/turbopack`, `@types/node`, `@types/react`, `@types/react-dom`
  (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 93 node (s) total
  have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `page.tsx` to `Package & Lint Config`, `layout.tsx`, `products.ts`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/turbopack`, `@types/node` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Bag, Money & Data Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.06423034330011074 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package & Lint Config`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `Package & Lint Config` be split into smaller, more focused modules?**
  _Cohesion score 0.11695906432748537 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `npm Scripts` to `Package & Lint Config`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._

### Low-confidence Hints

_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `auth:generate script (src/db/auth-schema.ts)` and
  `Single schema file src/db/schema.ts`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._