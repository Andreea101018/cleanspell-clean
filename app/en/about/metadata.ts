import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Professional Cleaning | CleanSpell",
  description:
    "Learn more about CleanSpell – a professional cleaning company focused on quality, reliability, and customer trust.",

  alternates: {
    canonical: "https://www.cleanspell.dk/en/about",
    languages: {
      da: "https://www.cleanspell.dk/dan/about",
      en: "https://www.cleanspell.dk/en/about",
      "x-default": "https://www.cleanspell.dk/dan/about",
    },
  },

  openGraph: {
    title: "About CleanSpell – Professional Cleaning",
    description:
      "We provide high-quality residential and commercial cleaning services with a strong focus on reliability.",
    url: "https://www.cleanspell.dk/en/about",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
