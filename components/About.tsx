"use client";

import { Terminal, Layers, Users } from "lucide-react";
import { philosophyCards, bioData } from "@/lib/portfolio-data";
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
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [bioRef, bioInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div
          ref={headingRef}
          className={cn(
            "mb-10 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">
            &gt; philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How I think about engineering
          </h2>
        </div>

        {/* Bio intro — two short paragraphs about the person */}
        <div
          ref={bioRef}
          className={cn(
            "mb-14 max-w-3xl transition-all duration-500",
            bioInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            {bioData.intro}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            {bioData.detail}
          </p>
        </div>

        {/* Philosophy cards */}
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
