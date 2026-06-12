---
name: INEXA TECH
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c4c6cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8e9197'
  outline-variant: '#44474d'
  surface-tint: '#b6c8e3'
  primary: '#b6c8e3'
  on-primary: '#203147'
  primary-container: '#001226'
  on-primary-container: '#6d7e97'
  inverse-primary: '#4e6077'
  secondary: '#adc6ff'
  on-secondary: '#002e69'
  secondary-container: '#4b8eff'
  on-secondary-container: '#00285c'
  tertiary: '#c1c7cf'
  on-tertiary: '#2b3137'
  tertiary-container: '#0c1217'
  on-tertiary-container: '#777e85'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b6c8e3'
  on-primary-fixed: '#091c31'
  on-primary-fixed-variant: '#37485e'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system embodies a premium, high-performance ethos designed for the elite frontier of enterprise technology. The brand personality is authoritative yet visionary, combining the stability of a corporate giant with the agility of a silicon-valley disruptor. It targets C-suite executives and technical architects who demand precision and sophistication.

The visual style is a fusion of **Corporate Modernism** and **Refined Glassmorphism**. We utilize deep, atmospheric layers to create a sense of infinite digital space, punctuated by razor-sharp accents and luminous gradients. The aesthetic is intentionally "dark-first" to reduce visual fatigue and emphasize the vibrant energy of the data-driven elements. Every interaction should feel frictionless, expensive, and deliberate.

## Colors

The palette is anchored by **Midnight Navy (#001226)**, providing a profound, stable foundation that avoids the flatness of pure black. **Electric Blue (#007AFF)** serves as the primary action color, representing energy and technological flow. 

For depth, we employ a spectrum of Slate neutrals. **Silver (#94A3B8)** and **Pure White (#FFFFFF)** are reserved for high-contrast typography and critical iconography. Surfaces are not solid; they utilize subtle linear gradients from the primary navy to a slightly lighter slate to simulate physical depth in a digital environment. Status colors (Success, Warning, Error) should be desaturated to maintain the premium feel, ensuring they don't clash with the vibrant Electric Blue.

## Typography

The typographic hierarchy is designed for maximum clarity and "tech-forward" appeal. **Sora** is the display typeface, chosen for its geometric precision and unique apertures that reflect the angular nature of the logo. **Inter** handles the heavy lifting of body copy, providing world-class readability at any scale. For technical metadata and labels, **JetBrains Mono** introduces a subtle "developer-centric" aesthetic that reinforces the tech brand identity.

Headlines should utilize tight letter-spacing to appear more impactful. Large display text may occasionally use a subtle silver-to-white vertical gradient to mimic metallic reflections. Always ensure body text remains at least 16px to maintain accessibility against the dark backgrounds.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. Spacing is governed by a strict 8px base unit to ensure mathematical harmony across all components.

We embrace "Generous Whitespace" (or "Darkspace" in this context) to allow complex technical data to breathe. Layouts should prioritize center-aligned containers for marketing pages to maintain a premium, cinematic feel, while switching to edge-to-edge dashboards for functional application views. Section vertical padding should be aggressive (e.g., 120px+) to create distinct narrative beats during the scroll experience.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows. Surfaces are defined by three primary tiers:

1.  **Floor:** The midnight navy background (#001226).
2.  **Raised:** Semi-transparent surfaces (0.6 opacity) with a 20px backdrop blur and a 1px inner border (white at 0.1 opacity) to catch the light.
3.  **Overlay:** Floating elements like modals or tooltips, using a solid navy base with a vibrant Electric Blue glow (box-shadow: 0 20px 40px rgba(0, 122, 255, 0.15)).

Transitions between levels should be smooth (300ms ease-out) to simulate the weightlessness of a digital interface.

## Shapes

The shape language balances technical precision with modern softness. The **Rounded (0.5rem)** setting is our standard, providing a sophisticated curve that feels more advanced than sharp corners but more professional than pill shapes. 

Large containers and cards should use `rounded-xl` (1.5rem) to emphasize the "vessel" feel of the glass components. Interactive elements like buttons and input fields stay consistent at `rounded-md` (0.5rem) to maintain a crisp, functional appearance.

## Components

### Buttons
Primary buttons use a solid Electric Blue fill with white text. Secondary buttons are "Ghost" style: a 1px silver border that fills with a subtle navy-to-blue gradient on hover. Tertiary buttons are text-only with a JetBrains Mono label and an animated arrow icon.

### Cards
Cards are the hero of the interface. They feature a subtle glass effect, a 1px border-top for a "highlight" effect, and a transition that scales the card by 1.02x on hover while increasing the intensity of the backdrop blur.

### Navigation Bar
A fixed, high-end "Floating" navigation bar. It should be semi-transparent with a heavy backdrop blur. Use a "Slivers of Light" effect where a 2px Electric Blue line appears at the top of the active nav item.

### Inputs & Form Fields
Fields use a dark slate background with a 1px border. Upon focus, the border glows Electric Blue and the label shifts upward using a smaller JetBrains Mono font size.

### Sophisticated Transitions
All page transitions should use a "Slide and Fade" motion. Elements should stagger into view (entrance animation) with a 50ms delay between items to create a sense of the interface "assembling" itself for the user.