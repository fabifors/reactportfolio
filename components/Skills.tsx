import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillGroups = [
  {
    category: "Languages & Markup",
    skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Tailwind CSS", "styled-components", "react-spring"],
  },
  {
    category: "Design & Tooling",
    skills: ["Figma", "UI/UX Design", "Component Libraries", "Responsive Design"],
  },
  {
    category: "CMS & Backend",
    skills: ["Wagtail CMS", "Headless CMS", "REST APIs", "Firebase"],
  },
  {
    category: "Workflow",
    skills: ["Git", "VS Code", "npm / yarn", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills &amp; Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools I reach for — chosen because they produce great results, not just because they&apos;re trendy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skillGroups.map(({ category, skills }, index) => (
            <div key={category}>
              {index > 0 && <Separator className="mb-8" />}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
