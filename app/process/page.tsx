"use client";

import Section from "@/components/ui/Section";
import Timeline from "@/components/process/Timeline";
import FAQ from "@/components/process/FAQ";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ArrowRight, Zap, Shield, Wrench } from "lucide-react";

const techCards = [
  { icon: Zap, title: "Intelligence Artificielle", description: "Modeles de derniere generation pour comprendre et rediger." },
  { icon: Wrench, title: "Automatisation", description: "Workflows robustes qui connectent vos outils entre eux." },
  { icon: Shield, title: "Securite", description: "Donnees dans vos outils. Connexions chiffrees, RGPD." },
];

export default function ProcessPage() {
  return (
    <>
      <Section>
        <div className="mb-16">
          <p className="text-text-tertiary text-sm mb-4">Process</p>
          <h1 className="text-4xl md:text-5xl heading-display max-w-lg">
            Du sur-mesure, pas du template.
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-xl">
            On construit des automatisations adaptees a votre facon de travailler.
          </p>
        </div>
        <Timeline />
      </Section>

      <section className="py-28 md:py-36 px-6 bg-bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <p className="text-text-tertiary text-sm mb-4">Technologie</p>
            <h2 className="text-3xl font-display font-bold tracking-tight">
              Pas de jargon. Juste les resultats.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techCards.map((card) => (
              <Card key={card.title}>
                <card.icon size={18} className="text-text-tertiary mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-display font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <p className="text-text-tertiary text-sm mb-4">FAQ</p>
          <h2 className="text-3xl font-display font-bold tracking-tight">Questions frequentes.</h2>
        </div>
        <FAQ />
      </Section>

      <section className="bg-bg-dark text-white py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl heading-display">Pret a commencer ?</h2>
          <p className="mt-4 text-white/60 text-lg">Un audit gratuit de 30 minutes.</p>
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
