# PostgreSQL, Prisma, and Product Catalog Setup

## Overview

This document describes the implementation of the database layer for the KarmixTech Ecommerce platform.

The goal of this phase was to establish a production-style backend foundation using:

* PostgreSQL
* Prisma ORM
* Docker Compose
* Next.js App Router

At the end of this phase, the application successfully connects to PostgreSQL, manages database schema through Prisma migrations, and contains seeded ecommerce catalog data.

---

# Objectives

The following objectives were completed:

* Configure PostgreSQL in Docker
* Add health checks for database readiness
* Configure Prisma ORM
* Create database migration workflow
* Create Category and Product models
* Generate Prisma Client
* Seed sample ecommerce data
* Verify database connectivity from Next.js

---

# Architecture

```text
┌─────────────┐
│   Next.js   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Prisma    │
│     ORM     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ PostgreSQL  │
│   Docker    │
└─────────────┘
```

All services are executed through Docker Compose.

---

# PostgreSQL Setup

## Docker Service

A dedicated PostgreSQL container was configured using:

```yaml
postgres:
  image: postgres:17-alpine
```

The container includes:

* Persistent storage volume
* Health checks
* Environment variable configuration
* Internal Docker networking

## Health Check

The following command verifies database readiness:

```bash
pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}
```

This prevents the application from starting before PostgreSQL becomes available.

---

# Prisma Configuration

## Installed Packages

```bash
npm install @prisma/client
npm install -D prisma
```

## Prisma Schema

A Prisma schema was created:

```text
prisma/schema.prisma
```

The schema defines:

* PostgreSQL datasource
* Prisma client generator
* Ecommerce catalog models

---

# Database Connection

Prisma uses a connection string stored in:

```env
DATABASE_URL=postgresql://ecommerce:changeme@postgres:5432/ecommerce?schema=public
```

Connection string structure:

```text
postgresql://username:password@host:port/database
```

Example:

```text
username = ecommerce
password = changeme
host     = postgres
database = ecommerce
```

---

# Prisma Client Singleton

A reusable database client was implemented.

File:

```text
src/lib/db.ts
```

Purpose:

* Prevent excessive database connections
* Support Next.js hot reload
* Reuse a single Prisma Client instance

Benefits:

* Better development experience
* Avoids "Too many database connections" errors

---

# Product Catalog Schema

## Product Status Enum

```text
DRAFT
ACTIVE
ARCHIVED
```

---

## Category Model

Stores product categories.

Key fields:

* id
* name
* slug
* description
* timestamps

Relationship:

```text
Category
    │
    └───< Product
```

---

## Product Model

Stores ecommerce products.

Key fields:

* id
* name
* slug
* description
* price
* stock
* imageUrl
* status
* categoryId

Indexes:

* categoryId
* status

---

# Migration Workflow

Migration command:

```bash
npx prisma migrate dev --name init_catalog
```

Results:

* Created Category table
* Created Product table
* Created ProductStatus enum
* Created _prisma_migrations table

Verification:

```sql
\dt
```

Output:

```text
Category
Product
_prisma_migrations
```

---

# Seed Data

Seeding support was configured using:

```json
{
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

Seed command:

```bash
npx prisma db seed
```

The seed process populates:

* Product categories
* Sample products
* Inventory quantities
* Product pricing

This allows frontend development without manually creating data.

---

# Problems Encountered

## 1. Prisma Not Installed Inside Container

### Problem

Prisma commands triggered:

```text
Need to install prisma
```

### Cause

Dependencies were not available inside the running container.

### Resolution

* Verified package.json
* Rebuilt Docker image
* Regenerated dependencies

---

## 2. Docker Volume Masking node_modules

### Problem

Prisma packages appeared missing despite existing in package.json.

### Cause

A Docker volume mounted over:

```text
/app/node_modules
```

which masked installed dependencies.

### Resolution

Removed stale volumes:

```bash
docker compose down -v
```

and rebuilt the container.

---

## 3. Prisma Version Mismatch

### Problem

Different Prisma versions were being used.

Example:

```text
prisma         6.x
@prisma/client 7.x
```

### Resolution

Aligned package versions:

```text
prisma         6.19.3
@prisma/client 6.19.3
```

---

## 4. Missing tsx Package

### Problem

Seed execution failed:

```text
spawn tsx ENOENT
```

### Cause

tsx was added to package.json after the image was built.

### Resolution

Installed dependency and rebuilt container.

---

## 5. PostgreSQL Authentication Failure

### Problem

Prisma failed with:

```text
P1000 Authentication failed
```

### Cause

Database password and DATABASE_URL credentials were inconsistent.

### Resolution

Aligned:

```env
POSTGRES_PASSWORD
DATABASE_URL
```

and recreated database configuration.

---

## 6. Empty Database During Introspection

### Problem

Prisma reported:

```text
P4001 The introspected database was empty
```

### Cause

Database existed but migrations had not yet been applied.

### Resolution

Executed:

```bash
npx prisma migrate dev
```

which created all required tables.

---

# Lessons Learned

Key lessons from this phase:

1. Docker volumes can override build-time files.
2. Prisma CLI and Prisma Client versions must match.
3. PostgreSQL credentials must remain synchronized across:

   * .env
   * Docker Compose
   * DATABASE_URL
4. Prisma migrations should be the single source of truth for schema changes.
5. Seed data significantly accelerates frontend development.

---

# Current Project Status

Completed:

* PostgreSQL Setup
* Docker Integration
* Prisma Configuration
* Catalog Schema
* Database Migrations
* Seed Data

Next Phase:

* Product Repository Layer
* Homepage Product Listing
* Product Detail Pages
* Category Pages
* Search and Filtering
* Shopping Cart
* Authentication

---

# Conclusion

The ecommerce platform now has a fully operational database layer capable of supporting product catalog functionality.

The application can:

* Store products
* Store categories
* Execute Prisma queries
* Manage schema migrations
* Seed development data
* Serve as the foundation for future ecommerce features

This marks the completion of the database and catalog foundation phase.
