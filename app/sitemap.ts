import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cleanspell.dk";

  const pages = [
    "",
    "/services",
    "/gallery",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    // DAN
    sitemap.push({
      url: `${baseUrl}/dan${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.8,
      alternates: {
        languages: {
          da: `${baseUrl}/dan${page}`,
          en: `${baseUrl}/en${page}`,
          "x-default": `${baseUrl}/dan${page}`,
        },
      },
    });

    // EN
    sitemap.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          da: `${baseUrl}/dan${page}`,
          en: `${baseUrl}/en${page}`,
          "x-default": `${baseUrl}/dan${page}`,
        },
      },
    });
  });

  return sitemap;
}
