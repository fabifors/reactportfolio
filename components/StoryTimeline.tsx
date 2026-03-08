"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { type StorySection } from "@/lib/portfolio-data";

const ease = [0.25, 0, 0, 1] as const;

function StoryNode({
  section,
  index,
  isLast,
}: {
  section: StorySection;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative grid grid-cols-[1.5rem_1fr] md:grid-cols-[2.5rem_1fr] gap-5 md:gap-10">
      {/* Spine */}
      <div className="flex flex-col items-center">
        <div className="relative flex-shrink-0 mt-[6px]">
          {isLast && (
            <>
              <motion.div
                className="absolute inset-[-2px] rounded-full border border-primary/50"
                animate={{ scale: [1, 4], opacity: [0.55, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.9 }}
              />
              <motion.div
                className="absolute inset-[-2px] rounded-full border border-primary/30"
                animate={{ scale: [1, 4], opacity: [0.35, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.9, delay: 1.2 }}
              />
            </>
          )}
          <div
            className={cn(
              "h-2.5 w-2.5 rounded-full border-2 transition-all duration-700",
              isLast
                ? "border-primary bg-primary shadow-[0_0_10px_3px_hsl(var(--primary)/0.4)]"
                : "border-border/70 bg-background"
            )}
          />
        </div>
        {!isLast && (
          <div className="flex-1 w-px bg-gradient-to-b from-border/50 to-border/10 mt-2" />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: Math.min(index * 0.07, 0.21), ease }}
        className={cn("pb-14", isLast && "pb-0")}
      >
        <p className="font-mono text-xs text-primary/60 tracking-wider mb-2 uppercase">
          {section.label}
        </p>
        <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed">{section.body}</p>
      </motion.div>
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
