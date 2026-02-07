import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professionel rengøring i København & på Sjælland | CleanSpell",
  description:
    "CleanSpell leverer professionel rengøring til private og erhverv på hele Sjælland – inden for 70 km af København. Pålidelig rengøring med fokus på kvalitet, stabilitet og miljøvenlige produkter.",
  alternates: {
    canonical: "https://www.cleanspell.dk/dan",
  },
  openGraph: {
    title: "CleanSpell – Professionel rengøring udført korrekt",
    description:
      "Professionel rengøring til boliger og virksomheder i København og på Sjælland. Gennemsigtige priser, erfarent personale og stabile resultater.",
    url: "https://www.cleanspell.dk/dan",
    siteName: "CleanSpell",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "https://www.cleanspell.dk/o.png",
        width: 1200,
        height: 630,
        alt: "Professionelle rengøringsydelser fra CleanSpell",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
