"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { IceCream2, Phone, Sparkles, Star, ShieldCheck, ArrowDown } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";
import FloatingScoop from "@/components/ui/FloatingScoop";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-cream-radial"
    >
      <div aria-hidden className="absolute inset-0 noise pointer-events-none" />
      <div aria-hidden className="absolute -top-32 -right-16 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-peach-400/40 via-coral-500/30 to-transparent blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-20 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-rose-300/40 via-peach-400/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 md:gap-7">
          <m.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white/90 ring-1 ring-chocolate-700/10 text-xs font-semibold uppercase tracking-[0.2em] text-chocolate-700 shadow-soft"
          >
            <IceCream2 className="h-3.5 w-3.5 text-coral-500" />
            New Delhi · Aya Nagar
          </m.span>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[40px] leading-[1.05] sm:text-5xl sm:leading-[1.02] md:text-6xl lg:text-7xl font-semibold text-chocolate-700"
          >
            A bite of pure{" "}
            <span className="relative inline-block">
              <span className="text-brand-gradient">happiness.</span>
              <m.svg
                viewBox="0 0 220 14"
                className="absolute left-0 -bottom-2 w-full h-3 text-coral-500"
                fill="none"
                aria-hidden
              >
                <m.path
                  d="M2 8 C 60 1, 140 15, 218 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1, duration: 1.1, ease: "easeOut" }}
                />
              </m.svg>
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-chocolate-600/80 leading-relaxed max-w-xl"
          >
            Handcrafted Korean-style ice cream, fresh lassi, stone-oven pizzas and
            melt-in-mouth desserts — made fresh daily in our Aya Nagar kitchen.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <GradientButton href="#menu">Explore Menu</GradientButton>
            <GradientButton
              href={SITE.phoneHref}
              variant="ghost"
              icon={<Phone className="h-4 w-4" />}
            >
              Call {SITE.phone}
            </GradientButton>
          </m.div>

          <m.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-chocolate-700/80"
          >
            <li className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-400 fill-gold-400" />
              <span>
                <strong className="text-chocolate-700">4.9</strong> / 5 rating
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-coral-500" />
              <span>
                <strong className="text-chocolate-700">10k+</strong> happy bites
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-mint-300" />
              <span>FSSAI certified</span>
            </li>
          </m.ul>
        </div>

        <div className="lg:col-span-6 relative h-[340px] sm:h-[460px] md:h-[540px] lg:h-[620px]">
          <m.div
            aria-hidden
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 grid place-items-center"
          >
            <m.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="h-[90%] w-[90%] max-w-[560px] max-h-[560px] rounded-full bg-gradient-to-br from-peach-400 via-coral-500 to-chocolate-700 blur-[1px] opacity-95"
            />
            <div className="absolute h-[75%] w-[75%] max-w-[460px] max-h-[460px] rounded-full bg-cream/90 ring-1 ring-white/60" />
          </m.div>

          <FloatingScoop
            className="absolute inset-0 grid place-items-center"
            amplitude={18}
            duration={6}
          >
            <div className="relative h-[64%] w-[64%] max-w-[420px] aspect-square rounded-full overflow-hidden shadow-glow ring-4 ring-white/70">
              <Image
                src="/images/hero/hero-scoop.svg"
                alt="Signature Korean-style ice cream scoop"
                fill
                priority
                sizes="(min-width:1024px) 420px, 60vw"
                className="object-cover"
              />
            </div>
          </FloatingScoop>

          <FloatingScoop
            className="absolute top-4 left-4 sm:top-6 sm:left-10"
            delay={0.3}
            amplitude={10}
            duration={4.5}
            rotate={6}
          >
            <div className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-3xl bg-white shadow-soft grid place-items-center text-2xl sm:text-3xl">
              🍓
            </div>
          </FloatingScoop>

          <FloatingScoop
            className="absolute top-16 right-2 sm:right-4"
            delay={0.5}
            amplitude={14}
            duration={5.2}
            rotate={-8}
          >
            <div className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-3xl bg-chocolate-700 text-white shadow-soft grid place-items-center text-2xl sm:text-3xl">
              🍫
            </div>
          </FloatingScoop>

          <FloatingScoop
            className="absolute bottom-6 left-6 sm:left-0"
            delay={0.2}
            amplitude={12}
            duration={5.8}
            rotate={4}
          >
            <div className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-3xl bg-rose-300 shadow-soft grid place-items-center text-2xl sm:text-3xl">
              🧋
            </div>
          </FloatingScoop>

          <FloatingScoop
            className="absolute bottom-0 right-6 sm:right-4"
            delay={0.4}
            amplitude={10}
            duration={4.8}
            rotate={-6}
          >
            <div className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-3xl bg-mint-300 shadow-soft grid place-items-center text-2xl sm:text-3xl">
              🍨
            </div>
          </FloatingScoop>
        </div>
      </div>

      <m.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-chocolate-700/70 hover:text-coral-500 transition-colors"
      >
        Scroll
        <m.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-chocolate-700/30 grid place-items-start pt-1"
        >
          <ArrowDown className="h-3 w-3" />
        </m.span>
      </m.a>
    </section>
  );
}
