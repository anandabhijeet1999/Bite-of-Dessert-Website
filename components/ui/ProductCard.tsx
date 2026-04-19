"use client";

import Image from "next/image";
import { m } from "framer-motion";
import type { MenuItem } from "@/lib/data";

const badgeStyles: Record<NonNullable<MenuItem["badge"]>, string> = {
  Signature: "bg-gold-400/90 text-chocolate-900",
  Bestseller: "bg-coral-500 text-white",
  New: "bg-mint-300 text-chocolate-700",
};

export default function ProductCard({ item }: { item: MenuItem }) {
  return (
    <m.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/95 ring-1 ring-chocolate-700/5 shadow-soft hover:shadow-glow transition-shadow duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/30 via-transparent to-transparent" />
        {item.badge ? (
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${badgeStyles[item.badge]}`}
          >
            {item.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-chocolate-700 leading-tight">
            {item.name}
          </h3>
          <span className="font-semibold text-coral-600 text-base sm:text-lg whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-chocolate-600/80 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-gradient scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
    </m.article>
  );
}
