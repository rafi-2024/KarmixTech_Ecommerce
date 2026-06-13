---
name: reportlab-pdf
description: Build and review ReportLab PDF documents, layouts, fonts, reusable flowables, exports, background generation, permissions, and tests. Use only when the current repository uses or intentionally introduces ReportLab.
---

# ReportLab PDF

## Purpose

Build and review ReportLab PDF generation when ReportLab is part of the repository.

## When To Use

Use for ReportLab documents, exports, background PDF jobs, fonts, page templates, headers, footers, and printable output.

## Workflow

1. Review existing report services, PDF tests, templates, export endpoints, and data sources.
2. Define document purpose, audience, page size, columns, totals, grouping, and confidentiality needs.
3. Use ReportLab Platypus flowables, reusable table styles, page templates, headers, footers, and page numbering.
4. Register Unicode-capable fonts when the content requires them.
5. Generate PDFs from service-layer DTOs or query results, not from views directly.
6. Add tests for generation success, key text, totals, page behavior, permissions, and empty data.

## Rules

- Use Platypus for structured reports.
- Keep reusable PDF components in report services or dedicated helpers.
- Include headers, footers, page numbering, report period, generated timestamp, and confidentiality marking when appropriate.
- Avoid exposing hidden data in metadata, filenames, logs, or public URLs.
- Do not perform expensive database queries inside drawing callbacks.
- Use the repository's background-job system for long-running or large PDF jobs.

## Output Requirements

Provide report data contract, layout choices, permissions, file handling, tests, and verification commands.

## Validation Checklist

- PDF renders with representative and empty data.
- Totals match backend calculations.
- Unicode text is supported where needed.
- Export permissions are enforced.
- Large reports are suitable for background generation.
