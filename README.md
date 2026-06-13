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

The complete task list is in [todo.md](todo.md). Architecture decisions are documented in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Planned Stack

- **Application:** Next.js App Router with TypeScript
- **Styling:** Mobile-first global CSS and CSS Modules
- **Database:** PostgreSQL
- **ORM and migrations:** Prisma
- **Local infrastructure:** Docker Compose
- **Testing:** Tools will be selected when the application is scaffolded, using behavior-focused coverage

Framework-specific choices will be confirmed against the installed versions when each task begins.

## Current Status

Tasks 0.1 and 1.1 are complete. The repository now has a minimal Next.js App Router application with TypeScript and ESLint. The next task is the reusable responsive design foundation.

## Local Setup

Requirements:

- Node.js 20.9 or newer
- npm

Run the application:

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Verify the foundation:

```bash
npm run lint
npm run build
```

PostgreSQL is planned but is not connected yet. It will be added in Phase 2 so the database setup can be learned independently from the Next.js scaffold.

## Repository

GitHub: <https://github.com/rafi-2024/KarmixTech_Ecommerce>
