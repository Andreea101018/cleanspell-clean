import HeroDan from "@/components/HeroDan";
import CleanSpellConceptDan from "@/components/CleanSpellConceptDan";
import ServicesGridDan from "@/components/ServicesGridDan";
import CleanSpellPartnerDan from "@/components/CleanSpellPartnerDan";
import BeforeAfterGalleryDan from "@/components/BeforeAfterGalleryDan";
import WhyChooseUsDan from "@/components/WhyChooseUsDan";



export default function HomePage() {
  return (
    <main className="bg-white text-[#1F2E45]">

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
