"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { NAV_LINKS } from "@/lib/data";
import GradientButton from "@/components/ui/GradientButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <m.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-lg shadow-soft border-b border-chocolate-700/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Link href="#home" className="flex items-center gap-3 group" aria-label={SITE.name}>
            <span className="relative h-10 w-10 sm:h-11 sm:w-11 grid place-items-center rounded-xl bg-chocolate-900 ring-1 ring-gold-400/40 shadow-soft overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt={`${SITE.name} logo`}
                width={44}
                height={44}
                className="object-contain p-1"
                priority
              />
            </span>
            <span className="hidden md:flex flex-col leading-tight">
              <span className="font-display text-base lg:text-lg font-semibold text-chocolate-700">
                {SITE.name}
              </span>
              <span className="hidden lg:inline text-[10px] uppercase tracking-[0.25em] text-coral-500/80">
                {SITE.tagline}
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-chocolate-700/80 hover:text-coral-600 transition-colors group"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-coral-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <GradientButton
              href={SITE.phoneHref}
              icon={<Phone className="h-4 w-4" />}
              className="hidden sm:inline-flex"
            >
              Order Now
            </GradientButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden h-11 w-11 grid place-items-center rounded-xl bg-white/80 backdrop-blur ring-1 ring-chocolate-700/10 text-chocolate-700 hover:text-coral-600"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </m.header>

      <AnimatePresence>
        {open ? (
          <m.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-chocolate-900/50 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <m.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-cream shadow-soft flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-2xl text-chocolate-700">{SITE.short}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-11 w-11 grid place-items-center rounded-xl bg-white ring-1 ring-chocolate-700/10 text-chocolate-700 hover:text-coral-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <m.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg font-medium text-chocolate-700 hover:text-coral-600 border-b border-chocolate-700/10"
                    >
                      {link.label}
                    </Link>
                  </m.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <GradientButton href={SITE.phoneHref} icon={<Phone className="h-4 w-4" />}>
                  Call {SITE.phone}
                </GradientButton>
                <GradientButton href={SITE.whatsapp} variant="ghost">
                  Chat on WhatsApp
                </GradientButton>
              </div>
            </m.aside>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
