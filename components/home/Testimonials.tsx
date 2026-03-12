"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote: "On a gagne en moyenne 1h45 par commercial par jour. Le CRM est enfin a jour sans que personne n'ait a y penser.",
    name: "Sophie M.",
    role: "Directrice Commerciale",
    company: "Nextera Solutions",
    detail: "12 commerciaux",
  },
  {
    quote: "Le ROI a ete visible des la deuxieme semaine. Mes equipes passent leur temps a vendre, plus a remplir des tableaux.",
    name: "Thomas R.",
    role: "VP Sales",
    company: "DataFlow SAS",
    detail: "8 commerciaux",
  },
  {
    quote: "La mise en place a ete transparente. Aucune resistance de l'equipe parce qu'ils n'ont rien eu a apprendre.",
    name: "Claire D.",
    role: "Head of Sales",
    company: "Kyma Group",
    detail: "22 commerciaux",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-text-tertiary text-sm mb-4">Temoignages</p>
          <h2 className="text-3xl md:text-4xl heading-display max-w-md">
            Ce que disent nos clients.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl bg-white border border-border-light p-7 flex flex-col justify-between"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[15px] text-text-primary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-border-light">
                <p className="text-sm font-display font-semibold text-text-primary">{t.name}</p>
                <p className="text-xs text-text-secondary mt-0.5">{t.role}, {t.company}</p>
                <p className="text-xs text-text-tertiary mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
