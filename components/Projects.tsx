import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hitta Webbhotellet",
    description:
      "A web hosting comparison platform designed to help Swedish users find the right hosting plan. Focused on clean information hierarchy and trustworthy visual design.",
    tags: ["Design", "UI/UX"],
    url: "https://hittawebbhotellet.se",
  },
  {
    title: "Refine-It",
    description:
      "A design and development project combining thoughtful UX patterns with a solid React implementation. Built to refine the experience of a core user workflow.",
    tags: ["Design", "React", "Code"],
    url: null,
  },
  {
    title: "Hittasmslån",
    description:
      "SMS loan comparison site designed for clarity and speed. Prioritized legibility and conversion-focused layout to help users make informed financial decisions.",
    tags: ["Design", "UI/UX"],
    url: "https://hittasmslån.se",
  },
  {
    title: "Quire",
    description:
      "A school project that brought together design, frontend development, and UX research. Demonstrates end-to-end thinking from concept to coded prototype.",
    tags: ["Design", "React", "Code", "School Project"],
    url: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A handful of projects I&apos;m proud of. More in the works — including some personal React apps I&apos;m genuinely excited about.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(({ title, description, tags, url }) => (
            <Card key={title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm">{description}</p>
              </CardContent>
              {url && (
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      View project
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
