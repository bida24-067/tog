import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://touchofglow.bw"),
  title: {
    default: `${siteConfig.name} | Luxury Beauty Salon in Gaborone`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "beauty salon Gaborone",
    "nails Molapo Crossing",
    "microshading Botswana",
    "lashes Gaborone",
    "pedicure Gaborone",
    "waxing Botswana",
    "Touch Of Glow",
    "T.O.G by Tuelo",
    "hot stone massage Gaborone",
  ],
  authors: [{ name: "Touch Of Glow" }],
  creator: "Touch Of Glow (T.O.G by Tuelo)",
  publisher: "Touch Of Glow",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_BW",
    url: "https://touchofglow.bw",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Luxury Beauty & Aesthetic Care`,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Touch Of Glow luxury salon sanctuary in Gaborone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury Beauty Salon`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink font-sans selection:bg-accent/15 selection:text-primary">
        {/* Skip to main content for screen readers and keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2.5 rounded-[var(--radius)] text-xs uppercase font-medium tracking-wider shadow-lg"
        >
          Skip to main content
        </a>

        <SmoothScroll>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
        </SmoothScroll>
      </body>
    </html>
  );
}
