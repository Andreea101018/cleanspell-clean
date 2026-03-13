import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Før og efter rengøring – Se vores resultater | CleanSpell",
  description:
    "Se ægte før- og efterbilleder fra professionelle rengøringsopgaver i København, Hedehusene, Taastrup, Roskilde og på hele Sjælland. Dokumenterede resultater fra privat- og erhvervsrengøring, kontorrengøring, hovedrengøring, fraflytningsrengøring og vinduespudsning.",
  keywords: [
    "rengøring", "professionel rengøring", "København", "Sjælland", "privat rengøring",
    "erhvervsrengøring", "kontorrengøring", "hovedrengøring", "fraflytningsrengøring",
    "vinduespudsning", "før og efter billeder", "rengøringsresultater"
  ],
  alternates: {
    canonical: "https://www.cleanspell.dk/dan/gallery",
  },
  openGraph: {
    title: "Før og efter rengøring | CleanSpell",
    description:
      "Ægte før- og efterbilleder fra afsluttede professionelle rengøringsopgaver. Se kvaliteten af vores privat- og erhvervsrengøring i København og på Sjælland.",
    url: "https://www.cleanspell.dk/dan/gallery",
    siteName: "CleanSpell",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "https://www.cleanspell.dk/gallery/kitchen-after.jpg",
        width: 1200,
        height: 630,
        alt: "Før og efter professionel rengøring – køkken",
      },
      {
        url: "https://www.cleanspell.dk/gallery/bathroom-after.jpg",
        width: 1200,
        height: 630,
        alt: "Før og efter professionel rengøring – badeværelse",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};