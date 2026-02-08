import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt os – Professionel rengøring | CleanSpell",
  description:
    "Kontakt CleanSpell for professionel rengøring i København og på Sjælland. Få et gratis og uforpligtende tilbud.",

  alternates: {
    canonical: "https://www.cleanspell.dk/dan/contact",
    languages: {
      da: "https://www.cleanspell.dk/dan/contact",
      en: "https://www.cleanspell.dk/en/contact",
      "x-default": "https://www.cleanspell.dk/dan/contact",
    },
  },

  openGraph: {
    title: "Kontakt CleanSpell – Professionel rengøring",
    description:
      "Kontakt os i dag og få et skræddersyet rengøringstilbud til dit hjem eller din virksomhed.",
    url: "https://www.cleanspell.dk/dan/contact",
    siteName: "CleanSpell",
    locale: "da_DK",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
