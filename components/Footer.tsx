import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fabifors/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/fabian-forsström-22958159/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-6 py-10 flex flex-col items-center gap-6">
        <div className="flex gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <Separator className="max-w-xs" />
        <p className="text-sm text-muted-foreground">
          Handcrafted with care by{" "}
          <span className="font-medium text-foreground">Fabian Forsström</span>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
