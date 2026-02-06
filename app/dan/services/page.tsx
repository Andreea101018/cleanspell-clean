"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import AutoCarousel from "@/components/AutoCarousel";

/* ================= DATA ================= */

const SERVICES = [
  {
    key: "private",
    title: "Privat rengøring",
    images: ["/servi1.png", "/pic2.png", "/pic3.png"],
    items: [
      "Støvsugning og gulvvask i alle tilgængelige rum",
      "Rengøring af køkkenoverflader, vask og ydersider af hårde hvidevarer",
      "Rengøring af badeværelse med fokus på hygiejne og fjernelse af kalk",
      "Aftørring af møbler, hylder og tilgængelige overflader",
      "Affaldshåndtering og generel oprydning",
    ],
    group: "Kerneydelser",
  },
  {
    key: "commercial",
    title: "Kontor- og erhvervsrengøring",
    images: ["/servi2.png", "/pic4.png", "/pic5.png"],
    items: [
      "Rengøring af kontorer, mødelokaler og arbejdsstationer",
      "Desinficering af ofte berørte overflader (skriveborde, håndtag, kontakter)",
      "Tekøkkener, pauserum og toiletter",
      "Fællesarealer, gange og receptioner",
      "Støvsugning og gulvvask i alle tilgængelige områder",
    ],
    group: "Kerneydelser",
  },
  {
    key: "moveout",
    title: "Fraflytningsrengøring",
    images: ["/servi3.png", "/pic6.png", "/pic7.png"],
    items: [
      "Grundig rengøring af alle rum fra gulv til loft",
      "Rengøring indvendigt i skabe, skuffer og garderober",
      "Komplet køkkenrengøring inkl. hårde hvidevarer (indvendigt og udvendigt)",
      "Fuld afkalkning og rengøring af badeværelse",
      "Indvendig rengøring af vinduer, døre, fodpaneler og gulve",
      "Støvsugning og gulvvask i alle tilgængelige rum",
    ],
    group: "Kerneydelser",
  },
  {
    key: "deep",
    title: "Hovedrengøring",
    images: ["/deep.png", "/pic8.png", "/pic9.png"],
    items: [
      "Detaljeret rengøring ud over almindeligt vedligehold",
      "Fuld kalkfjernelse og grundig rengøring af toilet, bruser, badekar, armaturer og håndvask",
      "Komplet køkkenrengøring inkl. ovn, køleskab, emhætte og opvaskemaskine",
      "Indvendig rengøring af vinduer, døre, fodpaneler, skabe, kontakter og gulve",
      "Fjernelse af indgroet snavs, fedt og støv",
      "Støvsugning og gulvvask i alle tilgængelige områder",
    ],
    group: "Kerneydelser",
  },
  {
    key: "construction",
    title: "Rengøring efter byggeri",
    images: ["/postconst.png", "/pic10.png", "/pic11.png"],
    items: [
      "Fjernelse af byggestøv og fine partikler",
      "Rengøring af alle overflader, inventar og gulve",
      "Fjernelse af malerpletter, limrester og byggesnavs",
      "Rengøring af vinduer, rammer og indvendige glaspartier",
      "Detaljeret slutrengøring før indflytning eller aflevering",
      "Støvsugning og gulvvask i alle tilgængelige områder",
    ],
    group: "Specialydelser",
  },
  {
    key: "painting",
    title: "Malerarbejde",
    images: ["/paint.png", "/pic13.png", "/pic12.png"],
    items: [
      "Grundig afdækning af gulve og omkringliggende overflader",
      "Reparation af små huller og mindre skader",
      "Let slibning for et pænt og ensartet resultat",
      "Maling af vægge, lofter og fodpaneler",
      "Maling af badeværelse (vægge og loft)",
      "Let gulvslibning og beskyttende lakering",
    ],
    group: "Specialydelser",
  },
  {
    key: "stairs",
    title: "Trappevask",
    images: ["/floors.png", "/pic15.png", "/pic14.png"],
    items: [
      "Fejning og vask af trapper og repos",
      "Rengøring af gelændere, døre og kontakter",
      "Indgangspartier og fællesarealer",
      "Ideel til etageejendomme og kontorer",
    ],
    group: "Specialydelser",
  },
  {
    key: "outdoor",
    title: "Udendørs- og ekstra ydelser",
    images: ["/outdoor.png", "/pic16.png", "/pic17.png"],
    items: [
      "Rengøring af terrasser, altaner og udendørs gangarealer",
      "Rengøring af tilgængelige vinduer og facader",
      "Fjernelse af blade, let affald og rester efter renovering",
      "Græsslåning, haveoprydning og rengøring af blomsterbede",
      "Vask af havemøbler og fælles udendørsarealer",
      "Bortskaffelse af haveaffald og storskrald",
      "Særlige engangsopgaver efter aftale",
    ],
    group: "Specialydelser",
  },
  {
    key: "windows",
    title: "Vinduespudsning",
    images: ["/pic19.png", "/pic18.png", "/pic20.png"],
    items: [
      "Indvendig og udvendig vinduespudsning",
      "Rammer, karme og kanter",
      "Glasdøre og store glaspartier",
      "Private boliger og erhverv",
    ],
    group: "Specialydelser",
  },
  {
    key: "custom",
    title: "Anden / specialrengøring",
    images: ["/other.png"],
    items: [
      "Ikke-standard eller engangsopgaver",
      "Særlige behov eller fokusområder",
      "Kombination af flere ydelser",
      "Fortæl os dit behov – vi finder en løsning",
    ],
    group: "Specialydelser",
  },
] as const;

