# Services Section Specification

## Purpose

Render a responsive grid of 4+ service cards (Asesoría Tecnológica, Desarrollo de Software, Apps Móviles, Consultoría de Transformación Digital) with Lucide React icons, glassmorphism cards, hover scale effect, and staggered entrance animation.

## Requirements

### Requirement: Service Card Grid

The section MUST display 4 or more cards in a responsive grid. Desktop (≥1024px) uses a 4-column layout. Tablet uses 2 columns. Mobile (≤767px) uses 1 column. Each card MUST contain a Lucide icon, a title, and a description paragraph.

#### Scenario: Desktop 4-column grid

- GIVEN a viewport width of 1440px
- WHEN inspecting the services grid
- THEN exactly 4 cards are visible in one row
- AND each card has equal width

#### Scenario: Mobile single column

- GIVEN a viewport width of 375px
- WHEN inspecting the services grid
- THEN cards stack vertically in a single column

### Requirement: Glassmorphism Card Style

Each card MUST use the Raised glassmorphism tier: 0.6 opacity background, 20px backdrop-blur, 1px inner border (white at 0.1 opacity). On hover, the card MUST scale to 1.02x and increase backdrop-blur intensity.

#### Scenario: Hover scale and glow

- GIVEN a service card
- WHEN the mouse hovers over it
- THEN the card scales to 1.02x over 300ms ease-out
- AND the backdrop-blur visually intensifies

#### Scenario: Touch device no scale

- GIVEN a touchscreen device with hover disabled
- WHEN the user taps a card
- THEN the card does NOT remain in the hover state after touch ends

### Requirement: Staggered Entrance Animation

Cards MUST animate into view with a slide-fade transition. Each consecutive card MUST have a 50ms stagger delay.

#### Scenario: Stagger delay

- GIVEN the services section enters the viewport
- WHEN observing card animation start times
- THEN card 2 starts 50ms after card 1, card 3 starts 50ms after card 2, etc.

#### Scenario: Reduced motion skips stagger

- GIVEN `prefers-reduced-motion: reduce` is active
- WHEN the section scrolls into view
- THEN all cards appear at full opacity without stagger or animation
