# Andrew Lefkowitz — Personal/Professional Website

## Project Overview
Personal brand website for Andrew Lefkowitz — lawyer-turned-biotech CEO. Premium executive aesthetic.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Database:** PostgreSQL via `pg` (node-postgres)
- **Deployment:** Vercel
- **Language:** TypeScript

## Design Direction
- **Aesthetic:** Premium executive / law & business leader personal brand
- **Color Palette:** Deep navy (`#0A1628`) + warm gold (`#C9A84C`) + off-white (`#F5F0E8`) + light stone (`#E8E0D0`)
- **Typography:** Google Fonts — `Playfair Display` (headings) + `Inter` (body)
- **Feel:** Bloomberg Businessweek meets white-shoe law firm — sophisticated, clean, confident

## Database
Single `DATABASE_URL` environment variable for PostgreSQL connection (Neon/Supabase/Railway).

## Content
All content is sourced from the original site and preserved verbatim (with "degree in degree" → "a degree" fix).

## Key Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Lint check
```

## Project Structure
```
src/
  app/
    layout.tsx       # Root layout with fonts
    page.tsx         # Home page (hero + stats + timeline + about + contact)
    globals.css      # Global styles + Tailwind
    api/
      contact/
        route.ts     # Contact form API endpoint (saves to PostgreSQL)
  components/
    Header.tsx       # Fixed nav header
    Hero.tsx         # Hero section with background image
    Stats.tsx        # Key achievement stats cards
    About.tsx        # Bio section with timeline
    Timeline.tsx     # Career timeline
    Education.tsx    # Education section
    Contact.tsx      # Contact form
    Footer.tsx       # Footer
  lib/
    db.ts            # PostgreSQL connection pool
public/
  images/
    hero-bg.jpg      # Hero background
    about-bg.jpg     # Contact section background
```
