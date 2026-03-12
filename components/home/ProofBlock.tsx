"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, BarChart3, Zap, Shield, Rocket, Lock } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const results = [
  { icon: Clock, value: "10h", label: "recuperees par semaine", color: "text-emerald-600" },
  { icon: MessageSquare, value: "100%", label: "des DMs traites", color: "text-blue-600" },
  { icon: Zap, value: "<30s", label: "temps de reponse moyen", color: "text-amber-600" },
  { icon: BarChart3, value: "24/7", label: "disponibilite", color: "text-purple-600" },
];

const trustSignals = [
  { icon: Shield, text: "Conforme RGPD" },
  { icon: Rocket, text: "Deploye en 5-10 jours" },
  { icon: Lock, text: "Sans engagement" },
];

export default function ProofBlock() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-text-tertiary text-sm mb-4">Resultats</p>
          <h2 className="text-3xl md:text-4xl heading-display max-w-lg">
            Un entrepreneur qui gerait ses DMs a la main.
          </h2>
        </motion.div>

        {/* Case study card */}
        <motion.div
          className="rounded-2xl bg-white border border-border-light overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
        >
          {/* Before / After */}
          <div className="grid md:grid-cols-2 gap-px bg-border-light">
            <div className="bg-white p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-4">Avant</p>
              <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
                15-20 min par conversation
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                Benoit, entrepreneur, gerait manuellement chaque DM Instagram.
                Les reponses prenaient du temps, des leads etaient perdus,
                et aucune donnee n&apos;etait centralisee dans un CRM.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-4">Apres</p>
              <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
                Bot IA + synchro CRM
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                Un bot IA qui repond, qualifie et suit automatiquement chaque prospect.
                Historique des conversations synchronise dans le CRM.
                Plus aucun lead ne passe entre les mailles.
              </p>
            </div>
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-light border-t border-border-light">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                className="bg-white px-6 py-7 text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease }}
              >
                <r.icon size={18} className={`mx-auto mb-3 ${r.color}`} />
                <p className={`text-2xl font-display font-bold ${r.color}`}>{r.value}</p>
                <p className="mt-1 text-xs text-text-tertiary">{r.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Attribution */}
          <div className="border-t border-border-light px-8 md:px-10 py-5 bg-bg-surface/50">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Trackerzz</span>
              {" "}&mdash; Automatisation des DMs Instagram pour un entrepreneur
            </p>
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          {trustSignals.map((signal) => (
            <div key={signal.text} className="flex items-center gap-2.5 text-text-secondary">
              <div className="w-8 h-8 rounded-lg bg-white border border-border-light flex items-center justify-center">
                <signal.icon size={15} className="text-text-tertiary" />
              </div>
              <span className="text-sm">{signal.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
