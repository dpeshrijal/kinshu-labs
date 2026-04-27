import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { pricingTiers } from "../home-data";
import { Reveal } from "../primitives";
import { cn } from "@/lib/utils";

function TierBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3f8f4] px-3 py-1.5 text-[0.92rem] font-medium text-[#2e6a4c]">
      <CheckCircle2 className="h-4 w-4" />
      <span>{children}</span>
    </span>
  );
}

export function PricingLevelsSection() {
  return (
    <section id="pricing" className="pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-6 sm:pb-12 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-[2.7rem] font-semibold tracking-tight text-[#111111] sm:text-5xl">
            Find the right fit for your AI needs
          </h2>

          {/* <p className="mt-6 max-w-[40rem] text-[1.12rem] leading-[1.7] text-[#5d6561] sm:text-[1.16rem]">
            Vetted talent. Flexible engagement. Pay as you go.
          </p> */}

          <div className="mt-6 flex w-full max-w-[18.5rem] flex-col items-start gap-3 text-left text-[0.98rem] text-[#53605a] sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 sm:text-center">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-[var(--color-accent)]" />
              <span>No long-term commitment</span>
            </div>
            <span className="hidden text-[#c5cbc7] sm:inline">&middot;</span>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-[var(--color-accent)]" />
              <span>Cancel anytime</span>
            </div>
            <span className="hidden text-[#c5cbc7] sm:inline">&middot;</span>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4.5 w-4.5 text-[var(--color-accent)]" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={cn(
                "overflow-hidden rounded-[22px] border bg-white shadow-[0_16px_40px_rgba(20,32,18,0.04)]",
                tier.featured
                  ? "border-[var(--color-accent)] shadow-[0_18px_44px_rgba(31,79,60,0.08)]"
                  : "border-[#e8e4db]",
              )}
            >
              <div className="px-5 pb-5 pt-4 text-center sm:px-7 sm:pb-7 sm:pt-5">
                <div className="mb-4 flex min-h-[2rem] items-start justify-center sm:mb-5 sm:min-h-[2.25rem]">
                  {tier.featured ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#edf6f0] px-3 py-1.5 text-[0.92rem] font-medium text-[#2f654c]">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Most popular</span>
                    </div>
                  ) : null}
                </div>

                <h3 className="text-[1.65rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[1.8rem]">
                  {tier.title}
                </h3>

                <p className="mt-3 text-[1rem] text-[#67706c] sm:mt-4 sm:text-[1.05rem]">
                  Starting from
                </p>

                <div
                  className={cn(
                    "mt-3 text-[2.7rem] font-semibold leading-none tracking-[-0.07em] sm:text-[3rem]",
                    tier.featured
                      ? "text-[var(--color-accent)]"
                      : "text-[#111111]",
                  )}
                >
                  {tier.hourlyRate}
                </div>

                <p className="mt-2 text-[1rem] font-medium text-[#4f5752] sm:mt-3 sm:text-[1.06rem]">
                  {tier.monthlyRate}
                </p>

                <div className="mx-auto mt-6 h-px w-full bg-[#ebe7df] sm:mt-7" />

                <p className="mx-auto mt-5 max-w-[16rem] text-[0.96rem] leading-[1.6] text-[#5a625e] sm:mt-6 sm:text-[1rem] sm:leading-[1.65]">
                  {tier.summary}
                </p>

                <Link
                  href="/hire"
                  className="mt-6 inline-flex min-h-[3.15rem] w-full items-center justify-center gap-3 rounded-[12px] bg-[var(--color-accent)] px-8 text-[0.98rem] font-semibold text-white shadow-[0_14px_32px_rgba(31,79,60,0.18)] transition hover:bg-[#173f31] sm:mt-7 sm:min-h-[3.35rem] sm:text-[1rem]"
                >
                  Get matched
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-2.5">
                  <TierBadge>{tier.vettingHours}</TierBadge>
                  <TierBadge>{tier.applicantPool}</TierBadge>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
