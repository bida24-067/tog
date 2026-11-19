# Animations & Motion

Goal: match the reference's calm, editorial, luxury feel. Motion is slow, eased and subtle, never bouncy or flashy.

> Exact timings for the reference are [TBC]: fill from the screen recording (see `02_DESIGN_SYSTEM.md` extraction checklist). Defaults below apply until then.

## Principles
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutExpo-like)
- Durations: micro 200-300ms, reveals 700-1000ms, page transitions 600-800ms
- Animate only `transform` and `opacity`
- Always provide a `prefers-reduced-motion` fallback (no transforms, instant fades)

## Patterns
| Pattern | Behaviour |
|---|---|
| Smooth scroll | Lenis (or native `scroll-behavior`), lerp ~0.1 |
| Header | Transparent to solid + blur after 80px; hides on scroll down, shows on scroll up |
| Menu overlay | Clip-path or fade in; links stagger in (60ms apart), slide up 24px |
| Hero | Image slow scale 1.08 to 1 over 1.6s on load; headline fades up with line-by-line mask reveal |
| Headline reveals | Split lines; each line translateY(100%) to 0 inside overflow-hidden wrapper |
| Section reveals | Fade up 24px when 20% in view, once |
| Image reveals | Clip-path inset reveal or slight scale 1.1 to 1 on enter; subtle parallax (max 8%) |
| Cards | Image zoom 1.05 on hover (600ms), arrow nudges 6px right |
| Buttons | Underline or fill sweeps in from left on hover (300ms) |
| Price rows | Fade in with 40ms stagger on category enter |
| WhatsApp FAB | Fades in after first scroll; gentle pulse once |
| Page transitions | Short fade/slide between routes |

## Performance
No layout-shifting animations. Lazy-init animation libs. Disable parallax on touch devices if it janks.
