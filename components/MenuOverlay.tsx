"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Phone, Calendar } from "lucide-react";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import Button from "./ui/Button";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  // Close menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navItems = siteConfig.navigation;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#FDFBF7] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto pb-6 border-b border-[#E8E4D8]">
            <Link
              href="/"
              onClick={onClose}
              className="text-primary font-serif text-xl sm:text-2xl tracking-[0.08em] font-medium"
            >
              TOUCH OF GLOW
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-primary hover:text-accent rounded-full hover:bg-surface/50 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full py-12">
            <nav className="flex flex-col space-y-4 sm:space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group inline-flex items-center text-3xl sm:text-5xl md:text-6xl font-serif text-primary hover:text-accent transition-colors"
                  >
                    <span className="font-light mr-4 text-xs sm:text-sm text-accent/60 tracking-widest font-sans">
                      0{index + 1}
                    </span>
                    <span className="group-hover:italic transition-all">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 pt-8 flex flex-wrap gap-4 items-center"
            >
              <Button
                href="/book"
                onClick={onClose}
                size="lg"
                variant="primary"
              >
                BOOK YOUR EXPERIENCE
              </Button>
            </motion.div>
          </div>

          {/* Bottom Info & Socials */}
          <div className="w-full max-w-[1280px] mx-auto pt-8 border-t border-[#E8E4D8] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-primary/80">
            <div>
              <p className="font-semibold uppercase tracking-wider text-[10px] text-accent mb-1">
                Location
              </p>
              <p>{siteConfig.location.mall}, {siteConfig.location.shop}</p>
              <p>{siteConfig.location.city}, {siteConfig.location.country}</p>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-wider text-[10px] text-accent mb-1">
                Direct Contact
              </p>
              <p className="flex items-center gap-1.5 mt-0.5">
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.contact.displayWhatsapp}</span>
              </p>
            </div>

            <div>
              <p className="font-semibold uppercase tracking-wider text-[10px] text-accent mb-1">
                Follow Us
              </p>
              <div className="flex items-center gap-4 mt-1">
                <a
                  href={siteConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent flex items-center gap-1 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
