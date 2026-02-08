"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M0J2CMJ7TL"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag; // 🔥 CRITICAL

          gtag('js', new Date());

          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied'
          });

          gtag('config', 'G-M0J2CMJ7TL');
          gtag('config', 'AW-17938617642');
        `}
      </Script>
    </>
  );
}
