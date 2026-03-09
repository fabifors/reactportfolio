"use client";

import { motion, useScroll, useTransform } from "motion/react";

const ORBS = [
  {
    // Top-left — teal primary
    pos: { top: "-15vh", left: "-10vw" },
    size: "clamp(280px, 55vw, 700px)",
    color: "hsl(170 70% 55% / 0.55)",
    duration: 14,
    x: ["0%", "18%", "-12%", "8%", "0%"],
    y: ["0%", "22%", "10%", "-8%", "0%"],
    parallaxY: 14,          // vh offset over full scroll
    mobileOnly: false,
  },
  {
    // Top-right — cyan
    pos: { top: "5vh", right: "-12vw" },
    size: "clamp(240px, 45vw, 600px)",
    color: "hsl(195 85% 60% / 0.45)",
    duration: 18,
    x: ["0%", "-20%", "-8%", "-15%", "0%"],
    y: ["0%", "15%", "35%", "8%", "0%"],
    parallaxY: 22,
    mobileOnly: false,
  },
  {
    // Bottom-left — teal secondary
    pos: { bottom: "-10vh", left: "-8vw" },
    size: "clamp(220px, 50vw, 640px)",
    color: "hsl(170 65% 50% / 0.40)",
    duration: 16,
    x: ["0%", "22%", "10%", "-10%", "0%"],
    y: ["0%", "-20%", "-35%", "-12%", "0%"],
    parallaxY: -18,
    mobileOnly: false,
  },
  {
    // Center — purple (desktop only)
    pos: { top: "38vh", left: "28vw" },
    size: "clamp(200px, 40vw, 520px)",
    color: "hsl(250 60% 62% / 0.28)",
    duration: 22,
    x: ["0%", "14%", "-18%", "6%", "0%"],
    y: ["0%", "-18%", "12%", "20%", "0%"],
    parallaxY: 8,
    mobileOnly: true,       // hide on mobile
  },
  {
    // Bottom-right — blue (desktop only)
    pos: { bottom: "-15vh", right: "-10vw" },
    size: "clamp(200px, 48vw, 620px)",
    color: "hsl(210 75% 58% / 0.32)",
    duration: 20,
    x: ["0%", "-16%", "-28%", "-8%", "0%"],
    y: ["0%", "-25%", "-10%", "-18%", "0%"],
    parallaxY: -20,
    mobileOnly: true,
  },
] as const;

function Orb({
  orb,
  scrollY,
}: {
  orb: (typeof ORBS)[number];
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  // Parallax lives on the outer wrapper — float animation on the inner blob.
  // Keeping them on separate elements avoids the MotionValue vs keyframe conflict.
  const yParallax = useTransform(
    scrollY,
    [0, 3000],
    ["0vh", `${orb.parallaxY}vh`]
  );

  return (
    <motion.div
      className={orb.mobileOnly ? "hidden md:block" : undefined}
      style={{
        position: "absolute",
        ...orb.pos,
        width: orb.size,
        height: orb.size,
        y: yParallax,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: `radial-gradient(circle at 50% 50%, ${orb.color} 0%, transparent 70%)`,
          filter: "blur(60px)",
          willChange: "transform",
        }}
        animate={{ x: orb.x as unknown as string[], y: orb.y as unknown as string[] }}
        transition={{
          duration: orb.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </motion.div>
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

      {/* Film grain */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" opacity="0.04" />
      </svg>
    </div>
  );
}
