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
          window.gtag = gtag;

          gtag('js', new Date());

          // 🔒 GDPR default
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });

          // GA4
          gtag('config', 'G-M0J2CMJ7TL');

          // Google Ads + conversion linker
          gtag('config', 'AW-17938617642', {
            allow_enhanced_conversions: true
          });
        `}
      </Script>
    </>
  );
}
