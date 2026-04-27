import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HeroAiVisual } from "../hero-ai-visual";
import { ActionLink, Reveal, SectionPill } from "../primitives";

const heroBullets = [
  "Rigorous vetting process",
  "Aligned to your timezone",
  "14-day risk-free trial",
] as const;

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[88rem] px-4 pb-10 pt-8 sm:px-5 sm:pb-14 sm:pt-12 lg:px-6 lg:pb-16 lg:pt-[4.25rem]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-8">
          <Reveal>
            <SectionPill
              tone="lime"
              className="rounded-[13px] px-4 py-[0.65rem] text-[10px] tracking-[0.14em] sm:text-[11px]"
            >
              Vetted software developers. Zero hiring headache.
            </SectionPill>
            <h1 className="mt-5 max-w-[36rem] text-[3rem] font-semibold leading-[0.95] tracking-tight text-[#101111] sm:mt-6 sm:max-w-[48rem] sm:text-[4.55rem] lg:text-[4.65rem]">
              Hire elite{" "}
              <span className="text-[var(--color-accent)]">
                software developers.
              </span>
            </h1>
            <p className="mt-5 max-w-[30rem] text-[1.03rem] leading-[1.75] text-[#38403c] sm:mt-6 sm:max-w-[38rem] sm:text-[1.14rem] sm:leading-[1.85]">
              We help startups and enterprises hire top software developers
              from Nepal. Fast, reliable, and risk-free.
            </p>

            <div className="mt-7 flex flex-col gap-3 text-[0.9rem] text-[#2f3734] sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 sm:text-[0.92rem]">
              {heroBullets.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-[1.05rem] w-[1.05rem] shrink-0 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <ActionLink
                href="/hire"
                tone="primary"
                className="min-h-[3.75rem] rounded-[12px] px-8 text-[1rem] font-semibold"
              >
                Hire Software Developers
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
              <ActionLink
                href="/join"
                tone="secondary"
                className="min-h-[3.75rem] rounded-[12px] px-8 text-[1rem] font-semibold"
              >
                Join the talent pool
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="hidden sm:block">
            <HeroAiVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
