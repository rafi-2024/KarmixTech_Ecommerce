---
name: react-mui
description: Build and review React and Material UI pages, components, forms, data views, accessibility, responsive states, and frontend tests. Use only when the current repository uses or intentionally introduces both React and Material UI.
---

# React MUI

## Purpose

Build and review React and Material UI frontend changes when those technologies are present.

## When To Use

Use for pages, components, forms, DataGrid tables, dashboard views, route guards, API client behavior, loading states, error states, empty states, and responsive UI.

## Workflow

1. Confirm the frontend stack and inspect existing pages, components, data access, tests, route guards, and design-system patterns.
2. Define the user workflow, API calls, validation schema, and access behavior.
3. Implement functional components with hooks and existing service modules.
4. Follow the repository's existing form and validation approach; introduce dependencies only when justified.
5. Use the existing table component. Consider MUI DataGrid only when its features and dependency cost fit the use case.
6. Add loading, error, empty, disabled, permission, and success states.
7. Verify with the repository's existing unit, component, build, and browser test tools as appropriate.

## Rules

- Follow the component and state-management conventions already used by the repository.
- Keep API access in existing client or service modules rather than hardcoding a path.
- Never expose tokens, secrets, stack traces, or sensitive domain data in logs or UI errors.
- Make layouts responsive and appropriate for the product's users and tasks.
- Use accessible controls, labels, keyboard behavior, and clear error messages.
- Avoid unnecessary re-renders in DataGrid and dashboard pages by memoizing expensive derived data and stable column definitions.

## Output Requirements

Provide changed user flows, components, services, validation behavior, tests, screenshots when relevant, and verification commands.

## Validation Checklist

- Loading, error, empty, success, and permission states exist.
- Forms validate before submit and surface API errors.
- Data-heavy views remain usable with realistic data volumes.
- Sensitive data is not leaked in storage, logs, or messages.
- Focused frontend tests and build verification were run where available.
