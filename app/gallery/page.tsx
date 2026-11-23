"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/gallery/Lightbox";
import { galleryImages, galleryCategories, GalleryImage } from "@/data/gallery";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { Sparkles, Maximize2, Instagram, ArrowRight } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filtered images
  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const currentImage: GalleryImage | null =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev! > 0 ? prev! - 1 : filteredImages.length - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev! < filteredImages.length - 1 ? prev! + 1 : 0
      );
    }
  };

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#FDFBF7]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8E4D8]">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent font-semibold block mb-2">
              Visual Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-primary leading-tight">
              Artistry in <span className="italic font-normal">Every Detail</span>
            </h1>
            <p className="text-xs sm:text-sm text-primary/80 mt-3 font-light leading-relaxed">
              Explore our curated archive of nail architecture, bespoke lash extensions, microshading, and calming sanctuary spaces. Click any image to view in high resolution.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href={siteConfig.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface text-primary border border-[#ded9cb] px-4 py-2.5 rounded-[var(--radius)] text-xs font-sans uppercase font-medium tracking-wider hover:text-accent hover:border-accent transition-colors"
            >
              <Instagram className="w-4 h-4 text-accent" />
              <span>Follow @{siteConfig.socials.instagram.handle}</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedImageIndex(null);
                }}
                className={`text-xs px-4 py-2 rounded-full font-sans uppercase tracking-[0.14em] font-medium shrink-0 transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface/60 text-primary hover:bg-surface hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-[var(--radius)] bg-surface border border-[#ded9cb] break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Aspect ratio container */}
              <div
                className={`relative w-full ${
                  image.aspect === "portrait"
                    ? "aspect-[3/4]"
                    : image.aspect === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Editorial Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-end">
                    <span className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#E8E4D8] font-sans block mb-1">
                      {image.categoryLabel}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-[11px] text-white/80 font-sans tracking-wider uppercase flex items-center gap-1">
                      <span>Click to enlarge & book</span>
                      <ArrowRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          image={currentImage}
          onClose={() => setSelectedImageIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* Bottom Booking Invitation */}
        <Reveal delay={0.2}>
          <div className="mt-28 p-8 sm:p-14 bg-surface rounded-[var(--radius)] border border-[#ded9cb] text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
              Like What You See?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-primary font-medium">
              Schedule Your Own Transformation
            </h3>
            <p className="text-xs sm:text-sm text-primary/80 max-w-md mx-auto leading-relaxed">
              Book a bespoke treatment directly in our Google Calendar or send reference photos via WhatsApp for a personalized quotation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button href="/book" size="lg" variant="primary">
                BOOK APPOINTMENT
              </Button>
              <Button
                href={getWhatsAppBookingUrl()}
                isExternal
                size="lg"
                variant="outline"
              >
                INQUIRE ON WHATSAPP
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
