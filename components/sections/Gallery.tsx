"use client";

import Image from "next/image";
import { m } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";

const spanClass: Record<NonNullable<(typeof GALLERY)[number]["span"]>, string> = {
  tall: "h-64 sm:h-80 md:h-[460px] md:row-span-2",
  wide: "h-56 sm:h-64 md:h-[220px] md:col-span-2",
  square: "h-56 sm:h-64 md:h-[220px]",
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Little moments,"
          highlight="made delicious."
          description="A peek inside our kitchen, our counters, and the tiny edible celebrations we send out every day."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        >
          {GALLERY.map((img, idx) => (
            <m.figure
              key={img.src}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-3xl ring-1 ring-chocolate-700/5 shadow-soft bg-chocolate-900 ${spanClass[img.span ?? "square"]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                loading={idx < 2 ? "eager" : "lazy"}
              />

              {/* Permanent caption bar — gradient wash at the bottom so text always reads */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-chocolate-900/85 via-chocolate-900/35 to-transparent"
              />

              {/* Category chip (top-left) */}
              {img.tag ? (
                <span
                  aria-hidden="true"
                  className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-chocolate-700 text-[10px] font-semibold uppercase tracking-[0.18em] shadow-soft"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
                  {img.tag}
                </span>
              ) : null}

              {/* Always-visible caption */}
              <figcaption
                aria-hidden="true"
                className="absolute bottom-4 left-4 right-4 text-white"
              >
                <span className="font-display text-lg sm:text-xl font-semibold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {img.caption ?? img.alt}
                </span>
                <span className="mt-1 block h-0.5 w-8 bg-coral-400 rounded-full origin-left scale-x-75 group-hover:scale-x-100 transition-transform duration-500" />
              </figcaption>
            </m.figure>
          ))}
        </m.div>
      </div>
    </section>
  );
}
