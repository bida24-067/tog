"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/site";

export const WhatsAppFab: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={getWhatsAppBookingUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp to book"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-sans text-xs font-semibold tracking-wider uppercase group"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFab;
