import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { servicesData } from "@/data/services";

export default function Home() {
  const featuredServices = servicesData
    .flatMap((c) => c.items)
    .filter((i) => i.featured)
    .slice(0, 4);

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Foundation Verification Hero */}
      <section className="relative py-12 md:py-20 bg-surface/40 border-b border-[#ded9cb]/60">
        <Container>
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block">
              Phase 1 • Foundation Setup
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-primary leading-[1.08]">
              Glow you can feel. <br />
              <span className="italic font-normal">
                Every detail tailored around you.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-primary/80 max-w-xl leading-relaxed">
              Welcome to the foundation prototype for Touch Of Glow (TOG).
              Design tokens, typography (Playfair Display & Inter), responsive header,
              fullscreen menu overlay, footer, and WhatsApp booking are now active.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                href={getWhatsAppBookingUrl()}
                isExternal
                size="lg"
                variant="primary"
              >
                BOOK YOUR GLOW
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="outline"
              >
                VIEW FULL MENU
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Verification Highlights */}
      <section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#E8E4D8]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium block mb-1">
                Design System Preview
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-primary">
                Featured Treatments
              </h2>
            </div>
            <p className="text-xs text-primary/70 mt-2 md:mt-0 font-sans tracking-wide">
              {siteConfig.location.mall} • Gaborone
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-surface/50 p-6 rounded-[var(--radius)] border border-[#ded9cb] flex flex-col justify-between hover:border-accent/40 transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                    Signature
                  </span>
                  <h3 className="font-serif text-xl text-primary mt-2 mb-3">
                    {service.name}
                  </h3>
                </div>
                <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-xs uppercase text-primary/60">
                    {service.prefix || "Price"}
                  </span>
                  <span className="font-serif text-lg font-medium text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
