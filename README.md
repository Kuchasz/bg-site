# Bartosz Grubka - Triathlon Coaching Website

Personal website for Bartosz Grubka, professional triathlon coach and extreme triathlon athlete.

## Features

- Responsive design optimized for mobile and desktop
- Hero section with video background
- Training plans showcase
- Biography and achievements
- Competition results
- Contact information
- Social media integration (Strava, Instagram, Facebook, YouTube)

## Project Structure

```
src/
  app/
    layout.tsx    # Root layout with metadata and fonts
    page.tsx      # Homepage with all sections
  styles/
    globals.css   # Global styles and Tailwind
public/
  photos/         # Image assets
  videos/         # Video assets
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm preview` - Build and start production server
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format:check` - Check code formatting
- `pnpm format:write` - Fix code formatting
