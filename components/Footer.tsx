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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div className="space-y-4">
              <Image
                src="/logo2.png"
                alt="CleanSpell logo"
                width={200}
                height={64}
                className="object-contain"
              />

              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                {isEnglish
                  ? "CleanSpell is operated by Nordisk Renhed og Bygg ApS. We provide professional cleaning across Zealand, within 70 km of Copenhagen, delivered with care, trust, and attention to detail."
                  : "CleanSpell drives af Nordisk Renhed og Bygg ApS. Vi leverer professionel rengøring på Sjælland, inden for 70 km fra København, med fokus på kvalitet, tillid og omhu."}
              </p>

              {/* SOCIAL MEDIA */}
              <div className="flex items-center gap-4 pt-1">
                <a href="https://wa.me/4571316499?text=Hello%20I%20would%20like%20a%20cleaning%20offer" aria-label="WhatsApp" className="hover:opacity-80 transition">
                  <Image src="/WhatsApp.png" alt="WhatsApp" width={28} height={28} />
                </a>
                <a href="https://www.instagram.com/cleanspell.dk/?fbclid=IwY2xjawPywlFleHRuA2FlbQIxMQBicmlkETBicXRHMzdkdTl5N1Nacktvc3J0YwZhcHBfaWQBMAABHs9ASMZNSt5dhfnxwiS52pxIMVE2HaP6_8Ay0timqQpcxNVwiT2vID5XcVNW_aem_dgoE-s-dU3oB7DY0TwZoiA" aria-label="Instagram" className="hover:opacity-80 transition">
                  <Image src="/Instagram_icon.svg" alt="Instagram" width={28} height={28} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587875840303" aria-label="Facebook" className="hover:opacity-80 transition">
                  <Image src="/fb.webp" alt="Facebook" width={28} height={28} />
                </a>
                <a href="https://www.tiktok.com/@cleanspell?is_from_webapp=1&sender_device=pc" aria-label="TikTok" className="hover:opacity-80 transition">
                  <Image src="/tiktok.svg" alt="TikTok" width={28} height={28} />
                </a>
              </div>
            </div>

            {/* PAGES */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {isEnglish ? "Pages" : "Sider"}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href={isEnglish ? "/en" : "/dan"}>{isEnglish ? "Home" : "Forside"}</Link></li>
                <li><Link href={isEnglish ? "/en/services" : "/dan/services"}>{isEnglish ? "Services" : "Ydelser"}</Link></li>
                <li><Link href={isEnglish ? "/en/gallery" : "/dan/gallery"}>{isEnglish ? "Gallery" : "Galleri"}</Link></li>
                <li><Link href={isEnglish ? "/en/about" : "/dan/about"}>{isEnglish ? "About us" : "Om os"}</Link></li>
                <li><Link href={isEnglish ? "/en/contact" : "/dan/contact"}>{isEnglish ? "Contact" : "Kontakt"}</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {isEnglish ? "Legal" : "Juridisk"}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link href={isEnglish ? "/en/privacy" : "/dan/privacy"}>
                    {isEnglish ? "Privacy Policy" : "Privatlivspolitik"}
                  </Link>
                </li>
                <li>
                  <Link href={isEnglish ? "/en/cookies" : "/dan/cookies"}>
                    {isEnglish ? "Cookie Policy" : "Cookiepolitik"}
                  </Link>
                </li>
                <li>
                  <Link href={isEnglish ? "/en/terms" : "/dan/terms"}>
                    {isEnglish ? "Terms & Conditions" : "Vilkår & betingelser"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY INFO */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                {isEnglish ? "Company information" : "Virksomhedsoplysninger"}
              </h4>

              <ul className="space-y-2 text-sm text-slate-600">
                <li>Nordisk Renhed og Bygg ApS</li>
                <li>CVR: 45400018</li>
                <li>
                  Sporstræde 39,<br />
                  2640 Hedehusene
                </li>
                <li>Email Address: info@nordiskrenhedogbygg.dk</li>
                <li>
                  <a href="tel:+4571316499" className="hover:underline">
                    +45 71 31 64 99
                  </a>
                </li>

                {/* OPENING HOURS */}
                <li className="pt-2">
                  <span className="font-medium text-slate-800">
                    {isEnglish ? "Opening hours:" : "Åbningstider:"}
                  </span>
                  <br />
                  <span>
                    {isEnglish ? "Mon–Fri, 08:00–16:00" : "Man–Fre, 08:00–16:00"}
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-[#EEF6F2] border-t border-[#D6ECE3]">
        <div className="max-w-7xl mx-auto px-8 py-3 text-xs text-slate-600">
          © {new Date().getFullYear()} CleanSpell · Nordisk Renhed og Bygg ApS · CVR 45400018
        </div>
      </div>
    </footer>
  );
}
