"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      {/* Load gtag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M0J2CMJ7TL"
        strategy="afterInteractive"
      />

      {/* Init + Consent Mode */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // 👇 DEFAULT: NO CONSENT
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });

          gtag('js', new Date());

          // Configs (won't collect until consent is granted)
          gtag('config', 'G-M0J2CMJ7TL', { anonymize_ip: true });
          gtag('config', 'AW-17938617642');
        `}
      </Script>
    </>
  );
}
