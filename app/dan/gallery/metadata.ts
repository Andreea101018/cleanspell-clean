import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Før og efter rengøring – Se vores resultater",
  description:
    "Se ægte før- og efterbilleder fra professionelle rengøringsopgaver. Dokumenterede resultater fra privat- og erhvervsrengøring udført med fokus på kvalitet.",
  alternates: {
    canonical: "https://www.cleanspell.dk/dan/gallery",
  },
  openGraph: {
    title: "Før og efter rengøring | CleanSpell",
    description:
      "Ægte før- og efterbilleder fra afsluttede rengøringsopgaver. Se kvaliteten af vores professionelle rengøring.",
    url: "https://www.cleanspell.dk/dan/gallery",
    siteName: "CleanSpell",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "https://www.cleanspell.dk/gallery/kitchen-after.jpg",
        width: 1200,
        height: 630,
        alt: "Før og efter professionel rengøring",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
