import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getWhatsAppBookingUrl } from "@/data/site";

export const ClosingCta: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-surface overflow-hidden">
      {/* Subtle organic background image overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-multiply">
        <Image
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80"
          alt="Touch of glow background ambience"
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
          <Reveal>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent font-semibold block mb-2">
              Your Experience Awaits
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-primary leading-tight font-normal">
              Come glow with us. <br />
              <span className="italic">You are in the right place.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-xs sm:text-sm text-primary/80 max-w-lg mx-auto leading-relaxed font-light">
              Reserve your personalized nail artistry, lash session, soothing massage, or brow transformation today directly via WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={getWhatsAppBookingUrl()}
                isExternal
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
              >
                BOOK ON WHATSAPP
              </Button>
              <Button
                href="/services"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                VIEW PRICE LIST
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ClosingCta;
