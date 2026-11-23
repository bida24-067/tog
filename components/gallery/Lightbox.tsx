"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { GalleryImage } from "@/data/gallery";

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onPrev,
  onNext,
}) => {
  // Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (image) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
      >
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Top Controls */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Navigation Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-colors focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-colors focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-[85vw] max-w-4xl h-[65vh] max-h-[700px] rounded-[var(--radius)] overflow-hidden shadow-2xl bg-black/40">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1200px) 90vw, 1200px"
              priority
              className="object-contain"
            />
          </div>

          {/* Footer Caption & Direct Booking Link */}
          <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-center sm:text-left px-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8E4D8] font-sans block">
                {image.categoryLabel}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                {image.title}
              </h3>
            </div>

            {image.serviceId ? (
              <Link
                href={`/book?service=${image.serviceId}`}
                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-[var(--radius)] text-xs font-sans uppercase font-medium tracking-wider hover:bg-white hover:text-primary transition-colors shadow-sm"
              >
                <span>BOOK THIS TREATMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2.5 rounded-[var(--radius)] text-xs font-sans uppercase font-medium tracking-wider hover:bg-white hover:text-primary transition-colors"
              >
                <span>RESERVE VISIT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Lightbox;
