import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rengøring i København & Sjælland | Privat og Erhverv | CleanSpell",
  description:
    "CleanSpell tilbyder professionel rengøring til private hjem og virksomheder i København, Hedehusene, Taastrup, Roskilde, Ballerup, Glostrup og på hele Sjælland. Vores ydelser inkluderer privat rengøring, erhvervsrengøring, kontorrengøring, hovedrengøring, fraflytningsrengøring, vinduespudsning, rengøring efter byggeri, malerarbejde, trappevask og udendørs- og ekstra ydelser.",

  keywords: [
    "rengøring", "professionel rengøring", "København", "Hedehusene", "Taastrup",
    "Roskilde", "Ballerup", "Glostrup", "Hvidovre", "Albertslund", "Brøndby",
    "Ishøj", "Greve", "Vallensbæk", "Herlev", "Rødovre", "Frederiksberg",
    "Gentofte", "Lyngby", "Bagsværd", "Kastrup", "Tårnby", "Dragør", "Solrød",
    "Køge", "Holbæk", "Ringsted", "Privat rengøring", "Erhvervsrengøring",
    "Kontorrengøring", "Hovedrengøring", "Fraflytningsrengøring", "Vinduespudsning",
    "Rengøring efter byggeri", "Malerarbejde", "Trappevask", "Udendørs ydelser"
  ],

  alternates: languageAlternates("/services"),

  openGraph: {
    title: "Professionel rengøring i København & Sjælland | CleanSpell",
    description:
      "Pålidelig privat- og erhvervsrengøring i København, Hedehusene, Taastrup, Roskilde og på Sjælland. CleanSpell leverer kontorrengøring, hovedrengøring, vinduespudsning og mange andre professionelle rengøringsydelser.",
    url: "https://www.cleanspell.dk/dan/services",
    locale: "da_DK",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};