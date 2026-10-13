# Personal portfolio

A minimal, premium personal-brand site for a Senior Full-Stack Software Engineer and tech-startup founder. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Update portfolio data

All structured content lives in `src/data/`. Edit the TypeScript files and save — no CMS required.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Site name, base URL, navigation |
| `src/data/profile.ts` | Name, role, headline, bio, proof points, availability, email |
| `src/data/social.ts` | LinkedIn, GitHub, Instagram, email |
| `src/data/experience.ts` | Career timeline and education |
| `src/data/skills.ts` | Grouped skills (no percentage bars) |
| `src/data/projects.ts` | Work grid and case studies |

Placeholder experience entries are marked with `placeholder: true`. Replace those before publishing employment details.

## Add a project

1. Add an object to `projects` in `src/data/projects.ts`.
2. Use a unique `slug`. That becomes `/work/[slug]`.
3. Fill `problem`, `contribution`, `stack`, `outcome`, `screenshots`, and `links`.
4. Put images in `public/images/` and reference them from `/images/...`.
5. Set `featured: true` to show the project on the home page.

## Publish an article

1. Add a file in `src/content/notes/your-slug.mdx`.
2. Include frontmatter:

```md
---
title: Your title
summary: One or two sentences.
publishedAt: 2026-09-20
tags: [engineering, delivery]
---
```

3. Write the body in Markdown / MDX. The post appears at `/notes/your-slug`.

## Change social links

Edit `src/data/social.ts`. Those links power the floating desktop rail, footer, home connect section, and contact page.

## Swap the hero visual

All hero visual settings live in `src/config/hero-visual.ts`.

- `mode: "image"` — default. Uses the static render in `public/images/hero/`.
- `mode: "video"` — set `video.src` to a muted looping file and keep a poster image.
- `mode: "spline"` — default. Loads the black robot scene (`zXwuu1Espc7xVmTQ`). Override with `NEXT_PUBLIC_SPLINE_SCENE_URL`, or set `mode` to `"image"` / `"video"` to disable 3D.

Spline mode lazy-loads an iframe after the visual enters the viewport. It falls back to the static image on error or when the visitor prefers reduced motion. No 3D package is installed, so the initial bundle stays small.

To later use `@splinetool/react-spline` or React Three Fiber, replace only `src/components/hero/HeroVisualSpline.tsx`. Page layout and copy do not need to change.

Optional per-page overrides go in `pageHeroVisuals`.

## Contact form

The form posts to `src/app/api/contact/route.ts`, which validates, rate-limits, and sends via Resend.

Locally, copy `.env.example` to `.env.local` and set `RESEND_API_KEY` + `CONTACT_TO_EMAIL`. On Vercel, set the same variables in the project settings.

## SEO

- Per-page metadata is built by `src/lib/seo.ts`
- Open Graph images come from `/og?title=...` (`src/app/og/route.tsx`)
- `sitemap.ts` and `robots.ts` are generated from `src/data/site.ts`, projects, and notes
- JSON-LD for Person, WebSite, breadcrumbs, and blog posts lives in `src/lib/structured-data.ts`

Update `baseUrl` in `src/data/site.ts` before deploying.

## Deploy (Vercel CI/CD)

Production domain: `https://alaminbadhon.dev` (`src/data/site.ts`).

### Recommended: Vercel GitHub integration

1. Push `main` (and optionally `development`) to GitHub.
2. In [Vercel](https://vercel.com) → **Add New Project** → import this repo.
3. Set Production Branch to `main`.
4. Add environment variables (Production + Preview):
   - `CONTACT_TO_EMAIL=alamin.badhonn@gmail.com`
   - `RESEND_API_KEY` (from Resend)
   - `CONTACT_FROM_EMAIL=Portfolio <hello@alaminbadhon.dev>`
5. Deploy, then in **Project → Settings → Domains** add `alaminbadhon.dev` (and `www` if you want) and follow DNS instructions from your registrar.
6. Every push to `main` deploys production; PRs get Preview URLs.

GitHub Actions CI (`.github/workflows/ci.yml`) runs lint + build on pushes/PRs to `main` and `development`.

Optional manual CLI deploy: `.github/workflows/deploy-vercel.yml` (needs `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets).

## Project structure

```
src/app/          Routes, metadata, OG image, contact API
src/components/   UI, layout, hero, work, notes, contact
src/config/       Hero visual settings
src/content/notes MDX articles
src/data/         Editable portfolio content
src/lib/          SEO, notes loader, structured data
public/images/    Avatar, logos, project screenshots, hero render
```
