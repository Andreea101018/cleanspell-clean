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
              We provide professional cleaning for private homes, offices and businesses
              across Zealand, within approximately 70 km of Copenhagen. Our clients are
              located in Copenhagen, Hedehusene, Taastrup, Roskilde, Ballerup, Glostrup,
              Hvidovre, Albertslund, Brøndby, Ishøj and Greve – where we deliver reliable
              house cleaning, commercial cleaning and office cleaning with a strong focus
              on quality, consistent service and attention to detail.
            </p>

            <p>
              With many years of experience in professional cleaning, we offer a wide
              range of services including house cleaning, office cleaning, deep cleaning
              and window cleaning. Our solutions are always adapted to your home, your
              workplace and your specific needs, ensuring spaces that feel clean, fresh
              and welcoming.
            </p>

            <p>
              Whether you need house cleaning for your home, commercial cleaning for
              offices or professional window cleaning, our team works carefully and uses
              professional equipment to ensure reliable, high-quality results every time.
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
