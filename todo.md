# KarmixTech Ecommerce Roadmap

This checklist keeps the project small, reviewable, and easy to learn. Complete one task at a time, verify it, document it, and commit it before starting the next task.

## Working Agreement

- Keep each task focused enough for one Git commit.
- Explain new Next.js concepts in the matching document under `docs/`.
- Update this checklist and `README.md` after meaningful changes.
- Keep the UI responsive from the first page onward.
- Use PostgreSQL for persistent application data.
- Never commit secrets or real customer data.
- Add tests at the same time as important behavior.
- Use fake product data and properly licensed or generated images during development.

## Phase 0: Planning

- [x] **Task 0.1 - Define the project roadmap**
  - Outcome: The project requirements are converted into small implementation tasks.
  - Learn: How incremental development and commits reduce risk.
  - Commit: `docs: add project roadmap and architecture`
  - LLM prompt:
    > Read `todo.md`, `README.md`, and `docs/ARCHITECTURE.md`. Review the roadmap for a beginner learning Next.js. Improve only the planning documents, keep tasks small, and explain any changed architecture decision.

## Phase 1: Application Foundation

- [ ] **Task 1.1 - Scaffold the Next.js application**
  - Outcome: A TypeScript Next.js App Router project runs locally with linting.
  - Learn: App Router folders, `layout.tsx`, `page.tsx`, server components, and npm scripts.
  - Verify: `npm run lint` and `npm run build`.
  - Commit: `chore: scaffold nextjs application`
  - LLM prompt:
    > Implement Task 1.1 from `todo.md`. Scaffold a minimal Next.js App Router project with TypeScript, ESLint, a `src` directory, and the `@/*` alias. Do not add ecommerce features yet. Explain every generated top-level file in `docs/01-nextjs-foundation.md`, update the README and checklist, run lint and build, then create one focused commit.

- [ ] **Task 1.2 - Create the responsive design foundation**
  - Outcome: Global tokens, typography, container rules, buttons, focus styles, and responsive breakpoints exist.
  - Learn: Global CSS, CSS Modules, mobile-first styling, and accessibility basics.
  - Verify: Homepage works at mobile, tablet, and desktop widths.
  - Commit: `feat: add responsive design foundation`
  - LLM prompt:
    > Implement Task 1.2 from `todo.md`. Create a small mobile-first design system using global CSS and CSS Modules. Add reusable container and button styles, visible keyboard focus, accessible contrast, and documented breakpoints. Do not build product features. Document the CSS choices, update the checklist, verify lint/build, and commit only this task.

- [ ] **Task 1.3 - Add the site shell**
  - Outcome: Responsive header, navigation, mobile menu, main content area, and footer.
  - Learn: Shared layouts, client components, navigation, and responsive interaction.
  - Verify: Navigation is keyboard accessible and usable on narrow screens.
  - Commit: `feat: add responsive site shell`
  - LLM prompt:
    > Implement Task 1.3 from `todo.md`. Build an accessible responsive header, mobile navigation, main landmark, and footer using the existing design foundation. Keep navigation links ready for future pages without inventing unfinished behavior. Explain server versus client components, test the interaction, update docs/checklist, and create one commit.

## Phase 2: PostgreSQL and Catalog Data

- [ ] **Task 2.1 - Add local PostgreSQL with Docker Compose**
  - Outcome: PostgreSQL starts locally with a named volume and health check.
  - Learn: Containers, ports, environment variables, volumes, and health checks.
  - Verify: `docker compose config` and database health.
  - Commit: `chore: add local postgres service`
  - LLM prompt:
    > Implement Task 2.1 from `todo.md`. Add a development-only PostgreSQL service with Docker Compose, a named volume, health check, `.env.example`, and safe defaults. Do not expose secrets or add application tables yet. Document each setting for a beginner, validate the Compose file, update the checklist, and commit the task.

- [ ] **Task 2.2 - Configure Prisma and the database connection**
  - Outcome: Prisma connects to PostgreSQL and has an initial schema configuration.
  - Learn: ORM purpose, schema files, generated clients, migrations, and connection strings.
  - Verify: Prisma validation and a successful initial migration.
  - Commit: `feat: configure prisma with postgres`
  - LLM prompt:
    > Implement Task 2.2 from `todo.md`. Add Prisma for PostgreSQL using the repository's current package versions and conventions. Create a singleton database client suitable for Next.js development, an initial migration, and clear environment documentation. Explain why connection reuse matters. Run validation and build, update docs/checklist, and commit only this task.

