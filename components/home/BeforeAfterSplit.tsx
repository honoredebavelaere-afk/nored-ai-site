"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Copy,
  Clock,
  XCircle,
  ArrowRight,
  Workflow,
  Database,
  Zap,
  CheckCircle2,
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const beforeItems = [
  { icon: Copy, text: "Copier-coller entre 5 outils" },
  { icon: Clock, text: "2h/jour de saisie CRM" },
  { icon: AlertTriangle, text: "Relances oubliees, leads perdus" },
  { icon: XCircle, text: "Aucune donnee centralisee" },
];

const afterItems = [
  { icon: Workflow, text: "n8n orchestre tout en arriere-plan" },
  { icon: Database, text: "Donnees synchronisees en temps reel" },
  { icon: Zap, text: "Actions declenchees automatiquement" },
  { icon: CheckCircle2, text: "CRM toujours a jour, zero effort" },
];

export default function BeforeAfterSplit() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-text-tertiary text-sm mb-4">La difference</p>
          <h2 className="text-3xl md:text-4xl heading-display">
            Du chaos manuel au flux automatise.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-0 items-stretch">
          {/* Before */}
          <motion.div
            className="rounded-2xl md:rounded-r-none bg-[#1D1D1F] p-8 md:p-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-[11px] text-red-400/80 uppercase tracking-wider font-mono font-semibold">
                Process manuel
              </span>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={15} className="text-red-400/70" />
                  </div>
                  <p className="text-[13px] text-white/60 leading-relaxed mt-1.5">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-2xl font-display font-bold text-red-400/80">-2h/jour</p>
              <p className="text-[11px] text-white/30 mt-1">perdues en administratif</p>
            </div>
          </motion.div>

          {/* Arrow separator */}
          <div className="hidden md:flex items-center justify-center w-0 relative z-10">
            <motion.div
              className="w-10 h-10 rounded-full bg-white border border-border-light shadow-lg flex items-center justify-center absolute"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease }}
            >
              <ArrowRight size={16} className="text-text-primary" />
            </motion.div>
          </div>

          {/* Mobile arrow */}
          <div className="flex md:hidden items-center justify-center py-4">
            <motion.div
              className="w-10 h-10 rounded-full bg-white border border-border-light shadow-lg flex items-center justify-center rotate-90"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease }}
            >
              <ArrowRight size={16} className="text-text-primary" />
            </motion.div>
          </div>

          {/* After */}
          <motion.div
            className="rounded-2xl md:rounded-l-none bg-white border border-border-light p-8 md:p-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] text-emerald-600 uppercase tracking-wider font-mono font-semibold">
                Flow nored AI
              </span>
            </div>

            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease }}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <item.icon size={15} className="text-emerald-600" />
                  </div>
                  <p className="text-[13px] text-text-secondary leading-relaxed mt-1.5">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border-light">
              <p className="text-2xl font-display font-bold text-emerald-600">+2h/jour</p>
              <p className="text-[11px] text-text-tertiary mt-1">recuperees pour closer</p>
            </div>
          </motion.div>
        </div>

        {/* Tech note */}
        <motion.p
          className="mt-8 text-center text-[13px] text-text-tertiary max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
        >
          Pas de solution sur etagere. J&apos;architecture vos flux sur n8n et Supabase
          pour une souverainete totale de vos donnees commerciales.
        </motion.p>
      </div>
    </section>
  );
}