type Service = typeof SERVICES[number];
type ServiceKey = Service["key"];

/* ================= PAGE ================= */

export default function ServicesPage() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const contactPath = isEnglish ? "/en/contact" : "/dan/contact";

  const [selected, setSelected] = useState<Set<ServiceKey>>(new Set());
  const [activeService, setActiveService] = useState<Service | null>(null);

  const toggle = (key: ServiceKey) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const groupedServices = useMemo(
    () => ({
      Kerneydelser: SERVICES.filter((s) => s.group === "Kerneydelser"),
      Specialydelser: SERVICES.filter((s) => s.group === "Specialydelser"),
    }),
    []
  );

  const selectedServices = SERVICES.filter((s) => selected.has(s.key));
  const query = selectedServices.map((s) => s.key).join(",");

  return (
    <main className="bg-[#F8FAFC]">
      {/* ================= HERO ================= */}
      <section
        className="relative pt-32 pb-20"
        style={{
          backgroundImage: "url('/picture1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="rounded-2xl bg-white/95 border border-slate-200 shadow-sm px-10 py-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#2BB673]">
              Ydelser
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">
              Professionel rengøring – udført korrekt
            </h1>
            <p className="mt-4 text-base text-[#64748B]">
              Professionel rengøring til private og erhverv med fokus på kvalitet,
              stabilitet og sans for detaljer
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="pt-16 pb-32">
        <div className="max-w-6xl mx-auto px-8 space-y-32">
          {Object.entries(groupedServices).map(([group, services]) => (
            <ServiceGroup key={group} title={group}>
              {services.map((service) => (
                <ServiceCard
                  key={service.key}
                  service={service}
                  onOpen={() => setActiveService(service)}
                />
              ))}
            </ServiceGroup>
          ))}
        </div>
      </section>

      {/* ================= INTEREST + CTA ================= */}
      <section
        className="relative py-24 border-t border-slate-200"
        style={{
          backgroundImage: "url('/picture3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <h2 className="text-2xl font-semibold text-[#1F2E45]">
            Hvad er du interesseret i?
          </h2>
          <p className="mt-2 text-[#64748B]">
            Vælg en eller flere ydelser – helt uforpligtende.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <label
                  key={s.key}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-4 cursor-pointer transition ${
                    selected.has(s.key)
                      ? "border-[#2BB673] bg-[#2BB673]/5"
                      : "border-slate-300 bg-white hover:border-slate-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(s.key)}
                    onChange={() => toggle(s.key)}
                    className="h-4 w-4 accent-[#2BB673]"
                  />
                  <span className="text-sm font-medium text-[#1F2E45]">
                    {s.title}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-sm text-[#64748B] mb-4">
                Du har valgt {selectedServices.length} ydelse
                {selectedServices.length > 1 && "r"}.
              </p>

              <Link
                href={`${contactPath}?services=${query}`}
                className="inline-block rounded-md bg-[#2BB673] px-10 py-4 text-white font-medium hover:bg-[#22a863] transition"
              >
                Få et skræddersyet tilbud →
              </Link>

              <p className="mt-3 text-xs text-[#64748B]">
                Uforpligtende · Svar inden for 24 timer
              </p>
            </div>
          )}
        </div>
      </section>

      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ServiceGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[#1F2E45]">{title}</h3>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        {children}
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group text-left rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.images[0]}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="border-t border-slate-200 p-8">
        <h4 className="text-lg font-medium text-[#1F2E45]">
          {service.title}
        </h4>
        <span className="mt-4 inline-block text-sm font-medium text-[#2BB673]">
          Se detaljer →
        </span>
      </div>
    </button>
  );
}

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
        className="bg-white max-w-6xl w-full rounded-2xl overflow-hidden shadow-xl"
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

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 px-10 py-12 items-center">
          <div>
            <p className="text-lg font-medium text-[#1F2E45]">
              Dette er inkluderet i ydelsen:
            </p>

            <ul className="mt-6 space-y-4 text-base text-[#334155]">
              {service.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#2BB673]">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-sm">
            <AutoCarousel images={service.images} />
          </div>
        </div>
      </div>
    </div>
  );
}
