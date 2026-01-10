# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bakabrod.nu is a Swedish sourdough bread baking website built with React, TypeScript, and Vite. It features a sourdough calculator, baking guides (MDX content), and informational pages about bread.

## Commands

```bash
bun install     # Install dependencies
bun dev         # Start development server
bun run build   # TypeScript check + Vite production build
bun run lint    # ESLint with zero warnings tolerance
bun run preview # Preview production build
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite with MDX support (`@mdx-js/rollup`)
- **Styling**: Tailwind CSS + DaisyUI (retro theme) + @tailwindcss/typography
- **Routing**: react-router-dom v7 (browser router)
- **Analytics**: Google Analytics via react-ga4 (cookie consent required)

## Architecture

- `src/main.tsx` - Router configuration with all routes defined
- `src/App.tsx` - Root layout with Navbar, Footer, cookie consent context
- `src/pages/` - Page components (Home, Calculator, Guides, Contact, AboutBread)
- `src/pages/guide-content/` - MDX guide articles
- `src/components/` - Shared UI components (Navbar, Footer, CookieNotice)
- `src/context/` - React contexts (CookieContext for GDPR consent)
- `src/reducer/` - State reducers (sourdoughReducer for calculator)
- `src/content/` - Additional MDX content

## Key Patterns

- Cookie consent is managed via `CookieContext` and stored in localStorage
- GA is only initialized after cookie consent is given
- MDX files are used for guide content and can be imported as React components
- The Guides page uses wildcard routing (`/guides/*`) for nested guide routes
