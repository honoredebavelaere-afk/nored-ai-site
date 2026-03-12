"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Video } from "lucide-react";
import dynamic from "next/dynamic";

const CalEmbed = dynamic(() => import("@/components/ui/CalEmbed"), { ssr: false });

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const valueProps = [
  "Audit de vos process commerciaux",
  "Identification des taches automatisables",
  "Estimation du temps recupere",
  "Demo personnalisee sur vos outils",
  "Plan de deploiement detaille",
];

export default function PricingCTA() {
  return (
    <section id="book" className="bg-text-primary text-white py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left — value props */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="text-3xl md:text-4xl heading-display">
                Reservez votre appel decouverte.
              </h2>
              <p className="mt-4 text-white/60 text-lg">
                15 minutes pour identifier vos gains de productivite.
              </p>
            </motion.div>

            <motion.ul
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
            >
              {valueProps.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
            >
              <div className="flex items-center gap-4 text-[13px] text-white/40">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Gratuit
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Sans engagement
                </span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-white/30">
                <Video size={13} />
                <span>Audit 15 min via Google Meet</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Cal.com inline embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <CalEmbed />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
