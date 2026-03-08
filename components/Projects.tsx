"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { workHighlights, legacyProjects, WorkPhase } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ExternalLink, Users } from "lucide-react";
import CornerBrackets from "@/components/CornerBrackets";

const ease = [0.25, 0, 0, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function TimelinePhase({
  phase,
  index,
  isLast,
}: {
  phase: WorkPhase;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative grid grid-cols-[1.5rem_1fr] md:grid-cols-[2.5rem_1fr] gap-4 md:gap-8">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        {/* Node dot + pulsing rings for current position */}
        <div className="relative flex-shrink-0 mt-1">
          {index === 0 && (
            <>
              <motion.div
                className="absolute inset-[-2px] rounded-full border border-primary/50"
                animate={{ scale: [1, 4], opacity: [0.55, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8 }}
              />
              <motion.div
                className="absolute inset-[-2px] rounded-full border border-primary/30"
                animate={{ scale: [1, 4], opacity: [0.35, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.8, delay: 1.1 }}
              />
            </>
          )}
          <div
            className={cn(
              "h-3 w-3 rounded-full border-2 transition-all duration-500",
              index === 0
                ? "border-primary bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.35)]"
                : "border-border/60 bg-background"
            )}
          />
        </div>
        {/* Connecting line down */}
        {!isLast && (
          <div className="flex-1 w-px bg-gradient-to-b from-border/60 to-border/20 mt-2" />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.21), ease }}
        className={cn("pb-10", isLast && "pb-0")}
      >
        {/* Phase header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
          <span className="font-mono text-xs text-primary/70 tracking-wider">{phase.period}</span>
          <span className="hidden sm:block text-border/40 text-xs">·</span>
          <h3 className="text-lg font-semibold text-foreground">{phase.role}</h3>
        </div>

        {/* Impact list */}
        <ul className="space-y-3">
          {phase.impact.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed"
            >
              <span className="text-border/50 mt-[6px] leading-none flex-shrink-0 select-none">—</span>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const work = workHighlights[0];

  return (
    <section id="work" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">&gt; work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Where I&apos;ve built things
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl">
            Six years of continuous ownership at one company. That breadth and depth is the work.
          </p>
        </motion.div>

        {/* Card */}
        <div className="relative rounded-xl bg-surface border border-border/60 p-8 md:p-10">
          <CornerBrackets delay={0.1} />
          {/* Card meta: employer + team */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10 pb-8 border-b border-border/40"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <p className="font-mono text-xs text-primary/60 tracking-wider mb-1">employer</p>
              <p className="text-xl font-bold text-foreground">{work.employer}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70 sm:text-right">
              <Users className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Team: {work.team}</span>
            </div>
          </motion.div>

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
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
                  <span className="text-sm text-muted-foreground/60 flex-shrink-0">{title}</span>
                )}
                <span className="text-xs text-muted-foreground/35">— {description}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
