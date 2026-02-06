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
    title: "Residential cleaning",
    shortText: "Reliable and detail-oriented cleaning for private homes.",
    items: [
      "Vacuuming and mopping floors in all accessible areas",
      "Cleaning kitchen surfaces, sink, and appliance exteriors",
      "Bathroom cleaning with focus on hygiene and limescale removal",
      "Dusting furniture, shelves, and reachable surfaces",
      "Waste removal and general tidying",
    ],
    images: ["/servi1.png", "/pic2.png", "/pic3.png"],
  },
  {
    key: "commercial",
    title: "Office & commercial cleaning",
    shortText: "Professional cleaning for offices and commercial spaces.",
    description:
      "Cleaning services that ensure a clean, healthy, and presentable workplace.",
    items: [
      "Cleaning of offices, meeting rooms, and workstations",
      "Sanitizing frequently touched surfaces (desks, handles, switches)",
      "Kitchenettes, break rooms, and restrooms",
      "Common areas, corridors, and reception spaces",
      "Vacuuming and mopping floors in all accessible areas",
    ],
    images: ["/servi2.png", "/pic4.png", "/pic5.png"],
  },
  {
    key: "deep",
    title: "Deep cleaning",
    shortText: "Intensive cleaning for spaces needing extra attention.",
    description: "An in-depth cleaning service ideal for seasonal refreshes.",
    items: [
      "Detailed cleaning beyond regular maintenance level",
      "Full limescale removal and deep sanitation of toilet, shower, bathtub, taps, and sink",
      "Complete kitchen cleaning, including oven, fridge, hood, and dishwasher (inside & out)",
      "Interior window cleaning, doors, skirting boards, wardrobes, sockets, fans, and floors",
      "Built-up dirt, grease, and dust removal",
      "Vacuuming and mopping floors in all accessible areas",
    ],
    images: ["/deep.png", "/pic8.png", "/pic9.png"],
  },
  {
    key: "painting",
    title: "Painting",
    shortText: "Professional interior painting services.",
    description: "Interior painting to refresh and renew your space.",
    items: [
      "Careful protection of floors and surrounding surfaces",
      "Repair of small holes and minor surface damage",
      "Light sanding of repaired areas for a smooth finish",
      "Painting of walls, ceilings, and skirting boards",
      "Bathroom painting (walls and ceiling)",
      "Light floor sanding and protective lacquer finish",
    ],
    images: ["/paint.png", "/pic13.png", "/pic12.png"],
  },
  {
    key: "outdoor",
    title: "Outdoor & extra services",
    shortText: "Cleaning for exterior areas and custom tasks.",
    description: "Flexible services for outdoor spaces and special requests.",
    items: [
      "Cleaning of terraces, balconies, and outdoor walkways",
      "Cleaning of accessible windows and exterior facades",
      "Removal of leaves, light debris, and renovation leftovers",
      "Lawn mowing, garden tidying, and flower bed cleaning",
      "Washing of outdoor furniture and shared outdoor areas",
      "Removal of green waste and bulky items",
      "Special one-time tasks on request",
    ],
    images: ["/outdoor.png", "/pic16.png","/pic17.png"],
  },
  {
    key: "windows",
    title: "Windows cleaning",
    shortText: "Professional window cleaning for clear results.",
    description:
      "Interior and exterior window cleaning for homes and businesses.",
    items: [
      "Interior and exterior window cleaning",
      "Frames, sills, and edges",
      "Glass doors and large panes",
      "Residential and commercial properties",
    ],
    images: [ "/pic19.png", "/pic18.png", "/pic20.png"],
  },
] as const;

type Service = typeof SERVICES[number];

/* ================= COMPONENT ================= */

export default function ServicesGridEn() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-10 py-24 text-center">
        {/* HEADER */}
        <p className="text-sm uppercase tracking-widest text-[#2BB673]">
          What we offer
        </p>

        <h2 className="mt-4 text-3xl font-medium text-[#1F2E45]">
          A wide range of cleaning services
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-[#64748B]">
          Professional cleaning services delivered with quality, care, and
          environmentally responsible solutions
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
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL SERVICES BUTTON */}
        <div className="mt-16">
          <Link
            href="/en/services"
            className="inline-flex items-center gap-2 rounded-full
                       bg-[#2BB673] px-10 py-4 text-white font-semibold
                       hover:bg-[#22a863] transition"
          >
            See all services →
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
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 px-10 py-12 items-center">
          <div>
            <p className="text-lg font-medium text-[#1F2E45]">
               What’s included in this service:
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
              href={`/en/services?open=${service.key}`}
              className="inline-block mt-8 rounded-md bg-[#2BB673]
                         px-6 py-3 text-white font-medium
                         hover:bg-[#22a863] transition"
            >
              View all services →
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
