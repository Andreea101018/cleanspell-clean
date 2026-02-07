import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Copenhagen & Zealand | CleanSpell",
  description:
    "CleanSpell provides professional residential and commercial cleaning across Zealand, within 70 km of Copenhagen. Reliable cleaning done with care, consistency, and eco-friendly products.",
  alternates: {
    canonical: "https://www.cleanspell.dk/en",
  },
  openGraph: {
    title: "CleanSpell – Professional Cleaning Done Properly",
    description:
      "Professional cleaning for homes and businesses in Copenhagen and across Zealand. Transparent pricing, trained staff, and reliable results.",
    url: "https://www.cleanspell.dk/en",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.cleanspell.dk/o.png",
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
