import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "CleanSpell – Professional Cleaning in Copenhagen",
  description: "Professional and eco-friendly cleaning services in Copenhagen",

  verification: {
    google: "xtUz93vdCNAiD39PDQ3QERNvJm0NAe9NvTNlVthkjuQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <head>
        {/* JSON-LD: Brand / Organization */}
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
      </head>

      <body>
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
