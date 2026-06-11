# Ahmed Osama — Personal Portfolio

A bilingual, **dual-persona** personal site for Ahmed Osama El-Daoushy (Senior
Software Engineer). One codebase serves two experiences that the visitor flips
between with a single switch:

- **Programmer mode** (English, LTR) — a software-engineering portfolio: projects,
  experience, skills, and a technical blog.
- **Writer mode** (Arabic, RTL) — an Arabic literary space with prose and short
  reflective pieces.

Built with the **Next.js App Router**, fully internationalized (EN/AR with RTL),
and animated with Framer Motion.

**Live:** https://ahmedosamadev.vercel.app

---

## Highlights

- **Two personas, one site.** A `programmer ⇄ writer` mode toggle (the
  `PortfolioModeSwitch`) drives both the language and the content. The persona is
  derived from the URL locale on entry (`/en` → programmer, `/ar` → writer) and
  only changes via the on-page switch — `next/link` navigations never change it.
- **Bilingual EN / AR with full RTL**, powered by `i18next` / `react-i18next` and
  locale-prefixed routes (`/en`, `/ar`) enforced by `middleware.ts`. Server and
  client translations are kept in sync.
- **Sections:** Home, About (biography, skills, an animated scroll-driven SVG, and
  a work-experience timeline), Portfolio (project showcase), Contact (EmailJS
  form), Blog (Arabic literature), and a Tech Blog (Git / TypeScript docs with
  syntax-highlighted code).
- **Animations** with Framer Motion — page transitions, scroll reveals, and a
  scroll-linked SVG illustration on the About page.
- **SEO-aware** — `sitemap.ts` and `robots.ts` with per-locale alternates.
- **Deploys to Cloudflare** via `@opennextjs/cloudflare` + Wrangler (Vercel-ready
  too).

---

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | **Next.js 14** (App Router, React 18, TypeScript) |
| Styling | **Tailwind CSS 3** (+ `tailwind-merge`, `clsx`) |
| i18n | **i18next** / **react-i18next** (+ fs/browser language detector), locale middleware |
| Animation | **Framer Motion** |
| Forms / email | **@emailjs/browser** (contact form) |
| Content | Syntax highlighting via **react-syntax-highlighter**, HTML via **html-react-parser** |
| Hosting | **Cloudflare** (`@opennextjs/cloudflare` + Wrangler); Vercel-compatible |

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

The dev server redirects to a locale-prefixed route (`/en` or `/ar`).

### Other scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run lint` | Run ESLint |
| `npm run preview` | Build with OpenNext and preview on Wrangler |
| `npm run deploy` | Build with OpenNext and deploy to Cloudflare |
| `npm run cf-typegen` | Generate Cloudflare env types |

---

## Project structure

```
app/                      # App Router pages
├─ page.tsx               # Home
├─ about/                 # Biography, skills, scroll SVG, experience timeline
├─ portfolio/             # Project showcase
├─ contact/               # EmailJS contact form
├─ blog/                  # Arabic literature
├─ tech-blog/             # Git / TypeScript docs (technology sub-routes)
├─ layout.tsx             # Root layout + providers
├─ sitemap.ts · robots.ts
Components/                # UI grouped by section (home, about, navbar, portfolio, blog, techBlog, contact)
context/ThemeContext.tsx   # programmer ⇄ writer persona
hooks/                     # translation, locale href, language state, resize…
lib/i18n/                  # i18n config + client/server setup
data/                      # content: portfolio.ts, about.ts, blog.ts, techBlog.ts, navbar.ts
utils/                     # blog processing, formatting, server translation
server-locales/ · types/   # locale resources · shared types
middleware.ts              # locale routing
```

Content lives in `data/*` — projects, experience, skills, blog posts, and the
tech-blog navigation are plain typed data, kept separate from the components that
render them.

---

## Internationalization & modes

- Routes are locale-prefixed (`/en`, `/ar`); `middleware.ts` redirects bare paths
  to the right locale.
- The **persona** is a separate concept layered on top of the locale: `ThemeContext`
  exposes `mode` (`programmer` | `writer`) and `toggleMode()`. Entering on `/ar`
  starts in writer mode; `/en` starts in programmer mode.
- UI strings are translated via i18next dictionaries; long-form content is authored
  directly in `data/`.

---

## Deployment

Configured for **Cloudflare** through `@opennextjs/cloudflare` (`open-next.config.ts`,
`wrangler.jsonc`):

```bash
npm run deploy
```

The project is also standard Next.js and deploys to Vercel without changes.
