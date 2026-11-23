import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-surface text-primary border-y border-[#ded9cb]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8 flex flex-col items-center">
          {/* Logo Mark Emblem */}
          <Reveal>
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-2 bg-white/40">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
              The TOG Promise
            </span>
          </Reveal>

          {/* Statement */}
          <Reveal delay={0.2}>
            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-primary leading-tight font-normal">
              &ldquo;Always delivering more than expected.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-xs sm:text-sm text-primary/80 max-w-xl mx-auto leading-relaxed">
              Touch Of Glow is born out of a dedication to impeccable technique, luxurious comfort, and genuine hospitality in the heart of Gaborone.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.4}>
            <div className="pt-2">
              <Button
                href="/about"
                variant="outline"
                size="md"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
              >
                MORE ABOUT TOG
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default BrandStatement;
