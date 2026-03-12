"use client";

import { Database, Mail, MessageSquare, FileText } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: "crm",
    icon: Database,
    title: "CRM Auto-rempli",
    description:
      "Chaque appel est transcrit et analysé par notre IA. Les informations clés sont extraites et injectées dans votre CRM : challenges identifiés, budget, décideur, score de qualification, prochaines actions à mener.",
    before:
      "25 minutes de saisie manuelle après chaque appel. Informations incomplètes, oublis fréquents, données inconsistantes entre commerciaux.",
    after:
      "2 minutes. Le CRM se remplit automatiquement avec des données structurées et complètes. Qualité de données homogène.",
    timeSaved: "23 min gagnées par appel",
  },
  {
    id: "emails",
    icon: Mail,
    title: "Emails de suivi intelligents",
    description:
      "Après chaque appel, un email de follow-up personnalisé est généré automatiquement. Il reprend les points spécifiques discutés, les engagements pris et les prochaines étapes.",
    before:
      "15 minutes pour rédiger chaque email. Ton inconsistant, oublis de points importants, follow-ups tardifs.",
    after:
      "Email prêt en quelques secondes. Reprend fidèlement les points de l'appel. Le commercial relit et envoie.",
    timeSaved: "15 min gagnées par email",
  },
  {
    id: "reponses",
    icon: MessageSquare,
    title: "Réponses emails IA",
    description:
      "Chaque email entrant génère automatiquement un brouillon de réponse contextualisé. L'IA s'appuie sur l'historique CRM et la relation client pour proposer une réponse pertinente.",
    before:
      "10 minutes de rédaction par réponse. Le commercial doit rechercher le contexte, relire l'historique.",
    after:
      "Brouillon prêt instantanément. Le commercial ajuste et envoie en 2 minutes.",
    timeSaved: "8 min gagnées par email",
  },
  {
    id: "devis",
    icon: FileText,
    title: "Devis Express",
    description:
      "3 lignes dans un formulaire et un PDF professionnel est généré en 2 minutes. Les informations client sont pré-remplies depuis le CRM. Votre charte graphique, vos conditions.",
    before:
      "20 minutes dans Excel ou Word. Copier-coller les infos client, mise en forme, export PDF, envoi.",
    after:
      "Formulaire rapide → PDF professionnel en 2 minutes. Informations pré-remplies, format impeccable.",
    timeSaved: "18 min gagnées par devis",
  },
];

export default function ServicesList() {
  return (
    <div className="space-y-8">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}
