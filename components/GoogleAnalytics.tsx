"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M0J2CMJ7TL"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          /* ===== CONSENT MODE DEFAULT (EU / GDPR) ===== */
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied'
          });

          /* ===== GOOGLE ANALYTICS 4 ===== */
          gtag('config', 'G-M0J2CMJ7TL');

          /* ===== GOOGLE ADS ===== */
          gtag('config', 'AW-17938617642');
        `}
      </Script>
    </>
  );
}
