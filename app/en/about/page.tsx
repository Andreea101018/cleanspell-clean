"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
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
              About Us
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
              Built on care, respect, and responsibility for every space we enter
            </h1>

            <p className="mt-7 text-lg text-slate-700 max-w-xl">
              A family-founded company delivering reliable cleaning and interior
              services for homes and businesses that value consistency, trust,
              and genuine care
            </p>

            <a
              href="/en/contact"
              className="inline-block mt-10 bg-[#2BB673] text-white px-10 py-4 rounded-full font-medium hover:bg-[#26a865] transition"
            >
              Work with us
            </a>
          </div>

          {/* HERO IMAGE */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg ">
            <Image
              src="/pillow2.png"
              alt="Victoria and Ion, founders of CleanSpell"
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
              title="Our Promise"
              text="We focus on professional cleaning done properly so you can enjoy a clean, comfortable space and feel confident every time we visit"
            />
            <Principle
              icon="＋"
              title="We Are Flexible"
              text="We adapt to your home, schedule, and needs. No complicated processes, just cleaning that works for you."
            />
            <Principle
              icon="✓"
              title="Quality First"
              text="Careful work, clear routines, and consistent results, so your space looks clean and feels right, every time"
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
                  alt="Victoria and Ion, founders of CleanSpell"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Victoria & Ion — Founders of CleanSpell
              </p>

              <blockquote className="mt-5 border-l-4 border-[#2BB673] pl-4 text-sm italic text-slate-600">
                “As parents, we understand how important a clean, calm, and
                healthy environment truly is.”
                <span className="block mt-2 not-italic text-xs text-slate-500">
                  — Victoria & Ion
                </span>
              </blockquote>
            </div>

            {/* STORY TEXT */}
            <div className="space-y-5 text-slate-700 max-w-3xl">
              <p className="font-medium">
                CleanSpell was founded by Victoria and Ion — a family team with
                complementary expertise in professional cleaning and interior services
              </p>

              <p>
                Victoria brings several years of hands-on experience from the
                professional cleaning industry. Through her work, she saw how
                often care, quality, and respect were overlooked and set out
                to build a company that would do things differently.
              </p>

              <p>
                Ion leads our interior painting and surface-related services,
                focusing on precision, clean finishes, and reliable execution
                especially for move-out and renovation projects.
              </p>

              <p>
                From 2021 to 2025, the business operated as a small sole
                proprietorship, building strong foundations and long-term client
                relationships based on trust and consistency.
              </p>

              <p>
                In 2025, CleanSpell transitioned into a larger company to support
                growth, welcome more employees, and serve both private and
                commercial clients while further professionalizing processes
                across both service areas.
              </p>
              <p>
                CleanSpell operates under Nordisk Renhed og Bygg ApS, where our services originally began.
As the company grew, cleaning and painting were developed into dedicated service areas to provide better focus and consistently high-quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="bg-[#F8FCFA]">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold mb-4">
            Clean spaces, everyday moments
          </h2>

          <p className="text-slate-600 max-w-2xl mb-12">
            A look at the kind of environments we create - calm, clean, and comfortable spaces where people feel at home
          </p>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <button
              onClick={() => setOpenImage("/kids.png")}
              className="md:col-span-2 relative h-[420px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/kids.png"
                alt="Family-founded values behind our work"
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
                    alt="Cleaning and painting work example"
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
            alt="Expanded work example"
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
              Ready to get started?
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Contact us to discuss your needs and get clear pricing
            </p>

            <a
              href="/en/contact"
              className="inline-block mt-10 bg-[#2BB673] text-white px-10 py-4 rounded-full font-medium hover:bg-[#26a865] transition"
            >
              Contact us
            </a>

            <p className="mt-6 text-sm text-slate-500">
              Response within 24 hours
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
