import HeroEn from "@/components/HeroEn";
import CleanSpellConceptEn from "@/components/CleanSpellConceptEn";
import ServicesGridEn from "@/components/ServicesGridEn";
import CleanSpellPartnerEn from "@/components/CleanSpellPartnerEn";
import BeforeAfterGalleryEn from "@/components/BeforeAfterGalleryEn";
import WhyChooseUsEn from "@/components/WhyChooseUsEn";



export default function HomePage() {
  return (
    <main className="bg-white text-[#1F2E45]">

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
