"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const comparisons = [
  { task: "Remplir le CRM", before: "25 min", after: "2 min", saved: 92 },
  { task: "Email de suivi", before: "15 min", after: "0 min", saved: 100 },
  { task: "Repondre aux emails", before: "10 min", after: "2 min", saved: 80 },
  { task: "Creer un devis", before: "20 min", after: "2 min", saved: 90 },
];

export default function BeforeAfter() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-text-tertiary text-sm mb-4">Impact</p>
          <h2 className="text-3xl md:text-4xl heading-display max-w-md">
            Le temps gagne, chaque jour.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {comparisons.map((row, i) => (
            <motion.div
              key={row.task}
              className="grid grid-cols-[1fr_auto_auto_auto] md:grid-cols-[1fr_100px_40px_100px_1fr] items-center gap-4 md:gap-6 rounded-xl bg-bg-surface border border-border-light px-6 py-5"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <span className="text-[15px] font-medium text-text-primary">{row.task}</span>
              <span className="text-sm text-text-tertiary text-right line-through decoration-text-tertiary/30">
                {row.before}
              </span>
              <ArrowRight size={14} className="text-text-tertiary mx-auto hidden md:block" />
              <span className="text-sm font-semibold text-emerald-600">
                {row.after}
              </span>
              {/* Progress bar — desktop only */}
              <div className="hidden md:flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-border-light overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.saved}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease }}
                  />
                </div>
                <span className="text-xs font-mono text-emerald-600 w-10 text-right">-{row.saved}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          className="mt-6 rounded-xl bg-text-primary text-white px-6 py-5 flex items-center justify-between"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <span className="text-[15px] font-medium">Total gagne par commercial</span>
          <span className="text-xl font-display font-bold">+1h10 / jour</span>
        </motion.div>

        {/* Qualification note */}
        <motion.p
          className="mt-4 text-xs text-text-tertiary text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
        >
          Estimations basees sur une equipe de 5 commerciaux, 5 appels/jour.
        </motion.p>
      </div>
    </section>
  );
}
