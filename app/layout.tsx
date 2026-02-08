import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanspell.dk"),
  verification: {
    google: "xtUz93vdCNAiD39PDQ3QERNvJm0NAe9NvTNlVthkjuQ",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {/* Organization schema – neutral */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CleanSpell",
              url: "https://www.cleanspell.dk",
              logo: "https://www.cleanspell.dk/favicon.ico",
            }),
          }}
        />

        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <GoogleAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
