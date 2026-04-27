import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { brandName, navLinks } from "./home-data";
import { BrandMark } from "./brand-mark";
import { ActionLink } from "./primitives";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe7df] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <BrandMark className="h-8 w-8 text-[#101111]" />
          <div className="truncate text-base font-semibold uppercase leading-none tracking-[0.02em] text-[#101111] sm:text-lg">
            {brandName}
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#3d4541] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 transition duration-300 ease-out hover:text-[#101111]"
            >
              {link.label}
              {link.hasCaret ? <ChevronDown className="h-3.5 w-3.5" /> : null}
            </Link>
          ))}
        </nav>

        <ActionLink href="/hire" tone="dark">
          Hire AI Engineer
        </ActionLink>
      </div>
    </header>
  );
}
