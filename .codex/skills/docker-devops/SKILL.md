---
name: docker-devops
description: Build and review Docker, Compose, reverse-proxy, environment, health-check, volume, network, and deployment configuration. Use for containerized development, deployment, and production-readiness work.
---

# Docker DevOps

## Purpose

Build and review Docker, Compose, Nginx, environment, health check, and Linux VPS deployment configuration for production readiness.

## When To Use

Use for Dockerfiles, `docker-compose.yml`, Nginx configuration, container health checks, environment files, static/media handling, volumes, ports, resource limits, and deployment documentation.

## Workflow

1. Review existing Dockerfiles, Compose services, environment variables, volumes, ports, Nginx routing, and health checks.
2. Identify only the services the repository actually uses and define their runtime and network boundaries.
3. Validate environment-based configuration and remove hardcoded production secrets.
4. Use multi-stage builds and non-root users where supported.
5. Add health checks, restart policies, resource limits, and secure network exposure.
6. Verify with `docker compose config` and focused container startup checks.

## Rules

- Use multi-stage builds for production images.
- Run containers as non-root where the image and filesystem allow it.
- Do not expose databases, caches, brokers, or admin tools publicly without an explicit secured requirement.
- Do not mount Docker socket into application containers.
- Use named volumes for durable data and read-only mounts where practical.
- Use environment variables for deployment-specific values.
- Add resource limits for resource-intensive services where supported and appropriate.

## Output Requirements

Provide service changes, environment requirements, health checks, security implications, rollout steps, rollback notes, and verification commands.

## Validation Checklist

- Compose config validates.
- Secrets are not hardcoded.
- Health checks reflect real readiness.
- Ports and networks follow least exposure.
- Persistent and generated-data volumes are intentional.
