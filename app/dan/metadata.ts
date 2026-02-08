import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professionel rengøring i København & på Sjælland | CleanSpell",
  description:
    "CleanSpell tilbyder professionel rengøring til private og erhverv på hele Sjælland – inden for 70 km af København.",

  alternates: languageAlternates(""),

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
