---
name: transactional-workflows
description: Design and review consistency-sensitive state transitions, approvals, fulfillment, settlement, inventory changes, finalization, reversal, and correction workflows. Use when atomicity, idempotency, concurrency, authorization, or auditing matters.
---

# Transactional Workflows

## Purpose

Protect correctness, consistency, auditability, and concurrency safety in important business workflows.

## When To Use

Use for multi-step state transitions, approvals, fulfillment, settlement, inventory changes, finalization, reversal, correction, and other consistency-sensitive operations.

## Workflow

1. Identify actors, records, state transitions, invariants, authorization rules, and side effects.
2. Review existing models, services, constraints, jobs, events, and tests.
3. Define idempotency and duplicate-prevention behavior.
4. Validate invariants before persistence.
5. Use transactions, constraints, and locking where concurrent updates are possible.
6. Record audit events for security-sensitive or irreversible changes when required by the domain.
7. Test successful transitions, invalid transitions, duplicate requests, concurrency risks, permission failures, and audit behavior.

## Rules

- Derive state and immutability rules from the current domain; do not import rules from another application.
- Use explicit correction, cancellation, compensation, or reversal flows when in-place edits would violate an invariant.
- Use decimal-safe arithmetic for money and exact quantities.
- Keep deterministic business rules in the repository's established domain or application layer.
- Make externally triggered operations idempotent where duplicate delivery is possible.

## Output Requirements

Provide invariants, state transitions, transaction boundaries, duplicate-prevention strategy, authorization, audit behavior, tests, and verification commands.

## Validation Checklist

- Invalid state transitions are rejected.
- Duplicate execution is safe.
- Mutations are atomic where required.
- Concurrency behavior is considered.
- Audit behavior is tested where applicable.
