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
