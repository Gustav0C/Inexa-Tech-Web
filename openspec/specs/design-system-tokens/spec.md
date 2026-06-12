# Design System Tokens Specification

## Purpose

Extract all DESIGN.md frontmatter tokens (colors, typography, spacing, border radius, elevation) into Tailwind CSS configuration and CSS custom properties.

## Requirements

### Requirement: Color Tokens

The Tailwind config MUST define every color from DESIGN.md frontmatter (`colors` key) as custom color tokens. The Electric Blue primary (`#007AFF`) MUST be accessible as `primary` and Midnight Navy (`#001226`) as the base surface.

#### Scenario: Token applied to component

- GIVEN a component using `bg-primary` class
- WHEN rendered in the browser
- THEN computed background equals `#007AFF`

#### Scenario: All DESIGN.md colors present

- GIVEN the Tailwind config file
- WHEN enumerating the `colors` key
- THEN every color from DESIGN.md frontmatter is mapped
- AND no DESIGN.md color is missing

### Requirement: Typography Tokens

The Tailwind config MUST define font families (Sora for display, Inter for body, JetBrains Mono for labels) and font-size/line-height values matching DESIGN.md typography frontmatter.

#### Scenario: Display font renders

- GIVEN a headline element with `font-display` class
- WHEN inspected in DevTools
- THEN `font-family` includes `Sora` and `font-weight` is `700`

#### Scenario: Body font falls back

- GIVEN a paragraph with `font-body` class
- WHEN the Inter font fails to load
- THEN the browser fallback font renders without layout shift

### Requirement: Spacing and Border Radius

The spacing scale MUST use 8px as the base unit. Border radius tokens MUST match DESIGN.md `rounded` frontmatter (`sm`: 0.25rem, `DEFAULT`: 0.5rem, `md`: 0.75rem, `lg`: 1rem, `xl`: 1.5rem, `full`: 9999px).

#### Scenario: Spacing applied

- GIVEN an element with `p-2` class (2 × 8px = 16px)
- WHEN computed
- THEN padding equals 16px

#### Scenario: Radius applied

- GIVEN an element with `rounded-xl` class
- WHEN computed
- THEN border-radius equals 1.5rem

### Requirement: Glassmorphism Utilities

The config MUST provide utility classes for the three elevation tiers: Floor (navy background), Raised (0.6 opacity, 20px backdrop-blur, 1px inner border at 0.1 white), and Overlay (solid navy + Electric Blue box-shadow 0 20px 40px rgba(0,122,255,0.15)). Transitions MUST use 300ms ease-out.

#### Scenario: Raised card renders

- GIVEN a card with the glass-raised class
- WHEN rendered
- THEN `background` opacity is ~0.6, `backdrop-filter` blur is 20px, and a 1px inner border exists

#### Scenario: Reduced motion disables transition

- GIVEN `prefers-reduced-motion: reduce` is active
- WHEN the glass transition would fire
- THEN no animation plays (transition duration is 0)
