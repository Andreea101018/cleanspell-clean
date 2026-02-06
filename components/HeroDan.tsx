"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroDa() {
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
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white!">
              Nordisk Renhed og Bygg ApS
            </p>

            <p className="text-xs tracking-widest uppercase text-white! mb-3">
              Servicerer Sjælland – inden for 70 km fra København
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.05] text-white">
              <span className="block font-normal text-white">
                Dit rene rum starter her
              </span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-lg text-white!">
              Vi tilbyder professionel rengøring til private hjem og virksomheder
              – udført med omhu, stabil kvalitet og respekt for dit rum
            </p>

            <div className="pt-6 flex gap-6">
              <Link
                href="/dan/contact"
                className="rounded-md bg-[#6BCF2D] px-8 py-3 text-sm font-semibold text-white hover:bg-[#2BB673] transition"
              >
                Kontakt os
              </Link>

              <Link
                href="/dan/services"
                className="rounded-md border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#1F2E45] transition"
              >
                Se vores ydelser
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
                alt="Komplet rengøring"
                width={80}
                height={140}
                unoptimized
              />
            </div>

            <h3 className="font-semibold text-[#1F2E45]">
              Komplet rengøring
            </h3>

            <p className="mt-3 text-sm text-[#64748B]">
              Til private hjem, kontorer og virksomheder
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="flex w-full justify-center mb-6">
              <Image
                src="/icon1.2.png"
                alt="Gennemsigtige priser"
                width={80}
                height={140}
                unoptimized
              />
            </div>

            <h3 className="font-semibold text-[#1F2E45]">
              Gennemsigtige priser
            </h3>

            <p className="mt-3 text-sm text-[#64748B]">
              Klare priser uden skjulte omkostninger
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="flex w-full justify-center mb-6">
              <Image
                src="/icon10.png"
                alt="Professionelt udstyr"
                width={80}
                height={140}
                unoptimized
              />
            </div>

            <h3 className="font-semibold text-[#1F2E45]">
              Professionelt udstyr
            </h3>

            <p className="mt-3 text-sm text-[#64748B]">
              Effektive og miljøvenlige produkter
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="flex w-full justify-center mb-6">
              <Image
                src="/team.png"
                alt="Erfarent personale"
                width={80}
                height={140}
                unoptimized
              />
            </div>

            <h3 className="font-semibold text-[#1F2E45]">
              Erfarent personale
            </h3>

            <p className="mt-3 text-sm text-[#64748B]">
              Et professionelt team du kan stole på
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
