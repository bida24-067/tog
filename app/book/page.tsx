import React from "react";
import Container from "@/components/ui/Container";
import BookingWizard from "@/components/booking/BookingWizard";
import { siteConfig } from "@/data/site";
import { Phone, MapPin, Clock, CalendarCheck } from "lucide-react";

export const metadata = {
  title: "Book an Appointment",
  description: "Schedule your nail care, brows, lashes, facials, or massage at Touch Of Glow in Gaborone with real-time calendar syncing.",
};

export default function BookPage() {
  return (
    <div className="pt-32 sm:pt-40 pb-24 bg-[#FDFBF7]">
      <Container>
        {/* Header Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-accent font-semibold block mb-2">
            Online Reservations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-primary mb-4 leading-tight">
            Book Your Experience
          </h1>
          <p className="text-xs sm:text-sm text-primary/80 max-w-xl mx-auto leading-relaxed">
            Select your treatments, choose an available time slot synced directly with the Touch Of Glow store calendar, and receive your confirmation via WhatsApp or Email.
          </p>
        </div>

        {/* The 5-Step Interactive Booking Wizard */}
        <div className="mb-16">
          <BookingWizard />
        </div>

        {/* Quick Assistance Information Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#ded9cb] text-xs text-primary/80">
          <div className="flex items-start gap-3 bg-white p-5 rounded-[var(--radius)] border border-[#ded9cb]">
            <CalendarCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">Live Calendar Sync</span>
              <p className="text-primary/70">
                Your appointment is securely scheduled in the store&apos;s Google Calendar in real time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-[var(--radius)] border border-[#ded9cb]">
            <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">Prefer Direct WhatsApp?</span>
              <p className="text-primary/70">
                You can also message our reception desk directly on {siteConfig.contact.displayWhatsapp}.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-5 rounded-[var(--radius)] border border-[#ded9cb]">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">Location & Parking</span>
              <p className="text-primary/70">
                {siteConfig.location.mall}, {siteConfig.location.shop}, Gaborone.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
