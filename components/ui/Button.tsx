"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "primary-inverse";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-text-primary text-white hover:bg-black/80 active:scale-[0.98]",
  "primary-inverse":
    "bg-white text-text-primary hover:bg-white/90 active:scale-[0.98] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
  secondary:
    "border border-border text-text-primary hover:bg-bg-surface",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display font-semibold text-[15px] transition-all duration-200 cursor-pointer";
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
