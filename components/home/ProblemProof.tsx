"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function ProblemProof() {
  return (
    <section className="bg-text-primary text-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Giant animated stat */}
          <div className="text-center md:text-left">
            <p className="text-[clamp(5rem,16vw,10rem)] font-display font-extrabold leading-none tracking-tighter text-white">
              <AnimatedNumber value={72} suffix="%" />
            </p>
          </div>

          {/* Explanation */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-snug">
              du temps des commerciaux ne sert pas a vendre.
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed max-w-lg">
              Saisie CRM, emails de suivi, reporting, relances manuelles.
              Vos equipes passent plus de temps sur l&apos;administratif
              que face aux clients.
            </p>
            <p className="mt-5 text-sm text-white/40 leading-relaxed">
              5 appels/jour &times; 30 min d&apos;admin = 2h30 perdues par commercial, chaque jour.
            </p>
            <p className="mt-4 text-[11px] text-white/25 tracking-wide uppercase font-mono">
              Source : Salesforce, State of Sales Report
            </p>
          </div>
        </motion.div>

        {/* Transition */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl font-display font-semibold text-white/80">
            Et si l&apos;IA faisait ce travail a votre place ?
          </p>
          <motion.div
            className="mt-4 flex justify-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
