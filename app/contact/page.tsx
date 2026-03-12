"use client";

import { useState } from "react";
import { Mail, Linkedin, Clock, CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact/ContactForm";

const CalEmbed = dynamic(() => import("@/components/ui/CalEmbed"), { ssr: false });

const coverageItems = [
  "Audit de vos process commerciaux",
  "Identification des taches automatisables",
  "Estimation du temps recupere",
  "Demo personnalisee",
  "Plan de deploiement",
];

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-text-tertiary text-sm mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl heading-display">
            Reservez votre appel decouverte.
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-lg">
            30 minutes pour identifier vos gains de productivite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left — coverage + contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-bg-surface p-6">
              <h3 className="text-xs text-text-tertiary tracking-wide uppercase mb-4">
                Ce qu&apos;on couvre en 30 min
              </h3>
              <ul className="space-y-3">
                {coverageItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-bg-surface p-6 space-y-4">
              <a href="mailto:contact@nored-ai.com" className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                <Mail size={16} /> contact@nored-ai.com
              </a>
              <a href="https://fr.linkedin.com/in/honor%C3%A9-debavelaere-bb14ba230" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                <Linkedin size={16} /> LinkedIn
              </a>
              <div className="flex items-center gap-3 text-sm text-text-tertiary">
                <Clock size={16} /> Reponse sous 24h
              </div>
            </div>
          </div>

          {/* Right — Cal.com inline embed */}
          <div>
            <CalEmbed />
          </div>
        </div>

        {/* Collapsible form section */}
        <div className="mt-12 border-t border-border-light pt-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${showForm ? "rotate-180" : ""}`}
            />
            Preferer envoyer un message ?
          </button>
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 max-w-xl">
                  <ContactForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
