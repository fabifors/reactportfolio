import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/portfolio-data";
import AmbientBackground from "@/components/AmbientBackground";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Tech Lead · Full-Stack Engineer`,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#0e1115",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased">
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
