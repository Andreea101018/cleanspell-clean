import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cleaning Services Copenhagen & Zealand | CleanSpell",
  description:
    "CleanSpell provides professional residential and commercial cleaning services in Copenhagen, Hedehusene, Taastrup, Roskilde, Ballerup, Glostrup, and across Zealand. Our services include house cleaning, office cleaning, move-out cleaning, deep cleaning, window cleaning, post-construction cleaning, painting, staircase cleaning, and outdoor services.",

  keywords: [
    "cleaning", "professional cleaning", "Copenhagen", "Hedehusene", "Taastrup",
    "Roskilde", "Ballerup", "Glostrup", "Hvidovre", "Albertslund", "Brøndby",
    "Ishøj", "Greve", "Vallensbæk", "Herlev", "Rødovre", "Frederiksberg",
    "Gentofte", "Lyngby", "Bagsværd", "Kastrup", "Tårnby", "Dragør", "Solrød",
    "Køge", "Holbæk", "Ringsted", "Residential cleaning", "Commercial cleaning",
    "House cleaning", "Office cleaning", "Move-out cleaning", "Deep cleaning",
    "Window cleaning", "Post construction cleaning", "Painting services",
    "Staircase cleaning", "Outdoor services"
  ],

  alternates: languageAlternates("/services"),

  openGraph: {
    title: "Professional Cleaning Services Copenhagen & Zealand | CleanSpell",
    description:
      "Reliable residential and commercial cleaning in Copenhagen, Hedehusene, Taastrup, Roskilde and across Zealand. CleanSpell offers house cleaning, office cleaning, move-out cleaning, deep cleaning, window cleaning, post-construction cleaning, painting, staircase cleaning, and outdoor services.",
    url: "https://www.cleanspell.dk/en/services",
    locale: "en_US",
    type: "website",
  },

  robots: { index: true, follow: true },
};