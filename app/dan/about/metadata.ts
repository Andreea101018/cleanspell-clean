import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om CleanSpell – Professionel rengøring i København & Sjælland",
  description:
    "Mød CleanSpell – en familievirksomhed grundlagt af Victoria & Ion. Vi tilbyder pålidelig og professionel rengøring til private og erhverv i København, Hedehusene, Taastrup, Roskilde og på hele Sjælland. Fokus på kvalitet, tillid og detaljeorienteret arbejde.",

  keywords: [
    "CleanSpell", "Om os", "Rengøringsfirma", "København", "Hedehusene", "Taastrup",
    "Roskilde", "Sjælland", "Privat rengøring", "Erhvervsrengøring",
    "Kontorrengøring", "Fraflytningsrengøring", "Hovedrengøring", "Vinduespudsning",
    "Rengøring efter byggeri", "Malerarbejde", "Trappevask", "Udendørs ydelser",
    "Familievirksomhed", "Victoria & Ion", "Tillid", "Kvalitet"
  ],

  alternates: {
    canonical: "https://www.cleanspell.dk/dan/about",
    languages: {
      da: "https://www.cleanspell.dk/dan/about",
      en: "https://www.cleanspell.dk/en/about",
      "x-default": "https://www.cleanspell.dk/dan/about",
    },
  },

  openGraph: {
    title: "Om CleanSpell – Professionel rengøring i København & Sjælland",
    description:
      "Lær mere om CleanSpell – vores historie, værdier og team. Professionel rengøring til private og erhverv i København og på Sjælland, drevet af Victoria & Ion.",
    url: "https://www.cleanspell.dk/dan/about",
    siteName: "CleanSpell",
    locale: "da_DK",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};