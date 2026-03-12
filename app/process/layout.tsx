import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Du sur-mesure, pas du template. Découvrez notre process en 4 étapes : audit, configuration, déploiement et suivi continu.",
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
