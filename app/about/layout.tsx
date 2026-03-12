import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honoré Debavelaere — Fondateur de nored AI",
  description:
    "Fondateur de nored, l'agence d'automatisation IA commerciale. Spécialisé en automatisation avec n8n et l'IA pour les équipes commerciales des PME B2B françaises. Basé à Glasgow, déploiement 100% remote.",
  keywords: ["nored", "nored AI", "Honoré Debavelaere", "fondateur nored", "automatisation IA commerciale"],
  alternates: { canonical: "https://www.noredai.digital/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
