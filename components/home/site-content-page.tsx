"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import type { SitePageData } from "./site-page-data";
import { ActionLink, Reveal, SectionPill } from "./primitives";

export function SiteContentPage({ page }: { page: SitePageData }) {
  return (
    <main className="relative overflow-hidden bg-transparent text-[#101111]">
      <div className="absolute inset-0 -z-10 bg-noise-glow" />

      <SiteHeader />

      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <Reveal>
            <SectionPill tone="lime">{page.eyebrow}</SectionPill>
            <h1 className="mt-5 max-w-4xl text-[2.9rem] font-semibold leading-[0.98] tracking-tight text-[#101111] sm:text-[4.2rem] lg:text-[4.65rem]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.06rem] leading-8 text-[#46504b] sm:text-[1.16rem] sm:leading-9">
              {page.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink
                href={page.primaryCta.href}
                tone="primary"
                className="min-h-[3.5rem] rounded-[12px] px-7 font-semibold"
              >
                {page.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </ActionLink>
              {page.secondaryCta ? (
                <ActionLink
                  href={page.secondaryCta.href}
                  tone="secondary"
                  className="min-h-[3.5rem] rounded-[12px] px-7 font-semibold"
                >
                  {page.secondaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </ActionLink>
              ) : null}
            </div>

          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[30px] border border-[#20342b] bg-[#10161f] p-5 text-white shadow-[0_24px_70px_rgba(18,30,23,0.18)] sm:p-6">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d9ff7a]/20 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-[#6fd19a]/15 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5 text-[#d9ff7a]" />
                  Built for useful momentum
                </div>

                <div className="mt-8 grid gap-4">
                  {page.stats.map((stat, index) => (
                    <div
                      key={stat.title}
                      className="rounded-[20px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#10161f]">
                          {index + 1}
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold tracking-tight text-white">
                            {stat.title}
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-white/68">
                            {stat.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8">
          <Reveal className="grid gap-5 md:grid-cols-3">
            {page.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-[#e8e2d8] bg-white p-6 shadow-[0_16px_36px_rgba(24,38,24,0.04)]"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#111111]">
                  {item.title}
                </h2>
                <p className="mt-3 text-[0.98rem] leading-7 text-[#58615c]">
                  {item.body}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="space-y-5">
            {page.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.04}>
                <article className="grid gap-6 rounded-[26px] border border-[#ebe7df] bg-[#fbfaf6]/80 p-5 shadow-[0_18px_42px_rgba(24,38,24,0.045)] backdrop-blur sm:p-7 lg:grid-cols-[0.88fr_1.12fr]">
                  <div>
                    <SectionPill tone="sand">{section.eyebrow}</SectionPill>
                    <h2 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tight text-[#111111] sm:text-[2.5rem]">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-[1.02rem] leading-8 text-[#56605a]">
                      {section.body}
                    </p>
                  </div>

                  <div className="grid content-center gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="flex min-h-[3.35rem] items-center rounded-[18px] border border-[#e6e1d7] bg-white px-4 py-3 text-sm font-medium text-[#29312d]"
                      >
                        <span className="mr-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionPill tone="white">Next layer</SectionPill>
                <h2 className="mt-5 text-[2.35rem] font-semibold leading-tight tracking-tight text-[#111111] sm:text-[3.1rem]">
                  {page.featureTitle}
                </h2>
              </div>
              <p className="max-w-xl text-[1.02rem] leading-8 text-[#5a635e]">
                {page.featureIntro}
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {page.features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[22px] border border-[#e7e2d8] bg-white p-6 shadow-[0_14px_34px_rgba(21,32,19,0.04)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-[#5a625e]">
                    {feature.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] bg-[#17392d] p-7 text-white shadow-[0_24px_70px_rgba(31,79,60,0.18)] sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/60">
                  Ready when you are
                </p>
                <h2 className="mt-3 max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.7rem]">
                  Move from browsing to a real conversation about the work.
                </h2>
              </div>
              <div className="mt-6 shrink-0 lg:mt-0">
                <ActionLink
                  href={page.primaryCta.href}
                  tone="secondary"
                  className="min-h-[3.4rem] rounded-[12px] px-7 font-semibold"
                >
                  {page.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
