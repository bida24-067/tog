# Design System

> Reference: bohohairsalon.com (Squarespace site). Observed design language is below. Exact font names and animation values must be filled from the **Extraction Checklist** at the bottom, since they cannot be read from page text alone.

## Observed design language (from the reference)
- Transparent header over a **full-bleed hero photo**; small centred/left logo; slide-in or folder-style menu with a prominent **"BOOK YOUR EXPERIENCE"** button.
- **Mixed roman + italic headlines:** a statement in upright type, with the emotional phrase in *italic* (e.g. "Explore our services *each one tailored around you.*"). Replicate this pattern with TOG's own copy.
- Hero headline is a short, italic, lifestyle line.
- **Uppercase CTAs with a trailing arrow** (e.g. "LET'S GET YOU IN >", "MORE ABOUT >").
- Generous whitespace; large image blocks; few words per section.
- Large image-led service cards linking to sub-pages.
- Locations block with hours listed plainly.
- Warm, soft brand-statement section with a logo mark and one sentence.
- Closing invitation section ("Come sit with us. You are in the right place.") before a minimal footer (social, privacy, terms).

## Colors (supplied by project owner)
| Token | Hex | Use |
|---|---|---|
| `--color-bg` | #FFFFFF | Page background |
| `--color-surface` | #E8E4D8 | Cards, sections |
| `--color-ink` | #00000 | Body text |
| `--color-primary` | #5D232C | Headlines, key accents |
| `--color-accent` | #992A38 | CTAs, hover |
| `--color-muted` | #992A38 | Captions, dividers |
Rules: define as CSS variables only. Never hard-code hex values in components. Check text contrast (WCAG AA).

## Typography
| Role | Font | Notes |
|---|---|---|
| Display / headlines | Playfair Display (Google Font approximation) – actual site uses IvyOra Display | Likely an elegant serif with italic cut |
| Body / UI | Playfair Display (Google Font approximation) – actual site uses IvyOra Display | Clean sans |
| Buttons / nav | Inter (Google Font approximation) | Uppercase, letter-spaced |
If the exact licensed font is unavailable, pick the closest **Google Font** match and record it here. Use `next/font` or `font-display: swap`.

Type scale (fluid, using `clamp()`): H1 hero, H2 section, H3 card, body 16-18px, caption 12-13px. Line-height body 1.6, headings 1.05-1.2. Uppercase buttons: letter-spacing 0.12-0.2em.

## Layout
- Max content width 1280px; side padding 20px mobile, 48px+ desktop
- 12-col grid desktop, single column mobile
- Section vertical padding: 80px mobile, 140px+ desktop
- Corners: 4px (soft radius)

## Components
Header (transparent to solid on scroll), Menu overlay, Button (primary/ghost, arrow), Hero, Service category card, Price list row (name ... dotted leader ... price), Gallery grid, Hours block, Footer, WhatsApp floating button.

### Price row spec
`Service name` + dotted leader + `Pxxx`, right-aligned prices, "From" prefix shown in muted small caps. Group by category with a serif heading.

## Imagery
Use licensed/placeholder images (Unsplash) until real salon photos are provided. Consistent warm grading. All images need alt text, `loading="lazy"` except the hero.

## Extraction Checklist (project owner does this once; paste results below)
Open bohohairsalon.com in Chrome, right click an element, **Inspect**, then:
1. Select the hero headline: **Computed** tab, copy `font-family`, `font-size`, `font-weight`, `font-style`, `letter-spacing`, `line-height`.
2. Repeat for: body text, nav links, button text, section headings.
3. **Network tab > Font** filter: note the font file names.
4. Take full-page screenshots at 375px and 1440px widths.
5. Screen-record scrolling the whole homepage and opening the menu (shows animations).
Paste results here:
```
HERO H1: 
H2: 
BODY: 
NAV: 
BUTTON: 
FONT FILES: 
```
