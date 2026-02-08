import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professional Cleaning Services | CleanSpell",
  description:
    "Professional cleaning services for homes and businesses across Zealand.",

  alternates: languageAlternates("/services"),

  openGraph: {
    title: "Professional Cleaning Services | CleanSpell",
    description:
      "High-quality residential and commercial cleaning services.",
    url: "https://www.cleanspell.dk/en/services",
    locale: "en_US",
    type: "website",
  },

  robots: { index: true, follow: true },
};
