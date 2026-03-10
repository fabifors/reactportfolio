import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";
import { socialLinks, siteConfig } from "@/lib/portfolio-data";

const iconMap = { Github, Linkedin } as const;
type IconName = keyof typeof iconMap;

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-6 py-10 flex flex-col items-center gap-6 max-w-4xl">
        <div className="flex gap-5">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = iconMap[icon as IconName];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground/50 transition-colors hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
        <Separator className="max-w-xs bg-border/50" />
        <p className="text-xs font-mono text-muted-foreground/50 text-center">
          Built by{" "}
          <span className="text-muted-foreground">{siteConfig.name}</span>
          {" "}— statically generated with Next.js · &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
