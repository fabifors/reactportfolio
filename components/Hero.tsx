import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center gap-6">
      <Badge variant="secondary" className="text-sm">
        Available for new opportunities
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
        Hi, I&apos;m Fabian —{" "}
        <span className="text-primary">Front-End Engineer</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        I craft polished, performant web experiences with React and TypeScript.
        Four years of turning complex problems into interfaces that feel effortlessly simple.
      </p>
      <div className="flex flex-wrap gap-3 justify-center mt-2">
        <Button size="lg" asChild>
          <a href="#contact">Let&apos;s talk</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#projects">View my work</a>
        </Button>
      </div>
    </section>
  );
}
