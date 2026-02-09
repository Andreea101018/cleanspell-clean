"use client";

import { useEffect, useState } from "react";

type ConsentState = "granted" | "denied";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookie_consent");

    if (!storedConsent) {
      setVisible(true);
    } else {
      applyConsent(storedConsent as ConsentState);
    }
  }, []);

 const applyConsent = (consent: ConsentState) => {
  if (typeof window === "undefined") return;

  const gtag = (window as any).gtag;

  if (!gtag) {
    // retry până când gtag este disponibil
    setTimeout(() => applyConsent(consent), 200);
    return;
  }

  gtag("consent", "update", {
    ad_storage: consent,
    analytics_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
  });
};


  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "granted");
    applyConsent("granted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "denied");
    applyConsent("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-slate-700 max-w-3xl">
          We use cookies to analyze traffic and improve your experience.
          Marketing and analytics cookies are only used if you give consent.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="rounded-lg bg-[#2BB673] px-5 py-2 text-sm font-semibold text-white hover:bg-[#26a866]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
