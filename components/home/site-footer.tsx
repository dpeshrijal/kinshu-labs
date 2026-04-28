import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

import { BrandMark } from "./brand-mark";
import {
  companyEmail,
  companyEmailHref,
  companyLinkedInUrl,
} from "./company-contact";
import { brandName, footerColumns } from "./home-data";

export function SiteFooter() {
  return (
    <footer id="footer" className="mt-8 bg-[#10161f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.9fr_1fr_0.95fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-8 w-8 text-white" />
              <div className="text-base font-semibold uppercase tracking-[0.02em]">
                {brandName}
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/70">
              We connect global companies with exceptional software developer
              talent from Nepal.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">
                {column.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/70">
              Reach us directly or follow Kinshu Labs for updates.
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a
                href={companyEmailHref}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-white/55" />
                <span>{companyEmail}</span>
              </a>
              <a
                href={companyLinkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-white/55" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Kinshu Labs. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
