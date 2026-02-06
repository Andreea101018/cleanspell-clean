"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUsDa() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/picture5.png')" }}
      />
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">

        {/* MAIN CONTENT */}
        <div className="bg-white/90 rounded-3xl px-14 py-20 shadow-xl">

          {/* HEADER — CENTERED */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#2BB673]">
              Hvorfor vælge CleanSpell
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#1F2E45] leading-tight">
              Professionel rengøring,
              <br />
              <span className="text-[#2BB673]">udført korrekt</span>
            </h2>

            <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-[#2BB673]/70" />

            <p className="mt-6 text-lg text-[#6B7280]">
              Pålidelig rengøring til private hjem og arbejdspladser,
              udført med omhu, gode produkter og sans for de små detaljer
            </p>
          </div>

          {/* IMAGE VALUE SECTION */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

            <ImageValue
              image="/o1.2.png"
              title="Udført korrekt – hver gang"
              text="Vi følger faste rutiner, så du altid ved, hvad du kan forvente"
            />

            <ImageValue
              image="/o2.1.png"
              title="Rengøring der passer til din hverdag"
              text="Vi tilpasser rengøringen til dit hjem, din tidsplan og dine ønsker"
            />

            <ImageValue
              image="/o3.1.png"
              title="Sikre kvalitetsprodukter"
              text="Effektive produkter, der er skånsomme, miljøvenlige og sikre at bruge"
            />

          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center">
          <div className="relative bg-white rounded-3xl shadow-xl px-16 py-16 max-w-4xl w-full text-center">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-20 rounded-full bg-[#2BB673]" />

            <h3 className="text-3xl md:text-4xl font-semibold text-[#1F2E45]">
              Klar til at komme i gang?
            </h3>

            <p className="mt-6 text-lg text-[#6B7280] max-w-2xl mx-auto">
              Kontakt os for at tale om dine behov og få en klar pris
            </p>

            <div className="mt-12">
              <Link
                href="/dan/contact"
                className="inline-flex items-center justify-center rounded-full
                           bg-[#2BB673] px-14 py-4 text-base font-medium text-white
                           hover:bg-[#25a864] transition"
              >
                Kontakt os
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#9CA3AF]">
              Svar inden for 24 timer
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- COMPONENT ---------- */

function ImageValue({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group text-center">

      {/* IMAGE WITH GREEN GLOW */}
      <div
        className="relative mx-auto h-[220px] rounded-2xl overflow-hidden
                   shadow-lg
                   ring-1 ring-[#2BB673]/20
                   shadow-[0_20px_50px_rgba(43,182,115,0.12)]
                   transition-all duration-300
                   group-hover:shadow-[0_30px_70px_rgba(43,182,115,0.2)]
                   group-hover:-translate-y-1"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* TEXT */}
      <h4 className="mt-6 text-lg font-medium text-[#1F2E45]">
        {title}
      </h4>

      <p className="mt-2 text-[#6B7280] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
