import React from "react";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    description: siteConfig.description,
    url: "https://touchofglow.bw",
    telephone: siteConfig.contact.primaryPhone,
    priceRange: "P20 - P2000",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.location.mall}, ${siteConfig.location.shop}, ${siteConfig.location.floor}`,
      addressLocality: siteConfig.location.city,
      addressCountry: "BW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -24.6469, // Gaborone Molapo Crossing coordinates
      longitude: 25.8978,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      siteConfig.socials.instagram.url,
      siteConfig.socials.facebook.url,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salon Treatments",
      itemListElement: servicesData.map((cat, idx) => ({
        "@type": "OfferCatalog",
        name: cat.title,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: cat.items.length,
        itemListElement: cat.items.slice(0, 5).map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.name,
            description: cat.description,
          },
          price: item.price.replace(/[^0-9]/g, "") || "100",
          priceCurrency: "BWP",
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
