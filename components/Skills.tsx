"use client";

import { skillDomains } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

function DomainCard({
  domain,
  items,
  delay,
}: {
  domain: string;
  items: string[];
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "card-accent rounded-lg bg-surface border border-border/60 p-5 transition-all duration-500",
        inView ? "animate-fade-up opacity-100" : "opacity-0"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-xs font-mono text-primary mb-3 tracking-wider">
        <span className="opacity-60 mr-1">&gt;</span>
        {domain}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-[15px] text-muted-foreground flex items-start gap-2">
            <span className="text-primary/50 mt-0.5 leading-none select-none">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div
          ref={headingRef}
          className={cn(
            "mb-14 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">
            &gt; expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What I work with
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The domains I own — chosen because they produce results, not because
            they look good on a slide.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillDomains.map((domain, i) => (
            <DomainCard
              key={domain.domain}
              {...domain}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
