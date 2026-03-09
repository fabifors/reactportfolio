export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Radial glow from top-center */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(170 70% 55%), transparent 70%)",
        }}
      />

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
