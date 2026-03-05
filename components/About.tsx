import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, Code2, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design-Minded",
    description:
      "I bring UI/UX thinking to every line of code — from polished Figma prototypes to pixel-perfect implementations that delight users.",
  },
  {
    icon: Code2,
    title: "Full-Stack Frontend",
    description:
      "Fluent in React, Next.js, and TypeScript. Experienced with headless CMS platforms like Wagtail, and comfortable building everything from component libraries to complete web apps.",
  },
  {
    icon: Lightbulb,
    title: "Always Curious",
    description:
      "The web never stops evolving — and neither do I. I stay close to emerging tools and patterns so the solutions I build are ready for tomorrow, not just today.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m a front-end engineer who genuinely loves what I do — bridging the gap
            between great design and solid engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-0 shadow-sm bg-background">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
