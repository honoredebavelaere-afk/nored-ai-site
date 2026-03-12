import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noredai.digital"),
  title: {
    default: "nored AI — Automatisation IA pour équipes commerciales PME",
    template: "%s | nored AI",
  },
  description:
    "Automatisez le travail administratif de vos commerciaux avec l'IA. CRM rempli automatiquement, emails de suivi rédigés, devis en 2 min. Déployé en 5-10 jours.",
  keywords: [
    "nored",
    "nored AI",
    "noredai",
    "automatisation IA commerciale",
    "CRM automatique PME",
    "automatisation emails B2B",
    "n8n automatisation",
    "IA équipe commerciale",
    "automatisation prospection",
    "gain de temps commercial",
  ],
  applicationName: "nored AI",
  authors: [{ name: "Honoré Debavelaere", url: "https://www.noredai.digital" }],
  creator: "nored AI",
  publisher: "nored AI",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "nored AI — Automatisation IA pour équipes commerciales PME",
    description:
      "Automatisez le travail administratif de vos commerciaux. CRM rempli automatiquement, emails de suivi, devis express. Déployé en 5-10 jours.",
    url: "https://www.noredai.digital",
    siteName: "nored AI",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "nored AI — Automatisation IA pour équipes commerciales PME",
    description:
      "CRM rempli automatiquement, emails de suivi rédigés, devis en 2 min. Vos commerciaux récupèrent 2h par jour.",
    site: "@noredai",
    creator: "@noredai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.noredai.digital",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.noredai.digital/#organization",
  name: "nored AI",
  alternateName: ["nored", "noredai"],
  url: "https://www.noredai.digital",
  logo: "https://www.noredai.digital/nored-ai-logo.png",
  description:
    "Automatisation IA sur mesure pour les équipes commerciales des PME B2B. CRM auto-rempli, emails intelligents, déploiement en 5-10 jours.",
  founder: {
    "@type": "Person",
    "@id": "https://www.noredai.digital/#honore",
    name: "Honoré Debavelaere",
    url: "https://www.noredai.digital/about",
    sameAs: ["https://fr.linkedin.com/in/honor%C3%A9-debavelaere-bb14ba230"],
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@nored-ai.com",
    contactType: "customer support",
    availableLanguage: "French",
  },
  areaServed: "FR",
  sameAs: [
    "https://fr.linkedin.com/in/honor%C3%A9-debavelaere-bb14ba230",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.noredai.digital/#website",
  name: "nored AI",
  alternateName: "nored",
  url: "https://www.noredai.digital",
  publisher: {
    "@id": "https://www.noredai.digital/#organization",
  },
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.noredai.digital/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour déployer votre solution d'automatisation IA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le déploiement prend en moyenne 5 à 10 jours ouvrés, de l'audit initial jusqu'à la mise en production. Cela inclut la configuration sur mesure, les tests, et une formation de votre équipe.",
      },
    },
    {
      "@type": "Question",
      name: "Quels CRM et outils intégrez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous nous connectons à la plupart des CRM du marché (HubSpot, Pipedrive, Salesforce, Notion, etc.) ainsi qu'aux outils de communication (Gmail, Outlook, Slack) via n8n. Si votre outil dispose d'une API, nous pouvons l'intégrer.",
      },
    },
    {
      "@type": "Question",
      name: "Mon équipe commerciale devra-t-elle changer ses habitudes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Les automatisations s'intègrent dans vos outils existants. Vos commerciaux continuent d'utiliser leur CRM et leurs emails habituels — l'IA travaille en arrière-plan sans friction.",
      },
    },
    {
      "@type": "Question",
      name: "Mes données sont-elles sécurisées ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous travaillons avec des solutions conformes au RGPD, hébergées en Europe. Vos données ne transitent pas par des tiers non autorisés. Chaque déploiement est conçu avec la souveraineté des données en priorité.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que je peux voir une démonstration avant de m'engager ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous proposons un audit gratuit de 15 minutes via Google Meet où nous identifions ensemble les tâches automatisables dans votre process commercial. Sans engagement et 100% actionnable.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles tâches commerciales peut-on automatiser avec l'IA ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les principales tâches automatisables sont : le remplissage automatique du CRM après chaque appel, la rédaction des emails de suivi, la génération de devis personnalisés, la qualification des leads, et la création de rapports d'activité.",
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.noredai.digital" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.noredai.digital/services" },
    { "@type": "ListItem", position: 3, name: "Notre Méthode", item: "https://www.noredai.digital/process" },
    { "@type": "ListItem", position: 4, name: "À propos", item: "https://www.noredai.digital/about" },
    { "@type": "ListItem", position: 5, name: "Contact", item: "https://www.noredai.digital/contact" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-bg text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
