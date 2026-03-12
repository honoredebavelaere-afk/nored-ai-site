"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { RotateCcw, Phone, Mic, Sparkles } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface DialogLine {
  speaker: "commercial" | "prospect";
  text: string;
  delay: number;
  fills?: { field: string; value: string }[];
}

const timeline: DialogLine[] = [
  {
    speaker: "commercial",
    text: "Bonjour Marc, merci d'avoir accepte cet appel. Vous etes bien chez DataFlow Solutions ?",
    delay: 0,
    fills: [{ field: "entreprise", value: "DataFlow Solutions" }],
  },
  {
    speaker: "prospect",
    text: "Oui, on est une equipe de 12 commerciaux. On cherche a optimiser notre process de vente.",
    delay: 2400,
    fills: [{ field: "equipe", value: "12 commerciaux" }],
  },
  {
    speaker: "commercial",
    text: "Tres bien. Quel est votre plus gros point de friction aujourd'hui ?",
    delay: 4800,
  },
  {
    speaker: "prospect",
    text: "Nos reps passent 2h par jour a remplir le CRM et ecrire des emails de suivi. On perd un temps fou.",
    delay: 6800,
    fills: [{ field: "besoin", value: "Automatisation CRM + emails de suivi" }],
  },
  {
    speaker: "commercial",
    text: "Et en termes de budget, vous avez une enveloppe prevue pour ce type de projet ?",
    delay: 9400,
  },
  {
    speaker: "prospect",
    text: "On a prevu entre 3 et 5K pour la mise en place. L'important c'est le ROI rapide.",
    delay: 11400,
    fills: [
      { field: "budget", value: "3 000 - 5 000\u20AC" },
      { field: "score", value: "92/100" },
      { field: "action", value: "Envoyer proposition Pro" },
    ],
  },
];

const crmFields = [
  { key: "entreprise", label: "Entreprise", icon: "building" },
  { key: "equipe", label: "Taille equipe", icon: "users" },
  { key: "besoin", label: "Besoin identifie", icon: "target" },
  { key: "budget", label: "Budget", icon: "wallet" },
  { key: "score", label: "Score lead", icon: "gauge" },
  { key: "action", label: "Prochaine action", icon: "arrow" },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-accent/40"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function WaveformBar({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-[2px] h-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-[2px] rounded-full ${active ? "bg-emerald-400" : "bg-white/20"}`}
          animate={
            active
              ? { height: [4, 12 + Math.random() * 6, 4], opacity: [0.5, 1, 0.5] }
              : { height: 4 }
          }
          transition={
            active
              ? { duration: 0.6 + Math.random() * 0.4, repeat: Infinity, delay: i * 0.1 }
              : { duration: 0.3 }
          }
          style={{ height: 4 }}
        />
      ))}
    </div>
  );
}

