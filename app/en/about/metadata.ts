import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CleanSpell – Professional Cleaning in Copenhagen & Zealand",
  description:
    "Meet CleanSpell – a family-run cleaning company founded by Victoria & Ion. We provide reliable residential and commercial cleaning in Copenhagen, Hedehusene, Taastrup, Roskilde, and across Zealand. Focused on quality, trust, and attention to detail.",

  keywords: [
    "CleanSpell", "About Us", "Cleaning company", "Copenhagen", "Hedehusene",
    "Taastrup", "Roskilde", "Zealand", "Residential cleaning", "Commercial cleaning",
    "Office cleaning", "Move-out cleaning", "Deep cleaning", "Window cleaning",
    "Post construction cleaning", "Painting services", "Staircase cleaning",
    "Outdoor services", "Family business", "Victoria & Ion", "Trust", "Quality"
  ],

  alternates: {
    canonical: "https://www.cleanspell.dk/en/about",
    languages: {
      da: "https://www.cleanspell.dk/dan/about",
      en: "https://www.cleanspell.dk/en/about",
      "x-default": "https://www.cleanspell.dk/dan/about",
    },
  },

  openGraph: {
    title: "About CleanSpell – Professional Cleaning in Copenhagen & Zealand",
    description:
      "Learn more about CleanSpell – our story, values, and team. Professional residential and commercial cleaning services in Copenhagen and across Zealand, run by Victoria & Ion.",
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