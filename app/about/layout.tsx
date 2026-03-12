import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honoré Debavelaere — Expert automatisation IA commerciale",
  description:
    "Fondateur de nored AI. Spécialisé en automatisation commerciale avec n8n et l'IA pour les PME B2B françaises. Basé à Glasgow, déploiement 100% remote.",
  alternates: { canonical: "https://noredai.digital/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
