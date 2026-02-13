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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  type FormStatus = "idle" | "loading" | "success" | "error";
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

    // ✅ Fire Google Ads conversion AFTER React has applied success state
  useEffect(() => {
    if (
      formStatus === "success" &&
      typeof window !== "undefined" &&
      (window as any).gtag
    ) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17938617642/Wa4cCO3bvfQbERqq5ulC",
        value: 1.0,
        currency: "DKK",
      });
    }
  }, [formStatus]);


  const toggleService = (label: string) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((s) => s !== label)
        : [...prev, label]
    );
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
                Når du kontakter os, tager vi os tid til at forstå dine behov og
                vender tilbage med et klart og skræddersyet tilbud
              </p>

 

              {/* TRUST LIST */}
              <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#2BB673]" />
                  <span className="text-[#475569] leading-snug">
                    Det er helt gratis at tage kontakt – og uden forpligtelser
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
                    Ingen binding eller skjulte gebyrer
                  </span>
                </li>
                                <li className="flex items-start gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#2BB673]" />
                  <span className="text-[#475569] leading-snug">
                    Dækker Sjælland – inden for 70 km fra København
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
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@nordiskrenhedogbygg.dk"
                    className="text-[#2BB673] hover:underline"
                  >
                    info@cleanspell.dk
                  </a>
                </p>
                <p>
                  <strong>Åbningstider:</strong> Man–Fre, 08:00–16:00
                </p>
              </div>

              {/* SOCIAL */}
              <div className="mt-14">
                <p className="text-sm font-medium text-slate-700 mb-6">
                  Følg os på sociale medier
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
{[
  {
    src: "/WhatsApp.png",
    label: "WhatsApp",
    href: "https://wa.me/4571316499",
  },
  {
    src: "/Instagram_icon.svg",
    label: "Instagram",
    href: "https://www.instagram.com/cleanspell.dk/",
  },
  {
    src: "/fb.webp",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587875840303",
  },
  {
    src: "/tiktok.svg",
    label: "TikTok",
    href: "https://www.tiktok.com/@cleanspell",
  },
].map((item) => (
  <a
    key={item.label}
    href={item.href}
    onClick={() => {
      if (
        item.label === "WhatsApp" &&
        typeof window !== "undefined" &&
        (window as any).gtag
      ) {
        (window as any).gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: "contact_page",
        });
      }
    }}
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
{formStatus === "success" ? (
  <div className="text-center py-16">
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2BB673]/10">
      <span className="text-3xl">✅</span>
    </div>

    <h2 className="text-2xl font-semibold text-[#1F2E45]">
      Din forespørgsel er blevet registreret med succes
    </h2>

    <div className="mt-6 text-slate-600 leading-relaxed max-w-lg mx-auto space-y-4">
      <p>
        Nu kan du gøre <span className="font-semibold text-[#1F2E45]">CleanSpell</span> 
        til en reel fordel for dig selv.
      </p>

      <p>
        For hver ny kunde, du anbefaler, som booker en service hos os,
        modtager du <span className="font-semibold text-[#2BB673]">300 DKK i personlig kredit </span> 
         til din næste rengøring.
      </p>

      <p className="font-medium text-[#1F2E45]">
        Ingen komplikationer. Ingen skjulte betingelser.
      </p>

      <p>
        Jo mere du anbefaler, desto mere sparer du.
      </p>

      <p className="font-semibold text-[#1F2E45]">
        Det er enkelt: Du anbefaler. Vi belønner.
      </p>
    </div>

    <div className="mt-10">
      <p className="text-sm text-slate-500">
        CleanSpell
      </p>
      <p className="text-sm text-slate-500">
        Kvalitet der giver dig fordele
      </p>
    </div>

    <button
      onClick={() => setFormStatus("idle")}
      className="mt-8 inline-flex items-center justify-center rounded-xl border border-[#2BB673] px-6 py-3 text-[#2BB673] font-semibold hover:bg-[#2BB673]/10 transition"
    >
      Send en ny besked
    </button>
  </div>
) : (

                <>

<section className="relative overflow-hidden border-y border-slate-200">
  {/* Baggrundsbillede – blødt og roligt */}
  <div
    className="absolute inset-0 bg-cover bg-center blur-[4px] scale-105"
    style={{ backgroundImage: "url('/combine.png')" }}
  />

  {/* Blid neutral overlay */}
  <div className="absolute inset-0 bg-slate-50/80" />

  {/* Indhold */}
  <div className="relative max-w-4xl mx-auto px-8 py-24 text-center">
    {/* Elegant glas-kort */}
    <div
      className="inline-block rounded-2xl bg-white/90 backdrop-blur-md px-10 py-12
                 border-2 border-green-600/30"
    >
      <p className="text-xs uppercase tracking-widest text-slate-500 font-medium">
        En lille påmindelse
      </p>

      <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
        Tøver du stadig?
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        At udsætte det er ikke en løsning.{" "}
        <span className="text-green-700 font-semibold">
          Det nemmeste tidspunkt er nu.
        </span>
      </p>
    </div>
  </div>
</section>

                  <form
                    className="mt-8 space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (formStatus === "loading") return;

                      setFormStatus("loading");
                      setErrorMessage("");

                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      formData.append(
                        "services",
                        selectedServices.join(", ")
                      );

                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          body: formData,
                        });

                        if (!res.ok) throw new Error();

                        setFormStatus("success");

                        form.reset();
                        setSelectedServices([]);
                        setDropdownOpen(false);
                      } catch {
                        setFormStatus("error");
                        setErrorMessage(
                          "Noget gik galt. Prøv igen eller kontakt os via WhatsApp."
                        );
                      }
                    }}
                  >
                    {[ 
                      { label: "Navn", type: "text", name: "name" },
                      { label: "Email", type: "email", name: "email" },
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
                    </div>

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

                    {formStatus === "error" && (
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full rounded-xl bg-[#2BB673] py-4 text-white font-semibold hover:bg-[#26a866] disabled:opacity-60"
                    >
                      {formStatus === "loading" ? "Sender…" : "Kontakt os"}
                    </button>

                    <p className="mt-4 text-center text-xs text-slate-500">
                      Svar inden for 24 timer
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
