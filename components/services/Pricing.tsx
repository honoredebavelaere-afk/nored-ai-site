"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const plans = [
  {
    name: "Essentiel",
    price: "2 000\u20AC",
    description: "Les fondations : votre CRM se remplit tout seul.",
    features: [
      "CRM auto-rempli apres chaque appel",
      "Emails de follow-up automatiques",
      "Integration a votre CRM existant",
      "Formation equipe incluse",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "4 000\u20AC",
    description: "Le pack complet pour les equipes qui veulent tout automatiser.",
    features: [
      "Tout le pack Essentiel",
      "Reponses emails IA contextuelles",
      "Analyse des conversations",
      "Support prioritaire",
    ],
    highlight: true,
  },
  {
    name: "Full",
    price: "Sur devis",
    description: "Tous les modules, adaptes a vos process specifiques.",
    features: [
      "Tous les modules disponibles",
      "Devis express automatise",
      "Integrations sur mesure",
      "Accompagnement continu",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28 md:py-36 px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-text-tertiary text-sm mb-4">Tarifs</p>
          <h2 className="text-3xl md:text-4xl heading-display">
            Un prix fixe, pas d&apos;abonnement cache.
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Mise en place unique. Vous etes proprietaire de vos automatisations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "bg-text-primary text-white border-text-primary"
                  : "bg-white border-border-light"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <p className={`text-sm font-medium ${plan.highlight ? "text-white/60" : "text-text-tertiary"}`}>
                {plan.name}
              </p>
              <p className={`mt-3 text-3xl font-display font-bold ${plan.highlight ? "text-white" : "text-text-primary"}`}>
                {plan.price}
              </p>
              <p className={`mt-2 text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-text-secondary"}`}>
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-emerald-400" : "text-emerald-600"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-text-secondary"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-text-primary hover:bg-white/90"
                    : "bg-text-primary text-white hover:bg-black/85"
                }`}
              >
                Planifier un appel
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-sm text-text-tertiary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
        >
          Maintenance optionnelle : 300-500&euro;/mois. Audit de 30 min gratuit et sans engagement.
        </motion.p>
      </div>
    </section>
  );
}
