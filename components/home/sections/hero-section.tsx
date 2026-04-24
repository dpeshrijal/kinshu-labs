import { ArrowRight } from "lucide-react";

import { HeroProcessVisual } from "../hero-process-visual";
import { ActionLink, Reveal, SectionPill } from "../primitives";

export function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="pointer-events-none absolute left-5 top-24 hidden h-16 w-16 rotate-12 rounded-full border-2 border-black bg-[var(--color-accent-soft)] md:block" />
      <div className="pointer-events-none absolute bottom-14 right-8 hidden h-10 w-10 -rotate-12 rounded-[14px] border-2 border-black bg-[#FFE1EE] lg:block" />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <SectionPill tone="lime" className="-rotate-2">
              Top 1% AI Engineers
            </SectionPill>
            <h1 className="mt-7 max-w-4xl text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-black sm:mt-8 sm:text-6xl sm:leading-[1] lg:text-[4.65rem]">
              Senior AI engineers, ready to build
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/72 sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8">
              From RAG pipelines to agentic workflows and model infra, we match
              you with vetted engineers who can start fast and ship in
              production.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <ActionLink href="#match" tone="primary">
                Request a match
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
              <ActionLink href="#featured-talent" tone="secondary">
                Explore talent
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <HeroProcessVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
