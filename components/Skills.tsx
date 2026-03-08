"use client";

import { motion } from "motion/react";
import { skillDomains } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

function DomainRow({
  domain,
  items,
  isLast,
}: {
  domain: string;
  items: string[];
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-10 py-4",
        !isLast && "border-b border-border/30"
      )}
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
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="mb-10"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        >
          {skillDomains.map((domain, i) => (
            <DomainRow
              key={domain.domain}
              domain={domain.domain}
              items={domain.items}
              isLast={i === skillDomains.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
