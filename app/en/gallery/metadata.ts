import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Cleaning Results – See Our Work | CleanSpell",
  description:
    "Explore real before-and-after photos from professional residential and commercial cleaning projects in Copenhagen, Hedehusene, Taastrup, Roskilde, and across Zealand. Proven results from house cleaning, office cleaning, move-out cleaning, deep cleaning, and window cleaning.",
  keywords: [
    "cleaning", "professional cleaning", "Copenhagen", "Zealand", "house cleaning",
    "office cleaning", "move-out cleaning", "deep cleaning", "window cleaning",
    "before and after photos", "cleaning results"
  ],
  alternates: {
    canonical: "https://www.cleanspell.dk/en/gallery",
  },
  openGraph: {
    title: "Before & After Cleaning Results | CleanSpell",
    description:
      "See real before-and-after photos from completed professional cleaning projects. Documented results for residential and commercial cleaning in Copenhagen and across Zealand.",
    url: "https://www.cleanspell.dk/en/gallery",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.cleanspell.dk/gallery/kitchen-after.jpg",
        width: 1200,
        height: 630,
        alt: "Professional cleaning before and after – kitchen",
      },
      {
        url: "https://www.cleanspell.dk/gallery/bathroom-after.jpg",
        width: 1200,
        height: 630,
        alt: "Professional cleaning before and after – bathroom",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};