- [ ] **Task 2.3 - Model categories and products**
  - Outcome: Category and Product tables support catalog browsing, pricing, stock, status, slugs, and images.
  - Learn: Relational modeling, money storage, indexes, uniqueness, and migrations.
  - Verify: Migration applies cleanly and schema constraints are documented.
  - Commit: `feat: add catalog database schema`
  - LLM prompt:
    > Implement Task 2.3 from `todo.md`. Design minimal Category and Product models for an ecommerce catalog. Store money safely, add useful constraints and indexes, avoid premature fields, create a migration, and document every model decision. Update the checklist, verify Prisma and build, then commit the schema change.

- [ ] **Task 2.4 - Seed fake catalog data and images**
  - Outcome: Repeatable seed command creates categories and realistic fake products with development images.
  - Learn: Deterministic seeds, idempotency, and image metadata.
  - Verify: Running the seed twice does not create duplicate records.
  - Commit: `feat: add fake catalog seed data`
  - LLM prompt:
    > Implement Task 2.4 from `todo.md`. Add an idempotent development seed for realistic categories and products. Use local generated or clearly reusable placeholder images with useful alt text; do not scrape copyrighted product imagery. Document how to reset and seed the database, test repeated execution, update the checklist, and commit this task.

## Phase 3: Storefront

- [ ] **Task 3.1 - Build the responsive hero homepage**
  - Outcome: A polished hero section introduces the store with clear calls to action and local imagery.
  - Learn: Next.js Image, responsive images, semantic structure, and visual hierarchy.
  - Verify: No layout overflow and sensible image loading behavior.
  - Commit: `feat: build responsive hero homepage`
  - LLM prompt:
    > Implement Task 3.1 from `todo.md`. Build a responsive, accessible ecommerce hero using the existing site shell and design tokens. Use a local generated image, meaningful alt behavior, a concise value proposition, and working links to catalog sections. Explain Next.js Image optimization, verify mobile/tablet/desktop layouts, update docs/checklist, and commit the task.

- [ ] **Task 3.2 - Display featured products from PostgreSQL**
  - Outcome: The homepage reads featured products from the database and renders reusable cards.
  - Learn: Async server components, database reads, loading, empty, and error states.
  - Verify: Seeded products render and an empty catalog remains understandable.
  - Commit: `feat: show featured products`
  - LLM prompt:
    > Implement Task 3.2 from `todo.md`. Query featured products from PostgreSQL in a server component and render accessible responsive product cards. Include empty and error behavior without exposing internal errors. Explain the request/data flow, add focused tests, update docs/checklist, verify, and commit one vertical slice.

- [ ] **Task 3.3 - Add catalog browsing, search, filters, and pagination**
  - Outcome: `/products` supports URL-based search, category filters, sorting, and pagination.
  - Learn: Search params, server-side querying, indexes, and shareable URLs.
  - Verify: Filters compose correctly and invalid params fall back safely.
  - Commit: `feat: add product catalog browsing`
  - LLM prompt:
    > Implement Task 3.3 from `todo.md`. Build a responsive products page with server-side search, category filtering, sorting, and pagination stored in URL search parameters. Validate inputs, query efficiently, handle empty results, add tests, explain the URL-driven state, update docs/checklist, and commit the feature.

- [ ] **Task 3.4 - Add product detail pages**
  - Outcome: `/products/[slug]` displays product details, price, stock, imagery, and metadata.
  - Learn: Dynamic routes, metadata generation, not-found handling, and structured content.
  - Verify: Valid, missing, and inactive products behave correctly.
  - Commit: `feat: add product detail pages`
  - LLM prompt:
    > Implement Task 3.4 from `todo.md`. Add dynamic product detail pages backed by PostgreSQL. Include accessible image presentation, stock status, SEO metadata, and correct not-found behavior. Do not add cart state yet. Test the public behavior, explain dynamic routes, update docs/checklist, and commit this task.

