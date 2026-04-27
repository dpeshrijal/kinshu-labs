import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { cn } from "@/lib/utils";

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
          "min-h-screen bg-[#faf8f3] text-[#101111]",
          "[font-family:Satoshi,Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]",
        )}
      >
        {children}
      </body>
    </html>
  );
}
