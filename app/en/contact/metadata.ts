import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Professional Cleaning | CleanSpell",
  description:
    "Contact CleanSpell for professional cleaning services in Copenhagen and across Zealand. Get a free quote today.",

  alternates: {
    canonical: "https://www.cleanspell.dk/en/contact",
    languages: {
      da: "https://www.cleanspell.dk/dan/contact",
      en: "https://www.cleanspell.dk/en/contact",
      "x-default": "https://www.cleanspell.dk/dan/contact",
    },
  },

  openGraph: {
    title: "Contact CleanSpell – Professional Cleaning",
    description:
      "Get in touch with CleanSpell for reliable residential and commercial cleaning services.",
    url: "https://www.cleanspell.dk/en/contact",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
