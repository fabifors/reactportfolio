import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Tech Lead · Full-Stack Engineer`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
