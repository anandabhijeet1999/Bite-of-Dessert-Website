"use client";

import { AnimatePresence, m } from "framer-motion";
import { MapPin, Phone, Clock, Send, Check, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-peach-50/60 overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-coral-500/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-peach-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit · Call · Order"
          title="Say hi, or stop by."
          highlight="We'll save you a scoop."
          description="Drop us a message, give us a ring, or just swing by the shop. We'd love to meet you."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <Reveal direction="right">
            <form
              onSubmit={onSubmit}
              className="relative flex flex-col gap-4 rounded-3xl bg-white/95 p-6 sm:p-8 ring-1 ring-chocolate-700/5 shadow-soft"
            >
              <h3 className="font-display text-2xl font-semibold text-chocolate-700">
                Send us a message
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.18em] text-chocolate-700/70 font-semibold">
                    Your Name
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Priya Sharma"
                    className="form-input rounded-xl border-chocolate-700/10 bg-cream/80 focus:border-coral-500 focus:ring-coral-500/30 text-sm px-4 py-3"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.18em] text-chocolate-700/70 font-semibold">
                    Phone
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 98XXX XXXXX"
                    className="form-input rounded-xl border-chocolate-700/10 bg-cream/80 focus:border-coral-500 focus:ring-coral-500/30 text-sm px-4 py-3"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.18em] text-chocolate-700/70 font-semibold">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="form-input rounded-xl border-chocolate-700/10 bg-cream/80 focus:border-coral-500 focus:ring-coral-500/30 text-sm px-4 py-3"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.18em] text-chocolate-700/70 font-semibold">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Bulk order, catering enquiry, or just saying hi…"
                  className="form-textarea rounded-xl border-chocolate-700/10 bg-cream/80 focus:border-coral-500 focus:ring-coral-500/30 text-sm px-4 py-3 resize-none"
                />
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <GradientButton type="submit" icon={<Send className="h-4 w-4" />}>
                  {loading ? "Sending…" : "Send Message"}
                </GradientButton>
                <GradientButton
                  href={SITE.whatsapp}
                  variant="ghost"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  WhatsApp us
                </GradientButton>
              </div>

              <AnimatePresence>
                {submitted ? (
                  <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-2 flex items-center gap-2 rounded-xl bg-mint-200 text-chocolate-700 px-4 py-3 text-sm font-medium"
                  >
                    <Check className="h-4 w-4 text-coral-600" />
                    Thanks! We&apos;ll call back shortly.
                  </m.div>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl bg-chocolate-800 text-cream p-6 sm:p-8 shadow-soft overflow-hidden relative">
                <div aria-hidden className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-coral-500/25 blur-3xl" />
                <h3 className="font-display text-2xl font-semibold text-gold-400">
                  Come say hello
                </h3>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                  <li className="flex gap-3">
                    <span className="h-10 w-10 grid place-items-center rounded-xl bg-cream/5 ring-1 ring-cream/10 shrink-0">
                      <MapPin className="h-4 w-4 text-coral-400" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-cream/60 text-xs uppercase tracking-[0.2em]">
                        Address
                      </span>
                      <a
                        href={SITE.mapsUrl}
                        className="text-cream hover:text-coral-400 transition-colors leading-relaxed"
                      >
                        {SITE.address.line1},<br />
                        {SITE.address.line2}<br />
                        {SITE.address.city} {SITE.address.pincode}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="h-10 w-10 grid place-items-center rounded-xl bg-cream/5 ring-1 ring-cream/10 shrink-0">
                      <Phone className="h-4 w-4 text-coral-400" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-cream/60 text-xs uppercase tracking-[0.2em]">
                        Call / WhatsApp
                      </span>
                      <a
                        href={SITE.phoneHref}
                        className="text-cream hover:text-coral-400 transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="h-10 w-10 grid place-items-center rounded-xl bg-cream/5 ring-1 ring-cream/10 shrink-0">
                      <Clock className="h-4 w-4 text-coral-400" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-cream/60 text-xs uppercase tracking-[0.2em]">
                        Hours
                      </span>
                      <span className="text-cream">{SITE.hours}</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <GradientButton href={SITE.mapsUrl} variant="primary">
                    Open in Google Maps
                  </GradientButton>
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden ring-1 ring-chocolate-700/10 shadow-soft">
                <iframe
                  src={SITE.mapsEmbed}
                  title="Bite of Dessert location map"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
