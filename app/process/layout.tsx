import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthode & Process — Déploiement en 5-10 jours",
  description:
    "De l'audit à la mise en production en 5-10 jours. Audit gratuit, configuration sur mesure, déploiement et formation équipe. Zéro perturbation de vos process existants.",
  alternates: { canonical: "https://www.noredai.digital/process" },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
