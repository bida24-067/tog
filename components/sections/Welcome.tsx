import React from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const Welcome: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E8E4D8]/60">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Reveal>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-3">
              Touch Of Glow • Salon Sanctuary
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary leading-snug">
              Welcome to Touch Of Glow, where every detail is{" "}
              <span className="italic">tailored around you.</span>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="w-12 h-[1px] bg-primary/20 mx-auto mt-6" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
