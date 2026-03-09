"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/portfolio-data";

// On the homepage, resolve "/#expertise" → "#expertise" so the browser
// smooth-scrolls in-page rather than doing a full navigation cycle.
// From any other page the full absolute path is used as-is.
function useResolvedHref(href: string) {
  const pathname = usePathname();
  if (href.startsWith("/#") && pathname === "/") {
    return href.slice(1); // "#expertise"
  }
  return href;
}

function NavLink({
  label,
  href,
  onClick,
  className,
}: {
  label: string;
  href: string;
  onClick?: () => void;
  className: string;
}) {
  const resolved = useResolvedHref(href);
  const isContact = href === "/#contact";

  if (isContact) {
    return (
      <Button
        asChild
        size="sm"
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-[15px]"
      >
        <Link href={resolved} onClick={onClick}>
          {label}
        </Link>
      </Button>
    );
  }

  return (
    <Link href={resolved} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-card rounded-none border-x-0 border-t-0">
      <div className="container flex h-16 items-center justify-between mx-auto px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <span className="terminal-prefix mr-1">~/</span>
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-primary"
            />
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 px-6 py-5 flex flex-col gap-4 bg-background/95 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors"
            />
          ))}
        </div>
      )}
    </header>
  );
}
