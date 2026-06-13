# 04: Responsive Site Shell

## What We Added

Task 1.4 gives every route the same application frame:

- a visible brand link and primary navigation;
- a keyboard-accessible mobile menu;
- a skip link and shared main-content landmark;
- a responsive footer with useful existing links;
- a flex-based page frame that keeps the footer below short content.

The shell uses only routes and sections that currently exist. Product, account,
cart, and admin links will be added when those destinations are implemented.

## Shared Layout

`src/app/layout.tsx` remains a server component. It owns static document
metadata and composes the header, main landmark, page content, and footer for
every route. Keeping the frame in the root layout prevents each page from
duplicating landmarks and shared navigation.

Pages now return their own content rather than another `<main>`. The root
layout provides one main landmark with the `main-content` identifier.

## Client Component Boundary

The header begins with `"use client"` because the mobile menu needs React state
and browser keyboard events. The rest of the layout and the footer remain
server components because they do not need browser JavaScript.

Keeping this boundary small means only the interactive header is hydrated in
the browser.

## Mobile Navigation

At narrow widths, the navigation is hidden behind a real `<button>`. The button:

- reports its state with `aria-expanded`;
- identifies the controlled navigation with `aria-controls`;
- has a practical touch target;
- closes the menu when a link is selected;
- closes the menu when Escape is pressed and returns focus to the button.

At `48rem` and wider, the links are displayed inline and the menu button is
hidden.

## Keyboard And Landmark Support

The first focusable element is a skip link. It becomes visible on focus and
moves keyboard users directly to the shared main content.

The header uses a primary navigation label, and the footer has its own footer
navigation label. Existing global `:focus-visible` styling applies to links and
the menu button.

## Verification

```bash
npm run lint
npm run build
```

At a narrow browser width:

1. Tab to the menu button and press Enter or Space.
2. Confirm `aria-expanded` changes and the links appear.
3. Press Escape and confirm the menu closes.
4. Tab from the top of the document and use the skip link.

At tablet and desktop widths, confirm navigation remains visible without the
menu button and the footer follows the page content.
