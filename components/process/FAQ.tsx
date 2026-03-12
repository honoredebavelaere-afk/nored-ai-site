"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Combien ca coute ?", answer: "A partir de 2 000\u20AC pour le pack Essentiel (CRM auto-rempli + follow-up email). Pack Pro a 4 000\u20AC avec les reponses emails IA. Maintenance optionnelle : 300-500\u20AC/mois. Audit gratuit pour un chiffrage precis." },
  { question: "Est-ce que ca marche avec notre CRM ?", answer: "Oui. HubSpot, Salesforce, Pipedrive et solutions sur mesure." },
  { question: "Combien de temps pour mettre en place ?", answer: "2 a 3 semaines de l'audit au deploiement." },
  { question: "Mes donnees sont securisees ?", answer: "Vos donnees restent dans vos outils. Connexions chiffrees, zero stockage externe. RGPD." },
  { question: "Si l'IA fait une erreur ?", answer: "L'IA genere des brouillons valides par vos commerciaux avant envoi." },
  { question: "Faut-il former l'equipe ?", answer: "Formation incluse. En pratique, presque rien a apprendre." },
  { question: "Et si on veut arreter ?", answer: "Aucun engagement. Vos donnees restent dans vos outils." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="divide-y divide-border-light">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
            >
              <span className="text-sm font-medium text-text-primary pr-4">{faq.question}</span>
              <ChevronDown size={16} className={`text-text-tertiary shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <div className="pb-5 text-sm text-text-secondary leading-relaxed">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
