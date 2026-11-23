"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const teaserImages: GalleryItem[] = [
  {
    id: 1,
    title: "Minimalist French Overlay",
    category: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Lash Extension Artistry",
    category: "Lashes",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Radiant Facial Care",
    category: "Facials",
    image: "https://images.unsplash.com/photo-1512290900672-1f0230268578?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Relaxing Sanctuary Atmosphere",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Warm Stone Massage Therapy",
    category: "Massage",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Pure Botanical Care",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=600&q=80",
  },
];

export const GalleryTeaser: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E8E4D8]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E4D8]">
          <Reveal>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
              Visual Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-primary leading-tight">
              Life inside{" "}
              <span className="italic block sm:inline font-normal">the sanctuary</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-medium tracking-[0.16em] text-accent hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@{siteConfig.socials.instagram.handle}</span>
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-sans font-medium tracking-[0.16em] text-primary hover:text-accent transition-colors group"
              >
                <span>ALL PHOTOS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* 6-image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {teaserImages.map((img, idx) => (
            <Reveal key={img.id} delay={idx * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-[var(--radius)] bg-surface border border-[#ded9cb]">
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-white">
                  <span className="text-[9px] uppercase tracking-widest text-[#E8E4D8] font-sans">
                    {img.category}
                  </span>
                  <p className="font-serif text-sm sm:text-base text-white font-medium">
                    {img.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GalleryTeaser;
