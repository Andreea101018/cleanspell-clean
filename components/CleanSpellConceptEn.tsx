"use client";

import Image from "next/image";

export default function CleanSpellConceptEn() {
  return (
    <section className="relative bg-[#F6F7F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 py-24">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-[#2BB673] font-medium">
            Our Products
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1F2E45]">
            Professional cleaning, done right
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <GlowCard
              title="Professional cleaning products"
              text="We use high-quality products made for professional cleaning and everyday use"
            />
            <GlowCard
              title="Eco-friendly and gentle"
              text="Our products are safe for people, surfaces, and the environment, with no strong smells
"
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/prod2.png"
              alt="CleanSpell professional cleaning products"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <GlowCard
              title="Safe and tested"
              text="All products meet strict professional standards for performance and safety"
            />
            <GlowCard
              title="Clean results you can feel"
              text="Fresh, clean spaces without harsh chemicals or heavy scents"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function GlowCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="relative group">
      {/* GREEN GLOW */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-[#6BCF2D]/30 blur-2xl
                   opacity-40 group-hover:opacity-60
                   transition"
      />

      <div
        className="relative bg-white rounded-2xl p-8
                   shadow-sm hover:shadow-lg
                   hover:-translate-y-1
                   transition"
      >
        <h3 className="text-lg font-medium text-[#1F2E45]">
          {title}
        </h3>
        <p className="mt-3 text-[#64748B]">
          {text}
        </p>
      </div>
    </div>
  );
}
