"use client";

import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-cream">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chocolate-700/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="Crafted in Aya Nagar,"
          highlight="loved everywhere."
          description="What started as a small family kitchen has grown into Delhi's favourite stop for Korean-style ice cream, fresh lassi and stone-oven pizza — all made with the same care we'd give our own family."
        />

        <div
          ref={ref}
          className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center"
        >
          <div className="relative grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[380px] sm:h-[460px] md:h-[520px]">
            <m.div
              style={{ y: yLeft }}
              className="col-span-4 row-span-4 relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-chocolate-700/5"
            >
              <Image
                src="/images/about/kitchen.svg"
                alt="Fresh ingredients in the BOD kitchen"
                fill
                sizes="(min-width:1024px) 400px, 100vw"
                className="object-cover"
              />
            </m.div>
            <m.div
              style={{ y: yRight }}
              className="col-start-5 col-span-2 row-span-3 relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-chocolate-700/5"
            >
              <Image
                src="/images/about/plating.svg"
                alt="Dessert plating close-up"
                fill
                sizes="(min-width:1024px) 200px, 40vw"
                className="object-cover"
              />
            </m.div>
            <m.div
              style={{ y: yRight }}
              className="col-start-3 col-span-4 row-start-5 row-span-2 relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-chocolate-700/5"
            >
              <Image
                src="/images/about/pizza.svg"
                alt="Pizza being pulled from the oven"
                fill
                sizes="(min-width:1024px) 360px, 60vw"
                className="object-cover"
              />
            </m.div>
            <m.div
              style={{ y: yLeft }}
              className="col-start-1 col-span-2 row-start-5 row-span-2 relative rounded-3xl overflow-hidden bg-brand-gradient text-white p-3 sm:p-5 flex flex-col justify-between shadow-glow"
            >
              <span className="font-script text-2xl sm:text-3xl leading-none">since</span>
              <span className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold">2021</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] opacity-80">
                Aya Nagar, Delhi
              </span>
            </m.div>
          </div>

          <div className="flex flex-col gap-7">
            <Reveal direction="up">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral-600 font-semibold">
                  <span className="h-1 w-8 bg-coral-500 rounded-full" />
                  Hygiene First
                </span>
                <h3 className="font-display text-2xl font-semibold text-chocolate-700">
                  A spotless kitchen, every single shift.
                </h3>
                <p className="text-chocolate-600/80 leading-relaxed">
                  Our equipment is sanitised three times a day, our staff is
                  trained on FSSAI food-safety protocols, and every batch is
                  logged — because what goes into your bite matters as much as
                  the taste.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-coral-600 font-semibold">
                  <span className="h-1 w-8 bg-coral-500 rounded-full" />
                  Pure Ingredients
                </span>
                <h3 className="font-display text-2xl font-semibold text-chocolate-700">
                  Farm-fresh dairy, real fruit, never compromise.
                </h3>
                <p className="text-chocolate-600/80 leading-relaxed">
                  We source milk and cream from trusted local dairies, hand-pick
                  seasonal fruit, and skip every artificial shortcut. If it
                  wouldn&apos;t be good enough for our family, it doesn&apos;t leave our kitchen.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <dl className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-3xl bg-white/90 ring-1 ring-chocolate-700/5 p-6 shadow-soft">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="font-display text-3xl font-semibold text-brand-gradient">
                      {stat.value}
                    </dt>
                    <dd className="text-xs uppercase tracking-[0.18em] text-chocolate-700/70 mt-1">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
