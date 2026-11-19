import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import SmoothScroll from "@/components/SmoothScroll";
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
  ],
  authors: [{ name: "Touch Of Glow" }],
  openGraph: {
    type: "website",
    locale: "en_BW",
    url: "https://touchofglow.bw",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Luxury Beauty & Aesthetic Care`,
    description: siteConfig.description,
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
      <body className="min-h-screen flex flex-col bg-bg text-ink font-sans selection:bg-accent/15 selection:text-primary">
        {/* Skip to main content for screen readers and keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded-soft text-xs uppercase font-medium tracking-wider"
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
