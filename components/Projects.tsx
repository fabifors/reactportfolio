"use client";

import { Badge } from "@/components/ui/badge";
import { workHighlights, legacyProjects } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowUpRight, Users } from "lucide-react";

export default function Projects() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [cardRef, cardInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [legacyRef, legacyInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const work = workHighlights[0];

  return (
    <section id="work" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div
          ref={headingRef}
          className={cn(
            "mb-14 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">
            &gt; work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Where I&apos;ve built things
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl">
            Six years of continuous ownership at one company. That breadth and
            depth is the work.
          </p>
        </div>

        {/* Featured work card — Svea Solar */}
        <div
          ref={cardRef}
          className={cn(
            "rounded-xl bg-surface border border-border/60 p-8 md:p-10 transition-all duration-600",
            cardInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          {/* Card header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              {/* Period · Employer */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-primary/70">{work.period}</span>
                <span className="text-border">·</span>
                <span className="text-xs font-mono text-muted-foreground">{work.employer}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{work.title}</h3>
              {/* Role */}
              <p className="text-[15px] text-muted-foreground font-mono">
                <span className="text-primary/60 mr-1">&gt;</span>
                {work.role}
              </p>
              {/* Team size — prominent */}
              <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground/70">
                <Users className="h-3 w-3" />
                <span>Team: {work.team}</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Impact bullets */}
          <ul className="space-y-4 mb-8">
            {work.impact.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed"
              >
                <span className="text-primary mt-0.5 leading-none flex-shrink-0 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
            {work.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs border-border/60 text-muted-foreground font-mono"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Earlier work footnote */}
        <div
          ref={legacyRef}
          className={cn(
            "mt-12 transition-all duration-500",
            legacyInView ? "animate-fade-in opacity-100" : "opacity-0"
          )}
        >
          <p className="text-xs font-mono text-muted-foreground/60 mb-3 tracking-wider">
            earlier work
          </p>
          <div className="flex flex-col gap-1.5">
            {legacyProjects.map(({ title, description, url }) => (
              <div key={title} className="flex items-baseline gap-2">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors inline-flex items-center gap-1 flex-shrink-0"
                  >
                    {title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground/60 flex-shrink-0">
                    {title}
                  </span>
                )}
                <span className="text-xs text-muted-foreground/35">
                  — {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
