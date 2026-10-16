# Fucci Store

Next.js (App Router) + TypeScript + Tailwind CSS, with Better Auth, Drizzle ORM and Neon Postgres.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in `DATABASE_URL` (Neon) and `BETTER_AUTH_SECRET` (`npx auth secret`).
3. Generate the Better Auth tables: `npm run auth:generate`, then re-export them from `src/db/schema.ts`.
4. Create migrations and apply them: `npm run db:generate && npm run db:migrate` (or `npm run db:push` while prototyping).
5. `npm run dev`

## Layout

- `src/db/index.ts` – Drizzle client (Neon HTTP driver)
- `src/db/schema.ts` – Drizzle schema entry point
- `src/lib/auth.ts` – Better Auth server config (Drizzle adapter)
- `src/lib/auth-client.ts` – Better Auth React client
- `src/app/api/auth/[...all]/route.ts` – Better Auth route handler
- `drizzle.config.ts` – drizzle-kit config

## Scripts

| Script | Purpose |
| --- | --- |
| `db:generate` / `db:migrate` | Create / apply SQL migrations |
| `db:push` | Push schema directly (dev) |
| `db:studio` | Open Drizzle Studio |
| `auth:generate` | Generate Better Auth Drizzle schema into `src/db/auth-schema.ts` |
