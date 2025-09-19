# Repository Guidelines

## Project Structure & Module Organization
- Nuxt 2 app with static generation. Key dirs: `pages/` (routes), `components/` (UI, PascalCase), `layouts/`, `plugins/`, `middleware/`, `assets/`, `static/`, `store/`.
- Config lives in `nuxt.config.js`. Netlify deploy config: `netlify.toml` (publishes `dist/`). Tailwind and SCSS tokens in `tailwind.config.js` and `assets/scss/_gorko.scss`.

## Build, Test, and Development Commands
- `npm run dev` — start local dev server (hot reload).
- `npm run build` — production build (SSR-compatible).
- `npm run start` — serve the production build (SSR).
- `npm run generate` — generate static site to `dist/` (used by Netlify).

## Coding Style & Naming Conventions
- Indentation: 2 spaces, LF endings, UTF-8 (`.editorconfig`). Trim trailing whitespace; keep final newline.
- Vue SFCs use `<script>` and `<template>` with PascalCase filenames in `components/` (e.g., `SiteHeader.vue`). Route files in `pages/` determine URLs (kebab-case where appropriate).
- Prefer Tailwind utility classes; avoid inline styles. Keep shared tokens in `assets/scss/_gorko.scss`.

## Testing Guidelines
- No automated test runner is configured. Validate changes by:
  - Running `npm run dev` and exercising modified pages/routes.
  - Building with `npm run generate` to catch compile/static generation errors (Sanity data required).
- For new complex logic, add lightweight unit tests (e.g., Jest) colocated under `__tests__/` or adjacent `*.spec.js` and update this guide accordingly.

## Commit & Pull Request Guidelines
- Commit messages in history are short and descriptive (no strict Conventional Commits). Use imperative, present-tense subjects under ~50 chars.
  - Example: "Update homepage hero video"
- PRs: include a summary, linked issue (if any), and screenshots for UI changes. Confirm `npm ci && npm run generate` succeeds locally. Note any content schema changes needed in Sanity.

## Security & Configuration Tips
- Sanity: reads from project `lwnx6aqb` (`dataset: production`). Set `SANITY_READ_TOKEN` in your environment for draft/preview when needed. Do not commit secrets.
- Netlify: deploys via `npm run generate`; output is `dist/`. Security headers are merged by `@aceforth/nuxt-netlify` and `netlify.toml`.
