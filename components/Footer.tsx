"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="relative">
      {/* ===== IMAGE STRIP ===== */}
      <div className="relative h-20 w-full overflow-hidden">
        <Image
          src="/picture1.png"
          alt="Clean environment"
          fill
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6F4EE]/90 to-[#F8FAFC]" />
      </div>

      {/* ===== FOOTER CONTENT ===== */}
      <div className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">

            {/* BRAND */}
            <div className="md:flex-1 space-y-4 max-w-sm">
              <Image
                src="/logo2.png"
                alt="CleanSpell logo"
                width={200}
                height={64}
                className="object-contain"
              />
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEnglish
                  ? "CleanSpell is operated by Nordisk Renhed og Bygg ApS. Professional cleaning for homes and businesses in Copenhagen, Hedehusene, Taastrup, Roskilde, Ballerup, Glostrup, Hvidovre, Albertslund and across Zealand – including house cleaning, office cleaning, deep cleaning and window cleaning, always delivered with care, reliability and attention to detail."
                  : "CleanSpell drives af Nordisk Renhed og Bygg ApS. Vi leverer professionel rengøring til private hjem og virksomheder i København, Hedehusene, Taastrup, Roskilde, Ballerup, Glostrup, Hvidovre, Albertslund og resten af Sjælland – herunder privat rengøring, erhvervsrengøring, hovedrengøring og vinduespudsning, altid med fokus på kvalitet, stabil service og respekt for dit rum."}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a href="https://www.instagram.com/cleanspell.dk" aria-label="Instagram" className="hover:opacity-80 transition">
                  <Image src="/Instagram_icon.svg" alt="Instagram" width={28} height={28} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587875840303" aria-label="Facebook" className="hover:opacity-80 transition">
                  <Image src="/fb.webp" alt="Facebook" width={28} height={28} />
                </a>
                <a href="https://www.tiktok.com/@cleanspell" aria-label="TikTok" className="hover:opacity-80 transition">
                  <Image src="/tiktok.svg" alt="TikTok" width={28} height={28} />
                </a>
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-col sm:flex-row gap-10 md:gap-16 md:flex-1 justify-between">
              {/* PAGES */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{isEnglish ? "Pages" : "Sider"}</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href={isEnglish ? "/en" : "/dan"}>{isEnglish ? "Home" : "Forside"}</Link></li>
                  <li><Link href={isEnglish ? "/en/services" : "/dan/services"}>{isEnglish ? "Services" : "Ydelser"}</Link></li>
                  <li><Link href={isEnglish ? "/en/gallery" : "/dan/gallery"}>{isEnglish ? "Gallery" : "Galleri"}</Link></li>
                  <li><Link href={isEnglish ? "/en/about" : "/dan/about"}>{isEnglish ? "About Us" : "Om os"}</Link></li>
                  <li><Link href={isEnglish ? "/en/contact" : "/dan/contact"}>{isEnglish ? "Contact" : "Kontakt"}</Link></li>
                </ul>
              </div>

              {/* LEGAL */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{isEnglish ? "Legal" : "Juridisk"}</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href={isEnglish ? "/en/privacy" : "/dan/privacy"}>{isEnglish ? "Privacy Policy" : "Privatlivspolitik"}</Link></li>
                  <li><Link href={isEnglish ? "/en/cookies" : "/dan/cookies"}>{isEnglish ? "Cookie Policy" : "Cookiepolitik"}</Link></li>
                  <li><Link href={isEnglish ? "/en/terms" : "/dan/terms"}>{isEnglish ? "Terms & Conditions" : "Vilkår & Betingelser"}</Link></li>
                </ul>
              </div>

              {/* COMPANY INFO */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{isEnglish ? "Company Info" : "Virksomhedsoplysninger"}</h4>
                <ul className="space-y-1 text-sm text-slate-600 leading-relaxed">
                  <li>Nordisk Renhed og Bygg ApS</li>
                  <li>CVR: 45400018</li>
                  <li>Sporstræde 39, 2640 Hedehusene</li>
                  <li>Email: info@cleanspell.dk</li>
                  <li className="pt-2">
                    <span className="font-medium">{isEnglish ? "Opening hours:" : "Åbningstider:"}</span>
                    <br />
                    {isEnglish ? "Mon–Fri, 08:00–16:00" : "Man–Fre, 08:00–16:00"}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-[#EEF6F2] border-t border-[#D6ECE3]">
        <div className="max-w-7xl mx-auto px-8 py-3 text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} CleanSpell · Nordisk Renhed og Bygg ApS · CVR 45400018
        </div>
      </div>
    </footer>
  );
}