import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Gallery",
  description:
    "View our archive of bespoke nail architecture, microshading brow transformations, lash styling, and luxury salon interior at Touch Of Glow in Gaborone.",
  openGraph: {
    title: "Portfolio & Gallery | Touch Of Glow",
    description:
      "Explore bespoke nail architecture, lash styling, and luxury salon treatments at Touch Of Glow in Gaborone.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
