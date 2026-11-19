import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import Container from "./ui/Container";
import { siteConfig } from "@/data/site";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-primary pt-16 pb-12 border-t border-[#ded9cb]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-primary/15">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-[0.1em] font-medium block">
                TOUCH OF GLOW
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent font-sans block mt-1">
                T.O.G by Tuelo
              </span>
            </div>
            <p className="text-xs text-primary/80 leading-relaxed italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs text-primary/70">
              Premium salon experience in Gaborone. Bespoke nails, lashes, waxing, massage, and skin therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors hover:underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-accent flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Hours
            </h4>
            <div className="text-xs space-y-1.5 text-primary/80">
              <p>
                <span className="font-medium text-primary">Mon - Fri:</span>{" "}
                {siteConfig.hours.weekdays}
              </p>
              <p>
                <span className="font-medium text-primary">Saturday:</span>{" "}
                {siteConfig.hours.saturday}
              </p>
              <p>
                <span className="font-medium text-primary">Sunday:</span>{" "}
                {siteConfig.hours.sunday}
              </p>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-accent flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Location
            </h4>
            <p className="text-xs text-primary/80 leading-relaxed">
              {siteConfig.location.mall}, {siteConfig.location.shop}
              <br />
              {siteConfig.location.floor}
              <br />
              {siteConfig.location.city}, {siteConfig.location.country}
            </p>

            <div className="pt-2 text-xs">
              <a
                href={`tel:${siteConfig.contact.primaryPhone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-1.5 text-primary hover:text-accent font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.displayWhatsapp}
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & T&Cs */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-primary/60 gap-4">
          <p>© {new Date().getFullYear()} Touch Of Glow. All rights reserved.</p>
          <p className="font-medium text-primary/75">Terms and Conditions Apply</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
