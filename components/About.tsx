"use client";

import Link from "next/link";
import { Terminal, Layers, Users } from "lucide-react";
import { philosophyCards } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const iconMap = {
  Terminal,
  Layers,
  Users,
} as const;

type IconName = keyof typeof iconMap;

function PhilosophyCard({
  icon,
  title,
  body,
  delay,
}: {
  icon: string;
  title: string;
  body: string;
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const Icon = iconMap[icon as IconName] ?? Terminal;

  return (
    <div
      ref={ref}
      className={cn(
        "card-accent rounded-lg bg-surface border border-border/60 p-6 transition-all duration-500",
        inView ? "animate-fade-up opacity-100" : "opacity-0"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-[15px] text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

export default function About() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={headingRef}
          className={cn(
            "mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 transition-all duration-500",
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
            className="text-[15px] text-muted-foreground hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            Background &amp; full philosophy
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {philosophyCards.map((card, i) => (
            <PhilosophyCard
              key={card.title}
              {...card}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
