# Architecture

## Why This Shape

This project starts as one Next.js application connected to PostgreSQL. Next.js can render pages, handle server-side data access, and expose REST route handlers in the same codebase. For a learning project, this keeps the number of moving parts small while still teaching frontend, backend, database, security, and deployment concepts.

We will not split the application into separate frontend and backend services unless a real requirement appears. A premature split would add authentication, networking, deployment, and duplicated type-contract work before those costs provide a benefit.

## Planned Runtime

```text
Browser
   |
   | HTTPS
   v
Next.js application
   |-- React pages and components
   |-- Server components and application logic
   |-- REST route handlers
   |-- Authentication and authorization
   |
   | PostgreSQL connection through Prisma
   v
PostgreSQL
```

For local development, PostgreSQL will run in Docker Compose. The Next.js development server will initially run through npm so logs and hot reload remain easy to understand.

## Main Areas

- **Storefront:** Hero, catalog, product details, search, and filters.
- **Identity:** Registration, sign-in, sessions, roles, and protected routes.
- **Cart:** Selected products, quantities, validated prices, and stock rules.
- **Orders:** Checkout, immutable item snapshots, status transitions, and history.
- **Administration:** Protected product and order management.
- **API:** Versioned REST endpoints with validation and stable JSON contracts.

These areas are conceptual boundaries, not a demand for a complex folder structure. Folders will be introduced only when application code exists and the responsibility is clear.

## Important Decisions

### Next.js App Router

The App Router teaches layouts, server components, client component boundaries, loading states, errors, dynamic routes, and route handlers in the current Next.js model.

### TypeScript

TypeScript catches mismatched data shapes early and makes database, API, and component contracts easier to understand.

### PostgreSQL

Ecommerce data is relational: products belong to categories, carts contain items, orders belong to users, and stock changes must be consistent. PostgreSQL supports constraints, transactions, indexes, and reliable relational queries.

### Prisma

Prisma provides a readable schema, migrations, generated TypeScript types, and a query client. Database rules will still be enforced with appropriate PostgreSQL constraints rather than relying only on application code.

### Mobile-First CSS

Layouts will work at narrow widths first and progressively enhance for tablets and desktops. CSS Modules keep component styles local while global CSS holds tokens, resets, and shared primitives.

### Local Development Images

The development catalog will use generated or clearly reusable local images. Image files and metadata will be separated from product records so storage can change later without redesigning the catalog.

## Data Safety Principles

- Store prices using exact decimal or integer-minor-unit semantics, never floating-point arithmetic.
- Recalculate prices and validate stock on the server during checkout.
- Snapshot product names and prices into order items so historical orders do not change when products change.
- Enforce authentication, ownership, and roles at server boundaries.
- Use transactions for order creation and stock updates.
- Keep secrets in environment variables and commit only an `.env.example`.
- Prefer deactivation to destructive deletion for records referenced by order history.

## Testing Direction

Tests will follow user behavior:

- browse and search products;
- register and sign in;
- manage a cart;
- submit checkout;
- create an order safely;
- prevent cross-user and non-admin access;
- manage products and order states as an admin.

Internal helpers may receive focused unit tests, but the highest-value tests will exercise public pages, APIs, and database effects.

## Incremental Delivery

Each roadmap task should result in one focused commit. A task includes implementation, relevant tests, documentation, and checklist updates. This makes Git history useful as a learning record and keeps regressions easy to locate.
