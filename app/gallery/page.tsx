import React from "react";
import Container from "@/components/ui/Container";

export default function GalleryPage() {
  return (
    <div className="pt-36 pb-24">
      <Container>
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
          The Gallery
        </h1>
        <p className="text-sm text-primary/80 max-w-lg mb-12">
          A showcase of our bespoke nails, brows, lashes, and artistry. Full masonry layout and interactive lightbox will be loaded in Phase 4.
        </p>
        <div className="p-12 border-2 border-dashed border-[#ded9cb] rounded-[var(--radius)] text-center text-sm text-primary/60">
          [Gallery Grid & Lightbox Placeholder — Scheduled for Phase 4]
        </div>
      </Container>
    </div>
  );
}
