"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

// arm length in px, stroke width, padding inside the SVG viewBox
const ARM = 16;
const SW = 1.5;
const PAD = SW;
const SIZE = ARM + PAD * 2;
// Total path length: two arms of length ARM each
const PATH_LENGTH = ARM * 2;

type Pos = "tl" | "tr" | "bl" | "br";

function Corner({ pos, inView, delay }: { pos: Pos; inView: boolean; delay: number }) {
  const flipX = pos === "tr" || pos === "br";
  const flipY = pos === "bl" || pos === "br";

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
        transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
      }}
    >
      <path
        d={d}
        fill="none"
        stroke="hsl(170 70% 55% / 0.45)"
        strokeWidth={SW}
        strokeLinecap="square"
        strokeDasharray={PATH_LENGTH}
        strokeDashoffset={inView ? 0 : PATH_LENGTH}
        style={{
          transition: `stroke-dashoffset 0.55s cubic-bezier(0.25,0,0,1) ${delay}s, opacity 0.3s ease ${delay}s`,
          opacity: inView ? 1 : 0,
        }}
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
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    >
      <Corner pos="tl" inView={inView} delay={delay + 0.15} />
      <Corner pos="tr" inView={inView} delay={delay + 0.15} />
      <Corner pos="bl" inView={inView} delay={delay + 0.15} />
      <Corner pos="br" inView={inView} delay={delay + 0.15} />
    </div>
  );
}
