import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryTimeline from "@/components/StoryTimeline";
import { aboutPageData, siteConfig } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `The story so far — ${siteConfig.name}`,
  description:
    "Ten years in sales, a frontend programme, five years at Svea Solar, and the principles that came out of all of it.",
};

export default function AboutPage() {
  const { story, deepPhilosophy, leadSection } = aboutPageData;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page hero */}
      <section className="py-20 md:py-28 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-4">&gt; story</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The story so far.
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            How I got here, what I built along the way, and the principles that shaped how I think
            about software and the people who build it.
          </p>
        </div>
      </section>

      {/* Story timeline */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <StoryTimeline sections={story} />
        </div>
      </section>

      {/* Philosophy — numbered manifesto */}
      <section className="py-20 md:py-24 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-4">&gt; philosophy</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            How I think about the work
          </h2>
          <div>
            {deepPhilosophy.map(({ title, body }, i) => {
              const isLast = i === deepPhilosophy.length - 1;
              return (
                <div
                  key={title}
                  className={`grid grid-cols-[2.5rem_1fr] md:grid-cols-[5rem_1fr] gap-5 md:gap-10 py-8 ${
                    !isLast ? "border-b border-border/40" : ""
                  }`}
                >
                  <span className="font-mono text-2xl md:text-3xl font-bold text-primary/25 leading-none pt-1 select-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="terminal-prefix text-xs tracking-widest mb-4">&gt; always learning</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            {leadSection.title}
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            {leadSection.body}
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
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
