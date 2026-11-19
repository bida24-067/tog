"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import MenuOverlay from "./MenuOverlay";
import { getWhatsAppBookingUrl } from "@/data/site";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-[#E8E4D8]/60"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span
              className={`font-serif text-lg sm:text-2xl tracking-[0.14em] font-medium transition-colors ${
                isScrolled ? "text-primary" : "text-primary"
              }`}
            >
              TOUCH OF GLOW
            </span>
            <span className="text-[9px] tracking-[0.22em] uppercase text-accent font-sans -mt-0.5">
              T.O.G by Tuelo
            </span>
          </Link>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Button
              href={getWhatsAppBookingUrl()}
              isExternal
              size="sm"
              variant={isScrolled ? "primary" : "outline"}
              className="hidden sm:inline-flex"
            >
              BOOK
            </Button>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-[var(--radius)] text-primary hover:text-accent hover:bg-surface/60 transition-colors focus:outline-none focus:ring-1 focus:ring-primary/40"
              aria-label="Open navigation menu"
            >
              <span className="hidden md:inline text-[11px] font-sans font-medium uppercase tracking-[0.16em]">
                Menu
              </span>
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Full-screen Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
