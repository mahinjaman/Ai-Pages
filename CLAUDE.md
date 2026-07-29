# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A marketing/landing website for **Storeline** (an e-commerce product), built on the **SaasAble** seed template (phoenixcoded). Next.js 15 (App Router + Turbopack), React 19, MUI 7, TypeScript. There is no dashboard/app backend here besides two API routes.

**Most of the repo is dormant template scaffold.** The template ships 9 themes and dozens of numbered block variants per section, but the Storeline site uses only a small slice of it. Before assuming a theme or block matters, check the "Live vs dormant" section below — do not document or build on the unused parts as if they were active.

## Commands

- `npm run dev` — dev server on **port 4000** (Turbopack): http://localhost:4000
- `npm run build` / `npm run start` — production build and serve
- `npm run lint` / `npm run lint:fix` — ESLint over `src/**`
- `npm run prettier` — format `src/**`
- **There is no test framework** in this repo (no test script, no test runner).

Path alias: `@/*` → `./src/*` (configured in `tsconfig.json`).

## Architecture

### Three-layer separation: routes → views → blocks (with data)

The single most important convention. Each layer has a clear job:

1. **Routes** (`src/app/`) are thin. They `dynamic()`-import a view and attach Next `Metadata`. Real pages live under the `src/app/(landings)/(default)/` route group — its `layout.tsx` renders the shared `Navbar10` + `Footer6` + `ScrollFab` and yields the page body. The separate `src/app/blocks/` route group serves error/maintenance pages with **no** chrome.
2. **Views** compose page layouts out of blocks and feed each block a content object imported from `data/`. **Only `src/views/landings/default/*` is routed** — every page in `app/(landings)/(default)/` imports a view from there, and the route-group layout delegates to `views/landings/default/layout.tsx`.
3. **Blocks** (`src/blocks/<section>/`) are numbered, self-contained, presentational components (`Hero17`, `Feature28`, `Cta10`, `Navbar10`, `Footer6`, …). Each is re-exported from its folder's `index.ts`. **Blocks take all content via props — they never hardcode copy.** Only a handful of numbered blocks per section are actually imported (see "Live vs dormant"); the rest are unused template variants.

**Editing page content = editing `src/views/landings/default/data/*.ts(x)`, not the block component.** Each data file exports typed objects matching the block's props (e.g. `hero`, `feature19`, `pricing`, `navbar`); `data/index.ts` re-exports them.

### Theme system — only `hrm` is live (but switching persists to localStorage)

The template supports 9 themes (`default, crm, ai, crypto, hosting, pms, hrm, plugin, lms`), each with `palette.ts`, `typography.ts`, and `overrides/` under `src/views/landings/<theme>/theme/`. **But only `hrm` (active) and `default` (fallback) are actually used.**

- The active styling theme is set in `src/config.ts` → `currentTheme: Themes.THEME_HRM`. **To change site-wide colors/fonts/typography, edit `src/views/landings/hrm/theme/`** (palette, typography, component overrides). `config.ts` also defines every Google/local font.
- `src/components/ThemeProvider.tsx` reads `config.currentTheme` and selects the matching theme object. It deliberately renders a `<Loader>` until the client config resolves — this avoids `"className did not match"` hydration errors from the theme palette/font not yet being known.
- `ConfigContext` + `useConfig()` expose runtime theme/mode/direction and persist to `localStorage` under key `sass-able-react-mui-next-ts`. A theme change survives reloads and affects the entire site.
- Dark/light mode is propagated to plain CSS via `useDataThemeMode`, which sets `data-theme-mode` on `<html>` (consumed in `globals.css`).

### Live vs dormant

Treat the rest of the template as not-there unless you have a reason to touch it:

- **Dormant theme folders**: `crm, ai, crypto, hosting, pms, plugin, lms` — both their `theme/` palettes (imported by `ThemeProvider` but never selected) and their content view files (no route imports them).
- **Dormant block variants**: each `src/blocks/<section>/` folder contains many numbered components; only a few per section are imported anywhere. The live ones on the homepage are `Hero17`, `Clientele8`, `Metrics3`, `Feature28`, `Process4`, `Integration3`, `Cta10`, `Faq6`, plus `Navbar10`/`Footer6` in the layout. To check whether a given block is used, grep `src/views` and `src/app` for its name.

### Image dark/light variants

`src/utils/GetImagePath.tsx` resolves an image value that may be either a plain string or `{ light, dark }` — returning the right one for the current theme mode. Use it rather than picking a path manually.

### Lazy loading below-the-fold sections

`src/components/LazySection.tsx` wraps blocks that aren't immediately visible: it uses an `IntersectionObserver` to `import()` the block module(s) only when the user scrolls near (`offset` rootMargin). The homepage (`default/index.tsx`) is the reference example. Follow this pattern for any new heavy section.

### External data sources

- **Pricing** — fetched client-side at runtime from a GitHub raw JSON file (`raw.githubusercontent.com/phoenixcoded/...`) and merged into the static `pricing` data (`default/index.tsx`).
- **Blog** — served from an external Express backend via `src/lib/blog-api.ts` (base URL `NEXT_PUBLIC_SERVER_DOMAIN`, default `localhost:3000`). Content can be `html`, `markdown`, or legacy `editorjs` block arrays — `blogContentToHtml()` normalizes all three. `/blog/[slug]` is the only dynamic route (server component, awaits `params`).
- **Newsletter** — `POST /api/subscribe` proxies to MailerLite using `MAILERLITE_*` env vars.

### Config + branding

- `src/branding.json` — brand identity (brand name "Storeline", company, social links). This is where the SaasAble template was rebranded.
- `src/path.ts` — central `PAGE_PATH`/`SECTION_PATH`/route constants.
- `src/metadata.ts` — Next Metadata API SEO (uses `branding.json` + `NEXT_PUBLIC_METADATA_BASE`).

## Cross-cutting gotchas

- **Strict CSP** is defined inline in `next.config.mjs` (`script-src`, `style-src`, `img-src`, `connect-src`, `font-src`, `media-src`). **Adding any new external domain for scripts/styles/images/fonts/fetches requires adding it to the CSP header** or the browser will block it.
- **`.env` is committed** (`.gitignore` deliberately keeps `.env*`): `NEXT_PUBLIC_*` (VERSION, PATH, BASE_NAME, METADATA_BASE, SERVER_DOMAIN) and `MAILERLITE_*` (API_KEY, API_ENDPOINT, GROUP).
- **MUI tree-shaking**: `next.config.mjs` uses `modularizeImports` for `@mui/material` and `@mui/lab`. ESLint also forbids deep `@mui/*/*/*` imports (except `@mui/material/test-utils/*`).
- `next/image` only allows `flagcdn.com` as a remote pattern in `next.config.mjs`; other remote images are rendered as `<img>`/Cloudinary URLs.

## Code style

- Prettier: single quotes, `printWidth: 140`, **no trailing commas**, 2-space indent, LF (`.prettierrc`).
- Imports use comment-group headers in this order: `// @next` → `// @third-party` / `// @mui` → `// @project` → `// @data` → `// @types`. Match this when adding imports.
- `@typescript-eslint/no-explicit-any` is `warn` (allowed, discouraged); unused vars (except args) are errors.
