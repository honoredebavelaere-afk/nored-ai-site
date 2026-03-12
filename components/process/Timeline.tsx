"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Search, Settings, Rocket, BarChart3 } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Audit", description: "30 min d'echange pour analyser vos process.", duration: "30 min" },
  { icon: Settings, number: "02", title: "Configuration", description: "Automatisations sur mesure, adaptees a vos outils.", duration: "1-2 sem." },
  { icon: Rocket, number: "03", title: "Deploiement", description: "Installation, tests et formation de l'equipe.", duration: "2-3 jours" },
  { icon: BarChart3, number: "04", title: "Suivi", description: "Monitoring continu et evolutions mensuelles.", duration: "Continu" },
];

export default function Timeline() {
  return (
    <motion.div className="relative max-w-2xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border-light" />

      {steps.map((step) => (
        <motion.div key={step.number} variants={fadeIn} className="relative pl-16 md:pl-20 pb-12 last:pb-0">
          <div className="absolute left-3 md:left-5 top-1 w-6 h-6 rounded-full bg-white border-2 border-text-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-text-primary" />
          </div>

          <div className="rounded-2xl bg-bg-surface p-6 hover:shadow-md hover:shadow-black/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <step.icon size={16} className="text-text-tertiary" strokeWidth={1.5} />
              <span className="text-xs font-mono text-text-tertiary">{step.number}</span>
              <span className="text-xs text-text-tertiary bg-white px-2 py-0.5 rounded-full border border-border-light">{step.duration}</span>
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
