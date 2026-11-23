export interface GalleryImage {
  id: string;
  title: string;
  category: "nails" | "lashes-brows" | "pedicure" | "massage" | "facials" | "atmosphere";
  categoryLabel: string;
  aspect: "square" | "portrait" | "landscape";
  src: string;
  alt: string;
  serviceId?: string;
}

export const galleryCategories = [
  { id: "all", label: "All Works" },
  { id: "nails", label: "Nails" },
  { id: "lashes-brows", label: "Lashes & Brows" },
  { id: "pedicure", label: "Pedicure" },
  { id: "massage", label: "Massages" },
  { id: "facials", label: "Facials" },
  { id: "atmosphere", label: "Sanctuary" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    title: "Minimalist Nude Gel Overlay",
    category: "nails",
    categoryLabel: "Nails",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
    alt: "Minimalist nude gel overlay nails at Touch Of Glow",
    serviceId: "gel-overlay-rubberbase",
  },
  {
    id: "g2",
    title: "Precision Microshading & Brow Tint",
    category: "lashes-brows",
    categoryLabel: "Lashes & Brows",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=85",
    alt: "Precision microshading brows and natural lash styling",
    serviceId: "microshading",
  },
  {
    id: "g3",
    title: "Volcanic Hot Stone Therapy",
    category: "massage",
    categoryLabel: "Massages",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm basalt stones full body massage treatment",
    serviceId: "hot-stone-full-body",
  },
  {
    id: "g4",
    title: "French Ombre Polygel Extensions",
    category: "nails",
    categoryLabel: "Nails",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    alt: "French ombre polygel extensions",
    serviceId: "ombre-nails",
  },
  {
    id: "g5",
    title: "Deep Cleanse Hydrating Facial",
    category: "facials",
    categoryLabel: "Facials",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    alt: "Deep cleanse facial therapy treatment",
    serviceId: "deep-cleanse",
  },
  {
    id: "g6",
    title: "Restorative Paraffin Foot Therapy",
    category: "pedicure",
    categoryLabel: "Pedicure",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1519014816548-bf785179c2ff?auto=format&fit=crop&w=1200&q=85",
    alt: "Restorative paraffin pedicure foot soak and massage",
    serviceId: "paraffin-wax-pedicure",
  },
  {
    id: "g7",
    title: "Classic Single Lash Enhancements",
    category: "lashes-brows",
    categoryLabel: "Lashes & Brows",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1512290900672-1f0230268578?auto=format&fit=crop&w=1200&q=85",
    alt: "Classic single lash extension styling",
    serviceId: "lash-singles",
  },
  {
    id: "g8",
    title: "Serene Private Treatment Room",
    category: "atmosphere",
    categoryLabel: "Sanctuary",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    alt: "Touch Of Glow private salon sanctuary interior",
  },
  {
    id: "g9",
    title: "Aromatherapy Full Body Ritual",
    category: "massage",
    categoryLabel: "Massages",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85",
    alt: "Full body Swedish massage and relaxation",
    serviceId: "swedish-full-body",
  },
  {
    id: "g10",
    title: "Chrome Mirror Glazed Tips",
    category: "nails",
    categoryLabel: "Nails",
    aspect: "square",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    alt: "Chrome mirror glazed tips at Touch Of Glow",
    serviceId: "chrome-nails",
  },
  {
    id: "g11",
    title: "Botanical Skin Rejuvenation",
    category: "facials",
    categoryLabel: "Facials",
    aspect: "portrait",
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=85",
    alt: "Botanical serum application and facial massage",
    serviceId: "deep-cleanse",
  },
  {
    id: "g12",
    title: "Calming Lounge & Consultation Area",
    category: "atmosphere",
    categoryLabel: "Sanctuary",
    aspect: "landscape",
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85",
    alt: "Touch Of Glow lounge and hospitality space",
  },
];
