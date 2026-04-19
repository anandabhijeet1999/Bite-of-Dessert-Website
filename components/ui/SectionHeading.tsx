"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  script?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  script,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-3 max-w-3xl mx-auto`}>
      {eyebrow ? (
        <Reveal direction="up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-500/10 text-coral-600 text-xs font-semibold uppercase tracking-[0.18em] ring-1 ring-coral-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-coral-500 animate-pulse-slow" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal direction="up" delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-chocolate-700">
          {title}
          {highlight ? (
            <>
              {" "}
              <span className="text-brand-gradient">{highlight}</span>
            </>
          ) : null}
        </h2>
      </Reveal>
      {script ? (
        <Reveal direction="up" delay={0.1}>
          <span className="font-script text-2xl sm:text-3xl md:text-4xl text-coral-500 -mt-1">
            {script}
          </span>
        </Reveal>
      ) : null}
      {description ? (
        <Reveal direction="up" delay={0.15}>
          <p className="text-chocolate-600/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
