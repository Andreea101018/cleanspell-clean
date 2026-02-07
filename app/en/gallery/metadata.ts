import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Cleaning Results – See Our Work",
  description:
    "Real before-and-after photos from professional residential and commercial cleaning projects. See documented results delivered with care and attention to detail.",
  alternates: {
    canonical: "https://www.cleanspell.dk/en/gallery",
  },
  openGraph: {
    title: "Before & After Cleaning Results | CleanSpell",
    description:
      "Explore real before-and-after photos from completed professional cleaning projects. Proven results for homes and businesses.",
    url: "https://www.cleanspell.dk/en/gallery",
    siteName: "CleanSpell",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.cleanspell.dk/gallery/kitchen-after.jpg",
        width: 1200,
        height: 630,
        alt: "Professional cleaning before and after results",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
