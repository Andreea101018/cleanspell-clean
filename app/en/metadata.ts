import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanspell.dk"),

  title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
  description:
    "Professional residential and commercial cleaning in Copenhagen and across Zealand. Reliable service, transparent pricing, and consistent quality.",

  // ⚠️ IMPORTANT:
  // ❌ FĂRĂ canonical aici
  // ❌ FĂRĂ x-default
  alternates: {
    languages: {
      da: "/dan",
      en: "/en",
    },
  },

  openGraph: {
    title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
    description:
      "Professional cleaning for homes and businesses in Copenhagen and across Zealand. Trusted service with trained staff and dependable results.",
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
    index: true,   // ENG rămâne indexabil
    follow: true,
  },
};
