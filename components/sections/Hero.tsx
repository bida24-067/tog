"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getWhatsAppBookingUrl } from "@/data/site";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen min-h-[640px] max-h-[1080px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Hero Image with Slow Scale Animation */}
      <motion.div
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Touch Of Glow luxury salon sanctuary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Editorial warm grading overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />
      </motion.div>

      {/* Hero Content */}
      <Container className="relative z-10 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow Label */}
          <motion.span
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-sans text-[#E8E4D8] mb-4 sm:mb-6 font-medium"
          >
            Molapo Crossing Mall • Gaborone
          </motion.span>

          {/* Editorial Italic Headline */}
          <div className="overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.06] tracking-tight"
            >
              Glow you can feel.
            </motion.h1>
          </div>

          {/* Subtitle statement */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm md:text-base font-sans text-white/90 max-w-lg mb-8 sm:mb-10 font-light tracking-wide leading-relaxed"
          >
            A bespoke aesthetic sanctuary where every detail is tailored around you. Nails, brows, massage & luxury care.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              href="/book"
              size="lg"
              className="bg-accent text-white border-accent hover:bg-white hover:text-primary hover:border-white shadow-lg w-full sm:w-auto"
            >
              BOOK YOUR GLOW
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
            >
              EXPLORE SERVICES
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Down indicator scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-[10px] uppercase tracking-[0.2em]"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-6 bg-white/40 mt-2" />
      </motion.div>
    </section>
  );
};

export default Hero;
