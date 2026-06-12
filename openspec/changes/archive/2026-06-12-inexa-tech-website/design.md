# Technical Design: INEXA TECH Corporate Website

## 1. Technical Approach

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Bundler | Vite | 5.x | Fast dev server, optimized builds |
| UI | React | 18.x | Component architecture |
| Language | TypeScript | 5.x | Type safety |
| Routing | React Router | 6.x | Client-side navigation |
| Styling | Tailwind CSS | 3.x | Design token extraction, utility classes |
| Animation | Framer Motion | 11+ | Declarative animations, scroll effects |
| 3D | React Three Fiber + Drei | Latest | Hero particle background |
| Forms | React Hook Form + zod | Latest | Form state and validation |
| Icons | Lucide React | Latest | Consistent iconography |

## 2. Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| Routing | React Router v6 (`BrowserRouter`) | Hash Router, Next.js | Standard SPA routing; no SSR needed. Hash router adds ugly URLs. Next.js overkill for static site. |
| State Management | React Context + local state | Zustand, Redux | No global mutable state exists. Form state is local to RHF. Route state via React Router. Context only for shared UI state (mobile menu open/close). |
| R3F Loading | `React.lazy()` + `Suspense` with gradient fallback | SSR, eager load | Lazy loading keeps initial bundle small. Gradient fallback ensures no blank space per spec. SSR unnecessary for marketing site. |
| Animation | Framer Motion variants + `whileInView` | GSAP, CSS animations | Variants enable child stagger propagation declaratively. GSAP adds bundle weight for same result. CSS animations lack JS control for `prefers-reduced-motion`. |
| Form Validation | zod schemas + `@hookform/resolvers` | Manual validation, Yup | Zod is type-safe, composable, and RHF's official recommendation. Manual validation scales poorly. Yup has weaker TS inference. |
| Project Structure | Feature-grouped (`layout/sections/ui`) | Atomic design, flat | Sections are self-contained page regions. Layout wraps everything. UI holds reusable primitives. Avoids over-abstraction of atomic design for a 6-page site. |
| Content Strategy | Hardcoded constants in `src/constants/` | CMS, JSON files | No backend in scope. Constants provide type safety and IDE autocomplete. CMS integration is out of scope. |

## 3. Component Tree

```
App
├── Navbar (layout) — fixed, glass, mobile hamburger
├── Suspense fallback={<PageLoader />}
│   └── Routes
│       ├── Home → Hero, ServicesPreview, ProductsPreview, AboutPreview, TeamPreview, TestimonialsPreview, ContactPreview
│       ├── /servicios → ServicesFull
│       ├── /productos → ProductsFull
│       ├── /nosotros → AboutFull
│       ├── /equipo → TeamFull
│       ├── /contacto → ContactFull
│       └── * → NotFound
└── Footer (layout)
```

**Shared UI Components:**

| Component | Purpose | Used By |
|-----------|---------|---------|
| `GlassCard` | Raised glassmorphism tier (0.6 opacity, 20px blur, inner border) | Services, Products, About, Team, Testimonials |
| `AnimatedCard` | GlassCard + Framer Motion `whileHover={{ scale: 1.02 }}` + `whileInView` entrance | Services, Team |
| `SectionTitle` | Consistent section heading (Sora display, gradient text, subtitle) | All sections |
| `CounterAnimated` | Scroll-triggered count-up animation | About (stats) |
| `ParticleBackground` | Lazy-loaded R3F Canvas with instanced mesh particles | Hero |
| `Button` | Primary (solid blue), Ghost (border + gradient hover), Tertiary (text + arrow) | All sections |
| `PageLoader` | Suspense fallback during route transitions | Routes |

## 4. Data Flow

```
Static Content     →  constants/*.ts  →  Section components (props)
Form State         →  React Hook Form (local, no global store)
Scroll Position    →  Framer Motion useScroll / whileInView
Route State        →  React Router (useLocation, NavLink)
Theme Tokens       →  tailwind.config.ts → CSS custom properties → Utility classes
Mobile Menu State  →  Navbar component-local useState (only shared state in app)
```

No backend. No global state library. No data fetching. All content is statically defined in TypeScript constants with proper interfaces.

## 5. File Tree

```
inexa-tech-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── GlassCard.tsx
│   │       ├── AnimatedCard.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── CounterAnimated.tsx
│   │       ├── ParticleBackground.tsx
│   │       ├── Button.tsx
│   │       └── PageLoader.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useReducedMotion.ts
│   ├── constants/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   ├── testimonials.ts
│   │   └── stats.ts
│   ├── config/
│   │   └── contact.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── DESIGN.md
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── postcss.config.js
├── .eslintrc.cjs
└── .prettierrc
```

## 6. Testing Strategy

| Type | Tool | Status |
|------|------|--------|
| Unit/Integration | Vitest + Testing Library | **Not configured** — greenfield, no tests in scope |
| Visual | Vite dev server preview | Primary verification method |
| Linting | ESLint + Prettier | Configured as quality gates |
| Type Checking | `tsc --noEmit` | CI gate |
| Accessibility | Manual keyboard/screen reader testing | Per spec (aria-labels, semantic HTML) |
| Performance | Lighthouse audit | Target: 90+ Perf, 95+ A11y, 90+ SEO |

**Note:** No test runner is scaffolded in this phase. The spec does not require unit tests. ESLint + Prettier + TypeScript serve as the primary code quality gates.

## 7. TypeScript Interfaces

```typescript
// src/constants/services.ts
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

// src/constants/team.ts
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
}

// src/constants/testimonials.ts
interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatarUrl?: string;
}

// src/constants/stats.ts
interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

// Contact form (zod-inferred)
interface ContactForm {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  message: string;
}

// src/config/contact.ts
interface EmailJSConfig {
  serviceId: string; // TODO: replace with real value
  templateId: string; // TODO: replace with real value
  publicKey: string; // TODO: replace with real value
}
```

## 8. Migration / Rollout

Greenfield — no migration needed. All files are new. `DESIGN.md` remains unchanged as reference.

**Build sequence:**
1. Scaffold (Vite + deps + Tailwind config + tokens)
2. Layout (Navbar + Footer + Router)
3. UI primitives (GlassCard, Button, SectionTitle)
4. Hero (R3F particles + CTAs)
5. Remaining sections (Services → Products → About → Team → Testimonials → Contact)
6. Contact form (RHF + zod + EmailJS stubs)
7. Polish (animations, responsive, accessibility)

## 9. Open Questions

| # | Question | Resolution Needed |
|---|----------|-------------------|
| 1 | Deploy target — Vercel, Netlify, or other? | User decision. No deploy config in this phase. |
| 2 | Mikui logo — placeholder SVG or existing asset? | Placeholder SVG assumed. |
| 3 | EmailJS — real service/template IDs or TODO stubs only? | TODO stubs per spec. |
| 4 | Real team photos — placeholder gray circles? | Yes, per spec. |
| 5 | Product images — icon-only or WebP placeholders? | TBD — spec says "En desarrollo" badge for Mikui. |
