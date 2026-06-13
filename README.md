# KarmixTech Ecommerce

A full-stack ecommerce learning project built incrementally with Next.js, TypeScript, PostgreSQL, and Prisma.

## Project Goal

The finished application will include:

- Responsive storefront and hero homepage
- Product catalog, search, filters, and product details
- Secure customer authentication and role-based admin access
- Shopping cart, checkout, stock handling, and order history
- Admin product and order management
- Versioned REST APIs
- Fake development data and local product imagery
- Automated tests and production deployment guidance

## Learning Approach

This repository is intentionally built in small commits. Each task explains:

- what we are changing;
- why the change is needed;
- which Next.js or database concept it teaches;
- how to verify it;
- a reusable LLM prompt for completing or reviewing the task.

Architecture decisions are documented in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). The working roadmap is kept locally in `todo.md` and is intentionally not committed.

## Planned Stack

- **Application:** Next.js App Router with TypeScript
- **Styling:** Mobile-first global CSS and CSS Modules
- **Database:** PostgreSQL
- **ORM and migrations:** Prisma
- **Local infrastructure:** Docker Compose
- **Testing:** Tools will be selected when the application is scaffolded, using behavior-focused coverage

Framework-specific choices will be confirmed against the installed versions when each task begins.

## Current Status

Phase 1 is complete. The repository now includes a minimal Next.js App Router application, a reproducible Docker development environment, a responsive design foundation, and a shared accessible site shell. The current setup also includes local PostgreSQL with Docker Compose, Prisma migrations, and seed data loading for ecommerce catalog development.

The roadmap separates Docker work into three deliberate steps:

- Task 1.2 containerizes the minimal Next.js development application.
- Task 2.1 adds PostgreSQL as local infrastructure with Prisma migrations.
- Task 7.3 hardens the completed application for production deployment.

## Local Setup

### Docker Workflow

Requirement:

- Docker Desktop or another Docker engine with Compose

Build and start the application:

```bash
docker compose up --build
```

This starts the full local development stack: Next.js, PostgreSQL, Prisma migrations, and seed data loading.

To rerun the seed manually after the containers are up:

```bash
docker compose exec app npx tsx prisma/seed.ts
```

Open <http://localhost:3000>. Source changes are reflected by the development server.

Stop the application:

```bash
docker compose down
```

The container details and troubleshooting commands are documented in [docs/02-docker-development.md](docs/02-docker-development.md).

### Native npm Workflow

Requirements:

- Node.js 20.9 or newer
- npm

Run the application:

```bash
npm ci
npm run dev
```

This starts the Next.js application directly on the host machine without the full Docker stack.

Open <http://localhost:3000>.

Verify the foundation:

```bash
npm run lint
npm run build
docker compose config
```

Do not run the native and containerized development servers at the same time because both use port `3000`.

PostgreSQL is connected through Docker Compose and Prisma, so the development stack now includes a fully seeded local database.

## Deploying to Vercel

This project is ready to deploy on Vercel with a production PostgreSQL database.

1. Push the repository to GitHub.
2. Create a cloud PostgreSQL database (Supabase, Neon, Render, ElephantSQL, etc.).
3. In the Vercel dashboard, add the environment variable using placeholder values, not exact production credentials:

   ```bash
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>?schema=public
   ```

4. Connect your GitHub repository in Vercel.
5. Use the default Vercel settings and deploy.

If you want a production-ready database seed, run Prisma migrations and seed locally, then point Vercel to the same external database.

## Repository

GitHub: <https://github.com/rafi-2024/KarmixTech_Ecommerce>
