# Apple-Minimal Portfolio Design System

> Source of truth for the `new-design` branch redesign. Follow this file for future UI and content work.

**Persona:** Senior Full-Stack Engineer & Startup Founder (B M AL-amin Badhon)  
**Stack:** Next.js 15, React 19, Tailwind CSS v4, Framer Motion, `@splinetool/react-spline`  
**Branch:** `new-design` (from `development`)

---

## 1. Visual system

### Palette (pure monochrome)

| Token | Hex | CSS variable | Usage |
|-------|-----|--------------|--------|
| Canvas | `#FFFFFF` | `--apple-bg` | Page background (flat white, no gradients) |
| Ink | `#000000` | `--apple-ink` | Primary type, CTAs, active states |
| Graphite | `#1D1D1F` | `--apple-graphite` | Body labels, secondary text |
| Aluminum | `#F5F5F7` | `--apple-aluminum` | Subtle fills, metric strip, section bands |
| Border | `#E8E8ED` | `--apple-border` | 1px structural borders |

### Typography

- **Family:** Inter (`next/font/google`), variable `--font-apple`
- **Hero:** Heavy / tight tracking, high contrast black on white
- **Body / labels:** Graphite (`#1D1D1F`), comfortable line-height
- **Micro metrics:** Small tabular/mono-feel (Inter, `tracking-tight`, `uppercase` sparingly)

### Layout rules

- Microscopic **1px** borders (`border-[var(--apple-border)]`)
- Generous editorial padding (`px-6 md:px-12 lg:px-16`, section `py-20 md:py-28`)
- Absolute symmetry where possible (hero 50/50 desktop)
- No cards-in-hero; bento sections may use hairline bordered rows/frames for interaction

### Motion

- Apple-like easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` / Framer `ease: [0.25, 0.1, 0.25, 1]`
- Intentional motions only:
  1. Nav active underline slide
  2. Hero left column fade/slide-in
  3. Gallery frame hover scale
- No glow, bounce, or purple accents

---

## 2. Information architecture

**Multi-page** site (not a single scroll page). Sticky frosted dock links to separate routes.

| Nav label | Route | Content source |
|-----------|-------|----------------|
| (Home) | `/` | Hero only |
| About Me | `/about` | `about` + `person` + `social` in `content.js` |
| Experience | `/experience` | `about.work.experiences` |
| Projects | `/projects` | `portfolio.projects` |
| Mind Dump | `/blog` | MDX via `getPosts(['src','app','blog','posts'])` |
| Gallery | `/gallery` | `gallery.images` |

Legacy redirects: `/portfolio` → `/projects`, `/work` → `/projects`, `/contact` → `/about`.

---

## 3. Component map

| Component | Path |
|-----------|------|
| Design tokens CSS | `src/app/globals-apple.css` |
| Site shell layout | `src/app/layout.tsx` |
| Home page | `src/app/page.tsx` |
| Nav dock | `src/components/site/NavDock.tsx` |
| Hero | `src/components/site/Hero.tsx` |
| Spline scene | `src/components/site/SplineScene.tsx` |
| Footer | `src/components/site/SiteFooter.tsx` |
| About Me | `src/components/site/sections/AboutMe.tsx` |
| Experience | `src/components/site/sections/Experience.tsx` |
| Projects Vault | `src/components/site/sections/ProjectsVault.tsx` |
| Mind Dump | `src/components/site/sections/MindDump.tsx` |
| Gallery | `src/components/site/sections/GalleryGrid.tsx` |
| Section chrome | `src/components/site/sections/Section.tsx` |
| Spline URL config | `src/app/resources/site.config.ts` |

---

## 4. Hero — split-fold + Spline

### Layout

- Desktop: `grid-cols-2`, 50/50, min-height ~100vh minus nav
- Mobile: stack — typography first, Spline second (capped height ~320–400px)

### Left column

- Headline: **Engineering High-Performance Systems. Scaling Software Ventures.**
- Micro-metric strip: role, years (5+), location (Canada), key stacks (.NET / React / AWS)

### Right column — Spline

- Package: `@splinetool/react-spline`
- Load with `next/dynamic(..., { ssr: false })` to avoid SSR/WebGL issues
- Reserved aspect / min-height box to prevent CLS
- Default community scene URL is set in `site.config.ts`

### Swap your Spline scene

1. Open [spline.design](https://spline.design), export / copy the public scene URL ending in `.splinecode`  
   Example shape: `https://prod.spline.design/<id>/scene.splinecode`
2. Update `splineSceneUrl` in [`src/app/resources/site.config.ts`](src/app/resources/site.config.ts)  
   Current scene: `https://prod.spline.design/zXwuu1Espc7xVmTQ/scene.splinecode`  
   **or** set env `NEXT_PUBLIC_SPLINE_SCENE_URL`
3. Prefer scenes that already track cursor / look-at for mouse follow (configure Look At / mouse events in Spline editor)

---

## 5. Section specs

### About Me

Reuse the spirit of the previous About page:

- Avatar, name, role, Canada / timezone cue
- Intro paragraph from `about.intro`
- Social links (GitHub, LinkedIn, Email)
- Optional Schedule a call → `about.calendar.link`
- Technical skills grid from `about.technical.skills`

### Experience

Linear timeline rows: company, role, timeframe, location, achievements list. Hairline borders, generous padding.

### Projects Vault

Linear rows (not noisy cards): title, short description, optional `version`, tech tags, source/demo out-links. Data: `portfolio.projects` (extend with `version` when needed).

### Mind Dump

Editorial list: post title, date, summary → link `/blog/[slug]` (detail pages may remain Once UI for this pass).

### Gallery

CSS grid of images in crisp black frames (`border border-black`); hover scale ~1.02.

---

## 6. Content editing checklist

| Task | Where |
|------|--------|
| Update bio / role / avatar | `person`, `about` in `content.js` |
| Add job | `about.work.experiences` |
| Add skill category | `about.technical.skills` |
| Add project | `portfolio.projects` (include `technologies`, `sourceUrl`, `demoUrl`, optional `version`) |
| Add Mind Dump post | New `.mdx` in `src/app/blog/posts/` |
| Add gallery image | File under `public/images/gallery/` + entry in `gallery.images` |
| Change Spline scene | `site.config.ts` or `NEXT_PUBLIC_SPLINE_SCENE_URL` |

---

## 7. Performance & a11y

- Dynamic-import Spline (client only)
- `sizes` / fixed containers for images and 3D viewport
- Nav links are `<a href="#…">` with keyboard focus rings
- `scroll-margin-top` on sections for sticky nav offset
- Prefer `prefers-reduced-motion`: shorten or disable Framer transitions when set

---

## 8. Out of scope (this pass)

- Full rewrite of Once UI / MDX detail page chrome
- Real contact form backend
- Dark mode
