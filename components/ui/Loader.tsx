"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const dismiss = () => setTimeout(() => setShow(false), 900);
    if (document.readyState === "complete") {
      dismiss();
      return;
    }
    window.addEventListener("load", dismiss, { once: true });
    const fallback = setTimeout(() => setShow(false), 2600);
    return () => {
      window.removeEventListener("load", dismiss);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <m.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-chocolate-900 text-gold-400"
        >
          <div className="flex flex-col items-center gap-6">
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <svg
                width="96"
                height="120"
                viewBox="0 0 96 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <defs>
                  <linearGradient id="scoop" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFE6D1" />
                    <stop offset="1" stopColor="#F7A978" />
                  </linearGradient>
                  <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#D4A24A" />
                    <stop offset="1" stopColor="#8F6624" />
                  </linearGradient>
                </defs>
                <m.circle
                  cx="48"
                  cy="44"
                  r="28"
                  fill="url(#scoop)"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <m.circle
                  cx="36"
                  cy="34"
                  r="6"
                  fill="#E86A3A"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <path
                  d="M20 62 L48 114 L76 62 Z"
                  fill="url(#cone)"
                  stroke="#5E3A14"
                  strokeWidth="1.5"
                />
                <path d="M28 66 L60 66 M32 74 L56 74 M36 82 L52 82 M40 90 L48 90" stroke="#5E3A14" strokeWidth="1" opacity="0.6" />
                <m.path
                  d="M40 66 Q42 78 44 66"
                  stroke="#E86A3A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-display text-3xl tracking-[0.3em] text-gold-400">
                {SITE.short}
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold-400/70">
                {SITE.name}
              </span>
            </m.div>
            <div className="flex gap-1.5 mt-2" aria-hidden>
              {[0, 1, 2].map((i) => (
                <m.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-gold-400"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
                />
              ))}
            </div>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
