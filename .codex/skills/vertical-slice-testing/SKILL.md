---
name: vertical-slice-testing
description: Test complete business behavior through useful public boundaries with realistic persistence, permissions, validation, jobs, audit effects, and user-visible outcomes. Use for feature, regression, integration, and end-to-end coverage.
---

# Vertical Slice Testing

## Purpose

Test complete business behavior through useful public boundaries rather than overfitting to implementation details.

## When To Use

Use for feature work, bug fixes, state transitions, imports, permissions, reports, APIs, UI workflows, background jobs, and deployment-sensitive behavior.

## Workflow

1. Identify the user action or business workflow under test.
2. Choose a public boundary supported by the repository, such as an endpoint, command, job, UI component, or browser flow.
3. Build realistic data through factories, fixtures, or existing setup helpers.
4. Execute the workflow with real database access.
5. Assert response, database state, permissions, audit trail, emitted job status, and user-visible UI state.
6. Prefer real internal behavior and mock external systems or unstable process boundaries.
7. Keep tests named after the business behavior.

## Rules

- Do not organize new tests primarily by models, services, repositories, validators, or serializers.
- Organize tests by feature, user action, and business workflow.
- Cover happy path, validation failures, permission failures, edge cases, database verification, and audit trail verification.
- Use the repository's existing test frameworks, factories, fixtures, and helpers.
- Avoid asserting private helper calls when public behavior can be asserted.

## Output Requirements

Provide workflow names, test files, covered scenarios, mocked boundaries, database assertions, audit assertions, and commands run.

## Validation Checklist

- Tests fail for the original bug or missing behavior.
- Tests cover permissions and validation.
- Database state is asserted.
- Audit or job status is asserted where relevant.
- External systems are mocked and internal database behavior is real.
