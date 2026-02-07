"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");

  const cookieLink = isEnglish
    ? "/en/privacy/cookies"
    : "/dan/privatliv/cookies";

  const text = isEnglish
    ? {
        description:
          "We use cookies for analytics and advertising purposes to understand how our website is used and to improve our services. You can read more in our",
        policy: "Cookie Policy",
        accept: "Accept",
        reject: "Reject",
      }
    : {
        description:
          "Vi bruger cookies til analyse- og markedsføringsformål for at forstå, hvordan vores hjemmeside bruges, og for at forbedre vores services. Du kan læse mere i vores",
        policy: "Cookiepolitik",
        accept: "Accepter",
        reject: "Afvis",
      };

  /* ===== CHECK EXISTING CONSENT ===== */
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  /* ===== ACCEPT COOKIES ===== */
  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }

    setVisible(false);
  };

  /* ===== REJECT COOKIES ===== */
  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p className="text-sm text-slate-600 max-w-3xl">
          {text.description}{" "}
          <Link href={cookieLink} className="underline hover:text-slate-900">
            {text.policy}
          </Link>
          .
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition"
          >
            {text.reject}
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-md bg-[#2BB673] px-4 py-2 text-sm font-medium text-white hover:bg-[#22a863] transition"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
