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
  title: {
    default: "nored AI — Automatisation IA pour equipes commerciales",
    template: "%s | nored AI",
  },
  description:
    "Automatisation IA sur mesure pour les equipes commerciales des PME. CRM auto-rempli, emails intelligents, devis express.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "nored AI — Automatisation IA pour equipes commerciales",
    description: "Automatisation IA sur mesure pour les equipes commerciales des PME.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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
