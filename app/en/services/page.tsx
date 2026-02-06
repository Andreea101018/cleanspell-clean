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
    title: "Residential cleaning",
    images: ["/servi1.png", "/pic2.png", "/pic3.png"],
    items: [
      "Vacuuming and mopping floors in all accessible areas",
      "Cleaning kitchen surfaces, sink, and appliance exteriors",
      "Bathroom cleaning with focus on hygiene and limescale removal",
      "Dusting furniture, shelves, and reachable surfaces",
      "Waste removal and general tidying",
    ],
    group: "Core services",
  },
  {
    key: "commercial",
    title: "Office & commercial cleaning",
    images: ["/servi2.png", "/pic4.png", "/pic5.png"],
    items: [
      "Cleaning of offices, meeting rooms, and workstations",
      "Sanitizing frequently touched surfaces (desks, handles, switches)",
      "Kitchenettes, break rooms, and restrooms",
      "Common areas, corridors, and reception spaces",
      "Vacuuming and mopping floors in all accessible areas",
    ],
    group: "Core services",
  },
  {
    key: "moveout",
    title: "Move-out cleaning",
    images: ["/servi3.png", "/pic6.png", "/pic7.png"],
    items: [
      "Deep cleaning of all rooms from floor to ceiling",
      "Cleaning inside cabinets, drawers, and wardrobes",
      "Full kitchen cleaning including appliances (inside & out)",
      "Complete bathroom descaling and sanitation",
      "Interior windows, doors, skirting boards, wardrobes, and floors",
      "Vacuuming and mopping floors in all accessible areas",
    ],
    group: "Core services",
  },
  {
    key: "deep",
    title: "Deep cleaning",
    images: ["/deep.png", "/pic8.png", "/pic9.png"],
    items: [
      "Detailed cleaning beyond regular maintenance level",
      "Full limescale removal and deep sanitation of toilet, shower, bathtub, taps, and sink",
      "Complete kitchen cleaning, including oven, fridge, hood, and dishwasher (inside & out)",
      "Interior window cleaning, doors, skirting boards, wardrobes, sockets, fans, and floors",
      "Built-up dirt, grease, and dust removal",
      "Vacuuming and mopping floors in all accessible areas",
    ],
    group: "Core services",
  },
  {
    key: "construction",
    title: "Post-construction cleaning",
    images: ["/postconst.png", "/pic10.png", "/pic11.png"],
    items: [
      "Removal of construction dust and fine particles",
      "Cleaning of all surfaces, fixtures, and floors",
      "Paint splashes, residue, and adhesive removal",
      "Windows, frames, and interior glass cleaning",
      "Final detailing before move-in or handover",
      "Vacuuming and mopping floors in all accessible areas",
    ],
    group: "Special services",
  },
  {
    key: "painting",
    title: "Painting",
    images: ["/paint.png", "/pic13.png", "/pic12.png"],
    items: [
      "Careful protection of floors and surrounding surfaces",
      "Repair of small holes and minor surface damage",
      "Light sanding of repaired areas for a smooth finish",
      "Painting of walls, ceilings, and skirting boards",
      "Bathroom painting (walls and ceiling)",
      "Light floor sanding and protective lacquer finish",
    ],
    group: "Special services",
  },
  {
    key: "stairs",
    title: "Stairwell cleaning",
    images: ["/floors.png", "/pic15.png", "/pic14.png"],
    items: [
      "Sweeping and mopping of stairs and landings",
      "Handrails, doors, and switches",
      "Entrances and shared access areas",
      "Ideal for apartment buildings and offices",
    ],
    group: "Special services",
  },
  {
    key: "outdoor",
    title: "Outdoor & extra services",
    images: ["/outdoor.png", "/pic16.png","/pic17.png"],
    items: [
      "Cleaning of terraces, balconies, and outdoor walkways",
      "Cleaning of accessible windows and exterior facades",
      "Removal of leaves, light debris, and renovation leftovers",
      "Lawn mowing, garden tidying, and flower bed cleaning",
      "Washing of outdoor furniture and shared outdoor areas",
      "Removal of green waste and bulky items",
      "Special one-time tasks on request",
    ],
    group: "Special services",
  },
  {
    key: "windows",
    title: "Windows cleaning",
    images: [ "/pic19.png", "/pic18.png", "/pic20.png"],
    items: [
      "Interior and exterior window cleaning",
      "Frames, sills, and edges",
      "Glass doors and large panes",
      "Residential and commercial properties",
    ],
    group: "Special services",
  },
  {
    key: "custom",
    title: "Other / custom cleaning",
    images: ["/other.png"],
    items: [
      "Non-standard or one-off cleaning tasks",
      "Special requirements or focus areas",
      "Combination of multiple services",
      "Tell us what you need — we’ll find a solution",
    ],
    group: "Special services",
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
      "Core services": SERVICES.filter((s) => s.group === "Core services"),
      "Special services": SERVICES.filter((s) => s.group === "Special services"),
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
              Services
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">
              Professional cleaning, done right
            </h1>
            <p className="mt-4 text-base text-[#64748B]">
              Professional cleaning for homes and businesses done with care, consistency, and attention to detail
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
            What are you interested in?
          </h2>
          <p className="mt-2 text-[#64748B]">
            Select one or more services — completely without obligation.
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
                You’ve selected {selectedServices.length} service
                {selectedServices.length > 1 && "s"}.
              </p>

              <Link
                href={`${contactPath}?services=${query}`}
                className="inline-block rounded-md bg-[#2BB673] px-10 py-4 text-white font-medium hover:bg-[#22a863] transition"
              >
                Get a tailored quote →
              </Link>

              <p className="mt-3 text-xs text-[#64748B]">
                No obligation · Response within 24 hours
              </p>
            </div>
          )}
        </div>
      </section>

      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ServiceGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[#1F2E45]">{title}</h3>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        {children}
      </div>
    </div>
  );
}

function ServiceCard({ service, onOpen }: { service: Service; onOpen: () => void }) {
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
        <h4 className="text-lg font-medium text-[#1F2E45]">{service.title}</h4>
        <span className="mt-4 inline-block text-sm font-medium text-[#2BB673]">
          View details →
        </span>
      </div>
    </button>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
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
          <h3 className="text-2xl font-semibold text-[#1F2E45]">{service.title}</h3>
          <button
            onClick={onClose}
            className="text-sm text-[#64748B] hover:text-[#1F2E45]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 px-10 py-12 items-center">
          <div>
            <p className="text-lg font-medium text-[#1F2E45]">
               What’s included in this service:
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
