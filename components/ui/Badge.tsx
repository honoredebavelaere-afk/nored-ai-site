interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full font-mono uppercase tracking-[0.1em] text-[11px]
        bg-accent/10 text-accent-glow border border-accent/20
        ${className}
      `}
    >
      {children}
    </span>
  );
}
