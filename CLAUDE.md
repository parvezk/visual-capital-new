# Visual Capital — CLAUDE.md

## Project Overview

Visual Capital is a Next.js 15 marketing/landing page for an AI-powered data visualization platform ("The Visualization Layer for the Agentic Era"). It is hosted on Google AI Studio and integrates the Google Gemini API.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS 4.1 |
| Animations | Framer Motion (`motion/react`) |
| Icons | Lucide React |
| AI | Google Gemini (`@google/genai`) |
| Forms | React Hook Form + `@hookform/resolvers` |
| Linting | ESLint 9 |
| Deployment | Firebase / Google Cloud Run (standalone output) |

## Project Structure

```
app/              # Next.js App Router pages and layouts
  layout.tsx      # Root layout — fonts (JetBrains Mono, IBM Plex Sans, Fira Code), metadata
  page.tsx        # Main landing page with hero, feature cards, footer
  globals.css     # Tailwind base + custom font CSS variables
hooks/
  use-mobile.ts   # Mobile viewport detection (768px breakpoint)
lib/
  utils.ts        # cn() utility (clsx + tailwind-merge)
public/
  hero-illustration.png  # Hero section image
```

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
npm run clean    # Clean Next.js build cache
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values before running locally.

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Google Gemini API key (injected automatically in AI Studio) |
| `APP_URL` | Hosted app URL (injected automatically in AI Studio) |

## Key Patterns & Conventions

- **Path alias**: `@/` maps to the project root — use it for all imports.
- **Class merging**: Always use the `cn()` helper from `@/lib/utils` when combining Tailwind classes.
- **Animations**: Scroll-triggered animations use Framer Motion's `whileInView` with `initial` / `animate` props.
- **Responsive**: Mobile-first Tailwind breakpoints (`md:`, `lg:`). Use the `useMobile` hook for JS-level mobile checks.
- **Fonts**: Three font CSS variables are set in the root layout — `--font-jetbrains-mono`, `--font-ibm-plex-sans`, `--font-fira-code`.
- **Standalone build**: `next.config.ts` sets `output: "standalone"` for Docker/Cloud Run compatibility. Do not remove this.
- **HMR**: Hot Module Replacement is disabled when `DISABLE_HMR=true` (AI Studio environment). Do not add HMR-dependent logic.

## Architecture Notes

- This is a **pure App Router** project — no `pages/` directory. All routes live under `app/`.
- Server Components are the default; add `"use client"` only when hooks or browser APIs are required.
- Image optimization is configured for `picsum.photos` as a remote pattern fallback.
- The `motion` package is explicitly transpiled in `next.config.ts` — do not remove that config entry.
