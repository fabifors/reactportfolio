"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/portfolio-data";

function useResolvedHref(href: string) {
  const pathname = usePathname();
  if (href.startsWith("/#") && pathname === "/") {
    return href.slice(1);
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
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-[15px] w-full"
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

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
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
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border/50 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-end px-6 h-16 border-b border-border/50 shrink-0">
          <button
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navItems.filter((item) => item.href !== "/#contact").map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-3 rounded-md hover:bg-surface"
            />
          ))}
        </nav>

        {/* CTA pinned to bottom */}
        <div className="px-4 py-6 border-t border-border/50 shrink-0">
          <NavLink
            label="Contact"
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className=""
          />
        </div>
      </div>
    </>
  );
}
