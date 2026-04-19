"use client";

import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: Props) {
  return (
    <m.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative flex flex-col gap-3 rounded-3xl bg-white/95 p-5 sm:p-7 ring-1 ring-chocolate-700/5 shadow-soft overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
      <div className="relative h-14 w-14 grid place-items-center rounded-2xl bg-peach-50 ring-1 ring-coral-500/15 text-coral-500 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-chocolate-700">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-chocolate-600/80">{description}</p>
    </m.div>
  );
}
