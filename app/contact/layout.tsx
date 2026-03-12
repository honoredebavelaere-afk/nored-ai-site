import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacter nored — Audit gratuit automatisation IA en 15 min",
  description:
    "Réservez votre audit gratuit avec nored AI en 15 minutes via Google Meet. On identifie ensemble les tâches automatisables dans votre process commercial. Sans engagement.",
  keywords: [
    "nored contact",
    "nored AI audit gratuit",
    "audit automatisation commerciale gratuit",
    "contacter nored",
    "réserver appel automatisation IA",
    "automatisation PME B2B devis",
  ],
  alternates: { canonical: "https://www.noredai.digital/contact" },
  openGraph: {
    images: [{ url: "/nored-ai-logo.png", width: 1080, height: 1080, alt: "nored AI — Contact" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
