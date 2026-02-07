import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cleanspell.dk";

  const routes = [
    "",
    "/dan",
    "/dan/services",
    "/dan/gallery",
    "/dan/about",
    "/dan/contact",
    "/dan/privacy",
    "/dan/terms",

    "/en",
    "/en/services",
    "/en/gallery",
    "/en/about",
    "/en/contact",
    "/en/privacy",
    "/en/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
