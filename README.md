# Benjamin Kugler — Portfolio

Single-page personal portfolio. Built with **Astro** (static output, near-zero
client JS) for maximum speed. The design is the Claude Design handoff in
[`design/`](./design) — that folder is the source of truth for layout, colors,
type, and copy.

## Stack

- **Astro 5** + TypeScript — 100% static (SSG), no backend, deploys to Vercel.
- Hand-authored CSS with `oklch` design tokens ([`src/styles/global.css`](./src/styles/global.css)).
  Light theme default with a persisted dark-mode toggle.
- Self-hosted, subset fonts via `@fontsource` (Space Grotesk, Hanken Grotesk,
  JetBrains Mono) — only the weights in use, `font-display: swap`.
- Tiny vanilla `<script>` islands for theme / nav / scroll-reveal and the CV
  download. No UI framework ships to the browser.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview  # serve the built site
```

## Deploy (Vercel)

Push the repo and import it in Vercel — Astro is auto-detected (build
`astro build`, output `dist`). Caching headers live in
[`vercel.json`](./vercel.json). Set the production domain in
[`astro.config.mjs`](./astro.config.mjs) (`site`) and
[`public/robots.txt`](./public/robots.txt) so the sitemap and OG URLs are
absolute.

**Node version:** Astro 5 requires Node ≥ 20.19. The version is pinned to
**22.x** via `engines.node` in [`package.json`](./package.json) (and `.nvmrc`),
which Vercel reads and which overrides the project's dashboard setting — so a
stale "Node 18.x" build setting can't break the deploy.

## CV PDFs

A single front-end résumé in two languages. Drop the two PDFs in
[`public/cv/`](./public/cv) with these exact names:

```
benjamin-kugler-frontend-es.pdf   # Español
benjamin-kugler-frontend-en.pdf   # English
```

The CV section shows two buttons (Español / English) that link straight to these
files — plain `<a download>`, no JavaScript and no external requests. To add a
language or a second role, edit the `cvs` array in
[`src/components/Cv.astro`](./src/components/Cv.astro) and the table in
[`public/cv/README.md`](./public/cv/README.md).

## Images

Placeholders (striped frames with monospace labels) stand in for the portrait
and project screenshots. Drop real files in `public/img/` and swap the
`<div class="ph">` for an `<img>` with explicit `width`/`height` — the `.ph`
frames already reserve the aspect ratio, so CLS stays at zero.

## SEO

Title, description, Open Graph + Twitter cards, `theme-color`, canonical URL,
`og.png` (1200×630), `favicon.png`, `robots.txt`, and an auto-generated
`sitemap-index.xml` (via `@astrojs/sitemap`) are all wired in
[`src/layouts/Base.astro`](./src/layouts/Base.astro).
