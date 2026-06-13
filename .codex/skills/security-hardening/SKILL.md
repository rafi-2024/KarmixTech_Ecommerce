---
name: security-hardening
description: Review and harden applicable application, API, frontend, database, container, host, network, upload, export, authentication, authorization, secrets, and backup surfaces. Use for security-sensitive changes and production-readiness reviews.
---

# Security Hardening

## Purpose

Perform security review and hardening for the technologies and deployment surfaces actually used by the project.

## When To Use

Use for security-sensitive changes, authentication or authorization updates, deployments, uploads, exports, privileged mutations, administration features, and production readiness reviews.

## Workflow

1. Discover the application stack, deployment model, trust boundaries, and sensitive assets for the current domain.
2. Review applicable authentication, authorization, session, request-validation, upload, query, error-handling, and audit controls.
3. Review the frontend, database, containers, reverse proxy, workers, host, network, secrets, and backups only where those surfaces exist.
4. Consider abuse cases, data exposure, dependency risk, least privilege, and operational recovery.
5. Prioritize findings by likelihood and impact, with verifiable remediation.

## Rules

- Never recommend disabling security controls to simplify development.
- Never store secrets in code, committed `.env` files, images, frontend bundles, logs, tests, or documentation examples.
- Every protected endpoint and privileged action must enforce authentication and authorization appropriate to the domain.
- Validate untrusted input at the boundaries used by the current architecture.
- Protect file uploads against unsafe names, oversized files, unexpected types, parser abuse, and stored sensitive data exposure.
- Use least privilege for database users, containers, host users, network exposure, and admin tooling.
- Treat debug output, stack traces, generated files, processing artifacts, and error reports according to the data they contain.

## Output Requirements

Return:

- Critical Findings
- High Risk Findings
- Medium Risk Findings
- Low Risk Findings
- Remediation Steps
- Hardening Checklist
- Security Score
- Production Readiness Score

## Validation Checklist

- All applicable application and infrastructure surfaces were reviewed; absent technologies were not assumed.
- OWASP Top 10 risks were considered.
- Authentication and authorization were checked for every affected workflow.
- Sensitive data exposure in logs, exports, uploads, and frontend storage was reviewed.
- Remediation steps are prioritized and verifiable.
