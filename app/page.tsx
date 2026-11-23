import React from "react";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BrandStatement from "@/components/sections/BrandStatement";
import Highlights from "@/components/sections/Highlights";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import LocationHours from "@/components/sections/LocationHours";
import ClosingCta from "@/components/sections/ClosingCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Welcome Line */}
      <Welcome />

      {/* 3. Explore Services Category Cards */}
      <ServicesGrid />

      {/* 4. Brand Statement */}
      <BrandStatement />

      {/* 5. Highlights Strip (Signature Treatments with Prices) */}
      <Highlights />

      {/* 6. Gallery Teaser (6-Image Grid) */}
      <GalleryTeaser />

      {/* 7. Location and Hours */}
      <LocationHours />

      {/* 8. Closing Invitation */}
      <ClosingCta />
      
      {/* 9. Footer is rendered globally via app/layout.tsx */}
    </>
  );
}
