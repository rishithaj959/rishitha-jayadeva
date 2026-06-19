# Rishitha Jayadeva — Data Scientist Portfolio

A premium, recruiter-facing portfolio for **Rishitha Jayadeva**, a Data Scientist (Monash
University, Master of Data Science 2025) specializing in SQL/Python/R analytics, Power BI
dashboards, and applied ML pipelines.

## Project overview

- **Role positioning:** Data Scientist / Data Analyst, junior-to-mid level, strongest in
  end-to-end reporting (clean data → model/metric → dashboard → decision).
- **Design direction:** dark "analyst's notebook" aesthetic — ink-navy background, a teal/amber
  data-viz accent pair, serif display headlines paired with monospace data labels, and a
  scrolling KPI ticker as the page's signature element.
- **Sections:** Hero, KPI ticker, About, Featured Work (6 projects), Experience + Education +
  Certifications, Skills, Contact.
- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS. No backend, no environment
  variables, no external API calls.

All resume/LinkedIn content has been rewritten in original language (no copy-pasted text) and
restructured to lead with impact rather than task descriptions.

## Local setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To produce a production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        # root layout, metadata
  page.tsx           # assembles all sections
  globals.css        # Tailwind base + custom utilities
components/
  Nav.tsx
  Hero.tsx
  Ticker.tsx          # signature scrolling KPI strip
  About.tsx
  Projects.tsx
  Experience.tsx
  Skills.tsx
  Contact.tsx
lib/
  content.ts          # all copy/content lives here — edit this file to update text
tailwind.config.js     # design tokens (colors, fonts, animations)
```

## Customizing content

All editable text (name, bullets, projects, skills, links) lives in a single file:
`lib/content.ts`. Update the values there and the whole site updates — no need to touch any
component.

## Optional: custom web fonts

This build intentionally uses safe system font stacks (Georgia / system-ui / SF Mono) so it
compiles with zero network calls in any environment. If you have internet access during your own
build and want the originally-designed type pairing, you can swap in Google Fonts:

```ts
// app/layout.tsx
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
```

and wire the returned `variable` classNames onto `<html>`, then point
`tailwind.config.js` → `theme.extend.fontFamily` at `var(--font-fraunces)`,
`var(--font-inter)`, and `var(--font-jbmono)` respectively.
