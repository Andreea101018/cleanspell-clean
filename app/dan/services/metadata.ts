import type { Metadata } from "next";
import { languageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Professionel rengøring til private og erhverv | CleanSpell",
  description:
    "Privat rengøring, erhvervsrengøring og specialydelser udført med høj kvalitet og sans for detaljer.",

  alternates: languageAlternates("/services"),

  openGraph: {
    title: "Professionel rengøring | CleanSpell",
    description:
      "Professionel rengøring til private og erhverv på Sjælland.",
    url: "https://www.cleanspell.dk/dan/services",
    locale: "da_DK",
    type: "website",
  },

  robots: { index: true, follow: true },
};
