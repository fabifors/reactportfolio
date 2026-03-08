"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { type StorySection } from "@/lib/portfolio-data";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

function StoryNode({
  section,
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
        <div
          className={cn(
            "relative z-10 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0 mt-[6px] transition-all duration-700",
            isLast
              ? "border-primary bg-primary shadow-[0_0_10px_3px_hsl(var(--primary)/0.4)]"
              : "border-border/70 bg-background"
          )}
        />
        {!isLast && (
          <div className="flex-1 w-px bg-gradient-to-b from-border/50 to-border/10 mt-2" />
        )}
      </div>

      {/* Content */}
      <motion.div
        variants={itemVariants}
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ staggerChildren: 0.075, delayChildren: 0.15 }}
    >
      {sections.map((section, i) => (
        <StoryNode
          key={section.label}
          section={section}
          index={i}
          isLast={i === sections.length - 1}
        />
      ))}
    </motion.div>
  );
}
