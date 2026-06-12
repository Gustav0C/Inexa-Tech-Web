# Products Section Specification

## Purpose

Showcase the Mikui app with a generic SVG logo placeholder, a brief description ("App for discovering small restaurants/huariques"), an "En desarrollo" badge, a parallax scroll effect, and a CTA inviting interested users to contact.

## Requirements

### Requirement: Mikui Showcase Card

The section MUST display the Mikui logo (generic SVG placeholder), a title "Mikui", a description explaining the app finds small restaurants and huariques, and a prominent "En desarrollo" badge.

#### Scenario: Showcase renders on load

- GIVEN the products section scrolls into view
- WHEN inspecting the Mikui card
- THEN the SVG logo, title, description, and badge are all visible

#### Scenario: Badge style

- GIVEN the "En desarrollo" badge
- WHEN inspected
- THEN it uses a desaturated yellow/amber color that fits the premium palette
- AND it does not distract from the primary content

### Requirement: Parallax Scroll Effect

Background or decorative elements within the section MUST shift at a different scroll rate than the foreground content, creating a parallax depth effect. The parallax MUST be subtle and not cause motion sickness.

#### Scenario: Parallax displacement

- GIVEN the products section
- WHEN scrolling past it at a constant speed
- THEN the background element's Y position changes at a different rate than the foreground

#### Scenario: Reduced motion disables parallax

- GIVEN `prefers-reduced-motion: reduce` is active
- WHEN scrolling through the section
- THEN no parallax displacement occurs

### Requirement: Contact CTA

A call-to-action button MUST invite users to contact INEXA TECH about the app. Clicking it MUST navigate to `/contacto` or scroll to the contact section.

#### Scenario: CTA navigates to contact

- GIVEN the products CTA button
- WHEN clicked
- THEN the user is taken to the contact form
