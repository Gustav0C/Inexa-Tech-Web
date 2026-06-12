# Navbar & Footer Specification

## Purpose

Implement a fixed floating navigation bar with glassmorphism styling, active-page indicator, mobile hamburger menu, and a footer with logo, quick links, social icons, and dynamic copyright.

## Requirements

### Requirement: Fixed Glass Navbar

The navbar MUST be fixed at the viewport top, use Raised glassmorphism tier (semi-transparent background, backdrop-blur 20px), and display all main navigation links: Inicio, Servicios, Productos, Nosotros, Equipo, Contacto. A "Contáctanos" CTA button MUST be present.

#### Scenario: Navbar visible on scroll

- GIVEN the user scrolls down 500px
- WHEN inspecting the navbar
- THEN it remains fixed at the top with glass background applied

#### Scenario: Active link highlight

- GIVEN the current route is `/servicios`
- WHEN inspecting the "Servicios" nav link
- THEN a 2px Electric Blue (`#007AFF`) line appears at its top border

### Requirement: Mobile Responsive Navbar

Below 768px viewport width, the navbar MUST collapse into a hamburger icon. Tapping it MUST open an animated overlay menu with all links stacked vertically.

#### Scenario: Hamburger toggles menu

- GIVEN a viewport width of 375px
- WHEN the hamburger icon is tapped
- THEN the menu overlay slides in with staggered link animations

#### Scenario: Menu closes on link click

- GIVEN the mobile menu is open
- WHEN a nav link is tapped
- THEN the menu closes and navigation occurs

### Requirement: Footer Structure

The footer MUST display the INEXA TECH logo, a short description, quick links to all 6 main sections, social media icon links (LinkedIn, GitHub, Twitter/X), and a copyright line with the current year.

#### Scenario: Copyright year is dynamic

- GIVEN the footer component
- WHEN inspected
- THEN the copyright year matches `new Date().getFullYear()`

#### Scenario: Social links open in new tab

- GIVEN the LinkedIn icon in the footer
- WHEN clicked
- THEN `target="_blank"` and `rel="noopener noreferrer"` are set
- AND the link points to the intended external URL
