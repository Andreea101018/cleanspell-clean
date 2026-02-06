"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";

/* ================= DATA ================= */

const SHARED_IMAGES = ["/servi1.png", "/servi2.png", "/servi3.png"] as const;

const SERVICES = [
  {
    key: "private",
    title: "Privat rengøring",
    shortText: "Pålidelig og grundig rengøring til private hjem.",
    items: [
      "Støvsugning og gulvvask i alle tilgængelige rum",
      "Rengøring af køkkenoverflader, vask og ydersider af hårde hvidevarer",
      "Rengøring af badeværelse med fokus på hygiejne og fjernelse af kalk",
      "Aftørring af møbler, hylder og tilgængelige overflader",
      "Affaldshåndtering og generel oprydning",
    ],
    images: ["/servi1.png", "/pic2.png", "/pic3.png"],
  },
  {
    key: "commercial",
    title: "Kontor- og erhvervsrengøring",
    shortText: "Professionel rengøring af kontorer og erhvervslokaler.",
    description:
      "Rengøringsløsninger der sikrer et rent, sundt og præsentabelt arbejdsmiljø.",
    items: [
      "Rengøring af kontorer, mødelokaler og arbejdsstationer",
      "Desinficering af ofte berørte overflader (skriveborde, håndtag, kontakter)",
      "Tekøkkener, pauserum og toiletter",
      "Fællesarealer, gange og receptioner",
      "Støvsugning og gulvvask i alle tilgængelige områder",
    ],
    images: ["/servi2.png", "/pic4.png", "/pic5.png"],
  },
  {
    key: "deep",
    title: "Hovedrengøring",
    shortText: "Grundig rengøring til rum med behov for ekstra opmærksomhed.",
    description: "En dybdegående rengøring – ideel til sæsonrengøring.",
    items: [
      "Detaljeret rengøring ud over almindeligt vedligehold",
      "Fuld kalkfjernelse og dybdegående rengøring af toilet, bruser, badekar, armaturer og håndvask",
      "Komplet køkkenrengøring inkl. ovn, køleskab, emhætte og opvaskemaskine (indvendigt og udvendigt)",
      "Indvendig vinduespudsning, døre, fodpaneler, skabe, stikkontakter, ventilatorer og gulve",
      "Fjernelse af indgroet snavs, fedt og støv",
      "Støvsugning og gulvvask i alle tilgængelige områder",
    ],
    images: ["/deep.png", "/pic8.png", "/pic9.png"],
  },
  {
    key: "painting",
    title: "Malerarbejde",
    shortText: "Professionelt indendørs malerarbejde.",
    description: "Indvendig maling der giver dit rum nyt liv.",
    items: [
      "Grundig afdækning af gulve og omkringliggende overflader",
      "Reparation af små huller og mindre skader",
      "Let slibning af reparerede områder for et pænt resultat",
      "Maling af vægge, lofter og fodpaneler",
      "Maling af badeværelse (vægge og loft)",
      "Let gulvslibning og beskyttende lakering",
    ],
    images: ["/paint.png", "/pic13.png", "/pic12.png"],
  },
  {
    key: "outdoor",
    title: "Udendørs- og ekstra ydelser",
    shortText: "Rengøring af udendørsarealer og specialopgaver.",
    description: "Fleksible løsninger til udendørsarealer og særlige behov.",
    items: [
      "Rengøring af terrasser, altaner og udendørs gangarealer",
      "Rengøring af tilgængelige vinduer og udvendige facader",
      "Fjernelse af blade, let affald og rester efter renovering",
      "Græsslåning, haveoprydning og rengøring af blomsterbede",
      "Vask af havemøbler og fælles udendørsområder",
      "Bortskaffelse af haveaffald og storskrald",
      "Særlige engangsopgaver efter aftale",
    ],
    images: ["/outdoor.png", "/pic16.png","/pic17.png"],
  },
  {
    key: "windows",
    title: "Vinduespudsning",
    shortText: "Professionel vinduespudsning med klare resultater.",
    description:
      "Indvendig og udvendig vinduespudsning til private og erhverv.",
    items: [
      "Indvendig og udvendig vinduespudsning",
      "Rammer, karme og kanter",
      "Glasdøre og store glaspartier",
      "Private boliger og erhvervsejendomme",
    ],
    images: [ "/pic19.png", "/pic18.png", "/pic20.png"],
  },
] as const;

type Service = typeof SERVICES[number];

/* ================= COMPONENT ================= */

export default function ServicesGridDa() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-10 py-24 text-center">
        {/* HEADER */}
        <p className="text-sm uppercase tracking-widest text-[#2BB673]">
          Hvad vi tilbyder
        </p>

        <h2 className="mt-4 text-3xl font-medium text-[#1F2E45]">
          Et bredt udvalg af rengøringsydelser
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-[#64748B]">
          Professionelle rengøringsløsninger leveret med kvalitet, omhu
          og miljøansvarlige metoder
        </p>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {SERVICES.map((service) => (
            <div
              key={service.key}
              className="group rounded-2xl bg-white
                         shadow-[0_12px_30px_-14px_rgba(43,182,115,0.35)]
                         hover:shadow-[0_18px_40px_-12px_rgba(43,182,115,0.55)]
                         transition-shadow duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src={service.images[0]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h3 className="text-lg font-medium text-[#1F2E45]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[#64748B] leading-relaxed">
                  {service.shortText}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="inline-block mt-6 rounded-full bg-[#2BB673]
                             px-6 py-2 text-xs font-semibold text-white
                             hover:bg-[#22a863] transition"
                >
                  LÆS MERE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL SERVICES BUTTON */}
        <div className="mt-16">
          <Link
            href="/dan/services"
            className="inline-flex items-center gap-2 rounded-full
                       bg-[#2BB673] px-10 py-4 text-white font-semibold
                       hover:bg-[#22a863] transition"
          >
            Se alle ydelser →
          </Link>
        </div>
      </div>

      {/* MODAL */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  );
}

/* ================= MODAL ================= */

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-5xl w-full rounded-2xl overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-10 py-6 border-b border-slate-200">
          <h3 className="text-2xl font-semibold text-[#1F2E45]">
            {service.title}
          </h3>
          <button
            onClick={onClose}
            className="text-sm text-[#64748B] hover:text-[#1F2E45]"
          >
            Luk
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 px-10 py-12 items-center">
          <div>
            <p className="text-lg font-medium text-[#1F2E45]">
              Dette er inkluderet i ydelsen:
            </p>

            <ul className="mt-6 space-y-4 text-[#334155]">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#2BB673]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/dan/services?open=${service.key}`}
              className="inline-block mt-8 rounded-md bg-[#2BB673]
                         px-6 py-3 text-white font-medium
                         hover:bg-[#22a863] transition"
            >
              Se alle ydelser →
            </Link>
          </div>

          <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-sm">
            <AutoCarousel images={service.images} />
          </div>
        </div>
      </div>
    </div>
  );
}
