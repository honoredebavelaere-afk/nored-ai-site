import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-7xl font-display font-extrabold text-border mb-6">404</p>
        <h1 className="text-2xl font-display font-semibold text-text-primary mb-3">
          Page introuvable
        </h1>
        <p className="text-text-secondary text-sm mb-8">
          Cette page n&apos;existe pas ou a ete deplacee.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-text-primary text-white font-display font-semibold text-sm hover:bg-black/85 transition-all duration-200"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
