import React from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24">
      <Container>
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
          Our Philosophy
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
          About Touch Of Glow
        </h1>
        <div className="max-w-2xl space-y-6 text-sm text-primary/80 leading-relaxed">
          <p className="text-lg font-serif italic text-primary">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p>
            Located at {siteConfig.location.formatted}, Touch Of Glow is dedicated to delivering elevated beauty and wellness treatments in an intimate, welcoming sanctuary.
          </p>
          <div className="p-8 border border-[#ded9cb] bg-surface/40 rounded-[var(--radius)]">
            <h3 className="font-serif text-xl text-primary mb-2">[About Story & Values TBC]</h3>
            <p className="text-xs text-primary/70">
              The salon owner will provide the detailed narrative, founding story, and team bios for inclusion in Phase 4.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
