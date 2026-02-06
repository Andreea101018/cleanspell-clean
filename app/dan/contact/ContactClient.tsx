"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES } from "@/app/constants/servicesdan";

export default function ContactClient() {

  const searchParams = useSearchParams();

  /* ================= STATE ================= */
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* ================= PRESELECT SERVICES FROM URL ================= */
  useEffect(() => {
    const fromUrl = searchParams.get("services");
    if (!fromUrl) return;

    const keys = fromUrl.split(",");
    const labels = SERVICES
      .filter((s) => keys.includes(s.key))
      .map((s) => s.label);

    setSelectedServices(labels);
  }, [searchParams]);

  /* ================= CLOSE DROPDOWN ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((s) => s !== label)
        : [...prev, label]
    );
  };

  const removeImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="bg-white">
      {/* ================= CONTACT SECTION ================= */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

        <div className="relative max-w-6xl mx-auto px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* ================= LEFT – INFO ================= */}
            <div>
              <p className="text-sm uppercase tracking-wider text-[#2BB673]">
                Kontakt os
              </p>

              <div className="relative mt-6 h-[240px] rounded-3xl overflow-hidden shadow-md bg-white">
                <Image
                  src="/call.png"
                  alt="Professionel rengøringsservice"
                  fill
                  className="object-cover object-[50%_40%]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>

              <h1 className="mt-10 text-4xl font-semibold text-[#1F2E45] leading-tight">
                Et renere rum starter med en enkel samtale
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Når du kontakter os, tager vi os tid til at forstå dine behov
                og vender tilbage med et klart og skræddersyet tilbud.
              </p>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Det er helt gratis at kontakte os – og uden forpligtelser.
              </p>

              {/* TRUST LIST */}
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#2BB673]" />
                  <span className="text-[#475569] leading-snug">
                    Vi servicerer Sjælland – op til 70 km fra København
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#2BB673]" />
                  <span className="text-[#475569] leading-snug">
                    Fokus på tillid, gennemsigtighed og stabil kvalitet
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#2BB673]" />
                  <span className="text-[#475569] leading-snug">
                    Klare aftaler og forudsigelige resultater
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#2BB673]" />
                  <span className="text-[#475569] leading-snug">
                    Ingen binding og ingen skjulte omkostninger
                  </span>
                </li>
              </ul>

              {/* STARS */}
              <div className="mt-8 text-sm text-slate-600">
                ⭐⭐⭐⭐⭐ Over 100 tilfredse kunder i Storkøbenhavn
              </div>

              {/* CONTACT DETAILS */}
              <div className="mt-12 border-t border-slate-200 pt-8 space-y-2 text-slate-700">
                <p>
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+4571316499"
                    className="text-[#2BB673] hover:underline"
                  >
                    +45 71 31 64 99
                  </a>
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:info@nordiskrenhedogbygg.dk"
                    className="text-[#2BB673] hover:underline"
                  >
                    info@nordiskrenhedogbygg.dk
                  </a>
                </p>
                <p>
                  <strong>Åbningstider:</strong> Man–fre kl. 08:00–16:00
                </p>
              </div>

              {/* SOCIAL */}
              <div className="mt-14">
                <p className="text-sm font-medium text-slate-700 mb-6">
                  Følg os på sociale medier
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { src: "/WhatsApp.png", 
                      label: "WhatsApp",
                      href: "https://wa.me/4571316499?text=Hello%20I%20would%20like%20a%20cleaning%20offer" },
                      
                    { src: "/Instagram_icon.svg",
                      label: "Instagram",
                      href: "https://www.instagram.com/cleanspell.dk/?fbclid=IwY2xjawPywlFleHRuA2FlbQIxMQBicmlkETBicXRHMzdkdTl5N1Nacktvc3J0YwZhcHBfaWQBMAABHs9ASMZNSt5dhfnxwiS52pxIMVE2HaP6_8Ay0timqQpcxNVwiT2vID5XcVNW_aem_dgoE-s-dU3oB7DY0TwZoiA"},

                    { src: "/fb.webp", 
                      label: "Facebook",
                      href: "https://www.facebook.com/profile.php?id=61587875840303" },

                    { src: "/tiktok.svg", 
                      label: "TikTok",
                      href: "https://www.tiktok.com/@cleanspell?is_from_webapp=1&sender_device=pc" },


                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 hover:border-[#2BB673] transition"
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={28}
                        height={28}
                      />
                      <span className="font-medium text-slate-800">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= RIGHT – FORM ================= */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
              <h2 className="text-2xl font-semibold text-[#1F2E45]">
                Få et personligt tilbud
              </h2>

              <form
                className="mt-8 space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;

                  const formData = new FormData(form);
                  formData.set("services", selectedServices.join(", "));

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    body: formData,
                  });

                  if (res.ok) {
                    alert(
                      "Tak for din henvendelse. Vi vender tilbage hurtigst muligt."
                    );

                    form.reset();
                    setSelectedServices([]);
                    setImagePreviews([]);
                    setActiveImage(null);

                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  } else {
                    alert("Noget gik galt. Prøv venligst igen.");
                  }
                }}
              >
                {/* BASIC FIELDS */}
                {[
                  { label: "Navn", type: "text", name: "name" },
                  { label: "E-mail", type: "email", name: "email" },
                  { label: "Telefonnummer", type: "tel", name: "phone" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-slate-700">
                      {field.label}
                    </label>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-[#2BB673]"
                    />
                  </div>
                ))}

                {/* SERVICES DROPDOWN */}
                <div ref={dropdownRef}>
                  <label className="block text-sm font-medium text-slate-700">
                    Ydelser
                  </label>

                  <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left"
                  >
                    {selectedServices.length === 0
                      ? "Vælg ydelser"
                      : selectedServices.join(", ")}
                  </button>

                  {dropdownOpen && (
                    <div className="mt-2 rounded-xl border border-slate-200 bg-white shadow-lg max-h-64 overflow-y-auto">
                      {SERVICES.map((s) => (
                        <label
                          key={s.key}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(s.label)}
                            onChange={() => toggleService(s.label)}
                            className="accent-[#2BB673]"
                          />
                          <span className="text-sm text-slate-700">
                            {s.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}

                  <input
                    type="hidden"
                    name="services"
                    value={selectedServices.join(", ")}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Yderligere information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  />
                </div>


{
  /*
  <div>
    <label className="block text-sm font-medium text-slate-700">
      Vedhæft billeder (valgfrit)
    </label>

    <label className="mt-2 inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#7FD6C2] px-6 py-3 text-sm font-semibold text-white">
      Vælg billeder
      <input
        ref={fileInputRef}
        type="file"
        name="images"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          setImagePreviews((prev) => [
            ...prev,
            ...files.map((f) => URL.createObjectURL(f)),
          ]);
        }}
      />
    </label>

    {imagePreviews.length > 0 && (
      <div className="mt-4 grid grid-cols-3 gap-3">
        {imagePreviews.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative group h-24 rounded-xl overflow-hidden border"
          >
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white text-xs group-hover:flex"
            >
              ✕
            </button>

            <button
              type="button"
              onClick={() => setActiveImage(src)}
              className="h-full w-full"
            >
              <img
                src={src}
                alt={`Uploadet billede ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
  */
}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#2BB673] py-4 text-white font-semibold hover:bg-[#26a866]"
                >
                  Send forespørgsel
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Vi svarer normalt inden for 24 timer
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Billedforhåndsvisning"
            className="max-h-[80vh] max-w-4xl rounded-2xl bg-white"
          />
        </div>
      )}
    </main>
  );
}
