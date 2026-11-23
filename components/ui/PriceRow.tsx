"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface PriceRowProps {
  item: ServiceItem;
  showBookButton?: boolean;
}

export const PriceRow: React.FC<PriceRowProps> = ({
  item,
  showBookButton = true,
}) => {
  return (
    <div className="group relative py-3 sm:py-3.5 border-b border-[#E8E4D8]/70 hover:border-accent/40 transition-colors">
      <div className="flex items-baseline justify-between gap-2 sm:gap-4 w-full">
        {/* Left: Service Name & Attributes */}
        <div className="flex items-baseline gap-2 shrink-0 max-w-[65%] sm:max-w-[70%]">
          <span className="font-serif text-base sm:text-lg font-medium text-primary group-hover:text-accent transition-colors">
            {item.name}
          </span>
          {item.duration && (
            <span className="inline-flex items-center gap-0.5 text-[10px] text-primary/60 font-sans tracking-wide shrink-0">
              <Clock className="w-2.5 h-2.5 opacity-70" />
              {item.duration}
            </span>
          )}
          {item.featured && (
            <span className="hidden sm:inline-block bg-surface text-accent text-[8px] uppercase tracking-widest px-1.5 py-0.2 rounded font-sans font-semibold">
              Signature
            </span>
          )}
        </div>

        {/* Center: Dotted Leader Line */}
        <div
          className="flex-1 border-b border-dotted border-primary/25 min-w-[20px] mb-1 group-hover:border-accent/40 transition-colors"
          aria-hidden="true"
        />

        {/* Right: Price & Quick Book Action */}
        <div className="flex items-baseline gap-3 shrink-0 text-right">
          <div className="flex items-baseline gap-1">
            {item.prefix && (
              <span className="font-sans text-[10px] uppercase tracking-wider text-accent font-medium">
                {item.prefix}
              </span>
            )}
            <span className="font-serif text-base sm:text-lg font-semibold text-primary group-hover:text-accent transition-colors">
              {item.price}
            </span>
          </div>

          {showBookButton && (
            <Link
              href={`/book?service=${item.id}`}
              className="hidden md:inline-flex items-center gap-1 text-[10px] uppercase font-sans font-semibold tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity pl-2 hover:underline"
              aria-label={`Book ${item.name}`}
            >
              <span>Book</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>

      {item.note && (
        <p className="text-[11px] text-accent/80 italic font-sans mt-0.5">
          *{item.note}
        </p>
      )}
    </div>
  );
};

export default PriceRow;
