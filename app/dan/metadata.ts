import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professionel rengøring i København & på Sjælland | CleanSpell",
  description:
    "CleanSpell tilbyder professionel rengøring til private og erhverv på hele Sjælland – inden for 70 km af København.",

  alternates: languageAlternates(""),

  keywords: [
    // Cities served
    "København", "Hedehusene", "Taastrup", "Roskilde", "Ballerup", "Glostrup", "Hvidovre",
    "Albertslund", "Brøndby", "Ishøj", "Greve", "Vallensbæk", "Herlev", "Rødovre", "Frederiksberg",
    "Gentofte", "Lyngby", "Bagsværd", "Kastrup", "Tårnby", "Dragør", "Solrød", "Køge", "Holbæk", "Ringsted",

    // General cleaning terms
    "rengøring", "professionel rengøring", "privat rengøring", "erhvervsrengøring", "kontorrengøring",
    "hus rengøring", "firma rengøring", "ejendomsrengøring", "dybderengøring", "flytterengøring",

    // Specific service types
    "House Cleaning", "Residential Cleaning", "Office Cleaning", "Commercial Cleaning",
    "Apartment Cleaning", "Deep Cleaning", "Move-Out Cleaning", "End of Tenancy Cleaning",
    "Post Construction Cleaning", "Staircase Cleaning", "Window Cleaning",
    "Building Cleaning", "Professional Cleaning Services", "Industrial Cleaning", "Property Cleaning",
    "Rengøring efter byggeri", "Malerarbejde", "Trappevask", "Udendørs- og ekstra ydelser",
    "Vinduespudsning", "Anden / specialrengøring"
  ],

  openGraph: {
    title: "Professionel rengøring i København & på Sjælland | CleanSpell",
    description:
      "Pålidelig og professionel rengøring i København og på Sjælland.",
    url: "https://www.cleanspell.dk/dan",
    siteName: "CleanSpell",
    locale: "da_DK",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};