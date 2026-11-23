import React from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export const LocationHours: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-[#E8E4D8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Location & Hours Header */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-primary leading-tight">
                Our Sanctuary in{" "}
                <span className="italic block sm:inline font-normal">Gaborone</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-xs sm:text-sm text-primary/80 leading-relaxed font-light">
                Conveniently located on the 1st Floor of Molapo Crossing Mall, offering ample parking and a tranquil escape from the bustling city.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href={siteConfig.location.googleMapsUrl}
                  isExternal
                  size="md"
                  variant="outline"
                >
                  GET DIRECTIONS
                </Button>
                <Button
                  href={getWhatsAppBookingUrl()}
                  isExternal
                  size="md"
                  variant="primary"
                >
                  BOOK VISIT
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Hours & Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Working Hours Card */}
            <Reveal delay={0.2}>
              <div className="bg-surface p-8 rounded-[var(--radius)] border border-[#ded9cb] h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-accent mb-6 border border-primary/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium mb-4">
                    Working Hours
                  </h3>
                  <div className="space-y-3 text-xs text-primary/80 font-sans">
                    <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                      <span className="font-medium text-primary">Monday – Friday</span>
                      <span>{siteConfig.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                      <span className="font-medium text-primary">Saturday</span>
                      <span>{siteConfig.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-primary">Sunday</span>
                      <span>{siteConfig.hours.sunday}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-primary/60 italic mt-6 pt-4 border-t border-primary/10">
                  Walk-ins welcome, reservations prioritized.
                </p>
              </div>
            </Reveal>

            {/* Address & Direct Card */}
            <Reveal delay={0.3}>
              <div className="bg-[#FAF8F5] p-8 rounded-[var(--radius)] border border-[#ded9cb] h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent mb-6 border border-primary/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium mb-4">
                    Address & Phone
                  </h3>
                  <div className="space-y-3 text-xs text-primary/80 font-sans">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-accent font-semibold block mb-0.5">
                        Salon Location
                      </span>
                      <p className="font-medium text-primary">{siteConfig.location.mall}</p>
                      <p>{siteConfig.location.shop}, {siteConfig.location.floor}</p>
                      <p>{siteConfig.location.city}, {siteConfig.location.country}</p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-accent font-semibold block mb-0.5">
                        Direct Lines
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.primaryPhone.replace(/[^0-9+]/g, "")}`}
                        className="hover:text-accent font-medium transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        {siteConfig.contact.displayWhatsapp}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/10">
                  <a
                    href={siteConfig.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-wider text-accent hover:text-primary transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LocationHours;
