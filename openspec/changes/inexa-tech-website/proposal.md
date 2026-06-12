# Proposal: INEXA TECH Corporate Website

## Intent

Replace a spec-only repo (DESIGN.md) with a production-ready React SPA. No code exists — this implements the full design system into a live corporate site with routing, animations, and 3D particles.

## Scope

### In Scope
- Vite + React 18 + TS + Tailwind scaffolding
- DESIGN.md tokens in Tailwind config (Midnight Navy #001226, Electric Blue #007AFF, Sora/Inter/JetBrains Mono, 8px base)
- 9 sections/routes: Navbar, Hero, Services, Products, About, Team, Testimonials, Contact, Footer
- Framer Motion: stagger, scroll-triggered, 300ms ease-out, 1.02x hover, 50ms stagger
- R3F particle Hero bg (lazy, fallback gradient)
- React Hook Form contact (validation, EmailJS config stubs)
- ESLint + Prettier
- Responsive: 12-col / 4-col grid
- SEO, aria-labels, semantic HTML, prefers-reduced-motion

### Out of Scope
- Storybook, GSAP, EmailJS send wiring
- Real team photos/content (placeholders)
- Backend, CMS, i18n, analytics

## Proposal Question Round

**Assumptions needing confirmation:**
1. **Deploy target** — omit deploy config? Vercel assumed?
2. **Mikui logo** — temporary SVG or pure placeholder?
3. **Testimonials** — hardcoded samples or real data?
4. **EmailJS** — service/template IDs left as `TODO` in `src/config/contact.ts` acceptable?
5. **Section images** — icon-only or blank WebP placeholders?

## Capabilities

### New Capabilities
- `site-foundation`: Vite + React 18 + TS + Tailwind + Router setup
- `design-system-tokens`: DESIGN.md → Tailwind config extraction
- `navbar-footer`: Fixed glass navbar with active indicator, footer with links
- `hero-section`: Full-viewport Hero, R3F particles, title, 2x CTAs
- `services-section`: 4-card grid, Lucide icons, stagger entrance, hover glow
- `products-section`: Mikui showcase, "En desarrollo" badge, parallax
- `about-section`: Mission/values cards, animated counter stats
- `team-section`: Placeholder cards, 3D CSS-perspective hover
- `testimonials-section`: Autoplay carousel, prev/next, star ratings
- `contact-section`: React Hook Form + validate, contact sidebar, EmailJS stubs

### Modified Capabilities
- None

## Approach

React Router v6 SPA. Tailwind config maps DESIGN.md tokens to custom properties. Framer Motion for all animation. R3F Canvas lazy-loaded on Hero only. React Hook Form + zod validation. Static content (no backend). WebP `<img loading="lazy">`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/` | New | Full app source |
| `openspec/specs/` | New | One spec per capability |
| `tailwind.config.*` | New | Token config |
| `DESIGN.md` | Unchanged | Reference only |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| R3F mobile perf | Med | Lazy load, `frameloop="demand"`, gradient fallback |
| Animation vs reduced motion | Low | `prefers-reduced-motion` disable |
| Token drift from DESIGN.md | Low | Review gate on token config |

## Rollback Plan

`git revert` branch. Delete `src/`, `public/`, `tailwind.config.*`, `openspec/specs/`, `openspec/changes/inexa-tech-website/`. DESIGN.md unchanged.

## Dependencies

React 18, Vite 5, Tailwind 3, Framer Motion 11+, @react-three/fiber, @react-three/drei, React Hook Form, @hookform/resolvers, zod, Lucide React, React Router 6.

## Success Criteria

- [ ] All routes render DESIGN.md tokens (primary=#007AFF, surface=#001226)
- [ ] Glassmorphism: 0.6 opacity, 20px blur, 1px inner border
- [ ] Contact form validates required fields, shows success state
- [ ] R3F canvas renders without errors
- [ ] ESLint 0 errors, Prettier clean
- [ ] Lighthouse: 90+ Perf, 95+ A11y, 90+ SEO
- [ ] Responsive at 375px and 1440px
