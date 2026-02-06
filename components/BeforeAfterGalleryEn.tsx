"use client";

import { useState } from "react";
import Link from "next/link";

export default function BeforeAfterPreviewEn() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <section className="relative bg-[#F6F7F6] overflow-hidden">
      {/* SOFT GREEN BACKGROUND ACCENT */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#2BB673]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 py-24">

        {/* HEADER — CENTERED */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#2BB673]">
            Results
          </p>

          <h2 className="mt-4 text-3xl font-medium text-[#1F2E45]">
            Before and After
          </h2>

          {/* GREEN ACCENT LINE */}
          <div className="mx-auto mt-4 h-[2px] w-14 bg-[#2BB673]/70 rounded-full" />

          <p className="mt-6 text-[#64748B]">
            Same room, same angle, only the difference
          </p>
        </div>

        {/* CASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <Case
            title="Private kitchen"
            before="/gallery/kitchen-before.jpg"
            after="/gallery/kitchen-after.jpg"
            onOpen={setOpenImage}
          />

          <Case
            title="Bathroom"
            before="/gallery/bathroom-before.jpg"
            after="/gallery/bathroom-after.jpg"
            onOpen={setOpenImage}
          />

          <Case
            title="Oven"
            before="/gallery/1.png"
            after="/gallery/2.png"
            onOpen={setOpenImage}
          />

          <Case
            title="Details"
            before="/gallery/5.png"
            after="/gallery/6.png"
            onOpen={setOpenImage}
          />
        </div>

        {/* CTA — CENTERED & GREEN */}
        <div className="mt-24 flex justify-center">
          <Link
            href="/en/gallery"
            className="inline-flex items-center gap-2 rounded-full
                       bg-[#2BB673] px-10 py-4 text-sm font-medium text-white
                       shadow-sm hover:shadow-md
                       hover:bg-[#22a863] transition"
          >
            View full gallery →
          </Link>
        </div>
      </div>

      {/* LIGHTBOX */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="Enlarged image"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute top-6 right-6 text-white text-2xl font-light"
            onClick={() => setOpenImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

/* ---------- Helpers ---------- */

function Case({
  title,
  before,
  after,
  onOpen,
}: {
  title: string;
  before: string;
  after: string;
  onOpen: (src: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-4 font-medium text-[#1F2E45]">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <ImageBlock src={before} label="Before" onOpen={onOpen} />
        <ImageBlock src={after} label="After" green onOpen={onOpen} />
      </div>
    </div>
  );
}

function ImageBlock({
  src,
  label,
  green = false,
  onOpen,
}: {
  src: string;
  label: string;
  green?: boolean;
  onOpen: (src: string) => void;
}) {
  return (
    <div
      className="relative cursor-zoom-in overflow-hidden rounded-xl"
      onClick={() => onOpen(src)}
    >
      <img
        src={src}
        alt={label}
        className="w-full h-auto rounded-xl
                   border border-gray-200
                   transition-shadow duration-300
                   hover:shadow-md"
      />

      {/* LABEL ONLY — NO OVERLAY */}
      <span
        className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-md
          ${green
            ? "bg-[#2BB673] text-white"
            : "bg-black/70 text-white"}`}
      >
        {label}
      </span>
    </div>
  );
}
