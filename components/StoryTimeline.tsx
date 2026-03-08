"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { type StorySection } from "@/lib/portfolio-data";

function StoryNode({
  section,
  index,
  isLast,
}: {
  section: StorySection;
  index: number;
  isLast: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className="relative grid grid-cols-[1.5rem_1fr] md:grid-cols-[2.5rem_1fr] gap-5 md:gap-10">
      {/* Spine */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative z-10 h-2.5 w-2.5 rounded-full border-2 shrink-0 mt-[6px] transition-all duration-700",
            isLast
              ? "border-primary bg-primary shadow-[0_0_10px_3px_hsl(var(--primary)/0.4)]"
              : "border-border/70 bg-background"
          )}
        />
        {!isLast && (
          <div className="flex-1 w-px bg-linear-to-b from-border/50 to-border/10 mt-2" />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "pb-14 transition-all duration-600",
          isLast && "pb-0",
          inView ? "animate-fade-up opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <p className="font-mono text-xs text-primary/60 tracking-wider mb-2 uppercase">
          {section.label}
        </p>
        <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed">{section.body}</p>
      </div>
    </div>
  );
}

export default function StoryTimeline({ sections }: { sections: StorySection[] }) {
  return (
    <div>
      {sections.map((section, i) => (
        <StoryNode
          key={section.label}
          section={section}
          index={i}
          isLast={i === sections.length - 1}
        />
      ))}
    </div>
  );
}
