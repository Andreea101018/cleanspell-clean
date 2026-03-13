import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
  
  description:
    "Professional residential and commercial cleaning services in Copenhagen and across Zealand. Trusted, reliable cleaning for homes, offices, and commercial properties.",

  alternates: languageAlternates(""),

  keywords: [
    // Cities served
    "Copenhagen", "Hedehusene", "Taastrup", "Roskilde", "Ballerup", "Glostrup", "Hvidovre",
    "Albertslund", "Brøndby", "Ishøj", "Greve", "Vallensbæk", "Herlev", "Rødovre", "Frederiksberg",
    "Gentofte", "Lyngby", "Bagsværd", "Kastrup", "Tårnby", "Dragør", "Solrød", "Køge", "Holbæk", "Ringsted",

    // General cleaning
    "professional cleaning", "residential cleaning", "commercial cleaning",
    "house cleaning", "apartment cleaning", "office cleaning", "industrial cleaning",
    "property cleaning", "deep cleaning", "move-out cleaning", "end of tenancy cleaning",
    
    // Specialized services
    "post construction cleaning", "staircase cleaning", "window cleaning",
    "building cleaning", "painting services", "outdoor cleaning", "extra services", "special cleaning"
  ],

  openGraph: {
    title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
    description:
      "Trusted residential and commercial cleaning services for homes and businesses in Copenhagen and across Zealand.",
    url: "https://www.cleanspell.dk/en",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};