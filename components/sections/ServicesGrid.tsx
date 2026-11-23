"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const categories: CategoryCard[] = [
  {
    id: "nails",
    title: "Nail Care & Extensions",
    subtitle: "Overlays, Polygel, Acrylics & Bespoke Art",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    link: "/services#nails",
  },
  {
    id: "mani-pedi",
    title: "Manicure & Pedicure",
    subtitle: "Restorative Paraffin, Exfoliation & Foot Massage",
    image: "https://images.unsplash.com/photo-1519014816548-bf785179c2ff?auto=format&fit=crop&w=800&q=80",
    link: "/services#manicure-pedicure",
  },
  {
    id: "lashes-brows",
    title: "Lashes & Brows",
    subtitle: "Precision Microshading, Lash Singles & Brow Tints",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80",
    link: "/services#semi-permanent-brows",
  },
  {
    id: "facials",
    title: "Facial Therapy",
    subtitle: "Deep Cleanse & Skin Rejuvenation",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    link: "/services#facials",
  },
  {
    id: "massage",
    title: "Therapeutic Massages",
    subtitle: "Hot Stone, Deep Tissue & Full Body Rituals",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    link: "/services#massages",
  },
  {
    id: "waxing-makeup",
    title: "Waxing & Makeup",
    subtitle: "Smooth Waxing & Flawless Everyday or Bridal Glam",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    link: "/services#waxing",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <Container>
        {/* Section Header with Roman + Italic split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E4D8]">
          <Reveal>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
              Our Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-primary leading-tight">
              Explore our services{" "}
              <span className="italic block sm:inline font-normal">
                each one tailored around you.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase font-sans font-medium tracking-[0.16em] text-primary hover:text-accent transition-colors mt-4 md:mt-0 group"
            >
              <span>VIEW FULL PRICE LIST</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 6 Category Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {categories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.1}>
              <Link
                href={cat.link}
                className="group block relative overflow-hidden rounded-[var(--radius)] bg-surface border border-[#ded9cb]/60 transition-all duration-500 hover:shadow-xl"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#E8E4D8] font-sans font-medium mb-1">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2 leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 mb-4 font-light leading-relaxed">
                      {cat.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-sans text-[#E8E4D8] group-hover:text-white transition-colors">
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesGrid;
