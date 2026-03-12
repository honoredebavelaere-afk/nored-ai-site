"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Mail, MessageSquare, BarChart3 } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const floatingCards = [
  { icon: FileText, label: "CRM mis a jour", detail: "DataFlow Solutions", color: "text-blue-600 bg-blue-50", delay: 0.8 },
  { icon: Mail, label: "Email de suivi envoye", detail: "Follow-up automatique", color: "text-emerald-600 bg-emerald-50", delay: 1.2 },
  { icon: MessageSquare, label: "Lead qualifie", detail: "Score: 92/100", color: "text-violet-600 bg-violet-50", delay: 1.6 },
  { icon: BarChart3, label: "Rapport genere", detail: "+2h gagnees aujourd'hui", color: "text-amber-600 bg-amber-50", delay: 2.0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center px-6 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.04),transparent)]" />

      <div className="relative max-w-6xl mx-auto w-full pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border-light bg-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[13px] text-text-secondary font-medium">
                Automatisation IA pour equipes commerciales
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[clamp(2.5rem,5vw,4.25rem)] heading-display text-text-primary"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              Vos commerciaux vendent.
            </motion.h1>
            <motion.h1
              className="text-[clamp(2.5rem,5vw,4.25rem)] heading-display text-text-tertiary"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
            >
              On automatise le reste.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="mt-6 text-[17px] text-text-secondary max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
            >
              CRM rempli automatiquement, emails de suivi rediges,
              devis en 2 minutes. Vos equipes recuperent{" "}
              <span className="font-semibold text-text-primary">2 heures par jour</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease }}
            >
              <Link
                href="#book"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-text-primary text-white font-display font-semibold text-[15px] shadow-[0_1px_3px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)] hover:bg-black/85 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Reserver un appel
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border text-text-primary font-display font-semibold text-[15px] hover:bg-bg-surface transition-all duration-200 cursor-pointer"
              >
                Voir en action
              </Link>
            </motion.div>

            {/* Reassurance */}
            <motion.div
              className="mt-5 flex items-center gap-5 text-[13px] text-text-tertiary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease }}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500" />
                Audit gratuit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500" />
                15 min via Google Meet
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500" />
                Sans engagement
              </span>
            </motion.div>
          </div>

          {/* Right — Floating notification cards */}
          <div className="hidden lg:block relative h-[420px]">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="absolute w-[280px] rounded-xl border border-black/[0.06] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                style={{
                  top: `${i * 95 + 10}px`,
                  left: i % 2 === 0 ? "10px" : "60px",
                }}
                initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: card.delay, ease }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${card.color}`}>
                    <card.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-text-primary truncate">
                      {card.label}
                    </p>
                    <p className="text-[11px] text-text-tertiary mt-0.5">{card.detail}</p>
                  </div>
                  <span className="text-[9px] text-text-tertiary font-mono whitespace-nowrap ml-auto mt-0.5">
                    {i === 0 ? "a l'instant" : `il y a ${i * 2}s`}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Subtle connecting line */}
            <motion.div
              className="absolute left-6 top-[60px] w-px bg-gradient-to-b from-border-light via-accent/20 to-transparent"
              style={{ height: "320px" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 1, ease }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
