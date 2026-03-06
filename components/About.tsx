"use client";

import { Terminal, GitBranch, Cpu } from "lucide-react";
import { philosophyCards } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const iconMap = {
  Terminal,
  GitBranch,
  Cpu,
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
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
    </div>
  );
}

export default function About() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={headingRef}
          className={cn(
            "mb-14 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">
            &gt; philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How I think about engineering
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Six years of ownership sharpens your priorities. These are the
            principles that guide every decision I make.
          </p>
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
