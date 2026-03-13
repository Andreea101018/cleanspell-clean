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
              Vi leverer professionel rengøring til private hjem, kontorer og virksomheder 
              over hele Sjælland, inden for cirka 70 km fra København. Vores kunder findes 
              blandt andet i København, Hedehusene, Taastrup, Roskilde, Ballerup, Glostrup, 
              Hvidovre, Albertslund, Brøndby, Ishøj og Greve – hvor vi tilbyder både 
              privat rengøring, erhvervsrengøring og kontorrengøring udført med fokus på 
              kvalitet, stabil service og sans for detaljer.
            </p>

            <p>
              Med mange års erfaring inden for professionel rengøring tilbyder vi en bred 
              vifte af ydelser, herunder house cleaning, office cleaning, hovedrengøring 
              og vinduespudsning. Vores løsninger tilpasses altid dit hjem, din virksomhed 
              og dine behov, så resultatet bliver rent, friskt og indbydende.
            </p>

            <p>
              Uanset om du har brug for privat rengøring i hjemmet, erhvervsrengøring til 
              kontorer eller professionel vinduespudsning, arbejder vores team grundigt 
              og anvender professionelt udstyr for at sikre et stabilt og pålideligt resultat 
              hver eneste gang.
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
