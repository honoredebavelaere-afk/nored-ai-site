"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const teamSizes = ["1-5 commerciaux", "6-15 commerciaux", "16-30 commerciaux", "30+ commerciaux"];
const crms = ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Autre / Pas de CRM"];

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white border border-border-light text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="rounded-2xl bg-bg-surface p-10 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-display font-semibold mb-2">Message envoye</h3>
        <p className="text-text-secondary text-sm">On revient vers vous sous 24h.</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      teamSize: (form.elements.namedItem("teamSize") as HTMLSelectElement).value,
      crm: (form.elements.namedItem("crm") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        setError(body.error || "Une erreur est survenue.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Impossible d'envoyer le message. Verifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs text-text-tertiary tracking-wide mb-2">Nom</label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-text-tertiary tracking-wide mb-2">Email</label>
          <input type="email" id="email" name="email" required className={inputClasses} placeholder="vous@entreprise.com" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-xs text-text-tertiary tracking-wide mb-2">Entreprise</label>
        <input type="text" id="company" name="company" className={inputClasses} placeholder="Nom de votre entreprise" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="teamSize" className="block text-xs text-text-tertiary tracking-wide mb-2">Taille equipe</label>
          <select id="teamSize" name="teamSize" className={inputClasses}>
            <option value="">Selectionnez...</option>
            {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="crm" className="block text-xs text-text-tertiary tracking-wide mb-2">CRM actuel</label>
          <select id="crm" name="crm" className={inputClasses}>
            <option value="">Selectionnez...</option>
            {crms.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs text-text-tertiary tracking-wide mb-2">Message <span className="text-text-tertiary/50">(optionnel)</span></label>
        <textarea id="message" name="message" rows={4} className={`${inputClasses} resize-none`} placeholder="Une question, un contexte particulier..." />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-text-primary text-white font-display font-semibold text-[15px] shadow-[0_1px_3px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)] hover:bg-black/85 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none w-full md:w-auto"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Planifier un appel decouverte
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
