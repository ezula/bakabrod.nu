# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bakabrod.nu is a Swedish sourdough bread baking website built with Next.js 15 and deployed on Cloudflare Workers via OpenNext. It features a sourdough calculator, baking guides, and informational pages about bread.

## Commands

```bash
bun install      # Install dependencies
bun dev          # Start Next.js development server (with Turbopack)
bun run build    # Next.js production build
bun run lint     # Biome linter
bun run lint:fix # Biome auto-fix
bun run preview  # Build and preview with OpenNext/Cloudflare
bun run deploy   # Build and deploy to Cloudflare Workers
```

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19 and TypeScript
- **Deployment**: Cloudflare Workers via `@opennextjs/cloudflare`
- **Styling**: Tailwind CSS + DaisyUI (retro theme) + @tailwindcss/typography
- **Linting**: Biome
- **Analytics**: Google Analytics via react-ga4 (cookie consent required)

## Architecture

- `app/` - Next.js App Router pages with file-based routing
  - `app/layout.tsx` - Root layout with Navbar, Footer, Analytics provider
  - `app/page.tsx` - Homepage
  - `app/calculator/` - Sourdough calculator
  - `app/recept/` - Recipe listing and individual recipe pages
  - `app/guides/` - Guide pages with shared layout
  - `app/contact/`, `app/aboutbread/` - Static content pages
  - `app/sitemap.ts` - Dynamic sitemap generation
  - `app/robots.ts` - Robots.txt generation
- `components/` - React components (client and server)
- `lib/` - Utility functions and data
  - `lib/sourdoughReducer.ts` - Calculator state management
  - `lib/recipes/` - Recipe data and types
- `public/` - Static assets

## Key Patterns

- SEO: Each page exports `metadata` for title, description, Open Graph
- JSON-LD structured data added via `<script type="application/ld+json">`
- Cookie consent managed via `AnalyticsProvider` context, stored in localStorage
- GA only initialized after user consent
- Client components marked with `'use client'` directive

## Cloudflare Configuration

- `wrangler.jsonc` - Cloudflare Workers config
- `open-next.config.ts` - OpenNext adapter config
- Requires `nodejs_compat` compatibility flag

## Adding Recipes

Recipes are stored as TypeScript data in `lib/recipes/`. To add a new recipe:

1. Create a new file in `lib/recipes/`, e.g., `focaccia.ts`
2. Export a `Recipe` object (see `klassiskt-surdegsbrod.ts` for example)
3. Import and add to the `recipes` array in `lib/recipes/index.ts`

Recipe schema (JSON-LD) is automatically generated for Google rich snippets. Required fields:
- `slug` - URL-friendly identifier
- `name`, `description` - Title and summary
- `prepTime`, `cookTime` - In minutes
- `yields` - e.g., "1 stort bröd"
- `difficulty` - 'lätt' | 'medel' | 'avancerad'
- `ingredients` - Array of { amount, unit, name }
- `steps` - Array of { title?, description, duration? }

Optional: `image`, `restTime`, `tips`, `hydration`, `saltPercentage`, `starterPercentage`
