"use client";

import Image from "next/image";
import { useState } from "react";

/* ================= IMAGE ORDER (MATCHES PAGE) ================= */

const ORDERED_IMAGES = [
  // Case studies
  "/gallery/kitchen-before.jpg",
  "/gallery/kitchen-after.jpg",
  "/gallery/bathroom-before.jpg",
  "/gallery/bathroom-after.jpg",
  "/gallery/a.3.png",
  "/gallery/a.4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/a.1.png",
  "/gallery/a.2.png",
  "/gallery/a.14.png",
  "/gallery/a.15.png",

  // Finished results

              "/gallery/e.png",
              "/gallery/v.png",
              "/gallery/a.png",
              "/gallery/b.png",
              "/gallery/a.5.png",
              "/gallery/a.6.png",
              "/gallery/f.png",
               "/gallery/pic1.jpg", 
               "/gallery/pic2.jpg",
               "/gallery/pic3.jpg",
               "/gallery/pic4.jpg",
               "/gallery/pic5.jpg",
               "/gallery/pic6.jpg",
               "/gallery/pic7.jpg",
               "/gallery/pic8.jpg",
              "/gallery/g.png",
              "/gallery/h.png",
              "/gallery/i.png",
              "/gallery/j.png",
               "/gallery/p1.jpg", 
               "/gallery/p2.jpg",
               "/gallery/p3.jpg",
               "/gallery/p4.jpg",
               "/gallery/p5.jpg",
               "/gallery/p6.jpg",
               "/gallery/p7.jpg",
               "/gallery/p8.jpg",
              "/gallery/k.png",
              "/gallery/l.png",
              "/gallery/m.png",
              "/gallery/n.png",
               "/gallery/p9.jpg", 
               "/gallery/p10.jpg",
               "/gallery/p11.jpg",
               "/gallery/p12.jpg",
               "/gallery/p13.jpg",
               "/gallery/p14.jpg",
               "/gallery/p15.jpg",
               "/gallery/p18.jpg",
               "/gallery/p19.jpg",
              "/gallery/p20.jpg",
              "/gallery/p21.jpg",
              "/gallery/q.png",

              "/gallery/s.png",
              "/gallery/u.png",
 
              "/gallery/a.7.png",
              "/gallery/a.8.png",
              "/gallery/a.9.png",

              "/gallery/a.10.png",

              "/gallery/a.11.png",
              "/gallery/a.12.png",
              "/gallery/a.13.png",
              "/gallery/a.16.png",
              "/gallery/pic9.jpg",
               "/gallery/pic10.jpg",
               "/gallery/pic11.jpg",
               "/gallery/pic12.jpg",
               "/gallery/pic13.jpg",
               "/gallery/pic14.jpg",
               "/gallery/pic15.jpg",
];

/* ================= PAGE ================= */

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openBySrc = (src: string) => {
    const index = ORDERED_IMAGES.indexOf(src);
    if (index !== -1) setActiveIndex(index);
  };

  return (
    <main className="bg-white text-[#1F2E45]">

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
              Results
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">
              Professional cleaning, done right
            </h1>
            <p className="mt-4 text-base text-[#64748B]">
              Real before-and-after photos from completed cleaning projects
            </p>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section
        className="relative py-28"
        style={{
          backgroundImage: "url('/picture2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 space-y-16">

          <GalleryCase
            title="Kitchen – sink & countertop"
            description="Built-up dirt and stains removed from sink and worktop"
            before="/gallery/kitchen-before.jpg"
            after="/gallery/kitchen-after.jpg"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Bathroom – shower floor & drain"
            description="Limescale and grime removed from tiles and drain"
            before="/gallery/bathroom-before.jpg"
            after="/gallery/bathroom-after.jpg"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Oven – interior cleaning"
            description="Burnt grease and residue fully removed from oven"
            before="/gallery/a.3.png"
            after="/gallery/a.4.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Dishwasher filter / drain"
            description="Deep cleaning of filters and internal components"
            before="/gallery/5.png"
            after="/gallery/6.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Oven – interior cleaning"
            description="Heavy grease removed from interior surfaces"
            before="/gallery/1.png"
            after="/gallery/2.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Bathroom – shower floor & drain"
            description="Limescale and grime removed from tiles and drain"
            before="/gallery/a.1.png"
            after="/gallery/a.2.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Oven tray — before & after deep cleaning"
            description="Oven tray cleaned of heavy grease and burnt-on residue"
            before="/gallery/a.14.png"
            after="/gallery/a.15.png"
            onOpen={openBySrc}
          />
          <GalleryCase
            title="Kitchen – sink & countertop"
            description="Built-up dirt and stains removed from sink and worktop"
            before="/gallery/p16.jpg"
            after="/gallery/p17.jpg"
            onOpen={openBySrc}
          />
        </div>


      </section>


      {/* ================= FINISHED RESULTS ================= */}
      <section className="bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold mb-4">
            More finished results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {ORDERED_IMAGES.slice(14).map((src, i) => (
              <CleanImage key={i} src={src} onOpen={openBySrc} />
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <ImageModal
          images={ORDERED_IMAGES}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
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

/* ================= COMPONENTS ================= */

function GalleryCase({
  title,
  description,
  before,
  after,
  onOpen,
}: {
  title: string;
  description: string;
  before: string;
  after: string;
  onOpen: (src: string) => void;
}) {
  return (
    <article className="rounded-3xl bg-white/90 border border-slate-200 p-10 space-y-8 shadow-sm">
      <div className="max-w-xl">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-4 text-[#64748B] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BEFORE */}
        <button
          type="button"
          onClick={() => onOpen(before)}
          className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
        >
          <span className="absolute top-4 left-4 z-10 rounded-full bg-slate-900/75 px-3 py-1 text-[11px] uppercase tracking-wider text-white">
            Before
          </span>

          <Image
            src={before}
            alt="Before cleaning"
            width={1200}
            height={800}
            className="h-[300px] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </button>

        {/* AFTER */}
        <button
          type="button"
          onClick={() => onOpen(after)}
          className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-[#2BB673]/30 hover:ring-[#2BB673]/50 transition"
        >
          <span className="absolute top-4 left-4 z-10 rounded-full bg-[#2BB673] px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-white">
            After
          </span>

          <Image
            src={after}
            alt="After cleaning"
            width={1200}
            height={800}
            className="h-[300px] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </button>
      </div>
    </article>
  );
}

function CleanImage({
  src,
  onOpen,
}: {
  src: string;
  onOpen: (src: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition"
    >
      <Image
        src={src}
        alt="Finished cleaning result"
        width={900}
        height={600}
        className="h-[280px] w-full object-cover transition-transform duration-200 hover:scale-[1.02]"
      />
    </button>
  );
}

/* ================= MODAL ================= */

function ImageModal({
  images,
  index,
  setIndex,
  onClose,
}: {
  images: string[];
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
}) {
  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full flex items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT */}
        <button
          onClick={prev}
          className="text-white text-5xl px-4 hover:opacity-80"
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* IMAGE */}
        <Image
          src={images[index]}
          alt="Expanded cleaning result"
          width={1800}
          height={1200}
          className="w-full max-h-[80vh] object-contain rounded-xl bg-black"
        />

        {/* RIGHT */}
        <button
          onClick={next}
          className="text-white text-5xl px-4 hover:opacity-80"
          aria-label="Next image"
        >
          ›
        </button>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-sm text-white/80 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
