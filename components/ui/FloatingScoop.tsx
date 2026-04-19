"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
  rotate?: number;
}

export default function FloatingScoop({
  children,
  className = "",
  delay = 0,
  amplitude = 14,
  duration = 5,
  rotate = 0,
}: Props) {
  return (
    <m.div
      className={className}
      initial={{ y: 0, rotate: rotate * -1 }}
      animate={{ y: [0, -amplitude, 0], rotate: [rotate * -1, rotate, rotate * -1] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </m.div>
  );
}
