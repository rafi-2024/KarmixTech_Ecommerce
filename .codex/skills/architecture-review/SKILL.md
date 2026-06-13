---
name: architecture-review
description: Review software boundaries, dependencies, ownership, coupling, scalability, and maintainability. Use for cross-module features, refactors, API redesigns, service changes, background workflows, or architecture decisions.
---

# Architecture Review

## Purpose

Review boundaries, coupling, cohesion, ownership, scalability, and long-term maintainability without assuming a particular domain or architecture.

## When To Use

Use for new features, refactors, cross-module changes, service extraction, API redesigns, background jobs, data workflows, and frontend architecture changes.

## Workflow

1. Discover the repository structure, runtime boundaries, conventions, and affected workflows.
2. Map the affected domains, modules, services, endpoints, pages, jobs, and data ownership.
3. Identify dependencies and the direction of calls.
4. Evaluate the change against the architecture actually used by the repository.
5. Detect circular dependencies, misplaced business logic, duplicated rules, and excessive coupling.
6. Recommend the smallest refactor that improves ownership without broad churn.

## Rules

- Do not impose vertical slices, service layers, microservices, or any other pattern unless the repository already uses it or the change clearly needs it.
- Keep business rules in the repository's established domain or application layer rather than transport, job, or presentation code.
- Shared utilities must not become dumping grounds for domain behavior.
- Avoid cross-module imports that create circular dependencies or unclear ownership.
- Keep unrelated domain, infrastructure, reporting, administration, and authentication responsibilities distinct.
- Prefer incremental refactoring attached to the feature being changed.

## Output Requirements

Provide boundary map, coupling concerns, architectural debt, refactoring opportunities, scalability concerns, and recommended next steps.

## Validation Checklist

- Domain ownership is clear.
- Dependencies flow in a maintainable direction.
- No circular dependencies were introduced.
- Business logic is not duplicated across API, task, and UI layers.
- Refactoring recommendations are scoped and actionable.
