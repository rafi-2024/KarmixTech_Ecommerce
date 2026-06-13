# 03: Responsive Design Foundation

## What We Added

Task 1.3 replaces one-off page values with a small design foundation:

- global color, typography, spacing, radius, shadow, and container tokens;
- a reusable responsive `.container`;
- primary and secondary `.button` styles;
- visible keyboard focus and accessible selection colors;
- mobile-first page layout with tablet and desktop enhancements;
- reduced-motion behavior for people who request it.

The work deliberately stops before navigation or storefront features. Task 1.4 will use these primitives to build the shared site shell.

## Global Tokens

Tokens live in `:root` inside `src/app/globals.css`. Names describe purpose, such as `--color-text-muted` or `--space-5`, instead of a specific page. A future component can reuse the same decision without copying a hex value or spacing measurement.

The palette uses dark text on light surfaces and a blue brand color with sufficient contrast for normal-sized button text. The amber focus ring is deliberately distinct from both the page background and brand controls.

## Typography

The project uses a system font stack so text renders quickly without a font download. Fluid `clamp()` sizes allow display text to grow between narrow and wide screens while remaining bounded.

Body text keeps a comfortable line height, and content paragraphs use limited line lengths where needed to improve readability.

## Container And Spacing

The global `.container` centers content, provides mobile gutters, and stops growing at `72rem`. At `48rem` and above, the gutters increase.

Spacing tokens use a compact scale from `0.25rem` to `4rem`. Components consume the scale rather than inventing unrelated values.

## Buttons And Focus

The `.button` base class defines target height, alignment, weight, radius, and interaction behavior. `.buttonPrimary` and `.buttonSecondary` provide semantic visual variants.

All keyboard-focusable elements receive a three-pixel `:focus-visible` outline with an offset. Mouse clicks do not receive the same persistent ring because `:focus-visible` follows the browser's input heuristics.

## Responsive Breakpoints

The CSS uses content-driven `min-width` breakpoints:

- Base styles: `320px` and wider, single-column and mobile first.
- `40rem` (`640px`): details and principle cards become three columns.
- `48rem` (`768px`): the shared container receives wider gutters.
- `64rem` (`1024px`): the page receives more vertical breathing room.

These values are guides, not device labels. Components should add a breakpoint only when their content needs one.

## Motion

Buttons use a short hover transition and one-pixel lift. Under `prefers-reduced-motion: reduce`, smooth scrolling, transitions, and animations are effectively disabled.

## Verification

```bash
npm run lint
npm run build
```

Check the homepage at approximately `320px`, `768px`, and `1280px`. Content should not overflow, keyboard focus should remain visible, and the page should retain a clear reading order at every width.
