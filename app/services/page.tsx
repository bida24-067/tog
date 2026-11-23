"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PriceRow from "@/components/ui/PriceRow";
import Reveal from "@/components/ui/Reveal";
import { servicesData } from "@/data/services";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { Sparkles, Calendar, MessageCircle, Search } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("nails");
  const [searchFilter, setSearchFilter] = useState<string>("");

  // Smooth scroll to anchor on category click
  const scrollToCategory = (slug: string) => {
    setActiveCategory(slug);
    const element = document.getElementById(slug);
    if (element) {
      const yOffset = -140; // account for sticky header & subnav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const cat of servicesData) {
        const el = document.getElementById(cat.slug);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(cat.slug);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered categories and items if search query is entered
  const displayedCategories = servicesData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchFilter.toLowerCase())
      ),
    }))
    .filter((cat) => (searchFilter ? cat.items.length > 0 : true));

  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#FDFBF7]">
      <Container>
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent font-semibold block mb-2">
            The Treatment Menu
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-primary leading-tight mb-4">
            Services & Transparent{" "}
            <span className="italic font-normal">Pricing</span>
          </h1>
          <p className="text-xs sm:text-sm text-primary/80 leading-relaxed font-light max-w-xl">
            From intricate nail architecture and restorative pedicures to semi-permanent microshading and therapeutic hot stone massage. Every service is priced clearly in Botswana Pula (P).
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-primary/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Gel, Wax, Massage)..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-[var(--radius)] border border-[#ded9cb] focus:outline-none focus:border-accent bg-white shadow-sm font-sans"
            />
          </div>
        </div>

        {/* Sticky Category Sub-Navigation */}
        <div className="sticky top-[72px] sm:top-[88px] z-30 bg-[#FDFBF7]/95 backdrop-blur-md py-3.5 border-y border-[#E8E4D8] -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 mb-14">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none max-w-[1280px] mx-auto">
            {servicesData.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.slug)}
                  className={`text-xs px-4 py-2 rounded-full font-sans uppercase tracking-[0.14em] font-medium shrink-0 transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface/60 text-primary hover:bg-surface hover:text-accent"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories & Price Lists */}
        <div className="space-y-20 sm:space-y-24">
          {displayedCategories.map((category) => (
            <section
              key={category.id}
              id={category.slug}
              className="scroll-mt-44 pt-4 border-t border-[#E8E4D8]/80 first:border-none"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-primary/10 gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-accent font-semibold block mb-1">
                    Sanctuary Collection
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-primary font-medium">
                    {category.title}
                  </h2>
                </div>
                <p className="text-xs text-primary/75 max-w-md font-light leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Price Rows Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-1">
                {category.items.map((item) => (
                  <PriceRow key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Booking & WhatsApp Invitation Banner */}
        <Reveal delay={0.2}>
          <div className="mt-28 p-8 sm:p-14 bg-surface rounded-[var(--radius)] border border-[#ded9cb] text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-accent shadow-sm border border-primary/10">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                Effortless Scheduling
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-primary font-medium">
                Reserve Your Appointment Today
              </h3>
              <p className="text-xs sm:text-sm text-primary/80 max-w-md mx-auto leading-relaxed">
                Choose online scheduling synced with the store Google Calendar, or message our salon reception directly via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                href="/book"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
              >
                BOOK APPOINTMENT
              </Button>
              <Button
                href={getWhatsAppBookingUrl()}
                isExternal
                size="lg"
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>CHAT ON WHATSAPP</span>
              </Button>
            </div>

            <div className="pt-6 border-t border-primary/15 text-[11px] text-primary/60 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>Molapo Crossing Mall, Shop 53B, 1st Floor, Gaborone</p>
              <p className="font-medium text-primary/80">Terms and Conditions Apply</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
