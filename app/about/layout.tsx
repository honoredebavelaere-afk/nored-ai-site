import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez nored AI, l'agence d'automatisation IA fondée par Honoré. Notre mission : rendre l'IA accessible aux équipes commerciales des PME.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
