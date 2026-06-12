# Team Section Specification

## Purpose

Render a responsive grid of team member cards with photo placeholders, name and role placeholders, social links (LinkedIn, GitHub), and a 3D CSS-perspective hover effect that applies light rotation.

## Requirements

### Requirement: Team Card Grid

The section MUST display team member cards in a responsive grid: 2 columns on mobile, 3 columns on tablet, 4 columns on desktop. Each card MUST show a photo placeholder (gray circle or rectangle), a name placeholder, a role placeholder, and social link icons.

#### Scenario: Desktop 4-column grid

- GIVEN a viewport width of 1440px
- WHEN inspecting the team grid
- THEN 4 cards display per row with equal spacing

#### Scenario: Mobile 2-column grid

- GIVEN a viewport width of 375px
- WHEN inspecting the team grid
- THEN exactly 2 cards display per row

### Requirement: 3D Perspective Hover

On hover, each card MUST tilt in 3D space using CSS `perspective` and `rotateX`/`rotateY` transforms based on mouse position within the card. The rotation MUST be subtle (max ~5 degrees).

#### Scenario: Mouse hover rotates card

- GIVEN a team card
- WHEN the mouse moves across it
- THEN the card tilts following the cursor position within a max of 5 degrees on each axis
- AND the transition is smooth (300ms ease-out)

#### Scenario: Touch device no tilt

- GIVEN a touchscreen device with no hover state
- WHEN the user taps a card
- THEN the card does NOT tilt or remain in a tilted state

### Requirement: Placeholder Content

Photo placeholders MUST use a generic gray circular SVG or div. Name and role MUST show placeholder text (e.g., "Nombre del integrante", "Rol del integrante"). Social links MUST be Lucide React icons linking to placeholders (e.g., `https://linkedin.com/in/placeholder`).

#### Scenario: All placeholders render

- GIVEN the team section
- WHEN inspecting any card
- THEN a gray photo placeholder, name text, role text, and 2 social icons are visible

#### Scenario: Social links open new tab

- GIVEN a social link icon on a team card
- WHEN clicked
- THEN it opens in a new tab with `rel="noopener noreferrer"`
