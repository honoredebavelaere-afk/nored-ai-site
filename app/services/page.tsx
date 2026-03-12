import type { Metadata } from "next";
import ServicesList from "@/components/services/ServicesList";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Pricing from "@/components/services/Pricing";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const jsonLdServices = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Solutions nored AI — Automatisation commerciale",
  description: "Les 4 automatisations IA de nored pour équipes commerciales PME B2B",
  provider: { "@id": "https://www.noredai.digital/#organization" },
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "CRM Auto-rempli",
        description: "Transcription et analyse de chaque appel commercial. Données injectées automatiquement dans votre CRM : challenges, budget, décideur, score de qualification.",
        provider: { "@id": "https://www.noredai.digital/#organization" },
        url: "https://www.noredai.digital/services#crm",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Emails de suivi intelligents",
        description: "Email de follow-up personnalisé généré automatiquement après chaque appel, reprenant les points discutés et les prochaines étapes.",
        provider: { "@id": "https://www.noredai.digital/#organization" },
        url: "https://www.noredai.digital/services#emails",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Réponses emails IA",
        description: "Brouillon de réponse contextualisé généré automatiquement pour chaque email entrant, basé sur l'historique CRM.",
        provider: { "@id": "https://www.noredai.digital/#organization" },
        url: "https://www.noredai.digital/services#reponses",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Devis Express",
        description: "PDF professionnel généré en 2 minutes depuis un formulaire simple. Informations pré-remplies depuis le CRM.",
        provider: { "@id": "https://www.noredai.digital/#organization" },
        url: "https://www.noredai.digital/services#devis",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Solutions d'automatisation IA pour commerciaux — nored",
  description:
    "nored automatise le travail administratif de vos commerciaux : CRM rempli après chaque appel, emails de suivi rédigés par l'IA, réponses contextuelles, devis express en 2 min.",
  keywords: [
    "nored",
    "nored AI services",
    "automatisation CRM PME",
    "CRM auto-rempli",
    "emails automatiques commerciaux",
    "devis automatique PME",
    "automatisation commerciale n8n",
    "IA pour commerciaux",
    "gain de temps commercial",
    "automatisation suivi client",
  ],
  alternates: { canonical: "https://www.noredai.digital/services" },
  openGraph: {
    images: [{ url: "/nored-ai-logo.png", width: 1080, height: 1080, alt: "nored AI — Solutions automatisation" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />
      <Section>
        <div className="mb-16">
          <p className="text-text-tertiary text-sm mb-4">Solutions nored AI</p>
          <h1 className="text-4xl md:text-5xl heading-display max-w-lg">
            Quatre automatisations pour vos equipes.
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-xl">
            Integration a vos outils existants. Pas de changement d&apos;habitude.
          </p>
        </div>
        <ServicesList />
      </Section>

      <BeforeAfter />

      <Pricing />

      <section className="bg-bg-dark text-white py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl heading-display">
            Envie de voir ca en action ?
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            30 minutes pour voir comment ca marche sur vos process.
          </p>
          <div className="mt-8">
            <Button href="/#book" variant="primary-inverse">
              Planifier un appel decouverte <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
