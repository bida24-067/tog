# Tech Stack & Standards

> Suggested defaults. Tell the AI if your service prefers something else (e.g. plain HTML/CSS/JS).

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS with CSS variables from the design system
- Framer Motion (component animation) + Lenis (smooth scroll); GSAP only if needed for text-split reveals
- Deployment: Vercel (static export is fine)
- Icons: lucide-react

## Folder structure
```
/app
  layout.tsx, page.tsx
  /services /gallery /about /book
/components
  /ui (Button, Container, Reveal, PriceRow)
  /sections (Hero, ServicesGrid, BrandStatement, Highlights, GalleryTeaser, Location, ClosingCta)
  Header.tsx, MenuOverlay.tsx, Footer.tsx, WhatsAppFab.tsx
/data
  services.ts   // typed from 04_CONTENT.md
  site.ts       // contact, hours, socials
/styles
  tokens.css    // colors, type scale
/public/images
```

## Data
Services live in `data/services.ts` as typed objects: `{ category, items: [{ name, price, prefix?, note? }] }`. UI renders from data only. No hard-coded prices in components.

## Booking
`https://wa.me/267XXXXXXXX?text=<encoded message>` using the first WhatsApp number in `04_CONTENT.md`.

## Quality bars
- Semantic HTML, one H1 per page, skip link, visible focus states
- Contrast AA, tap targets 44px+
- Images via `next/image`, WebP/AVIF, explicit sizes
- SEO: title, meta description, OG tags, LocalBusiness JSON-LD (fill [TBC] fields later)
- No console errors; ESLint and TypeScript clean
