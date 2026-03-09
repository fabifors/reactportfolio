"use client";

import { motion, useScroll, useTransform } from "motion/react";

const ORBS = [
  {
    // Top-left — teal primary
    style: { top: "-15vh", left: "-10vw", width: "55vw", height: "55vw" },
    color: "hsl(170 70% 55% / 0.55)",
    duration: 14,
    x: ["0%", "18%", "-12%", "8%", "0%"],
    y: ["0%", "22%", "10%", "-8%", "0%"],
    parallaxFactor: 0.08,
  },
  {
    // Top-right — cyan accent
    style: { top: "5vh", right: "-12vw", width: "45vw", height: "45vw" },
    color: "hsl(195 85% 60% / 0.45)",
    duration: 18,
    x: ["0%", "-20%", "-8%", "-15%", "0%"],
    y: ["0%", "15%", "35%", "8%", "0%"],
    parallaxFactor: 0.12,
  },
  {
    // Center — purple mid
    style: { top: "38vh", left: "28vw", width: "40vw", height: "40vw" },
    color: "hsl(250 60% 62% / 0.30)",
    duration: 22,
    x: ["0%", "14%", "-18%", "6%", "0%"],
    y: ["0%", "-18%", "12%", "20%", "0%"],
    parallaxFactor: 0.05,
  },
  {
    // Bottom-left — teal secondary
    style: { bottom: "-10vh", left: "-8vw", width: "50vw", height: "50vw" },
    color: "hsl(170 65% 50% / 0.40)",
    duration: 16,
    x: ["0%", "22%", "10%", "-10%", "0%"],
    y: ["0%", "-20%", "-35%", "-12%", "0%"],
    parallaxFactor: 0.15,
  },
  {
    // Bottom-right — blue accent
    style: { bottom: "-15vh", right: "-10vw", width: "48vw", height: "48vw" },
    color: "hsl(210 75% 58% / 0.35)",
    duration: 20,
    x: ["0%", "-16%", "-28%", "-8%", "0%"],
    y: ["0%", "-25%", "-10%", "-18%", "0%"],
    parallaxFactor: 0.10,
  },
] as const;

function Orb({
  orb,
  scrollY,
}: {
  orb: (typeof ORBS)[number];
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  const factor = orb.parallaxFactor;
  const yParallax = useTransform(scrollY, [0, 3000], ["0vh", `${factor * 100}vh`]);

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        ...orb.style,
        background: `radial-gradient(circle at 50% 50%, ${orb.color} 0%, transparent 70%)`,
        filter: "blur(70px)",
        willChange: "transform",
        y: yParallax,
      }}
      animate={{ x: orb.x as unknown as string[], y: orb.y as unknown as string[] }}
      transition={{
        duration: orb.duration,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    />
  );
}

export default function AmbientBackground() {
  const { scrollY } = useScroll();

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <Orb key={i} orb={orb} scrollY={scrollY} />
      ))}

      {/* Film grain — SVG feTurbulence at low opacity */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" opacity="0.04" />
      </svg>
    </div>
  );
}
