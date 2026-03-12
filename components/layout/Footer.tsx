import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { href: "/services", label: "Solutions" },
      { href: "/process", label: "Process" },
      { href: "/about", label: "A propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/services#crm", label: "CRM Auto-rempli" },
      { href: "/services#emails", label: "Emails de suivi" },
      { href: "/services#reponses", label: "Reponses emails IA" },
      { href: "/services#devis", label: "Devis Express" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Image src="/logo-dark.svg" alt="nored AI" width={100} height={26} />
            <p className="mt-4 text-text-tertiary text-sm max-w-xs leading-relaxed">
              Automatisation IA sur mesure pour les equipes commerciales des PME.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://fr.linkedin.com/in/honor%C3%A9-debavelaere-bb14ba230" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border-light text-text-tertiary hover:text-text-primary hover:border-border transition-all cursor-pointer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:contact@nored-ai.com"
                className="p-2 rounded-lg border border-border-light text-text-tertiary hover:text-text-primary hover:border-border transition-all cursor-pointer" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs text-text-tertiary tracking-wide uppercase mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-tertiary">&copy; {new Date().getFullYear()} nored AI</p>
          <p className="text-xs text-text-tertiary">Entreprise francaise</p>
        </div>
      </div>
    </footer>
  );
}
