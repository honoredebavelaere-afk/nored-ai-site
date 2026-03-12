import type { Metadata } from "next";
import ServicesList from "@/components/services/ServicesList";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Pricing from "@/components/services/Pricing";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions d'automatisation IA pour commerciaux",
  description:
    "CRM rempli automatiquement après chaque appel, emails de suivi rédigés par l'IA, réponses contextuelles, devis express. Intégration à vos outils existants.",
  alternates: { canonical: "https://www.noredai.digital/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <div className="mb-16">
          <p className="text-text-tertiary text-sm mb-4">Solutions</p>
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
