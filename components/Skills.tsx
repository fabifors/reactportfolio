"use client";

import { skillDomains } from "@/lib/portfolio-data";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

function DomainRow({
  domain,
  items,
  delay,
  isLast,
}: {
  domain: string;
  items: string[];
  delay: number;
  isLast: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-10 py-4 transition-all duration-500",
        !isLast && "border-b border-border/30",
        inView ? "animate-fade-up opacity-100" : "opacity-0"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Domain label */}
      <span className="font-mono text-xs text-primary/60 uppercase tracking-wider self-start md:pt-[3px]">
        {domain}
      </span>

      {/* Items — inline with dots */}
      <p className="text-[15px] text-muted-foreground leading-relaxed">
        {items.map((item, i) => (
          <span key={item}>
            {item}
            {i < items.length - 1 && (
              <span className="mx-2 text-border select-none">·</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Skills() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="expertise" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          ref={headingRef}
          className={cn(
            "mb-10 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">
            &gt; expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What I work with
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-2xl">
            The domains I own — chosen because they produce results, not because
            they look good on a slide.
          </p>
        </div>

        <div>
          {skillDomains.map((domain, i) => (
            <DomainRow
              key={domain.domain}
              domain={domain.domain}
              items={domain.items}
              delay={i * 60}
              isLast={i === skillDomains.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
