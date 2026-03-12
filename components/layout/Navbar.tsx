"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Solutions" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/logo-dark.svg" alt="nored AI" width={100} height={26} priority className="hover:opacity-60 transition-opacity" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#book"
          className="hidden md:inline-flex items-center px-5 py-1.5 rounded-full bg-text-primary text-white text-xs font-display font-semibold hover:bg-black/80 transition-all cursor-pointer"
        >
          Planifier un appel
        </Link>

        <button
          className="md:hidden text-text-primary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-black/[0.04] bg-white px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-text-secondary hover:text-text-primary py-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#book"
            className="mt-3 w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-text-primary text-white text-sm font-display font-semibold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Planifier un appel
          </Link>
        </div>
      )}
    </nav>
  );
}
