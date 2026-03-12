import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noredai.digital"),
  title: {
    default: "nored AI — Automatisation IA pour équipes commerciales PME",
    template: "%s | nored AI",
  },
  description:
    "Automatisez le travail administratif de vos commerciaux avec l'IA. CRM rempli automatiquement, emails de suivi rédigés, devis en 2 min. Déployé en 5-10 jours.",
  keywords: [
    "automatisation IA commerciale",
    "CRM automatique PME",
    "automatisation emails B2B",
    "n8n automatisation",
    "IA équipe commerciale",
    "automatisation prospection",
    "gain de temps commercial",
  ],
  authors: [{ name: "Honoré Debavelaere", url: "https://noredai.digital" }],
  creator: "nored AI",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "nored AI — Automatisation IA pour équipes commerciales PME",
    description:
      "Automatisez le travail administratif de vos commerciaux. CRM rempli automatiquement, emails de suivi, devis express. Déployé en 5-10 jours.",
    url: "https://noredai.digital",
    siteName: "nored AI",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "nored AI — Automatisation IA pour équipes commerciales PME",
    description:
      "CRM rempli automatiquement, emails de suivi rédigés, devis en 2 min. Vos commerciaux récupèrent 2h par jour.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://noredai.digital",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "nored AI",
  url: "https://noredai.digital",
  description:
    "Automatisation IA sur mesure pour les équipes commerciales des PME B2B. CRM auto-rempli, emails intelligents, déploiement en 5-10 jours.",
  founder: {
    "@type": "Person",
    name: "Honoré Debavelaere",
  },
  areaServed: "FR",
  serviceType: "Automatisation IA commerciale",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-bg text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
