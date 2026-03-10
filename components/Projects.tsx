"use client";

import { Badge } from "@/components/ui/badge";
import { workHighlights, legacyProjects, WorkPhase } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Users } from "lucide-react";
import CornerBrackets from "@/components/CornerBrackets";

function TimelinePhase({
  phase,
  index,
  isLast,
}: {
  phase: WorkPhase;
  index: number;
  isLast: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className="relative grid grid-cols-[1.5rem_1fr] md:grid-cols-[2.5rem_1fr] gap-4 md:gap-8">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        {/* Node dot */}
        <div className="relative flex-shrink-0 mt-1">
          {index === 0 && (
            <span className="absolute inset-[-2px] rounded-full border border-primary/50 animate-ping" />
          )}
          <div
            className={cn(
              "relative z-10 h-3 w-3 rounded-full border-2 transition-all duration-500",
              index === 0
                ? "border-primary bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.35)]"
                : "border-border/60 bg-background"
            )}
          />
        </div>
        {/* Connecting line down */}
        {!isLast && (
          <div className="flex-1 w-px bg-linear-to-b from-border/60 to-border/20 mt-2" />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "pb-10 transition-all duration-500",
          isLast && "pb-0",
          inView ? "animate-fade-up opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: `${Math.min(index * 70, 210)}ms` }}
      >
        {/* Phase header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-4">
          <span className="font-mono text-xs text-primary/70 tracking-wider flex-shrink-0 sm:order-2">{phase.period}</span>
          <h3 className="text-lg font-semibold text-foreground sm:order-1">{phase.role}</h3>
        </div>

        {/* Impact list */}
        <ul className="space-y-3">
          {phase.impact.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed"
            >
              <span className="text-border/50 mt-[6px] leading-none shrink-0 select-none">—</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [metaRef, metaInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [legacyRef, legacyInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const work = workHighlights[0];

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section heading */}
        <div
          ref={headingRef}
          className={cn(
            "mb-14 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">&gt; work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Where I&apos;ve built things
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl">
            Six years of continuous ownership at one company. That breadth and depth is the work.
          </p>
        </div>

        {/* Card */}
        <div className="relative rounded-xl bg-surface/60 backdrop-blur-sm border border-border/60 p-8 md:p-10">
          <CornerBrackets delay={0.1} />
          {/* Card meta: employer + team */}
          <div
            ref={metaRef}
            className={cn(
              "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 pb-8 border-b border-border/40 transition-all duration-500",
              metaInView ? "animate-fade-up opacity-100" : "opacity-0"
            )}
          >
            <div>
              <p className="font-mono text-xs text-primary/60 tracking-wider mb-1">employer</p>
              <p className="text-xl font-bold text-foreground">{work.employer}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70 sm:text-right">
              <Users className="h-3.5 w-3.5 shrink-0" />
              <span>Team: {work.team}</span>
            </div>
          </div>

          {/* Timeline */}
          <div>
            {work.phases.map((phase, i) => (
              <TimelinePhase
                key={phase.period}
                phase={phase}
                index={i}
                isLast={i === work.phases.length - 1}
              />
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-border/40 mt-2">
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
            legacyInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="text-xs font-mono text-muted-foreground/60 mb-4 tracking-wider uppercase">
            earlier work
          </p>
          <div className="flex flex-col gap-2">
            {legacyProjects.map(({ title, description, url }) => (
              <div key={title} className="flex items-baseline gap-3 group/legacy">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 shrink-0"
                  >
                    {title}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover/legacy:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground/70 shrink-0">{title}</span>
                )}
                <span className="text-xs text-muted-foreground/50">— {description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
