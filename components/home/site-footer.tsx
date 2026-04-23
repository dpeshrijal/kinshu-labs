import Link from "next/link";

import { BrandMark } from "./brand-mark";
import { brandName, footerLinks } from "./home-data";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-black/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-black">
          <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border-2 border-black">
            <BrandMark />
          </div>
          {brandName}
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition duration-300 ease-out hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>Built in Nepal for the World</div>
      </div>
    </footer>
  );
}
