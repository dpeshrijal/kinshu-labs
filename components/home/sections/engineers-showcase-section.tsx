import { ArrowRight } from "lucide-react";

import { featuredTalent } from "../home-data";
import { Reveal } from "../primitives";
import { TalentCard } from "../talent-card";

export function EngineersShowcaseSection() {
  return (
    <section id="developers">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[2.25rem] font-semibold tracking-tight text-[#111111] sm:text-[3.1rem]">
                Software developers who deliver real impact
              </h2>
              <p className="mt-3 text-[1.02rem] text-[#5c6460]">
                Experienced. Pre-vetted. Ready to build.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3e4641] transition hover:text-[#111111]"
            >
              View all engineers
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {featuredTalent.map((talent) => (
              <TalentCard key={talent.name} talent={talent} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
