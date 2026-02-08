import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professional Cleaning in Copenhagen & Zealand | CleanSpell",
  description:
    "Professional residential and commercial cleaning services in Copenhagen and across Zealand.",

  alternates: languageAlternates(""),

  openGraph: {
    title: "Professional Cleaning | CleanSpell",
    description:
      "Trusted cleaning services for homes and businesses in Copenhagen.",
    url: "https://www.cleanspell.dk/en",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};
