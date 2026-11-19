import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig, getWhatsAppBookingUrl } from "@/data/site";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";

export default function BookPage() {
  return (
    <div className="pt-36 pb-24">
      <Container>
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
            Reservations
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
            Book Your Experience
          </h1>
          <p className="text-sm text-primary/80 leading-relaxed">
            We operate primarily via WhatsApp to guarantee prompt scheduling and personalized attention for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-surface p-8 rounded-[var(--radius)] border border-[#ded9cb] space-y-6">
            <h2 className="font-serif text-2xl text-primary">Instant WhatsApp Booking</h2>
            <p className="text-xs text-primary/80 leading-relaxed">
              Click below to send a prefilled booking inquiry directly to our salon reception team.
            </p>
            <Button
              href={getWhatsAppBookingUrl()}
              isExternal
              size="lg"
              variant="primary"
            >
              CHAT ON WHATSAPP
            </Button>

            <div className="pt-4 border-t border-primary/10 text-xs space-y-2 text-primary/80">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                Direct: {siteConfig.contact.displayWhatsapp}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                {siteConfig.location.mall}, {siteConfig.location.shop}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                Weekdays {siteConfig.hours.weekdays}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[var(--radius)] border border-[#ded9cb] space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Calendar className="w-5 h-5" />
              <h2 className="font-serif text-xl text-primary">Google Calendar Integration</h2>
            </div>
            <p className="text-xs text-primary/70 leading-relaxed">
              Integration for select treatments is supported. In Phase 4, you can pick a specific service and sync directly with Google Calendar.
            </p>
            <div className="p-4 bg-surface/50 rounded-[var(--radius)] text-xs text-primary/70 border border-[#ded9cb]">
              <p className="font-semibold text-primary mb-1">Status: Ready for Service Selection</p>
              <p>Endpoints configured at <code>/api/calendar</code>.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
