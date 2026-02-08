// lib/seo.ts
export function languageAlternates(path: string) {
  const base = "https://www.cleanspell.dk";

  return {
    canonical: `${base}/dan${path}`,
    languages: {
      da: `${base}/dan${path}`,
      en: `${base}/en${path}`,
      "x-default": `${base}/dan${path}`,
    },
  };
}
