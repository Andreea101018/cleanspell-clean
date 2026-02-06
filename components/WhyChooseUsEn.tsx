"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUsEn() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/picture5.png')" }}
      />
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">

        {/* MAIN CONTENT */}
        <div className="bg-white/90 rounded-3xl px-14 py-20 shadow-xl">

          {/* HEADER — CENTERED */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#2BB673]">
              Why choose CleanSpell
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#1F2E45] leading-tight">
              Professional cleaning,
              <br />
              <span className="text-[#2BB673]">done properly</span>
            </h2>

            <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-[#2BB673]/70" />

            <p className="mt-6 text-lg text-[#6B7280]">
              Reliable cleaning for homes and workplaces,
done with care, good products, and attention to the little details

            </p>
          </div>

          {/* IMAGE VALUE SECTION */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

            <ImageValue
              image="/o1.2.png"
              title="Done properly, every time"
              text="We follow clear routines, so you always know what to expect"
            />

            <ImageValue
              image="/o2.1.png"
              title="Cleaning that fits your life"
              text="We adapt the cleaning to your space, your schedule, and your wishes"
            />

            <ImageValue
              image="/o3.1.png"
              title="Safe, quality products"
              text="Effective products that are gentle, eco-friendly, and safe to use"
            />

          </div>
        </div>

        {/* CTA — UNCHANGED */}
        <div className="mt-24 flex justify-center">
          <div className="relative bg-white rounded-3xl shadow-xl px-16 py-16 max-w-4xl w-full text-center">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-20 rounded-full bg-[#2BB673]" />

            <h3 className="text-3xl md:text-4xl font-semibold text-[#1F2E45]">
              Ready to get started?
            </h3>

            <p className="mt-6 text-lg text-[#6B7280] max-w-2xl mx-auto">
              Contact us to discuss your needs and get clear pricing
            </p>

            <div className="mt-12">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-full
                           bg-[#2BB673] px-14 py-4 text-base font-medium text-white
                           hover:bg-[#25a864] transition"
              >
                Contact us
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#9CA3AF]">
              Response within 24 hours
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- COMPONENT ---------- */

function ImageValue({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group text-center">

      {/* IMAGE WITH GREEN GLOW */}
      <div
        className="relative mx-auto h-[220px] rounded-2xl overflow-hidden
                   shadow-lg
                   ring-1 ring-[#2BB673]/20
                   shadow-[0_20px_50px_rgba(43,182,115,0.12)]
                   transition-all duration-300
                   group-hover:shadow-[0_30px_70px_rgba(43,182,115,0.2)]
                   group-hover:-translate-y-1"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* TEXT */}
      <h4 className="mt-6 text-lg font-medium text-[#1F2E45]">
        {title}
      </h4>

      <p className="mt-2 text-[#6B7280] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
