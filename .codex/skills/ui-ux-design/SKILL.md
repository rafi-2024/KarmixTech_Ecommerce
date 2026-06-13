---
name: ui-ux-design
description: Review and improve product interfaces while preserving the current product identity, framework, behavior, and design system.
---

# UI/UX Design

## Purpose

Improve usability, accessibility, responsiveness, visual hierarchy, consistency, and maintainability without imposing a copied visual style or business domain.

## When To Use

Use for interface reviews, page or component redesigns, user flows, responsive behavior, accessibility, information architecture, design systems, and visual polish.

## Discovery

Before proposing or editing:

1. Identify the product, users, primary tasks, and domain vocabulary from the repository and request.
2. Inspect the actual frontend framework, component library, theme, tokens, shared components, icons, and existing screens.
3. Preserve working business logic, API contracts, permissions, and workflows unless the user asks to change them.
4. Treat existing brand and design-system decisions as constraints unless the task is explicitly a redesign.
5. Do not assume React, Material UI, SaaS dashboards, enterprise density, dark mode, DataGrid, or a specific color palette.

## Design Principles

- Make hierarchy, navigation, actions, status, and feedback clear.
- Design for realistic content, empty states, loading, errors, permissions, and narrow screens.
- Meet applicable WCAG requirements for semantics, keyboard use, focus, contrast, labels, and motion.
- Reuse existing tokens and components before adding variants.
- Use spacing, typography, color, radius, and elevation consistently with the current product.
- Keep forms grouped logically with clear validation and recovery.
- Use tables, cards, lists, charts, or progressive disclosure based on the task and data, not a fixed preference.
- Avoid decorative changes that reduce clarity or make the product feel unrelated to its established identity.
- Consider performance for large lists, media, animation, and expensive renders.

## Implementation Rules

- Follow the repository's component, styling, state, and test conventions.
- Keep changes scoped to the requested workflow.
- Extract reusable components only when they remove meaningful duplication or complexity.
- Prefer theme tokens over repeated hardcoded values when a theme system exists.
- Add dependencies only when the existing stack cannot reasonably meet the need.
- Use representative content and verify responsive behavior at relevant breakpoints.
- Do not fabricate screenshots, user research, metrics, or design requirements.

## Output Requirements

For a review, provide:

- Findings ordered by user impact
- Recommended changes
- Accessibility and responsive considerations
- Relevant implementation notes

For an implementation, provide:

- Changed user flow and components
- Preserved behavior and contracts
- Tests or visual verification performed
- Remaining risks or unverified states

## Validation Checklist

- The design fits the current product rather than a copied application.
- Existing workflows and business behavior are preserved unless intentionally changed.
- Loading, empty, error, success, disabled, and permission states are handled where relevant.
- Keyboard, focus, labels, semantics, and contrast were considered.
- Responsive behavior was verified.
- New styling follows or intentionally evolves the repository's design system.
