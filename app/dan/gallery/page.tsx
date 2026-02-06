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
  "/gallery/k.png",
  "/gallery/l.png",
  "/gallery/m.png",
  "/gallery/n.png",
  "/gallery/o.png",
  "/gallery/p.png",
  "/gallery/q.png",
  "/gallery/s.png",
  "/gallery/u.png",
  "/gallery/v.png",
  "/gallery/a.7.png",
  "/gallery/a.8.png",
  "/gallery/a.9.png",
  "/gallery/a.10.png",
  "/gallery/v.png",
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

export default function GalleryPageDa() {
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
              Resultater
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold">
              Professionel rengøring – udført korrekt
            </h1>
            <p className="mt-4 text-base text-[#64748B]">
              Ægte før- og efterbilleder fra afsluttede rengøringsopgaver
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
            title="Køkken – vask & bordplade"
            description="Indgroet snavs og pletter fjernet fra vask og bordplade"
            before="/gallery/kitchen-before.jpg"
            after="/gallery/kitchen-after.jpg"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Badeværelse – brusegulv & afløb"
            description="Kalk og snavs fjernet fra fliser og afløb"
            before="/gallery/bathroom-before.jpg"
            after="/gallery/bathroom-after.jpg"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Ovn – indvendig rengøring"
            description="Fastbrændt fedt og madrester fjernet fra ovnen"
            before="/gallery/a.3.png"
            after="/gallery/a.4.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Opvaskemaskine – filter & afløb"
            description="Grundig rengøring af filtre og indvendige dele"
            before="/gallery/5.png"
            after="/gallery/6.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Ovn – indvendig rengøring"
            description="Kraftigt fedt fjernet fra indvendige overflader"
            before="/gallery/1.png"
            after="/gallery/2.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Badeværelse – brusegulv & afløb"
            description="Kalk og snavs fjernet fra fliser og afløb"
            before="/gallery/a.1.png"
            after="/gallery/a.2.png"
            onOpen={openBySrc}
          />

          <GalleryCase
            title="Bradepande – før og efter dybderengøring"
            description="Kraftigt fedt og fastbrændte rester fjernet"
            before="/gallery/a.14.png"
            after="/gallery/a.15.png"
            onOpen={openBySrc}
          />
        </div>
      </section>

      {/* ================= FINISHED RESULTS ================= */}
      <section className="bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-2xl font-semibold mb-4">
            Flere færdige resultater
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
              Klar til at komme i gang?
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Kontakt os for at tale om dine behov og få en klar pris
            </p>

            <a
              href="/dan/contact"
              className="inline-block mt-10 bg-[#2BB673] text-white px-10 py-4 rounded-full font-medium hover:bg-[#26a865] transition"
            >
              Kontakt os
            </a>

            <p className="mt-6 text-sm text-slate-500">
              Svar inden for 24 timer
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
            Før
          </span>

          <Image
            src={before}
            alt="Før rengøring"
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
            Efter
          </span>

          <Image
            src={after}
            alt="Efter rengøring"
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
        alt="Færdigt rengøringsresultat"
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
          aria-label="Forrige billede"
        >
          ‹
        </button>

        {/* IMAGE */}
        <Image
          src={images[index]}
          alt="Forstørret rengøringsresultat"
          width={1800}
          height={1200}
          className="w-full max-h-[80vh] object-contain rounded-xl bg-black"
        />

        {/* RIGHT */}
        <button
          onClick={next}
          className="text-white text-5xl px-4 hover:opacity-80"
          aria-label="Næste billede"
        >
          ›
        </button>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-sm text-white/80 hover:text-white"
        >
          Luk
        </button>
      </div>
    </div>
  );
}
