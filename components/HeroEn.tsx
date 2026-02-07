"use client";

import Link from "next/link";
import Image from "next/image";


export default function HeroEn() {
  return (
    <section className="relative">
      {/* HERO BACKGROUND */}
      <div
        className="relative h-[75vh] min-h-155 bg-cover bg-center"
        style={{ backgroundImage: "url('/o.png')" }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/30 to-transparent" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-8 flex items-center">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white!">
              Nordisk Renhed og Bygg ApS
            </p>

            <p className="text-xs tracking-widest uppercase text-white! mb-3">
  Serving Zealand - within 70 km of Copenhagen
</p>


<h1 className="text-4xl md:text-5xl font-bold leading-[1.05] text-white">
  <span className="relative inline-block font-medium italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
    Cleaning doesn’t happen by itself. That’s why choosing right matters.
  </span>
</h1>




            <p className="text-base md:text-lg leading-relaxed max-w-lg text-white!">
             We provide professional cleaning for homes and businesses, delivered with care, consistency, and respect for your space.
            </p>

            <div className="pt-6 flex gap-6">
              <Link
                href="/en/contact"
                className="rounded-md bg-[#6BCF2D] px-8 py-3 text-sm font-semibold text-white hover:bg-[#2BB673] transition"
              >
                Contact us
              </Link>

              <Link
                href="/en/services"
                className="rounded-md border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#1F2E45] transition"
              >
                View our services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="relative z-20 -mt-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">


          {/* CARD 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
<div className="flex w-full justify-center mb-6">
  <Image
    src="/icon9.png"
    alt="Complete cleaning"
    width={80}
    height={140}
    unoptimized
  />
</div>

            <h3 className="font-semibold text-[#1F2E45]">
              Complete cleaning
            </h3>

            <p className="mt-3 text-sm text-[#64748B]">
              For homes, offices, and businesses

            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">

<div className="flex w-full justify-center mb-6">
  <Image
    src="/icon1.2.png"
    alt="Complete cleaning"
    width={80}
    height={140}
    unoptimized
  />
</div>
            <h3 className="font-semibold text-[#1F2E45]">
              Transparent pricing
            </h3>
            <p className="mt-3 text-sm text-[#64748B]">
              Clear prices with no hidden costs

            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
<div className="flex w-full justify-center mb-6">
  <Image
    src="/icon10.png"
    alt="Complete cleaning"
    width={80}
    height={140}
    unoptimized
  />
</div>
            <h3 className="font-semibold text-[#1F2E45]">
              Professional equipment
            </h3>
            <p className="mt-3 text-sm text-[#64748B]">
              Effective, eco-friendly products

            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
<div className="flex w-full justify-center mb-6">
  <Image
    src="/team.png"
    alt="Complete cleaning"
    width={80}
    height={140}
    unoptimized
  />
</div>
            <h3 className="font-semibold text-[#1F2E45]">
              Experienced staff
            </h3>
            <p className="mt-3 text-sm text-[#64748B]">
              A trained team you can trust

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
