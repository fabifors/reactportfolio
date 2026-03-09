"use client";

import { motion, useScroll, useTransform } from "motion/react";

const ORBS = [
  {
    pos:      { top: "-15vh", left: "-10vw" },
    size:     "clamp(300px, 55vw, 720px)",
    color:    "hsl(170 70% 55% / 0.55)",
    animation: "orb-float-1 15s ease-in-out infinite",
    parallaxY: 12,
    desktopOnly: false,
  },
  {
    pos:      { top: "5vh", right: "-12vw" },
    size:     "clamp(260px, 45vw, 620px)",
    color:    "hsl(195 85% 60% / 0.45)",
    animation: "orb-float-2 19s ease-in-out infinite",
    parallaxY: 20,
    desktopOnly: false,
  },
  {
    pos:      { bottom: "-10vh", left: "-8vw" },
    size:     "clamp(240px, 50vw, 660px)",
    color:    "hsl(170 65% 50% / 0.40)",
    animation: "orb-float-3 17s ease-in-out infinite",
    parallaxY: -16,
    desktopOnly: false,
  },
  {
    pos:      { top: "35vh", left: "25vw" },
    size:     "clamp(220px, 40vw, 540px)",
    color:    "hsl(250 60% 62% / 0.28)",
    animation: "orb-float-4 23s ease-in-out infinite",
    parallaxY: 6,
    desktopOnly: true,
  },
  {
    pos:      { bottom: "-15vh", right: "-10vw" },
    size:     "clamp(220px, 48vw, 640px)",
    color:    "hsl(210 75% 58% / 0.32)",
    animation: "orb-float-5 21s ease-in-out infinite",
    parallaxY: -18,
    desktopOnly: true,
  },
] as const;

function Orb({
  orb,
  scrollY,
}: {
  orb: (typeof ORBS)[number];
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  // Framer Motion only drives the slow scroll parallax on the wrapper.
  // The actual float animation is a plain CSS @keyframes on the inner div,
  // which is guaranteed to run regardless of hydration / JS timing.
  const yParallax = useTransform(
    scrollY,
    [0, 3000],
    ["0vh", `${orb.parallaxY}vh`]
  );

  return (
    <motion.div
      className={orb.desktopOnly ? "hidden md:block" : undefined}
      style={{
        position: "absolute",
        ...orb.pos,
        width: orb.size,
        height: orb.size,
        y: yParallax,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: `radial-gradient(circle at 50% 50%, ${orb.color} 0%, transparent 70%)`,
          filter: "blur(60px)",
          animation: orb.animation,
          willChange: "transform",
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
