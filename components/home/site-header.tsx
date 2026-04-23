import Link from "next/link";

import { brandName } from "./home-data";
import { BrandMark } from "./brand-mark";
import { ActionLink } from "./primitives";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="#" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border-2 border-black bg-white">
            <BrandMark />
          </div>

          <div className="min-w-0">
            <div className="truncate text-base font-semibold leading-none tracking-tight text-black sm:text-lg">
              {brandName}
            </div>
            <div className="hidden pt-1 text-xs leading-none text-black/55 sm:block">
              Vetted Senior AI Engineers
            </div>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-3">
          <ActionLink href="#match" tone="secondary">
            Hire talent
          </ActionLink>
          <div className="hidden sm:block">
            <ActionLink href="#apply" tone="dark">
              Apply as dev
            </ActionLink>
          </div>
        </div>
      </div>
    </header>
  );
}