- [ ] **Task 3.5 - Add read-only catalog REST APIs**
  - Outcome: Versioned JSON endpoints expose product lists and individual products.
  - Learn: Route handlers, validation, stable contracts, HTTP status codes, and serialization.
  - Verify: Success, invalid query, and not-found responses are tested.
  - Commit: `feat: add catalog rest api`
  - LLM prompt:
    > Implement Task 3.5 from `todo.md`. Add versioned read-only REST endpoints for product listing and product details using Next.js route handlers. Reuse domain queries, validate query parameters, return stable JSON, avoid leaking database details, add API tests and documentation, update the checklist, and commit the slice.

## Phase 4: Authentication and Authorization

- [ ] **Task 4.1 - Add authentication**
  - Outcome: Users can register, sign in, sign out, and maintain a secure session.
  - Learn: Password hashing, sessions, cookies, validation, and server actions or route handlers.
  - Verify: Happy path, duplicate email, invalid credentials, and protected access.
  - Commit: `feat: add user authentication`
  - LLM prompt:
    > Implement Task 4.1 from `todo.md`. Add secure credentials authentication using a maintained Next.js-compatible library, PostgreSQL user records, strong password hashing, server-side validation, and safe session cookies. Compare the chosen approach briefly before implementing. Add tests, document threats and flows, update the checklist, verify, and commit only authentication.

- [ ] **Task 4.2 - Add roles and protected routes**
  - Outcome: Customer and admin permissions are enforced on the server.
  - Learn: Authentication versus authorization, middleware limits, and defense in depth.
  - Verify: Customers cannot access admin mutations or pages by URL or API.
  - Commit: `feat: enforce role based access`
  - LLM prompt:
    > Implement Task 4.2 from `todo.md`. Add minimal CUSTOMER and ADMIN roles and enforce authorization at every protected server boundary. Add protected account/admin pages with clear unauthorized behavior. Do not rely only on hidden UI. Test role failures, document the authorization map, update the checklist, and commit the task.

## Phase 5: Cart and Checkout

- [ ] **Task 5.1 - Add cart state and responsive cart UI**
  - Outcome: Users can add, remove, and change quantities with totals shown consistently.
  - Learn: Client state boundaries, persistence choices, derived totals, and optimistic UI.
  - Verify: Quantity limits, stock rules, refresh persistence, and empty cart.
  - Commit: `feat: add shopping cart`
  - LLM prompt:
    > Implement Task 5.1 from `todo.md`. Add a responsive shopping cart with explicit persistence behavior and server-validated product prices and stock. Keep money calculations safe and central. Include empty, loading, and error states, test core behavior, explain client versus server responsibilities, update docs/checklist, and commit the slice.

- [ ] **Task 5.2 - Add checkout form and validation**
  - Outcome: Signed-in customers can enter shipping details and review an order summary.
  - Learn: Accessible forms, shared schemas, server validation, and error recovery.
  - Verify: Invalid fields, changed stock, and changed prices are handled safely.
  - Commit: `feat: add checkout validation`
  - LLM prompt:
    > Implement Task 5.2 from `todo.md`. Build an accessible checkout page for signed-in users with shared client/server validation, shipping details, and a server-calculated order summary. Revalidate stock and prices at submission. Do not add real payment processing. Add tests and documentation, update the checklist, verify, and commit.

- [ ] **Task 5.3 - Create orders transactionally**
  - Outcome: Checkout creates immutable order items, updates stock atomically, and clears the cart.
  - Learn: Transactions, snapshots, idempotency, concurrency, and order states.
  - Verify: Duplicate submission and insufficient stock cannot corrupt data.
  - Commit: `feat: create orders transactionally`
  - LLM prompt:
    > Implement Task 5.3 from `todo.md`. Model and create orders in one PostgreSQL transaction. Snapshot product name and price in order items, prevent duplicate submissions, enforce stock safely, and define a small order status state machine. Add integration tests, explain transaction boundaries, update docs/checklist, and commit the feature.

- [ ] **Task 5.4 - Add customer order history**
  - Outcome: Customers can view only their own order list and details.
  - Learn: Ownership authorization, nested data queries, and protected pages.
  - Verify: Cross-user order access is denied.
  - Commit: `feat: add customer order history`
  - LLM prompt:
    > Implement Task 5.4 from `todo.md`. Add protected customer order list and detail pages with server-side ownership checks. Present responsive order summaries and status information. Test cross-user denial and missing records, document the query and authorization flow, update the checklist, and commit this task.

