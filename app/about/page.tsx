import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { Sparkles, Heart, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Touch Of Glow (T.O.G by Tuelo)",
  description: "Learn about Touch Of Glow, an exclusive beauty salon in Gaborone offering bespoke nail art, microshading, facials, and massage.",
};

const coreValues = [
  {
    icon: Sparkles,
    title: "Obsessive Artistry",
    description: "From microscopic line precision in nail extensions to gentle gradient shading in brows, every stroke is executed with uncompromising attention to detail.",
  },
  {
    icon: Heart,
    title: "Unhurried Hospitality",
    description: "We intentionally avoid rushed appointments. Your session is a peaceful sanctuary where you can recharge, unwind, and receive truly bespoke care.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Formulations",
    description: "We use only tested, skin-safe rubberbases, cruelty-free waxes, and dermatologist-approved facial serums to protect the long-term health of your nails and skin.",
  },
  {
    icon: Clock,
    title: "Respect for Your Time",
    description: "With our synchronized Google Calendar and WhatsApp booking system, your appointments are scheduled cleanly with minimal waiting time.",
  },
];

const teamPlaceholders = [
  {
    role: "Founder & Master Aesthetician",
    name: "Tuelo [TBC - Full Name]",
    bio: "Visionary behind Touch Of Glow, dedicated to elevating salon standards in Botswana through bespoke nail architecture, microshading, and personalized care.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Senior Nail Artist",
    name: "Lead Nail Stylist [TBC]",
    bio: "Specialist in polygel sculpting, rubberbase reinforcement, and trendsetting chrome and french ombre designs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Lash & Brow Technician",
    name: "Brow & Lash Artist [TBC]",
    bio: "Certified microshading technician creating natural ombre brows and featherlight lash extensions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-28 bg-[#FDFBF7]">
      <Container>
        {/* Editorial Hero Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent font-semibold block mb-2">
            The Philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-primary leading-[1.08] mb-6">
            A sanctuary where beauty is{" "}
            <span className="italic font-normal">gentle, intentional, and enduring.</span>
          </h1>
          <p className="text-xs sm:text-base text-primary/80 max-w-2xl leading-relaxed font-light">
            Founded under the signature mark &ldquo;T.O.G by Tuelo&rdquo; in Gaborone, Touch Of Glow was created to offer an elevated salon experience where clients feel seen, cherished, and radiant.
          </p>
        </div>

        {/* Feature Split Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Large Image Block */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-[var(--radius)] overflow-hidden shadow-xl border border-[#ded9cb]">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
              alt="Inside Touch Of Glow sanctuary"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-medium leading-tight">
              Crafted in Gaborone, <br />
              <span className="italic font-normal">inspired by timeless luxury.</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-primary/80 leading-relaxed font-light">
              <p>
                Nestled on the 1st Floor of Molapo Crossing Mall (Shop 53B), Touch Of Glow represents a departure from hurried beauty bars. We believe that caring for your hands, face, and body should be a serene ritual rather than a routine chore.
              </p>
              <p>
                From our signature rubberbase gel overlays to meticulous microshading and warm basalt stone massage, our treatments harmonize technical excellence with supreme comfort.
              </p>

              {/* Styled Placeholder Notice */}
              <div className="p-4 bg-surface rounded-[var(--radius)] border border-[#ded9cb] text-xs text-primary/75 mt-4">
                <span className="font-semibold text-primary block mb-1">
                  [TBC • Salon Founder Note]
                </span>
                <p>
                  Additional founding reflections, personal quotes, and history from salon owner Tuelo will be populated here once finalized.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/services" size="md" variant="outline">
                EXPLORE OUR SERVICES
              </Button>
            </div>
          </div>
        </div>

        {/* Core Values 4-Column Grid */}
        <section className="mb-24 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
              What Sets Us Apart
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-primary">
              Our Core <span className="italic font-normal">Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-surface/50 p-8 rounded-[var(--radius)] border border-[#ded9cb] hover:bg-surface transition-colors space-y-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-xs border border-primary/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-primary font-medium">
                    {val.title}
                  </h3>
                  <p className="text-xs text-primary/75 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Brand Statement Banner */}
        <div className="my-24 py-16 px-8 sm:px-16 bg-surface rounded-[var(--radius)] border border-[#ded9cb] text-center max-w-4xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
            Our Official Motto
          </span>
          <blockquote className="font-serif text-2xl sm:text-4xl text-primary italic font-normal leading-snug">
            &ldquo;Always delivering more than expected...&rdquo;
          </blockquote>
          <p className="text-xs text-primary/70 max-w-md mx-auto pt-2">
            The founding ethos printed on every Touch Of Glow service menu.
          </p>
        </div>

        {/* Team & Stylists Section (With Clean TBC Styling) */}
        <section className="mb-24 sm:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#E8E4D8]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
                The Artisans
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-primary">
                Meet the <span className="italic font-normal">Craftspeople</span>
              </h2>
            </div>
            <p className="text-xs text-primary/70 mt-2 md:mt-0">
              Passionate specialists trained in modern aesthetic techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member) => (
              <div
                key={member.role}
                className="group bg-white rounded-[var(--radius)] border border-[#ded9cb] overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded text-accent">
                    Staff [TBC]
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-medium block">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-xl text-primary font-medium">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary/70 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Invitation */}
        <div className="p-8 sm:p-14 bg-primary text-white rounded-[var(--radius)] text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#E8E4D8] font-semibold block">
            Experience Touch Of Glow
          </span>
          <h3 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
            Come glow with us. <br />
            <span className="italic">You are in the right place.</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed font-light">
            Located at Molapo Crossing Mall, Shop 53B, Gaborone. We welcome walk-ins and prioritize online and WhatsApp reservations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/book"
              size="lg"
              className="bg-white text-primary hover:bg-surface border-white w-full sm:w-auto"
            >
              BOOK ONLINE
            </Button>
            <Button
              href={getWhatsAppBookingUrl()}
              isExternal
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-primary w-full sm:w-auto"
            >
              MESSAGE US
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
