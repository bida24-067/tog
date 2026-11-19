export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  prefix?: string;
  duration?: string;
  note?: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "nails",
    title: "Nails",
    slug: "nails",
    description: "Flawless overlays, custom extensions, and intricate nail art tailored to your individual style.",
    items: [
      { id: "nail-art", name: "Nail Art", price: "P5-50" },
      { id: "stick-ons", name: "Stick-ons", price: "P200" },
      { id: "gel-overlay-rubberbase", name: "Gel Overlay (Rubberbase)", price: "P180" },
      { id: "gel-extensions-short-med", name: "Gel Extensions/Tips (short/medium)", price: "P250", featured: true },
      { id: "gel-extensions-long", name: "Gel Extensions (long)", price: "P350" },
      { id: "acrylic-extensions", name: "Acrylic Extensions", price: "P350" },
      { id: "ombre-nails", name: "Ombre Nails", price: "P350" },
      { id: "chrome-nails", name: "Chrome Nails", price: "P300" },
      { id: "french-manicure", name: "French Manicure", price: "P300" },
      { id: "gel-overlay-reinforcement", name: "Gel Overlay & Reinforcement", price: "P250" },
      { id: "sculpting-polygel", name: "Sculpting (Polygel)", price: "P250", prefix: "From" },
      { id: "nail-repair", name: "Nail Repair (per nail)", price: "P20" },
      { id: "colour-change-shape", name: "Colour Change & Shape", price: "P150", prefix: "From" },
      { id: "refill", name: "Refill", price: "P180", prefix: "From" },
      { id: "soak-off", name: "Soak off", price: "P50", prefix: "From" },
      { id: "men-buff-shine", name: "Men Buff & Shine", price: "P150" },
    ],
  },
  {
    id: "mani-pedi",
    title: "Manicure & Pedicure",
    slug: "manicure-pedicure",
    description: "Restorative hand and foot therapies that nourish the skin and refine nails with lasting polish.",
    items: [
      { id: "pedicure-full-service", name: "Pedicure (Soak, Scrub, Cuticle, Exfoliate, Massage)", price: "P250" },
      { id: "full-pedicure-gel", name: "Full Pedicure with Gel Overlay", price: "P350" },
      { id: "pedicure-tips-extensions", name: "Pedicure Tips Extensions Gel", price: "P250" },
      { id: "gel-overlay-toes", name: "Gel Overlay on toes (Cuticle, Nail Trim, Buff, Gel)", price: "P150" },
      { id: "pedicure-tips-sculpting", name: "Pedicure Tips/Sculpting", price: "P250", prefix: "From" },
      { id: "paraffin-wax-pedicure", name: "Paraffin Wax Pedicure", price: "P400" },
    ],
  },
  {
    id: "facials",
    title: "Facials",
    slug: "facials",
    description: "Targeted skincare treatments designed to purify, hydrate, and restore your skin's natural glow.",
    items: [
      { id: "deep-cleanse", name: "Deep cleanse", price: "P300", featured: true },
      { id: "skin-tag", name: "Skin Tag Removal", price: "[TBC - Request Quote]", note: "Featured in salon header, price TBC" },
    ],
  },
  {
    id: "brows",
    title: "Semi-Permanent Brows",
    slug: "semi-permanent-brows",
    description: "Expert microshading technique creating beautifully framed, natural-looking brows that endure.",
    items: [
      { id: "microshading", name: "Microshading", price: "P2000", featured: true },
      { id: "microshading-retouch", name: "Re-touch (3 Months) Once-off", price: "P1000" },
    ],
  },
  {
    id: "lashes",
    title: "Eye Lashes",
    slug: "eye-lashes",
    description: "Lightweight, fluttery lash extensions and delicate tinting to accentuate your eyes.",
    items: [
      { id: "lash-singles", name: "Eye Lash extension singles", price: "P400", prefix: "From" },
      { id: "lash-knots", name: "Eye Lash extension knots", price: "P300" },
      { id: "lash-removal", name: "Eye Lash removal", price: "P100" },
      { id: "brow-tint", name: "Brow Tint", price: "P100" },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    slug: "waxing",
    description: "Gentle, hygienic waxing using premium wax formulations for smooth, radiant skin.",
    items: [
      { id: "eyebrow-wax", name: "Eyebrow wax", price: "P70" },
      { id: "lip-chin-wax", name: "Lip/Chin", price: "P60" },
      { id: "half-arm-wax", name: "Half arm wax", price: "P120" },
      { id: "half-leg-wax", name: "Half leg wax", price: "P150" },
      { id: "full-leg-wax", name: "Full Leg wax", price: "P200" },
      { id: "underarm-wax", name: "Underarm wax", price: "P150" },
      { id: "bikini-line-wax", name: "Bikini line wax", price: "P150" },
      { id: "brazilian-wax", name: "Brazilian wax", price: "P250" },
    ],
  },
  {
    id: "makeup",
    title: "Make up",
    slug: "makeup",
    description: "Flawless glam for every occasion, from polished day looks to breathtaking bridal artistry.",
    items: [
      { id: "everyday-makeup-lashes", name: "Everyday Makeup (with lashes)", price: "P450" },
      { id: "everyday-makeup-no-lashes", name: "Everyday Makeup (without lashes)", price: "P400" },
      { id: "bridal-makeup", name: "Bridal", price: "Request for Quote" },
    ],
  },
  {
    id: "massages",
    title: "Massages",
    slug: "massages",
    description: "Therapeutic and relaxing body rituals using heated stones, deep pressure, and soothing techniques.",
    items: [
      { id: "back-neck-massage", name: "Back & Neck Massage", price: "P250", duration: "30 mins" },
      { id: "deep-tissue-massage", name: "Deep Tissue Massage", price: "P450", duration: "1 Hr" },
      { id: "swedish-full-body", name: "Swedish Full body", price: "P400", duration: "1 Hr" },
      { id: "hot-stone-full-body", name: "Hot Stone Full body", price: "P550", duration: "1 Hr", featured: true },
      { id: "hot-stone-half-body", name: "Hot Stone Half body", price: "P250", duration: "30 mins" },
      { id: "neck-shoulder-head", name: "Neck, Shoulder, Head", price: "P150", duration: "30 mins" },
      { id: "foot-massage", name: "Foot Massage", price: "P120", duration: "30 mins" },
    ],
  },
];
