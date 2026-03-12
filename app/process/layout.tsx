import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthode nored — Déploiement automatisation IA en 5-10 jours",
  description:
    "Comment nored déploie l'automatisation IA dans votre équipe commerciale : audit gratuit, configuration sur mesure, déploiement et formation en 5-10 jours. Zéro perturbation.",
  keywords: [
    "nored",
    "nored méthode",
    "déploiement automatisation IA",
    "audit automatisation commerciale",
    "agence automatisation n8n france",
    "intégration IA CRM",
    "déploiement IA PME",
    "automatisation commerciale rapide",
  ],
  alternates: { canonical: "https://www.noredai.digital/process" },
  openGraph: {
    images: [{ url: "/nored-ai-logo.png", width: 1080, height: 1080, alt: "nored AI — Méthode déploiement" }],
  },
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment nored déploie l'automatisation IA commerciale en 5-10 jours",
  description: "Processus complet de nored AI pour automatiser les tâches commerciales d'une PME B2B : de l'audit à la mise en production.",
  totalTime: "P10D",
  provider: { "@id": "https://www.noredai.digital/#organization" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit gratuit de 15 minutes",
      text: "On identifie ensemble les tâches les plus chronophages de vos commerciaux et les gains potentiels. Sans engagement.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Configuration sur mesure",
      text: "Connexion à vos outils existants (CRM, Gmail, Outlook...) et paramétrage des automatisations selon vos process spécifiques.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Tests & validation",
      text: "Phase de tests en conditions réelles avec votre équipe pour valider chaque automatisation avant la mise en production.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Déploiement & formation",
      text: "Mise en production et formation de votre équipe. Vos commerciaux sont autonomes en moins d'une heure.",
    },
  ],
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      {children}
    </>
  );
}
