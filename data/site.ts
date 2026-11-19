export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  contact: {
    whatsappNumbers: string[];
    primaryPhone: string;
    secondaryPhone: string;
    displayWhatsapp: string;
    email: string; // [TBC]
  };
  socials: {
    instagram: {
      name: string;
      handle: string;
      url: string;
    };
    facebook: {
      name: string;
      handle: string;
      url: string;
    };
  };
  location: {
    mall: string;
    shop: string;
    floor: string;
    city: string;
    country: string;
    formatted: string;
    googleMapsUrl?: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Touch Of Glow",
  legalName: "Touch Of Glow (T.O.G by Tuelo)",
  tagline: "Always delivering more than expected...",
  description: "Touch Of Glow (TOG) is an exclusive beauty salon in Gaborone, Botswana offering nails, lashes, waxing, massage, makeup, and bespoke aesthetic care.",
  contact: {
    whatsappNumbers: ["26772188591", "26771549657"],
    primaryPhone: "(+267) 72188591",
    secondaryPhone: "(+267) 71549657",
    displayWhatsapp: "(+267) 72188591 / 71549657",
    email: "[TBC - salon email]",
  },
  socials: {
    instagram: {
      name: "T.O.G by Tuelo",
      handle: "tog_by_tuelo",
      url: "https://instagram.com/tog_by_tuelo",
    },
    facebook: {
      name: "T.O.G by Tuelo",
      handle: "togbytuelo",
      url: "https://facebook.com/togbytuelo",
    },
  },
  location: {
    mall: "Molapo Crossing Mall",
    shop: "Shop 53B",
    floor: "1st Floor",
    city: "Gaborone",
    country: "Botswana",
    formatted: "Molapo Crossing Mall, Shop 53B, 1st Floor, Gaborone, Botswana",
    googleMapsUrl: "https://maps.google.com/?q=Molapo+Crossing+Mall+Gaborone",
  },
  hours: {
    weekdays: "09:00 - 18:00 hrs",
    saturday: "09:00 - 17:00 hrs",
    sunday: "11:00 - 17:00 hrs",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Book", href: "/book" },
  ],
};

export function getWhatsAppBookingUrl(serviceName?: string, dateStr?: string): string {
  const primaryNumber = siteConfig.contact.whatsappNumbers[0];
  let text = "Hi TOG! I'd like to book an appointment.";
  if (serviceName) {
    text = `Hi TOG! I'd like to book: ${serviceName}.${dateStr ? ` Preferred date/time: ${dateStr}` : ""}`;
  }
  return `https://wa.me/${primaryNumber}?text=${encodeURIComponent(text)}`;
}
