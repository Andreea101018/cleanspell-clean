"use client";

import Link from "next/link";

export default function CleanSpellPartnerDa() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#6BCF2D] leading-snug">
            En samarbejdspartner du kan stole på
          </h2>

          <div className="mt-8 space-y-6 text-[#475569] leading-relaxed">
            <p>
              Vi rengør private hjem og arbejdspladser over hele Sjælland,
              inden for 70 km fra København, med omhu og sans for detaljen –
              så dit rum føles friskt, behageligt og indbydende.
            </p>

            <p>
              Med mange års erfaring inden for professionel rengøring
              tilpasser vi vores arbejde til dit rum, dine rutiner
              og dine forventninger.
            </p>

            <p>
              Vores team arbejder grundigt, anvender professionelt udstyr
              og behandler hvert eneste rum med respekt.
            </p>
          </div>

          <Link
            href="/dan/contact"
            className="inline-flex items-center gap-2 mt-12
                       rounded-full px-12 py-3 text-sm font-semibold tracking-wide
                       text-white
                       bg-gradient-to-r from-[#2BB673] to-[#6BCF2D]
                       shadow-lg shadow-[#2BB673]/25
                       hover:translate-y-[-2px] hover:shadow-xl
                       transition-all duration-300"
          >
            Kontakt os
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/picture2.png"
            alt="Professionelt rengøringssamarbejde"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
