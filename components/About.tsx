"use client";

import Link from "next/link";
import { philosophyCards } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

function PhilosophyItem({
  index,
  title,
  body,
  isLast,
}: {
  index: number;
  title: string;
  body: string;
  isLast: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-[2.5rem_1fr] md:grid-cols-[5rem_1fr] gap-5 md:gap-10 py-8 transition-all duration-500",
        !isLast && "border-b border-border/40",
        inView ? "animate-fade-up opacity-100" : "opacity-0"
      )}
      style={{ transitionDelay: `${Math.min((index - 1) * 70, 210)}ms` }}
    >
      {/* Number */}
      <span className="font-mono text-2xl md:text-3xl font-bold text-primary/30 leading-none pt-1 select-none tabular-nums">
        {String(index).padStart(2, "0")}
      </span>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="philosophy" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          ref={headingRef}
          className={cn(
            "mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <div>
            <p className="terminal-prefix text-xs tracking-widest mb-3">
              &gt; philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How I think about engineering
            </h2>
          </div>
          <Link
            href="/about"
            className="text-[15px] text-muted-foreground/70 hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            Background &amp; full story
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div>
          {philosophyCards.map((card, i) => (
            <PhilosophyItem
              key={card.title}
              index={i + 1}
              title={card.title}
              body={card.body}
              isLast={i === philosophyCards.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
