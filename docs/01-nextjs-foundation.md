# 01: Next.js Foundation

## What We Added

Task 1.1 creates the smallest useful Next.js application:

- Next.js 16.2.9
- React 19.2.4
- TypeScript
- ESLint with Next.js Core Web Vitals rules
- App Router
- A `src` directory
- The `@/*` import alias

The project was generated with the official `create-next-app` tool and then reduced to a project-specific learning screen.

## Important Files

### `package.json`

This is the Node.js project manifest. It records dependencies and provides four scripts:

- `npm run dev` starts the development server with fast refresh.
- `npm run build` creates an optimized production build.
- `npm run start` runs a completed production build.
- `npm run lint` checks code quality rules.

`package-lock.json` records exact installed dependency versions. Commit it so different machines install the same dependency tree.

### `src/app/layout.tsx`

The root layout wraps every page. It defines the document language, shared metadata, global CSS import, and the `<body>` that receives route content.

The layout is a server component by default. It does not need browser JavaScript because it has no state, event handlers, or browser-only APIs.

### `src/app/page.tsx`

This file represents the `/` route. In the App Router, folders map to URL segments and a `page.tsx` file makes that segment publicly accessible.

This page is also a server component by default. Static markup can be rendered without sending component JavaScript to the browser.

### `src/app/globals.css`

Global CSS applies to the whole application. For now it contains only a small reset, base document colors, font fallbacks, and form control inheritance.

Task 1.3 will introduce deliberate reusable tokens and accessibility styles. We avoid pretending that the generated starter styles are already our design system.

### `src/app/page.module.css`

A CSS Module scopes class names to this page. Another component can use a class called `.card` without accidentally changing this page's card.

The placeholder uses one mobile breakpoint to confirm that the initial route does not overflow narrow screens. The full responsive system belongs to Task 1.3.

### `next.config.ts`

This is the typed Next.js configuration file. It is intentionally empty until the project has a requirement such as image host configuration or build behavior.

### `tsconfig.json`

TypeScript runs in strict mode and does not emit JavaScript itself because Next.js owns the build. The `@/*` alias points to `src/*`, allowing imports such as `@/components/header`.

### `eslint.config.mjs`

ESLint uses the Next.js Core Web Vitals and TypeScript rule sets. These rules catch common React, accessibility, and framework mistakes before deployment.

### `.gitignore`

Generated dependencies, build output, environment secrets, logs, editor files, and temporary scaffolds are excluded from Git. Source code and lockfiles remain committed.

## App Router Mental Model

Think of `src/app` as a tree:

```text
src/app/
  layout.tsx       shared wrapper
  page.tsx         /
  products/
    page.tsx       /products (future)
    [slug]/
      page.tsx     /products/some-product (future)
```

Layouts wrap pages below them. Components are server components unless a file starts with `"use client"`. We will add client components only when browser interaction requires state, event handlers, effects, or browser APIs.

## Why There Is No Database Yet

Next.js and PostgreSQL are separate concepts. First we verify that the web application can lint and build. In Phase 2 we will add PostgreSQL, learn its container configuration, and then connect Prisma. Keeping these steps separate makes failures easier to understand.

Task 1.2 containerizes this minimal application before more code is added. That keeps the first Docker build small and makes the development environment reproducible without mixing application-container concepts with PostgreSQL persistence and networking.

## Verification

```bash
npm run lint
npm run build
```

The build command checks TypeScript and produces an optimized route. The application should also remain readable at widths from 320 pixels upward.
