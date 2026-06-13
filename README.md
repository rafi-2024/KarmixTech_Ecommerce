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

Tasks 0.1 through 1.3 are complete. The repository has a minimal Next.js App Router application, a reproducible Docker development environment, and a responsive design foundation with shared tokens and accessible controls. The next task is the responsive site shell.

The roadmap separates Docker work into three deliberate steps:

- Task 1.2 containerizes the minimal Next.js development application.
- Task 2.1 adds PostgreSQL as local infrastructure.
- Task 7.3 hardens the completed application for production deployment.

## Local Setup

### Docker Workflow

Requirement:

- Docker Desktop or another Docker engine with Compose

Build and start the application:

```bash
docker compose up --build
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

Open <http://localhost:3000>.

Verify the foundation:

```bash
npm run lint
npm run build
docker compose config
```

PostgreSQL is planned but is not connected yet. It will be added in Phase 2 so the database setup can be learned independently from the Next.js scaffold.

## Repository

GitHub: <https://github.com/rafi-2024/KarmixTech_Ecommerce>
