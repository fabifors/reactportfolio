import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aboutPageData, siteConfig } from "@/lib/portfolio-data";
import { Terminal, Layers, Users } from "lucide-react";

export const metadata: Metadata = {
  title: `Background & Philosophy — ${siteConfig.name}`,
  description:
    "The longer version: ten years in sales, a frontend programme, five years at Svea Solar, and a set of principles that came out of all of it.",
};

const iconMap = { Terminal, Layers, Users } as const;
type IconName = keyof typeof iconMap;

export default function AboutPage() {
  const { story, deepPhilosophy, leadSection } = aboutPageData;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page hero */}
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-border/40">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/70 to-background" />
        <div className="relative container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-4">
            &gt; background &amp; philosophy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The longer version.
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            How I got here, what I&apos;ve built along the way, and the principles
            that shaped how I think about software and the people who build it.
          </p>
        </div>
      </section>

      {/* Background story */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-10">
            &gt; background
          </p>
          <div className="space-y-16">
            {story.map(({ label, title, body }) => (
              <div key={label} className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10">
                <div className="flex-shrink-0 pt-1">
                  <p className="text-xs font-mono text-primary/70 tracking-wider">
                    {label}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {title}
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep philosophy */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-4">
            &gt; philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            How I think about the work
          </h2>
          <div className="space-y-10">
            {deepPhilosophy.map(({ icon, title, body }) => {
              const Icon = iconMap[icon as IconName] ?? Terminal;
              return (
                <div key={title} className="card-accent rounded-lg bg-surface border border-border/60 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning / growth mindset */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-4">
            &gt; always learning
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {leadSection.title}
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            {leadSection.body}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-primary hover:text-primary/80 transition-colors"
            >
              See the work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
