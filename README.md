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

Task 0.1 is complete: the requirements, architecture, and incremental learning roadmap have been documented. Application scaffolding is the next task.

## Repository

GitHub: <https://github.com/rafi-2024/KarmixTech_Ecommerce>
