"use client";

// Glassmorphism background — stillness is the aesthetic.
// Three barely-visible deep color blooms give the page subtle depth
// without competing with the frosted-glass cards.
export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Top-left teal bloom */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[hsl(170_70%_55%)] opacity-[0.045] blur-[120px]" />
      {/* Bottom-right purple bloom */}
      <div className="absolute -bottom-40 -right-20 w-[560px] h-[560px] rounded-full bg-[hsl(250_60%_60%)] opacity-[0.04] blur-[130px]" />
      {/* Center cyan accent — very faint */}
      <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] rounded-full bg-[hsl(195_85%_60%)] opacity-[0.025] blur-[100px]" />

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
