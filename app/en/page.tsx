import HeroEn from "@/components/HeroEn";
import CleanSpellConceptEn from "@/components/CleanSpellConceptEn";
import ServicesGridEn from "@/components/ServicesGridEn";
import CleanSpellPartnerEn from "@/components/CleanSpellPartnerEn";
import BeforeAfterGalleryEn from "@/components/BeforeAfterGalleryEn";
import WhyChooseUsEn from "@/components/WhyChooseUsEn";

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
        "Copenhagen","Hedehusene","Taastrup","Roskilde","Ballerup","Glostrup",
        "Hvidovre","Albertslund","Brøndby","Ishøj","Greve","Vallensbæk",
        "Herlev","Rødovre","Frederiksberg","Gentofte","Lyngby","Bagsværd",
        "Kastrup","Tårnby","Dragør","Solrød","Køge","Holbæk","Ringsted"
      ],
      serviceType: [
        "House Cleaning","Residential Cleaning","Office Cleaning",
        "Commercial Cleaning","Apartment Cleaning","Deep Cleaning",
        "Move-Out Cleaning","End of Tenancy Cleaning","Post-Construction Cleaning",
        "Window Cleaning","Painting","Staircase Cleaning","Outdoor and Extra Services",
        "Special Cleaning"
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
      <HeroEn />

      <CleanSpellPartnerEn />

      {/* CLEAN SPELL CONCEPT */}
      <CleanSpellConceptEn />

      {/* SERVICES PREVIEW */}
      <ServicesGridEn />

      <BeforeAfterGalleryEn />

      <WhyChooseUsEn />

    </main>
  );
}