## Phase 6: Administration

- [ ] **Task 6.1 - Add admin product management**
  - Outcome: Admins can create, edit, activate, and deactivate products with validated forms.
  - Learn: Protected mutations, forms, file/image strategy, and audit-friendly changes.
  - Verify: Customer access fails and invalid product data is rejected.
  - Commit: `feat: add admin product management`
  - LLM prompt:
    > Implement Task 6.1 from `todo.md`. Add admin-only product list, create, and edit workflows. Use server-side authorization and validation, preserve historical order data, and prefer deactivation over destructive deletion. Add tests and API/form documentation, update the checklist, verify, and commit.

- [ ] **Task 6.2 - Add admin order handling**
  - Outcome: Admins can view orders and perform allowed status transitions.
  - Learn: State machines, privileged actions, audit records, and filtering.
  - Verify: Invalid transitions and unauthorized requests are rejected.
  - Commit: `feat: add admin order handling`
  - LLM prompt:
    > Implement Task 6.2 from `todo.md`. Build an admin order dashboard with filtering, detail views, and explicitly allowed status transitions. Enforce transitions and authorization on the server and record who changed status. Add tests, document the state machine, update the checklist, and commit the task.

## Phase 7: Quality and Delivery

- [ ] **Task 7.1 - Add broad automated coverage**
  - Outcome: Unit, integration, API, component, and critical browser tests cover core workflows.
  - Learn: Testing pyramid, test database isolation, and stable selectors.
  - Verify: Tests run from a documented single command or small command set.
  - Commit: `test: cover critical ecommerce workflows`
  - LLM prompt:
    > Implement Task 7.1 from `todo.md`. Review existing coverage and add the highest-value missing tests for catalog, authentication, cart, checkout, orders, and authorization. Use realistic database behavior and mock only external boundaries. Document the test strategy and commands, update the checklist, run the suite, and commit focused test improvements.

- [ ] **Task 7.2 - Perform accessibility, responsive, security, and performance review**
  - Outcome: The application is audited and important findings are fixed.
  - Learn: Lighthouse-style checks, keyboard testing, OWASP risks, query review, and image performance.
  - Verify: Findings and remaining risks are documented.
  - Commit: `fix: harden storefront quality`
  - LLM prompt:
    > Implement Task 7.2 from `todo.md`. Audit the complete app for mobile responsiveness, keyboard and screen-reader accessibility, authorization, validation, secret handling, common OWASP risks, database query issues, and image/loading performance. Fix high-impact findings, document evidence and residual risks, update the checklist, verify, and commit.

- [ ] **Task 7.3 - Add production deployment configuration**
  - Outcome: Production Docker configuration, environment contract, migrations, health checks, and deployment guide exist.
  - Learn: Multi-stage builds, non-root containers, startup order, backups, and rollback.
  - Verify: Production image builds and Compose configuration validates.
  - Commit: `chore: add production deployment`
  - LLM prompt:
    > Implement Task 7.3 from `todo.md`. Add production-ready container and deployment configuration for the current Next.js/PostgreSQL app. Use a multi-stage non-root image, health checks, least network exposure, explicit migration steps, environment documentation, backup notes, and rollback guidance. Validate builds/config, update the checklist, and commit.

- [ ] **Task 7.4 - Finalize project documentation and demo data**
  - Outcome: A new developer can install, understand, run, test, and demonstrate the project.
  - Learn: Technical communication and release readiness.
  - Verify: Follow the README from a clean checkout.
  - Commit: `docs: finalize project guide`
  - LLM prompt:
    > Implement Task 7.4 from `todo.md`. Audit and finalize README and docs for setup, architecture, database, seed data, API, authentication, testing, security, deployment, screenshots, and demo flow. Remove stale instructions, verify commands from a clean setup where practical, update the final checklist, and commit the documentation release.

## Definition of Done for Every Task

- The requested behavior is complete at its intended boundary.
- Responsive and accessibility states are considered when UI changes.
- Validation and authorization are server-enforced where relevant.
- Tests and verification commands pass, or failures are clearly documented.
- `README.md`, `docs/`, and this checklist are updated when needed.
- The Git commit contains one understandable change and a meaningful message.
