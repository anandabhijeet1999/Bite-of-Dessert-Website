"use client";

import { m } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-16 sm:py-24 md:py-32 bg-cream overflow-hidden">
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-peach-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Little things we do"
          highlight="differently."
          description="The details that make a bite memorable — from the first scoop to the last bite."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <m.div key={feature.title} variants={staggerItem}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
