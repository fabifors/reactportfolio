"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { philosophyCards } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

function PhilosophyItem({
  index,
  title,
  body,
  isLast,
}: {
  index: number;
  title: string;
  body: string;
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "grid grid-cols-[2.5rem_1fr] md:grid-cols-[5rem_1fr] gap-5 md:gap-10 py-8",
        !isLast && "border-b border-border/40"
      )}
    >
      {/* Number */}
      <span className="font-mono text-2xl md:text-3xl font-bold text-primary/30 leading-none pt-1 select-none tabular-nums">
        {String(index).padStart(2, "0")}
      </span>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="philosophy" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div>
            <p className="terminal-prefix text-xs tracking-widest mb-3">
              &gt; philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How I think about engineering
            </h2>
          </div>
          <Link
            href="/about"
            className="text-[15px] text-muted-foreground/70 hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            Background &amp; full story
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        >
          {philosophyCards.map((card, i) => (
            <PhilosophyItem
              key={card.title}
              index={i + 1}
              title={card.title}
              body={card.body}
              isLast={i === philosophyCards.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
