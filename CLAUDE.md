# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

This is a **Vite + React + TypeScript** application built with:
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for styling
- **React Router** for client-side routing
- **TanStack Query** for data fetching and state management
- **React Hook Form** with Zod validation

## Development Commands

- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Structure

### Core Architecture
- **Single-page application** with client-side routing
- **Component-based architecture** with clear separation between UI components and pages
- **Layout-first approach** - all pages wrap with `Layout` component for consistent structure

### Directory Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (buttons, cards, dialogs, etc.)
│   ├── layout/       # Layout components (main Layout wrapper)
│   ├── navigation/   # Navigation components (Navbar)
│   └── sections/     # Page sections (HeroSection, FeaturesSection)
├── pages/            # Route components (Index, Normativas, Estandares, Privacidad, NotFound)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configurations
└── App.tsx           # Main app with routing setup
```

### Key Files
- `App.tsx` - Main application component with React Router setup and global providers
- `components/layout/Layout.tsx` - Main layout wrapper used by all pages
- `components.json` - shadcn/ui configuration with path aliases
- `vite.config.ts` - Vite configuration with @ alias pointing to src/

### Route Structure
- `/` - Home page (Index component)
- `/normativas` - Normativas page
- `/estandares` - Estandares page
- `/privacidad` - Privacy page
- `*` - 404 Not Found page (catch-all route)

**Important**: When adding new routes, add them **above** the catch-all `*` route in App.tsx.

### Component Conventions
- Use **functional components** with TypeScript
- Follow **shadcn/ui patterns** for consistent styling and behavior
- Import UI components from `@/components/ui/`
- Use `@/` path alias for all internal imports
- All pages should wrap content with the `Layout` component

### State Management
- **TanStack Query** for server state and data fetching
- **React Hook Form** with Zod for form validation
- Local component state with useState/useReducer for UI state

### Styling
- **Tailwind CSS** with custom configuration in `tailwind.config.ts`
- **CSS variables** for theming (configured in shadcn/ui setup)
- **Responsive design** patterns using Tailwind breakpoints

## Development Notes

This is a **Lovable.dev project** - changes can be made either locally or through the Lovable web interface. The project uses the `lovable-tagger` plugin in development mode for integration with the Lovable platform.