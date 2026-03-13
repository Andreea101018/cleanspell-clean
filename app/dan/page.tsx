import HeroDan from "@/components/HeroDan";
import CleanSpellConceptDan from "@/components/CleanSpellConceptDan";
import ServicesGridDan from "@/components/ServicesGridDan";
import CleanSpellPartnerDan from "@/components/CleanSpellPartnerDan";
import BeforeAfterGalleryDan from "@/components/BeforeAfterGalleryDan";
import WhyChooseUsDan from "@/components/WhyChooseUsDan";

export default function HomePage() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: "CleanSpell",
    image: "https://www.cleanspell.dk/logo.png",
    url: "https://www.cleanspell.dk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sporstræde 39",
      addressLocality: "Hedehusene",
      postalCode: "2640",
      addressCountry: "DK"
    },
    areaServed: [
      "København",
      "Hedehusene",
      "Taastrup",
      "Roskilde",
      "Ballerup",
      "Glostrup",
      "Hvidovre",
      "Albertslund",
      "Brøndby",
      "Ishøj",
      "Greve",
      "Vallensbæk",
      "Herlev",
      "Rødovre",
      "Frederiksberg",
      "Gentofte",
      "Lyngby",
      "Bagsværd",
      "Kastrup",
      "Tårnby",
      "Dragør",
      "Solrød",
      "Køge",
      "Holbæk",
      "Ringsted"
    ],
    serviceType: [
      "Privat rengøring",
      "House cleaning",
      "Erhvervsrengøring",
      "Office cleaning",
      "Kontorrengøring",
      "Fraflytningsrengøring",
      "Hovedrengøring",
      "Vinduespudsning",
      "Rengøring efter byggeri",
      "Trappevask",
      "Malerarbejde",
      "Udendørs- og ekstra ydelser",
      "Professionel rengøring",
      "Bygning rengøring",
      "Ejendomsrengøring"
    ],
    openingHours: "Mo-Fr 08:00-16:00"
  };

  return (
    <main className="bg-white text-[#1F2E45]">

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <HeroDan />

      <CleanSpellPartnerDan />

      {/* CLEAN SPELL CONCEPT */}
      <CleanSpellConceptDan />

      {/* SERVICES PREVIEW */}
      <ServicesGridDan />

      <BeforeAfterGalleryDan />

      <WhyChooseUsDan />

    </main>
  );
}