# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses **pnpm**:

- `pnpm dev` - Dev server at localhost:4321
- `pnpm build` - Type check + build to `./dist/`
- `pnpm preview` - Preview production build

## Architecture

Astro personal website with Tailwind CSS v4.

### Content

Astro Content Collections in `src/content.config.ts`:
- `meta` collection loads `src/meta/*.md` (requires `title` frontmatter)
- Dynamic route `src/pages/[id].astro` renders via `getStaticPaths()`

### Assets

Vercel Blob storage for images:
- Uses `@vercel/blob` `head()` function
- Requires `BLOB_READ_WRITE_TOKEN` env var

### Styling

Tailwind v4 in `src/styles/global.css`:
- `@theme` directive for design tokens (colors, typography, spacing)
- Fluid typography with `clamp()`
- Dark mode via `prefers-color-scheme`
- No tailwind.config - uses Vite plugin in `astro.config.mjs`

### Path Aliases

- `@components/*` → `./src/components/*`
- `@layouts/*` → `./src/layouts/*`
- `@pages/*` → `./src/pages/*`

### Layout

`src/layouts/index.astro`:
- 12-col grid desktop, 3-row layout (header/main/footer)
- Content spans cols 3-11 (desktop), 5-9 (2xl)
- German language (`lang="de"`)

### Code Style

Prettier: no semicolons, single quotes, 2-space indent, ES5 trailing commas
