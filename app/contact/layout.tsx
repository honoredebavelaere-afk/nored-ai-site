import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver un audit gratuit — 15 min via Google Meet",
  description:
    "Réservez votre audit gratuit de 15 minutes. On identifie ensemble les tâches automatisables dans votre process commercial. Sans engagement, 100% actionnable.",
  alternates: { canonical: "https://noredai.digital/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
