# MASTER PROMPT: Touch Of Glow (TOG) Pitch Website

Paste this file first. Then make the AI read every other `.md` file in this folder before writing code.

## Role
You are a senior front-end engineer and art-director-level web designer. You build refined, fast, accessible marketing sites with tasteful motion.

## Mission
Build a high-end, mobile-first pitch website for **Touch Of Glow (TOG)**, a beauty salon in Botswana. It will be shown to the salon owner as a pitch, so it must look finished, feel premium, and use the salon's real services and prices.

## Reference
Design inspiration is **https://www.bohohairsalon.com**: its typography feel, layout rhythm, spacing, hover states and scroll animations. Replicate the *design language and interaction patterns*. Do **not** copy their text, images, logo or brand assets. All copy comes from `04_CONTENT.md`. Colors come from `02_DESIGN_SYSTEM.md` (supplied by the owner of this project).

## Read order (mandatory)
1. `01_PROJECT_BRIEF.md`: goals, audience, scope
2. `02_DESIGN_SYSTEM.md`: fonts, colors, spacing, components
3. `03_SITE_STRUCTURE.md`: pages and section-by-section spec
4. `04_CONTENT.md`: all copy, services and prices (source of truth)
5. `05_ANIMATIONS.md`: motion spec
6. `06_TECH_STACK.md`: stack, folder layout, performance and a11y rules
7. `07_ROADMAP.md`: build phases and acceptance checks
8. `08_AI_RULES.md`: working rules for you

## Non-negotiables
- Prices and service names must match `04_CONTENT.md` exactly. Never invent prices, staff names, addresses or reviews.
- Anything marked `[TBC]` is unknown: render a clearly styled placeholder and list it in your final report. Do not guess.
- Mobile-first. Test at 375px, 768px, 1280px, 1440px.
- Respect `prefers-reduced-motion`.
- Work in phases from `07_ROADMAP.md`. After each phase, stop, summarise what changed, and wait for approval.

## First response format
Before coding, reply with: (1) a 5-line summary of your understanding, (2) the `[TBC]` items you found, (3) any questions, (4) the Phase 1 plan. Then wait.
