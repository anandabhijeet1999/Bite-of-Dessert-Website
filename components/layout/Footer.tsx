"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { NAV_LINKS, MENU_CATEGORIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-chocolate-800 text-cream overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-coral-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 grid place-items-center rounded-xl bg-chocolate-900 ring-1 ring-gold-400/40">
                <span className="font-display text-gold-400 text-xl tracking-wider">BOD</span>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl">{SITE.name}</span>
                <span className="font-script text-gold-400 text-lg">Est. in Aya Nagar</span>
              </div>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              {SITE.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE.socials.instagram}
                className="h-11 w-11 grid place-items-center rounded-full bg-cream/5 hover:bg-coral-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials.facebook}
                className="h-11 w-11 grid place-items-center rounded-full bg-cream/5 hover:bg-coral-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.whatsapp}
                className="h-11 w-11 grid place-items-center rounded-full bg-cream/5 hover:bg-coral-500 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-gold-400">Explore</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-coral-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-gold-400">Menu</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {MENU_CATEGORIES.map((cat) => (
                <li key={cat.key}>
                  <Link href="#menu" className="text-cream/70 hover:text-coral-400 transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={SITE.phoneHref} className="text-cream/70 hover:text-coral-400 transition-colors">
                  Order by Phone
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-gold-400">Visit Us</h4>
            <ul className="flex flex-col gap-3 text-sm text-cream/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-coral-400 shrink-0" />
                <a href={SITE.mapsUrl} className="hover:text-coral-400 transition-colors">
                  {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city} {SITE.address.pincode}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-coral-400 shrink-0" />
                <a href={SITE.phoneHref} className="hover:text-coral-400 transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-coral-400 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-coral-400 transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="text-xs text-cream/50 pt-1">{SITE.hours}</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>
            Made with <span className="text-coral-400">♥</span> in New Delhi
          </span>
        </div>
      </div>
    </footer>
  );
}
