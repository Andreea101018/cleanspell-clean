"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEnglish = pathname.startsWith("/en");
  const langPrefix = isEnglish ? "/en" : "/dan";

  const switchLangPath = isEnglish
    ? pathname.replace("/en", "/dan")
    : pathname.replace("/dan", "/en");

  const navItems = [
    { da: "Forside", en: "Home", href: "" },
    { da: "Ydelser", en: "Services", href: "services" },
    { da: "Galleri", en: "Gallery", href: "gallery" },
    { da: "Om os", en: "About us", href: "about" },
    { da: "Kontakt", en: "Contact", href: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <Link href={langPrefix} prefetch>
          <Image
            src="/logo2.png"
            alt="CleanSpell"
            width={280}
            height={100}
            priority
            className="h-[90px] w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const href = item.href ? `${langPrefix}/${item.href}` : langPrefix;
            const isActive = pathname === href || pathname === `${href}/`;

            return (
              <Link
                key={item.href || "home"}
                href={href}
                prefetch
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-[#E6F4EE] text-[#2BB673]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[#2BB673]"
                  }`}
              >
                {isEnglish ? item.en : item.da}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">

          {/* LANGUAGE SWITCH */}
          <Link
            href={switchLangPath}
            prefetch
            className="text-sm font-medium text-slate-500 hover:text-[#2BB673]"
          >
            {isEnglish ? "DA" : "EN"}
          </Link>

          {/* DESKTOP CONTACT BUTTON */}
          <Link
            href={`${langPrefix}/contact`}
            prefetch
            className="hidden md:inline-flex rounded-full bg-[#2BB673] px-6 py-2 text-sm font-semibold text-white hover:bg-[#26a866] transition"
          >
            {isEnglish ? "Contact us" : "Kontakt os"}
          </Link>

          {/* MOBILE CONTACT ICON */}
          <Link
            href={`${langPrefix}/contact`}
            aria-label="Contact"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#2BB673] text-white text-lg hover:bg-[#26a866] transition"
          >
            💬
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl text-slate-700 hover:text-[#2BB673]"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-sm">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {navItems.map((item) => {
              const href = item.href ? `${langPrefix}/${item.href}` : langPrefix;

              return (
                <Link
                  key={item.href || "home"}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-slate-700 font-medium hover:text-[#2BB673]"
                >
                  {isEnglish ? item.en : item.da}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <Link
              href={`${langPrefix}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full bg-[#2BB673] px-6 py-3 text-white font-semibold"
            >
              {isEnglish ? "Contact us" : "Kontakt os"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
