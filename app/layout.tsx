import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabian Forsström — Front-End Engineer",
  description:
    "Front-End Engineer specializing in React, TypeScript, and delightful user interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
