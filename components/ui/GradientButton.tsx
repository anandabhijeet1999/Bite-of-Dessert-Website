"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ReactNode, ComponentProps } from "react";

type Variant = "primary" | "ghost" | "outline";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-400 focus-visible:ring-offset-cream";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-brand-gradient shadow-soft hover:shadow-glow hover:-translate-y-0.5",
  ghost:
    "text-chocolate-700 bg-white/90 hover:bg-white shadow-soft hover:-translate-y-0.5",
  outline:
    "text-chocolate-700 border border-chocolate-700/20 hover:border-coral-500 hover:text-coral-600",
};

export default function GradientButton({
  children,
  href,
  variant = "primary",
  className = "",
  icon,
  onClick,
  type = "button",
  ariaLabel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <m.span
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </m.span>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls} aria-label={ariaLabel}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

export type GradientButtonProps = ComponentProps<typeof GradientButton>;
