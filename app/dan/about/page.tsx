"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPageDa() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  // Close image modal with ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <main className="bg-white text-[#1F2E45]">
      {/* ================= HERO ================= */}
      <section className="relative bg-[#F5FBF8] overflow-hidden">
        {/* Soft decorative accent */}
        <div className="absolute top-24 right-16 w-72 h-72 bg-[#2BB673]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-8 pt-32 pb-36 grid lg:grid-cols-2 gap-16 items-center">
          {/* HERO TEXT */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#2BB673]">
              Om os
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
              Bygget på omsorg, respekt og ansvar for hvert eneste rum, vi træder ind i
            </h1>

            <p className="mt-7 text-lg text-slate-700 max-w-xl">
              En familiegrundlagt virksomhed, der leverer pålidelig rengøring og
              indvendige ydelser til private og erhverv, som værdsætter stabilitet,
              tillid og ægte omhu
            </p>

            <a
              href="/dan/contact"
              className="inline-block mt-10 bg-[#2BB673] text-white px-10 py-4 rounded-full font-medium hover:bg-[#26a865] transition"
            >
              Arbejd sammen med os
            </a>
          </div>

          {/* HERO IMAGE */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/pillow2.png"
              alt="Victoria og Ion, grundlæggere af CleanSpell"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="relative max-w-6xl mx-auto px-8 pb-24">
          <div className="grid md:grid-cols-3 gap-12">
            <Principle
              icon="◎"
              title="Vores løfte"
              text="Vi fokuserer på professionel rengøring udført korrekt, så du kan nyde et rent og behageligt rum og føle dig tryg ved hvert besøg"
            />
            <Principle
              icon="＋"
              title="Vi er fleksible"
              text="Vi tilpasser os dit hjem, din hverdag og dine behov. Ingen komplicerede processer – bare rengøring, der fungerer for dig."
            />
            <Principle
              icon="✓"
              title="Kvalitet først"
              text="Omhyggeligt arbejde, klare rutiner og stabile resultater, så dit rum både ser rent ud og føles rigtigt – hver gang"
            />
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/picture4.png')" }}
      >
        <div className="absolute inset-0 bg-white/90" />

        <div className="relative max-w-7xl mx-auto px-8 py-28">
          <div className="bg-white rounded-4xl shadow-lg p-12 grid md:grid-cols-[360px_1fr] gap-14 items-start">
            {/* FOUNDERS */}
            <div>
              <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/vicion4.png"
                  alt="Victoria og Ion, grundlæggere af CleanSpell"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Victoria & Ion — grundlæggere af CleanSpell
              </p>

              <blockquote className="mt-5 border-l-4 border-[#2BB673] pl-4 text-sm italic text-slate-600">
                “Som forældre ved vi, hvor vigtigt et rent, roligt og sundt miljø virkelig er.”
                <span className="block mt-2 not-italic text-xs text-slate-500">
                  — Victoria & Ion
                </span>
              </blockquote>
            </div>

            {/* STORY TEXT */}
            <div className="space-y-5 text-slate-700 max-w-3xl">
              <p className="font-medium">
                CleanSpell blev grundlagt af Victoria og Ion – et familieteam med
                komplementær erfaring inden for professionel rengøring og indvendige ydelser
              </p>

              <p>
                Victoria bringer flere års praktisk erfaring fra den professionelle
                rengøringsbranche. Gennem sit arbejde oplevede hun ofte, at omsorg,
                kvalitet og respekt blev nedprioriteret – og ønskede at skabe en
                virksomhed, der gjorde tingene anderledes.
              </p>

              <p>
                Ion står for vores maler- og overfladerelaterede ydelser med fokus på
                præcision, rene afslutninger og pålidelig udførelse – især ved
                fraflytning og renoveringsprojekter.
              </p>

              <p>
                Fra 2021 til 2025 blev virksomheden drevet som en mindre enkeltmandsvirksomhed,
                hvor der blev opbygget stærke fundamenter og langvarige kunderelationer
                baseret på tillid og stabilitet.
              </p>

              <p>
                I 2025 tog CleanSpell næste skridt og udviklede sig til en større virksomhed
                for at understøtte vækst, ansætte flere medarbejdere og betjene både private
                og erhvervskunder – samtidig med at processerne blev yderligere professionaliseret.
              </p>

              <p>
                CleanSpell opererer under Nordisk Renhed og Bygg ApS, hvor vores ydelser
                oprindeligt tog form. I takt med væksten blev rengøring og malerarbejde
                udviklet til selvstændige serviceområder for at sikre bedre fokus og
                konsekvent høj kvalitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="bg-[#F8FCFA]">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold mb-4">
            Rene rum, hverdagens øjeblikke
          </h2>

          <p className="text-slate-600 max-w-2xl mb-12">
            Et indblik i de miljøer, vi skaber – rolige, rene og behagelige rum,
            hvor mennesker føler sig hjemme
          </p>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <button
              onClick={() => setOpenImage("/kids.png")}
              className="md:col-span-2 relative h-[420px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/kids.png"
                alt="Familieværdier bag vores arbejde"
                fill
                className="object-cover"
              />
            </button>

            <div className="flex flex-col gap-10">
              {["/happy1.png", "/dog.png"].map((src) => (
                <button
                  key={src}
                  onClick={() => setOpenImage(src)}
                  className="relative h-[200px] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Eksempel på rengørings- og malerarbejde"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {openImage && (
        <div
          onClick={() => setOpenImage(null)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-8"
        >
          <Image
            src={openImage}
            alt="Forstørret arbejdsbillede"
            width={1400}
            height={900}
            className="max-h-full max-w-full rounded-xl object-contain"
          />
        </div>
      )}

      {/* ================= CTA ================= */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/picture1.png')" }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

        <div className="relative max-w-4xl mx-auto px-8 py-28">
          <div className="bg-white rounded-3xl shadow-lg px-10 py-14 text-center">
            <h2 className="text-3xl font-semibold">
              Klar til at komme i gang?
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Kontakt os for at tale om dine behov og få en klar pris
            </p>

            <a
              href="/dan/contact"
              className="inline-block mt-10 bg-[#2BB673] text-white px-10 py-4 rounded-full font-medium hover:bg-[#26a865] transition"
            >
              Kontakt os
            </a>

            <p className="mt-6 text-sm text-slate-500">
              Svar inden for 24 timer
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= HELPER ================= */

function Principle({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-16 h-16 rounded-full bg-[#E3F6EC] flex items-center justify-center flex-shrink-0">
        <span className="text-[#2BB673] text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-slate-600">{text}</p>
      </div>
    </div>
  );
}
