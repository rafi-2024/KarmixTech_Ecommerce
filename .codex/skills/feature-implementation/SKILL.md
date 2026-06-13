---
name: feature-implementation
description: Implement complete features and bug fixes by discovering the current repository's domain, stack, architecture, conventions, and tests before editing. Use for multi-file product changes, workflows, APIs, UI, data processing, or cross-cutting behavior.
---

# Feature Implementation

## Purpose

Orchestrate feature work by first discovering the repository's domain, stack, architecture, conventions, and test strategy, then implementing the smallest complete change.

## When To Use

Use for features, bug fixes, workflow changes, API or UI changes, data processing, reports, deployment changes, and cross-cutting refactors.

## Workflow

1. Analyze the business request, affected users, data sensitivity, and expected outcome.
2. Review existing architecture, code paths, tests, models, API contracts, UI flows, and deployment files.
3. Detect the technologies and concerns actually involved, then select only matching specialist skills.
4. Design the change to fit the repository's existing architecture and ownership boundaries.
5. Identify exact files to modify and any migrations, fixtures, tasks, or tests to add.
6. Implement the smallest complete backward-compatible slice.
7. Create or update behavior-focused tests at the most useful boundary.
8. Run code, security, performance, and architecture reviews.
9. Verify with focused commands and report any command that could not be run.

## Rules

- Never code before reviewing the existing implementation.
- Discover paths and patterns from the current repository; never assume directories or frameworks from another project.
- Keep business rules out of transport and presentation code, using the repository's established application or domain layer.
- Preserve backward compatibility for existing APIs unless the user explicitly approves a breaking change.
- Identify sensitive data from the current domain and handle it accordingly.
- Do not invoke framework-specific guidance unless that framework is present or is intentionally being introduced.
- Complete every affected layer needed for the requested behavior, without inventing layers the project does not have.

## Output Requirements

Return:

- Analysis
- Implementation Plan
- Files To Modify
- Code Changes
- Tests
- Security Findings
- Performance Findings
- Architecture Findings
- Verification Steps
- Risks

## Validation Checklist

- Existing behavior was reviewed before editing.
- The change follows the repository's organization and conventions.
- API contracts, UI state, permissions, and persistence are consistent.
- Tests cover happy path, validation failure, permission failure, edge cases, database effects, and audit behavior where applicable.
- Code review, security review, performance review, and architecture review were completed.
- Verification commands were run or explicitly reported as not run.
