import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Full Price List",
  description:
    "Explore our complete beauty treatment menu with transparent pricing in Botswana Pula (P). Gel extensions, microshading, hot stone massages, pedicures, and waxing.",
  openGraph: {
    title: "Services & Full Price List | Touch Of Glow",
    description:
      "Explore our complete beauty treatment menu with transparent pricing in Botswana Pula (P).",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
