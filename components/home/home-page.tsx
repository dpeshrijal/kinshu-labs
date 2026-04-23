"use client";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { DeveloperCtaSection } from "./sections/developer-cta-section";
import { FeaturedTalentSection } from "./sections/featured-talent-section";
import { HeroSection } from "./sections/hero-section";
import { RequestMatchSection } from "./sections/request-match-section";
import { TechStackSection } from "./sections/tech-stack-section";
import { TimezoneAdvantageSection } from "./sections/timezone-advantage-section";
import { VettingSection } from "./sections/vetting-section";
import { SketchDivider } from "./primitives";

export function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(212,255,0,0.16),transparent_15%),radial-gradient(circle_at_88%_10%,rgba(255,184,214,0.12),transparent_12%),radial-gradient(circle_at_78%_72%,rgba(142,217,255,0.12),transparent_16%)]" />

      <SiteHeader />
      <HeroSection />
      <SketchDivider bg="white" fill="lemon" />
      <FeaturedTalentSection />
      <SketchDivider bg="lemon" fill="white" flip />
      <VettingSection />
      <SketchDivider bg="white" fill="lemon" />
      <TimezoneAdvantageSection />
      <SketchDivider bg="lemon" fill="white" flip />
      <TechStackSection />
      <SketchDivider bg="white" fill="lemon" />
      <RequestMatchSection />
      <SketchDivider bg="lemon" fill="white" flip />
      <DeveloperCtaSection />
      <SiteFooter />
    </main>
  );
}
