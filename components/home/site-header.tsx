import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { brandName, navLinks } from "./home-data";
import { BrandMark } from "./brand-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe7df] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-1.5 sm:flex-none sm:gap-3">
          <BrandMark className="h-7 w-7 shrink-0 text-[#101111] sm:h-8 sm:w-8" />
          <div className="min-w-0 font-semibold uppercase leading-none tracking-[0.02em] text-[#101111]">
            <span className="block truncate text-[0.8rem] sm:hidden">{brandName}</span>
            <span className="hidden truncate text-lg sm:block">{brandName}</span>
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

        <Link
          href="/hire"
          className="inline-flex min-h-[2.75rem] shrink-0 items-center justify-center whitespace-nowrap rounded-[14px] bg-[#181b1a] px-3 text-[0.82rem] font-semibold text-white transition hover:bg-[#101312] sm:min-h-[3rem] sm:px-6 sm:text-sm"
        >
          Hire AI Engineer
        </Link>
      </div>
    </header>
  );
}
