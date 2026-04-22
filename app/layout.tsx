import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinshu | Boutique AI Talent Marketplace",
  description:
    "Hire rigorously vetted AI engineers from Nepal for RAG systems, LLM apps, and agentic workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-[#FAFAFA] text-zinc-900",
        )}
      >
        {children}
      </body>
    </html>
  );
}
