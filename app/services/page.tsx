import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { getWhatsAppBookingUrl } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-24">
      <Container>
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-2">
            Complete Menu
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-primary mb-4">
            Our Services & Prices
          </h1>
          <p className="text-sm text-primary/80 leading-relaxed">
            Every service is tailored with obsessive care. Below is our full menu with transparent pricing in Botswana Pula (P). Full interactive sticky navigation and filters will be activated in Phase 3.
          </p>
        </div>

        <div className="space-y-16">
          {servicesData.map((cat) => (
            <div key={cat.id} id={cat.slug} className="scroll-mt-32">
              <h2 className="text-2xl font-serif text-primary pb-3 border-b border-[#E8E4D8] mb-6">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-baseline justify-between py-2 border-b border-[#E8E4D8]/60 text-sm"
                  >
                    <span className="font-medium text-primary">
                      {item.name}
                      {item.duration && (
                        <span className="text-xs text-primary/60 ml-2">
                          ({item.duration})
                        </span>
                      )}
                    </span>
                    <span className="font-serif font-semibold text-accent ml-4 shrink-0">
                      {item.prefix ? `${item.prefix} ` : ""}
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-surface rounded-[var(--radius)] text-center max-w-xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl text-primary">
            Ready to reserve your appointment?
          </h3>
          <p className="text-xs text-primary/80">
            Real-time calendar slot booking with instant confirmation. Walk-ins subject to availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/book"
              size="lg"
              variant="primary"
            >
              BOOK ONLINE
            </Button>
            <Button
              href={getWhatsAppBookingUrl()}
              isExternal
              size="lg"
              variant="outline"
            >
              CHAT ON WHATSAPP
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
