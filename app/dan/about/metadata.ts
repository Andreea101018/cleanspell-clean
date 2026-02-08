import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om os – Professionel rengøring | CleanSpell",
  description:
    "Læs mere om CleanSpell – et professionelt rengøringsfirma med fokus på kvalitet, tillid og stabil service.",

  alternates: {
    canonical: "https://www.cleanspell.dk/dan/about",
    languages: {
      da: "https://www.cleanspell.dk/dan/about",
      en: "https://www.cleanspell.dk/en/about",
      "x-default": "https://www.cleanspell.dk/dan/about",
    },
  },

  openGraph: {
    title: "Om CleanSpell – Professionel rengøring",
    description:
      "Vi leverer professionel rengøring med fokus på kvalitet, tillid og langsigtede kunderelationer.",
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
