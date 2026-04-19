"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { MENU, MENU_CATEGORIES, type MenuCategory } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";

export default function Products() {
  const [active, setActive] = useState<MenuCategory>("drinks");
  const items = MENU[active];
  const activeMeta = MENU_CATEGORIES.find((c) => c.key === active)!;

  return (
    <section id="menu" className="relative py-16 sm:py-24 md:py-32 bg-peach-50/60">
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title="Made with love,"
          highlight="served with joy."
          script="— fresh daily"
          description="From silky Korean ice cream to stone-oven pizzas, every item on our menu is crafted in-house. Pick a tab to explore."
        />

        <div className="mt-12 flex justify-center px-2">
          <div className="relative inline-flex gap-1 rounded-full bg-white/90 ring-1 ring-chocolate-700/10 p-1.5 shadow-soft max-w-full overflow-x-auto no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`relative z-10 px-3 sm:px-5 md:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive ? "text-white" : "text-chocolate-700/70 hover:text-chocolate-700"
                  }`}
                >
                  {isActive ? (
                    <m.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-brand-gradient shadow-soft"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-center mt-4 font-script text-coral-500 text-xl sm:text-2xl">
          {activeMeta.hint}
        </p>

        <AnimatePresence mode="wait">
          <m.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item) => (
              <m.div key={item.id} variants={staggerItem}>
                <ProductCard item={item} />
              </m.div>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
