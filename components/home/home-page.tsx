"use client";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { EngineersShowcaseSection } from "./sections/engineers-showcase-section";
import { HeroSection } from "./sections/hero-section";
import { HowItWorksSection } from "./sections/how-it-works-section";
import { PricingLevelsSection } from "./sections/pricing-levels-section";
import { StatsSection } from "./sections/stats-section";
import { SolutionsSection } from "./sections/solutions-section";
import { TestimonialsSection } from "./sections/testimonials-section";

export function HomePage() {
  return (
    <main className="relative overflow-hidden bg-transparent text-[#101111]">
      <div className="absolute inset-0 -z-10 bg-noise-glow" />

      <SiteHeader />
      <HeroSection />
      <HowItWorksSection />
      <EngineersShowcaseSection />

      <section id="solutions">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <SolutionsSection />
            <TestimonialsSection />
          </div>
        </div>
      </section>

      <PricingLevelsSection />
      <StatsSection />
      <SiteFooter />
    </main>
  );
}