export default function AIDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [filledFields, setFilledFields] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const play = useCallback(() => {
    clearTimeouts();
    setVisibleLines(0);
    setFilledFields({});
    setIsComplete(false);
    setIsTyping(false);
    setCallDuration(0);

    // Call timer
    intervalRef.current = setInterval(() => {
      setCallDuration((d) => d + 1);
    }, 1000);

    timeline.forEach((line, i) => {
      // Show typing indicator before each line
      const typingT = setTimeout(() => setIsTyping(true), Math.max(0, line.delay - 800));
      timeoutsRef.current.push(typingT);

      const t = setTimeout(() => {
        setIsTyping(false);
        setVisibleLines(i + 1);
        if (line.fills) {
          line.fills.forEach((f, fi) => {
            const ft = setTimeout(() => {
              setFilledFields((prev) => ({ ...prev, [f.field]: f.value }));
            }, 500 + fi * 400);
            timeoutsRef.current.push(ft);
          });
        }
      }, line.delay);
      timeoutsRef.current.push(t);
    });

    const lastDelay = timeline[timeline.length - 1].delay;
    const completeT = setTimeout(() => {
      setIsComplete(true);
      setIsTyping(false);
      setHasPlayed(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, lastDelay + 2500);
    timeoutsRef.current.push(completeT);
  }, [clearTimeouts]);

  useEffect(() => {
    if (isInView && !hasPlayed) {
      play();
    }
    return clearTimeouts;
  }, [isInView, hasPlayed, play, clearTimeouts]);

  // Auto-scroll transcript
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [visibleLines]);

  const filledCount = Object.keys(filledFields).length;
  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section id="demo" className="py-24 md:py-32 px-6 bg-bg-surface" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-text-tertiary text-sm mb-4">Demo interactive</p>
          <h2 className="text-3xl md:text-4xl heading-display max-w-2xl mx-auto">
            Pendant que votre commercial parle, l&apos;IA remplit le CRM.
          </h2>
        </motion.div>

        {/* macOS-style window */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Title bar — macOS style */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#F6F6F6] border-b border-black/[0.06]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-[12px] h-[12px] rounded-full bg-[#FF5F57] border border-[#E0443E]/20" />
                <span className="w-[12px] h-[12px] rounded-full bg-[#FEBC2E] border border-[#DEA123]/20" />
                <span className="w-[12px] h-[12px] rounded-full bg-[#28C840] border border-[#1AAB29]/20" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!isComplete && visibleLines > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[11px] text-text-tertiary font-mono">REC</span>
                </div>
              )}
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/[0.04]">
                <Phone size={11} className="text-text-tertiary" />
                <span className="text-[11px] text-text-secondary font-mono">
                  {isComplete ? "Appel termine" : visibleLines > 0 ? "Appel en cours" : "En attente"}
                </span>
                {visibleLines > 0 && (
                  <span className="text-[11px] text-text-tertiary font-mono ml-1">
                    {formatTime(callDuration)}
                  </span>
                )}
              </div>
              <WaveformBar active={!isComplete && visibleLines > 0} />
            </div>

            <div className="w-[52px] flex justify-end">
              {hasPlayed && (
                <button
                  onClick={() => {
                    setHasPlayed(false);
                    setCallDuration(0);
                    play();
                  }}
                  className="flex items-center gap-1 text-[11px] text-text-tertiary hover:text-text-primary transition-colors cursor-pointer"
                >
                  <RotateCcw size={11} />
                  Rejouer
                </button>
              )}
            </div>
          </div>

          {/* Content split */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] bg-white">
            {/* Left — Transcript */}
            <div className="border-r border-black/[0.06] flex flex-col">
              {/* Transcript header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.04] bg-[#FAFAFA]">
                <div className="flex items-center gap-2">
                  <Mic size={13} className="text-text-tertiary" />
                  <span className="text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                    Transcript en direct
                  </span>
                </div>
                {visibleLines > 0 && !isComplete && (
                  <span className="text-[10px] text-red-500 font-mono flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </span>
                )}
              </div>

              {/* Transcript body */}
              <div
                ref={transcriptRef}
                className="p-4 space-y-1 overflow-y-auto flex-1 font-mono"
                style={{ maxHeight: "400px" }}
              >
                <AnimatePresence>
                  {timeline.slice(0, visibleLines).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="flex gap-2 py-1.5 border-b border-black/[0.03] last:border-0"
                    >
                      {/* Timestamp */}
                      <span className="text-[10px] text-text-tertiary/50 mt-0.5 shrink-0 w-10 tabular-nums">
                        {`0:${String(Math.floor((timeline[i].delay / 1000) * 60 / 60)).padStart(2, "0")}`}
                      </span>
                      {/* Speaker tag */}
                      <span
                        className={`text-[10px] font-semibold shrink-0 mt-0.5 w-8 ${
                          line.speaker === "commercial"
                            ? "text-accent"
                            : "text-text-tertiary"
                        }`}
                      >
                        {line.speaker === "commercial" ? "COM" : "PRO"}
                      </span>
                      {/* Message */}
                      <p className="text-[12px] text-text-secondary leading-relaxed flex-1">
                        {line.text}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 py-1.5 items-center"
                  >
                    <span className="text-[10px] text-text-tertiary/50 w-10" />
                    <span className="text-[10px] text-text-tertiary w-8">...</span>
                    <TypingIndicator />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right — CRM auto-fill */}
            <div className="flex flex-col">
              {/* CRM header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.04] bg-[#FAFAFA]">
                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-accent" />
                  <span className="text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                    CRM — Fiche prospect
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  {!isComplete && filledCount > 0 && (
                    <motion.span
                      key="analyzing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5 text-[10px] text-accent font-mono"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                      Analyse IA...
                    </motion.span>
                  )}
                  {isComplete && (
                    <motion.span
                      key="done"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Synchronise
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* CRM fields */}
              <div className="p-5 space-y-2.5 flex-1" style={{ maxHeight: "400px", overflowY: "auto" }}>
                {crmFields.map((field) => {
                  const value = filledFields[field.key];
                  const isScore = field.key === "score";
                  return (
                    <motion.div
                      key={field.key}
                      className={`rounded-lg border px-4 py-2.5 transition-all duration-500 ${
                        value
                          ? "border-accent/15 bg-accent/[0.02]"
                          : "border-black/[0.04] bg-[#FAFAFA]"
                      }`}
                      layout
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] text-text-tertiary uppercase tracking-wider font-medium">
                          {field.label}
                        </p>
                        {value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center"
                          >
                            <span className="text-[8px] text-emerald-600">&#10003;</span>
                          </motion.div>
                        )}
                      </div>
                      {value ? (
                        <motion.p
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className={`mt-0.5 text-[13px] font-medium ${
                            isScore ? "text-emerald-600" : "text-text-primary"
                          }`}
                        >
                          {value}
                        </motion.p>
                      ) : (
                        <p className="mt-0.5 text-[13px] text-text-tertiary/30">—</p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress bar */}
              <div className="px-5 py-3 border-t border-black/[0.04] bg-[#FAFAFA]">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 rounded-full bg-black/[0.04] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${(filledCount / crmFields.length) * 100}%` }}
                      transition={{ duration: 0.6, ease }}
                    />
                  </div>
                  <span className="text-[10px] text-text-tertiary font-mono whitespace-nowrap">
                    {filledCount}/{crmFields.length} champs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
