---
name: data-import
description: Build and review reliable structured-file, feed, and batch-data imports with validation, bounded memory use, duplicate handling, status reporting, and safe persistence. Use for upload, ingestion, migration, and bulk import workflows.
---

# Data Import

## Purpose

Build and review reliable imports for structured files, feeds, and batch data without assuming a specific business domain.

## When To Use

Use for upload endpoints, commands, ingestion pipelines, preflight checks, batch imports, duplicate detection, error reports, and background import jobs.

## Workflow

1. Review existing import boundaries, schemas, persistence patterns, jobs, and tests.
2. Define the accepted format, schema version, required fields, identity rules, and row-level validation.
3. Stream or chunk large inputs instead of loading them fully into memory.
4. Decide and document whether invalid rows reject the whole import or produce partial success.
5. Persist efficiently using transactions and batch operations appropriate to the repository.
6. Record status, counts, errors, source identity, and audit metadata when required.
7. Test valid input, invalid rows, duplicates, permissions, retry behavior, and resulting state.

## Rules

- Validate data before committing irreversible changes.
- Make duplicate and retry behavior explicit.
- Produce actionable errors with row or record identifiers and field names.
- Do not overwrite protected or immutable records without an approved domain workflow.
- Avoid logging or exposing sensitive imported values.

## Output Requirements

Provide format, validation, atomicity, chunking, duplicate policy, error contract, status behavior, tests, and verification commands.

## Validation Checklist

- Large inputs have bounded memory behavior.
- Failure and partial-success semantics are clear.
- Duplicate detection is tested.
- Status and errors are observable where needed.
- Resulting persistence is verified.
