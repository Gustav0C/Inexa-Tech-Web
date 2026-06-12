# AGENTS.md — Inexa-Tech-Web

## Project Overview

This repository contains the **INEXA TECH design system specification** (`DESIGN.md`). It is a design system doc, not yet an implemented codebase. No package.json, build config, or test suite exists yet.

## Design System Spec (DESIGN.md)

The `DESIGN.md` file is the single source of truth for:

- **Color palette** — Midnight Navy base (#001226), Electric Blue primary (#007AFF), Slate neutrals, desaturated status colors
- **Typography** — Sora (display), Inter (body), JetBrains Mono (technical labels)
- **Layout** — 12-col desktop / 4-col mobile grid, 8px base unit, generous darkspace
- **Elevation** — Glassmorphism tiers: Floor (navy), Raised (semi-transparent + blur + inner border), Overlay (solid + blue glow)
- **Components** — Buttons (primary/ghost/tertiary), Cards (glass + hover scale), Floating Nav (blur + sliver highlight), Inputs (dark slate + blue focus), Staggered slide-fade transitions

## Agent Guidance

| Scenario | Action |
|---|---|
| Implementing the design system | Read `DESIGN.md` first. Every token, spacing value, and component behavior is defined there. |
| Creating a new web project from this spec | This repo is the spec. The implementation lives elsewhere (or will be created). |
| Adding design tokens to code | Export from `DESIGN.md` frontmatter (YAML) — colors, spacing, rounded, typography scales. |
| Writing components | Match the exact specs: glassmorphism tiers, 300ms ease-out, 1.02x hover scale, 50ms stagger delays. |
| Dark mode | This IS the dark mode. The spec is dark-first. No light theme defined. |

## What Does Not Exist Yet

- No build tooling (Vite, Next.js, etc.)
- No package manager (npm, pnpm, bun)
- No test framework
- No linting/formatting config
- No CI/CD
- No component library code

## When Implementation Starts

If you initialize a project here, add to this AGENTS.md:
- Exact dev commands (`npm run dev`, `npm test`, etc.)
- Project structure conventions
- Testing approach
- Any framework-specific quirks

## Reference

- **Design spec**: `DESIGN.md` (YAML frontmatter + prose)
- **Skill registry**: `.atl/skill-registry.md` (for gentle-ai SDD workflows)