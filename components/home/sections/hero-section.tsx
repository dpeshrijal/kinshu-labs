import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

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
      <div className="mx-auto max-w-[88rem] px-4 pb-12 pt-10 sm:px-5 sm:pb-14 sm:pt-12 lg:px-6 lg:pb-16 lg:pt-[4.25rem]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-8">
          <Reveal>
            <SectionPill
              tone="lime"
              className="rounded-[13px] px-4 py-[0.7rem] text-[11px] tracking-[0.14em]"
            >
              Vetted AI engineers. Zero hiring headache.
            </SectionPill>
            <h1 className="mt-6 max-w-[48rem] text-[3rem] font-semibold leading-[0.94] tracking-tight text-[#101111] sm:text-[4.55rem] lg:text-[4.65rem]">
              Hire elite AI engineers.
              <span className="mt-1 block text-[var(--color-accent)]">
                Build what&apos;s next.
              </span>
            </h1>
            <p className="mt-6 max-w-[38rem] text-[1.14rem] leading-[1.85] text-[#38403c]">
              We help startups and enterprises hire top 1% AI engineers from
              Nepal. Fast, reliable, and risk-free.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-[0.92rem] text-[#2f3734] sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              {heroBullets.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-[1.05rem] w-[1.05rem] shrink-0 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ActionLink
                href="/hire"
                tone="primary"
                className="min-h-[3.75rem] rounded-[12px] px-8 text-[1rem] font-semibold"
              >
                Hire AI Engineer
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
              <ActionLink
                href="/hire"
                tone="secondary"
                className="min-h-[3.75rem] rounded-[12px] px-8 text-[1rem] font-semibold"
              >
                Book a Call
                <PhoneCall className="h-4 w-4" />
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
