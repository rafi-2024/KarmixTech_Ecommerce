# PostgreSQL Development Setup

## Overview

This project uses PostgreSQL as its primary relational database. During development, PostgreSQL runs inside a Docker container managed by Docker Compose.

Using Docker provides a consistent development environment, eliminates local installation requirements, and ensures every developer works against the same database version and configuration.

---

## Why PostgreSQL?

PostgreSQL is a powerful open-source relational database that is widely used in production applications.

Benefits include:

* ACID-compliant transactions
* Strong data integrity
* Excellent performance
* Advanced indexing capabilities
* JSON support
* Large ecosystem and community support
* Compatibility with Prisma ORM

PostgreSQL will store all persistent application data, including:

* Products
* Categories
* Users
* Orders
* Cart data
* Authentication records

---

## Why Docker?

Running PostgreSQL in Docker provides several advantages:

* No local PostgreSQL installation required
* Consistent version across all environments
* Easy startup and shutdown
* Isolated from the host operating system
* Simple backup and reset workflows

The database can be started with:

```bash
docker compose up -d
```

And stopped with:

```bash
docker compose down
```

---

## Docker Compose Services

The application currently consists of two services:

### App Service

The Next.js application container.

Responsibilities:

* Run the development server
* Serve frontend pages
* Connect to PostgreSQL in future phases

### PostgreSQL Service

The PostgreSQL database container.

Responsibilities:

* Store application data
* Persist data between container restarts
* Provide a reliable database environment for development

---

## Environment Variables

Database configuration is stored using environment variables.

Example:

```env
POSTGRES_DB=<your_database_name>
POSTGRES_USER=<your_database_user>
POSTGRES_PASSWORD=<your_database_password>
POSTGRES_PORT=<your_database_port>
```

### Variable Descriptions

| Variable          | Purpose                                     |
| ----------------- | ------------------------------------------- |
| POSTGRES_DB       | Database name created during initialization |
| POSTGRES_USER     | Database user account                       |
| POSTGRES_PASSWORD | Password for the database user              |
| POSTGRES_PORT     | Host port mapped to PostgreSQL              |

The `.env.example` file documents required variables without exposing secrets.

The actual `.env` file should never be committed to source control.

---

## Persistent Storage

PostgreSQL data is stored using a named Docker volume:

```yaml
postgres_data:
```

Mounted into the container as:

```yaml
postgres_data:/var/lib/postgresql/data
```

### Why Use a Volume?

Without a volume, all database data would be lost when the container is removed.

Using a named volume ensures:

* Data survives container restarts
* Data survives image rebuilds
* Development progress is preserved

---

## Health Checks

The PostgreSQL container includes a health check:

```yaml
healthcheck:
  test:
    [
      "CMD-SHELL",
      "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"
    ]
```

### What Does It Do?

The command checks whether PostgreSQL is ready to accept connections.

Docker marks the service as:

* healthy
* unhealthy
* starting

This allows dependent services to wait until the database is fully available.

---

## Service Dependencies

The application service depends on PostgreSQL:

```yaml
depends_on:
  postgres:
    condition: service_healthy
```

This prevents the application from attempting database connections before PostgreSQL is ready.

---

## Verifying the Setup

Validate the Docker Compose configuration:

```bash
docker compose config
```

Start services:

```bash
docker compose up -d
```

Check service status:

```bash
docker compose ps
```

Expected output:

```text
NAME                  STATUS
ecommerce_postgres    healthy
app                   running
```

---

## Connecting to PostgreSQL

Open a shell inside the database container:

```bash
docker exec -it ecommerce_postgres psql -U ecommerce
```

List databases:

```sql
\l
```

Exit:

```sql
\q
```

---

## Development Notes

This phase only establishes the database infrastructure.

Application code does not yet communicate with PostgreSQL.

Database access will be implemented in the next phase using Prisma ORM.

Future phases will introduce:

* Prisma schema management
* Database migrations
* Product and category models
* Seed data
* Authentication data
* Order management
