import Link from "next/link";

import { brandName, navLinks } from "./home-data";
import { BrandMark } from "./brand-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ebe7df] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-none items-center gap-1.5 sm:gap-3">
          <BrandMark className="h-6 w-6 shrink-0 text-[#101111] sm:h-8 sm:w-8" />
          <div className="min-w-0 font-semibold uppercase leading-none tracking-[0.02em] text-[#101111]">
            <span className="block truncate text-[0.68rem] sm:hidden">{brandName}</span>
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
            </Link>
          ))}
        </nav>

        <Link
          href="/hire"
          className="inline-flex min-h-[2.55rem] shrink-0 items-center justify-center whitespace-nowrap rounded-[13px] bg-[#181b1a] px-3 text-[0.76rem] font-semibold text-white transition hover:bg-[#101312] sm:min-h-[3rem] sm:px-6 sm:text-sm"
        >
          <span className="sm:hidden">Hire Developers</span>
          <span className="hidden sm:inline">Hire Software Developers</span>
        </Link>
      </div>
    </header>
  );
}
