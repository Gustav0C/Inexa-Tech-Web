# Tasks: INEXA TECH Corporate Website

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 3000-5000+ |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | 6 PRs (Foundation → Layout → Hero → Sections → Pages → Polish) |
| Delivery strategy | ask-always |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Vite scaffold, deps, Tailwind config, Router, App shell | PR 1 | ~400-600 lines. Base: main. |
| 2 | Navbar, Footer, Button, GlassCard, SectionTitle | PR 2 | ~400-500 lines. Depends on PR 1. |
| 3 | Hero + R3F particles, Home page, PageLoader | PR 3 | ~400-500 lines. Depends on PR 2. |
| 4 | Services, Products, About sections + constants | PR 4 | ~400-500 lines. Depends on PR 2. |
| 5 | Team, Testimonials, Contact sections | PR 5 | ~400-500 lines. Depends on PR 2. |
| 6 | Individual pages, NotFound, hooks, polish | PR 6 | ~300-400 lines. Depends on PRs 3-5. |

## Phase 1: Foundation

- [x] 1.1 Create Vite project with React 18 + TypeScript template
- [x] 1.2 Install deps: tailwindcss, framer-motion, @react-three/fiber, @react-three/drei, react-router-dom, react-hook-form, @hookform/resolvers, zod, lucide-react, @emailjs/browser
- [x] 1.3 Configure `tailwind.config.ts` with DESIGN.md tokens (colors, typography, spacing, glassmorphism)
- [x] 1.4 Create `src/index.css` with Tailwind directives and CSS custom properties
- [x] 1.5 Setup ESLint + Prettier (`.eslintrc.cjs`, `.prettierrc`)
- [x] 1.6 Create `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `postcss.config.js`
- [x] 1.7 Create `src/App.tsx` with React Router routes (/, /servicios, /productos, /nosotros, /equipo, /contacto, 404)
- [x] 1.8 Create `src/main.tsx` entry point

## Phase 2: Layout + UI Primitives

- [x] 2.1 Create `src/components/layout/Navbar.tsx` — fixed glassmorphism, nav links, hamburger (mobile), CTA
- [x] 2.2 Create `src/components/layout/Footer.tsx` — logo, description, quick links, social icons, copyright year
- [x] 2.3 Create `src/components/ui/Button.tsx` — primary (solid blue), ghost (border + gradient hover), tertiary (text + arrow)
- [x] 2.4 Create `src/components/ui/GlassCard.tsx` — raised glassmorphism tier (0.6 opacity, 20px blur, inner border, hover scale 1.02)
- [x] 2.5 Create `src/components/ui/SectionTitle.tsx` — Sora display heading with gradient text + subtitle

## Phase 3: Hero + Home

- [x] 3.1 Create `src/components/ui/ParticleBackground.tsx` — lazy R3F Canvas with instanced mesh particles
- [x] 3.2 Create `src/components/ui/PageLoader.tsx` — Suspense fallback with loading animation
- [x] 3.3 Create `src/components/sections/Hero.tsx` — full-viewport, R3F particles, heading, subtitle, 2 CTAs
- [x] 3.4 Create `src/pages/Home.tsx` — compose all preview sections

## Phase 4: Sections + Constants

- [x] 4.1 Create `src/constants/services.ts` — Service interface + 4 service entries
- [x] 4.2 Create `src/constants/team.ts` — TeamMember interface + placeholder members
- [x] 4.3 Create `src/constants/testimonials.ts` — Testimonial interface + sample data (social-media style)
- [x] 4.4 Create `src/constants/stats.ts` — Stat interface + placeholder numbers
- [x] 4.5 Create `src/config/contact.ts` — EmailJS TODO stubs
- [x] 4.6 Create `src/components/sections/Services.tsx` — 4-card grid, Lucide icons, stagger animation
- [x] 4.7 Create `src/components/sections/Products.tsx` — Mikui showcase, generic SVG logo, "En desarrollo" badge, parallax
- [x] 4.8 Create `src/components/sections/About.tsx` — mission/values cards, counter stats with animation
- [x] 4.9 Create `src/components/ui/CounterAnimated.tsx` — scroll-triggered count-up animation
- [x] 4.10 Create `src/components/ui/AnimatedCard.tsx` — GlassCard + Framer Motion whileHover + whileInView

## Phase 5: Remaining Sections + Pages

- [x] 5.1 Create `src/components/sections/Team.tsx` — placeholder cards, 3D CSS-perspective hover
- [x] 5.2 Create `src/components/sections/Testimonials.tsx` — carousel, autoplay, prev/next, star ratings
- [x] 5.3 Create `src/components/sections/Contact.tsx` — React Hook Form + zod, sidebar info, EmailJS stubs
- [x] 5.4 Create `src/pages/ServicesPage.tsx` — full Services section
- [x] 5.5 Create `src/pages/ProductsPage.tsx` — full Products section
- [x] 5.6 Create `src/pages/AboutPage.tsx` — full About section
- [x] 5.7 Create `src/pages/TeamPage.tsx` — full Team section
- [x] 5.8 Create `src/pages/ContactPage.tsx` — full Contact section
- [x] 5.9 Create `src/pages/NotFound.tsx` — 404 page

## Phase 6: Polish

- [x] 6.1 Create `src/hooks/useScrollAnimation.ts` — smooth scroll hook
- [x] 6.2 Create `src/hooks/useReducedMotion.ts` — accessibility hook
- [x] 6.3 Fine-tune responsive breakpoints (375px, 768px, 1024px, 1440px)
- [x] 6.4 Add aria-labels and semantic HTML to all sections
- [x] 6.5 Add meta tags and Open Graph to `index.html`
- [x] 6.6 Final animation timing adjustments (300ms ease-out, 50ms stagger)
