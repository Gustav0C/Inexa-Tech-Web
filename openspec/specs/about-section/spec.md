# About Section Specification

## Purpose

Display the company history and mission paragraph, values in icon cards, and animated counter stats (years in market, clients served, projects completed) that start counting when the viewport triggers them.

## Requirements

### Requirement: Mission and History

The section MUST show a paragraph describing the company's history and mission, styled with Inter body font at 18px, using generous vertical spacing (120px+ section padding).

#### Scenario: Mission paragraph renders

- GIVEN the about section
- WHEN reading the mission text
- THEN it is styled with Inter body-lg and readable at 16px minimum

#### Scenario: Long text wraps correctly

- GIVEN a multi-sentence mission paragraph
- WHEN rendered on a 375px viewport
- THEN text wraps without overflow and line-height remains at least 1.5

### Requirement: Values Cards

Company values MUST display in a grid of icon cards (2 columns on desktop, 1 on mobile). Each card MUST have a Lucide icon, a value title, and a short description. Cards MUST use glassmorphism styling.

#### Scenario: Values grid renders

- GIVEN the values section
- WHEN inspecting the DOM
- THEN each value card shows an icon, title, and description
- AND cards use the Raised glassmorphism class

#### Scenario: Mobile single column

- GIVEN a 375px viewport
- WHEN inspecting the values grid
- THEN cards stack in a single column without horizontal scroll

### Requirement: Animated Counter Stats

Three stat counters (years in market, clients served, projects completed) MUST display placeholder numbers. Each counter MUST animate from 0 to its target value over ~2 seconds when the stats section enters the viewport. Animation MUST play only once.

#### Scenario: Counter animates on scroll

- GIVEN the stats section is below the fold
- WHEN it scrolls into the viewport (IntersectionObserver triggers)
- THEN each counter animates from 0 to its target value

#### Scenario: Counter does not re-trigger

- GIVEN the counters have already animated
- WHEN the user scrolls away and back
- THEN the counters stay at their final values without re-animating
