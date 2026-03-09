"use client";

import { useEffect, useRef } from "react";

const ORBS = [
  {
    pos:         { top: "-15vh", left: "-10vw" },
    size:        "clamp(300px, 55vw, 720px)",
    color:       "hsl(170 70% 55% / 0.55)",
    duration:    15000,
    x:           [0, 180, -140,  200,    0],
    y:           [0, 130,  210, -110,    0],
    parallaxY:   12,
    desktopOnly: false,
  },
  {
    pos:         { top: "5vh", right: "-12vw" },
    size:        "clamp(260px, 45vw, 620px)",
    color:       "hsl(195 85% 60% / 0.45)",
    duration:    19000,
    x:           [0, -200, -100, -160,   0],
    y:           [0,  100,  220,  -80,   0],
    parallaxY:   20,
    desktopOnly: false,
  },
  {
    pos:         { bottom: "-10vh", left: "-8vw" },
    size:        "clamp(240px, 50vw, 660px)",
    color:       "hsl(170 65% 50% / 0.40)",
    duration:    17000,
    x:           [0,  160, -120,  80,    0],
    y:           [0, -120, -200, 100,    0],
    parallaxY:   -16,
    desktopOnly: false,
  },
  {
    pos:         { top: "35vh", left: "25vw" },
    size:        "clamp(220px, 40vw, 540px)",
    color:       "hsl(250 60% 62% / 0.28)",
    duration:    23000,
    x:           [0, -180,  140,   0],
    y:           [0, -140, -180,   0],
    parallaxY:   6,
    desktopOnly: true,
  },
  {
    pos:         { bottom: "-15vh", right: "-10vw" },
    size:        "clamp(220px, 48vw, 640px)",
    color:       "hsl(210 75% 58% / 0.32)",
    duration:    21000,
    x:           [0, -100,  160,  -60,   0],
    y:           [0, -160, -100, -220,   0],
    parallaxY:   -18,
    desktopOnly: true,
  },
] as const;

function Orb({ orb }: { orb: (typeof ORBS)[number] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  // Float animation via native Web Animations API
  useEffect(() => {
    const el = blobRef.current;
    if (!el) return;

    const keyframes = orb.x.map((x, i) => ({
      transform: `translate(${x}px, ${orb.y[i]}px)`,
    }));

    const anim = el.animate(keyframes, {
      duration: orb.duration,
      iterations: Infinity,
      easing: "ease-in-out",
    });

    return () => anim.cancel();
  // orb is from a constant array — stable reference
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Parallax via scroll listener
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = scrollY / Math.max(maxScroll, 3000);
      const translateY = progress * orb.parallaxY * window.innerHeight / 100;
      wrapper.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={orb.desktopOnly ? "hidden md:block" : undefined}
      style={{
        position: "absolute",
        ...orb.pos,
        width:  orb.size,
        height: orb.size,
      }}
    >
      <div
        ref={blobRef}
        style={{
          width:        "100%",
          height:       "100%",
          borderRadius: "50%",
          background:   `radial-gradient(circle at 50% 50%, ${orb.color} 0%, transparent 70%)`,
          filter:       "blur(60px)",
          willChange:   "transform",
        }}
      />
    </div>
  );
}

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <Orb key={i} orb={orb} />
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
