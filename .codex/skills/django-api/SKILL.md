---
name: django-api
description: Build and review Django and Django REST Framework models, migrations, serializers, permissions, views, URLs, queries, and API contracts. Use only when the current repository uses or intentionally introduces Django.
---

# Django API

## Purpose

Build and review Django and Django REST Framework backend changes when those technologies are present.

## When To Use

Use for models, migrations, serializers, permissions, views, URLs, querysets, service functions, admin behavior, and API response contracts.

## Workflow

1. Confirm the backend stack and inspect existing models, serializers, permissions, views, URLs, business-logic patterns, and tests.
2. Define the API contract, permissions, validation rules, and database changes.
3. Follow the repository's established business-logic boundary and keep transport code focused on HTTP concerns.
4. Wrap multi-row or consistency-sensitive mutations in `transaction.atomic()`.
5. Add migrations for schema changes and indexes for new lookup patterns.
6. Add vertical slice tests through the public API or management command boundary.
7. Verify with the repository's focused backend test and migration checks.

## Rules

- Use type hints for new services and non-trivial helpers.
- Do not put substantial business calculations, import behavior, or authorization policy in views.
- Use DRF serializers for request and response validation.
- Use explicit permissions for every protected endpoint.
- Use `select_related`, `prefetch_related`, annotations, or service-level batching to avoid N+1 queries.
- Raise explicit validation or domain exceptions and convert them to stable API responses.
- Preserve domain invariants and use explicit correction or reversal workflows for immutable records when the domain requires them.

## Output Requirements

Provide changed API contracts, service behavior, migrations, permission changes, tests, and verification commands.

## Validation Checklist

- Views are thin and delegate business behavior.
- Mutations are transactional.
- Inputs and outputs are validated.
- Permissions are tested.
- Query shape is reviewed for N+1 risks.
- Migrations are deterministic and reversible where practical.
