"use client";

import Link from "next/link";

export default function CleanSpellPartnerEn() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#6BCF2D] leading-snug">
            A partner you can rely on
          </h2>

          <div className="mt-8 space-y-6 text-[#475569] leading-relaxed">
            <p>
              We clean private homes and workplaces across Zealand, within 70 km of Copenhagen, with care and attention so your space feels fresh, comfortable, and welcoming.
            </p>

            <p>
              With long experience in professional cleaning, we adapt our work
              to your space, your routines, and your expectations.
            </p>

            <p>
              Our team works carefully, uses professional equipment,
              and treats every space with respect.
            </p>
          </div>

          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 mt-12
                       rounded-full px-12 py-3 text-sm font-semibold tracking-wide
                       text-white
                       bg-gradient-to-r from-[#2BB673] to-[#6BCF2D]
                       shadow-lg shadow-[#2BB673]/25
                       hover:translate-y-[-2px] hover:shadow-xl
                       transition-all duration-300"
          >
            Contact us
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/picture2.png"
            alt="Professional cleaning partnership"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
