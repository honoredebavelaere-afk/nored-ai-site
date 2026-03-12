"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Target, BarChart3, Wrench } from "lucide-react";

const values = [
  { icon: Target, title: "Specialiste commercial", description: "Je me concentre uniquement sur les equipes commerciales des PME B2B. Pas de generaliste." },
  { icon: BarChart3, title: "ROI mesurable", description: "Chaque automatisation a un impact quantifiable en heures gagnees." },
  { icon: Wrench, title: "Je pratique ce que je vends", description: "Ma propre prospection est automatisee. Les outils que je livre, je les utilise au quotidien." },
];

const differentiators = [
  { title: "Specialiste, pas generaliste", description: "Pas de sites web, pas d'apps. Uniquement de l'automatisation commerciale avec n8n et l'IA." },
  { title: "Process rodes", description: "De l'audit au deploiement en 5-10 jours. Formation incluse, vos equipes n'ont rien a apprendre." },
  { title: "Zero engagement", description: "Vous etes proprietaire de vos automatisations. Si vous arretez, tout reste en place." },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden">
              <Image src="/honore.jpg" alt="Honore" fill className="object-cover object-top" sizes="(max-width: 768px) 160px, 192px" />
            </div>
          </div>
          <div>
            <p className="text-text-tertiary text-sm mb-4">Fondateur de nored AI</p>
            <h1 className="text-3xl md:text-4xl heading-display mb-4">Honore — nored AI</h1>
            <p className="text-text-secondary leading-relaxed text-lg max-w-lg">
              Base en Ecosse (Glasgow Caledonian University), specialise en automatisation
              commerciale avec n8n et l&apos;IA. Je construis des systemes qui liberent
              les equipes de vente du travail administratif repetitif.
              nored, c&apos;est l&apos;agence specialisee en automatisation IA pour les PME B2B.
            </p>
          </div>
        </div>
      </Section>

      <section className="py-28 md:py-36 px-6 bg-bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-snug">
            Je me concentre uniquement sur les equipes commerciales des PME B2B.
            Un seul sujet, maitrise de bout en bout.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <p className="text-text-tertiary text-sm mb-4">Approche</p>
            <h2 className="text-3xl font-display font-bold tracking-tight">Ce qui me guide.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title}>
                <v.icon size={18} className="text-text-tertiary mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-28 md:py-36 px-6 bg-bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <p className="text-text-tertiary text-sm mb-4">Pourquoi moi</p>
            <h2 className="text-3xl font-display font-bold tracking-tight">Ce qui fait la difference.</h2>
          </div>
          <div className="space-y-10">
            {differentiators.map((item, i) => (
              <div key={item.title} className="flex gap-6 items-start">
                <span className="text-4xl font-display font-extrabold text-border leading-none select-none">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-display font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed max-w-md">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-dark text-white py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl heading-display">Envie d&apos;en discuter ?</h2>
          <p className="mt-4 text-white/60 text-lg">30 minutes, sans engagement.</p>
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
