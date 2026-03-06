import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/portfolio-data";

export default function Hero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta } = heroData;

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Radial gradient fade from center */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />

      {/* Horizontal gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/0 to-background" />

      <div className="relative container mx-auto px-6 py-24 md:py-36 flex flex-col items-start gap-8 max-w-4xl">
        {/* Eyebrow / terminal prompt */}
        <div className="animate-fade-in opacity-0 stagger-1">
          <span className="terminal-prefix text-sm tracking-widest">
            {eyebrow}
          </span>
          <span className="animate-cursor-blink inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] animate-fade-up opacity-0 stagger-2">
          {headline.split("\n").map((line, i) => (
            <span key={i} className={i === 1 ? "text-gradient block" : "block"}>
              {line}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up opacity-0 stagger-3">
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            asChild
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-surface"
            asChild
          >
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        </div>

        {/* Decorative grid line accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-end opacity-20 pointer-events-none select-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-px bg-primary"
              style={{ width: `${40 + i * 18}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
