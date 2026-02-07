import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanspell.dk"),

  title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
  description:
    "CleanSpell provides professional residential and commercial cleaning across Zealand, within 70 km of Copenhagen. Reliable cleaning with consistent quality and eco-friendly products.",

  alternates: {
    canonical: "/en",
    languages: {
      da: "/dan",
      en: "/en",
      "x-default": "/dan",
    },
  },

  openGraph: {
    title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
    description:
      "Professional cleaning for homes and businesses in Copenhagen and across Zealand. Transparent pricing, trained staff, and dependable results.",
    url: "/en",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/o.png",
        width: 1200,
        height: 630,
        alt: "Professional cleaning services by CleanSpell",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
