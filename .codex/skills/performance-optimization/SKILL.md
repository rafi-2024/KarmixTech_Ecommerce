---
name: performance-optimization
description: Diagnose and improve backend, database, job, data-processing, and frontend performance using measurements and focused changes. Use for slow requests, large datasets, expensive queries, memory pressure, rendering issues, or bundle concerns.
---

# Performance Optimization

## Purpose

Improve and review application performance without compromising correctness, security, authorization, or maintainability.

## When To Use

Use for slow APIs, large data operations, analytics, reports, table rendering, dashboards, background jobs, query tuning, bulk operations, and bundle concerns.

## Workflow

1. Define the measured performance problem and target behavior.
2. Inspect current query patterns, indexes, task behavior, payload sizes, frontend render paths, and tests.
3. Measure before changing when practical.
4. Optimize the narrowest bottleneck.
5. Measure after changing with the same scenario.
6. Add regression tests or query-count checks for high-risk paths.

## Rules

- Measure before optimization and measure after optimization.
- Prefer database indexes, query shaping, pagination, streaming, chunking, and bulk operations over caching first.
- Use `select_related`, `prefetch_related`, annotations, and aggregation carefully.
- Avoid loading large files or datasets fully into memory when streaming or chunking is possible.
- In component-based frontends, stabilize expensive derived data and definitions when measurement justifies it.
- Do not trade correctness, authorization, or auditability for speed.

## Output Requirements

Provide baseline, bottleneck, change made, after-measurement, tradeoffs, tests, and verification commands.

## Validation Checklist

- Baseline and after results are recorded or the missing measurement is explained.
- Query count and indexes were reviewed for backend changes.
- Memory behavior was reviewed for imports and PDFs.
- Frontend render and bundle impact were reviewed for UI changes.
- Optimization does not bypass validation or permissions.
