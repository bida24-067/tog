import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getWhatsAppBookingUrl } from "@/data/site";
import { Sparkles } from "lucide-react";

interface HighlightItem {
  category: string;
  name: string;
  price: string;
  prefix?: string;
  duration?: string;
  description: string;
}

const signatureHighlights: HighlightItem[] = [
  {
    category: "Nails",
    name: "Gel Extensions / Tips (short/medium)",
    price: "P250",
    description: "Flawless nail enhancements sculpted to your natural length with long-lasting gel finish.",
  },
  {
    category: "Brows",
    name: "Microshading (Semi-Permanent)",
    price: "P2000",
    description: "Gradient ombre powdered brow effect providing effortless definition that lasts 1-3 years.",
  },
  {
    category: "Massage",
    name: "Hot Stone Full Body Massage",
    price: "P550",
    duration: "1 Hr",
    description: "Warm basalt stones melt away tension, improving circulation and restoring total serenity.",
  },
  {
    category: "Facials",
    name: "Deep Cleanse Facial",
    price: "P300",
    description: "Thorough pore purification, gentle exfoliation, and intense hydration for an unmistakable glow.",
  },
];

export const Highlights: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E4D8]">
          <Reveal>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
              Guest Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-primary leading-tight">
              Signature Treatments &{" "}
              <span className="italic block sm:inline font-normal">Pricing</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs text-primary/70 mt-4 md:mt-0 font-sans tracking-wide">
              Transparent Botswana Pula (P) Pricing
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureHighlights.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 0.1}>
              <div className="h-full bg-surface/40 hover:bg-surface/80 p-8 rounded-[var(--radius)] border border-[#ded9cb] flex flex-col justify-between transition-all duration-300 hover:shadow-md group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-accent font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {item.category}
                    </span>
                    {item.duration && (
                      <span className="text-[11px] font-sans text-primary/60 font-medium">
                        {item.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium mb-3 leading-snug group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-primary/75 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-primary/10 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-sans text-primary/60 font-medium">
                    {item.prefix || "Fixed Price"}
                  </span>
                  <span className="font-serif text-2xl font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to WhatsApp and Services */}
        <Reveal delay={0.3}>
          <div className="mt-14 pt-8 border-t border-[#E8E4D8] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-primary/80 text-center sm:text-left">
              Looking for our full nail art, pedicure, waxing, or makeup price list?
            </p>
            <div className="flex items-center gap-4">
              <Button
                href="/services"
                variant="outline"
                size="sm"
              >
                VIEW FULL MENU
              </Button>
              <Button
                href="/book"
                size="sm"
                variant="primary"
              >
                BOOK APPOINTMENT
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Highlights;
