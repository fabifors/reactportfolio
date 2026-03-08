"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const ease = [0.25, 0, 0, 1] as const;

// arm length in px, stroke width, padding inside the SVG viewBox
const ARM = 16;
const SW = 1.5;
const PAD = SW;
const SIZE = ARM + PAD * 2;

type Pos = "tl" | "tr" | "bl" | "br";

function Corner({ pos, delay = 0 }: { pos: Pos; delay?: number }) {
  const flipX = pos === "tr" || pos === "br";
  const flipY = pos === "bl" || pos === "br";

  // Path: top-left bracket shape — M right,top → corner → M left,bottom
  const d = `M ${SIZE} ${PAD} L ${PAD} ${PAD} L ${PAD} ${SIZE}`;

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="absolute"
      style={{
        top:    flipY ? "auto" : -PAD,
        bottom: flipY ? -PAD   : "auto",
        left:   flipX ? "auto" : -PAD,
        right:  flipX ? -PAD   : "auto",
        // Mirror horizontally and/or vertically for the other 3 corners
        transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
      }}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="hsl(170 70% 55% / 0.45)"
        strokeWidth={SW}
        strokeLinecap="square"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease, delay: delay + 0.15 }}
      />
    </svg>
  );
}

export default function CornerBrackets({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    >
      <Corner pos="tl" delay={delay} />
      <Corner pos="tr" delay={delay} />
      <Corner pos="bl" delay={delay} />
      <Corner pos="br" delay={delay} />
    </div>
  );
}
