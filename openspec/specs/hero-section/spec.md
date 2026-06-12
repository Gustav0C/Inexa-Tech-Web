# Hero Section Specification

## Purpose

Build a full-viewport hero section with a large Sora display heading, Inter body subtitle, two CTA buttons, a lazy-loaded R3F particle background with gradient fallback, and a Framer Motion fade-slide-up entrance animation.

## Requirements

### Requirement: Full-Viewport Layout

The hero section MUST occupy 100vh. Content MUST be vertically and horizontally centered.

#### Scenario: Hero fills viewport

- GIVEN the hero section renders at 1440px viewport
- WHEN measuring section height
- THEN it equals 100vh

#### Scenario: Mobile viewport

- GIVEN the hero section at 375px viewport
- WHEN measuring section height
- THEN it still equals 100vh without horizontal overflow

### Requirement: Typography and CTAs

The heading MUST use Sora display at 64px (700 weight). The subtitle MUST use Inter body at 18px. Two CTA buttons MUST render: "Ver Servicios" (primary Electric Blue fill) and "Contactar" (ghost style with 1px border).

#### Scenario: Heading and CTAs render

- GIVEN the hero section
- WHEN inspecting the DOM
- THEN the heading uses font-display at 64px
- AND both CTA buttons are visible and clickable

#### Scenario: Ghost button hover

- GIVEN the ghost "Contactar" button
- WHEN hovered
- THEN its border transitions to a navy-to-blue gradient fill

### Requirement: R3F Particle Background

The R3F Canvas MUST lazy-load (dynamic import). While loading or if R3F fails, a visible gradient fallback MUST display. The canvas MUST use `frameloop="demand"` to reduce GPU usage.

#### Scenario: R3F loads successfully

- GIVEN the hero section is in the viewport
- WHEN the R3F chunk finishes loading
- THEN the particle canvas renders without console errors

#### Scenario: R3F fails or is slow

- GIVEN a slow 3G connection
- WHEN the hero section loads before the R3F chunk
- THEN a gradient background is visible behind the content
- AND no blank space appears

### Requirement: Entrance Animation

On mount, the hero content MUST animate with a fade-in and slide-up motion (300ms ease-out). The animation MUST respect `prefers-reduced-motion`.

#### Scenario: Normal entrance

- GIVEN the hero section mounts
- WHEN observing the opacity and transform
- THEN it transitions from opacity 0 / translateY(20px) to opacity 1 / translateY(0) over 300ms

#### Scenario: Reduced motion

- GIVEN `prefers-reduced-motion: reduce` is active
- WHEN the hero mounts
- THEN all elements appear at full opacity immediately with no transform
