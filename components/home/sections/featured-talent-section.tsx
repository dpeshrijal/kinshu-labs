import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { featuredTalent } from "../home-data";
import { getTalentGridClass } from "../home-utils";
import { ActionLink, Reveal, SectionPill } from "../primitives";
import { TalentCard } from "../talent-card";
import { useTalentCarousel } from "../use-talent-carousel";

export function FeaturedTalentSection() {
  const { itemsPerView, pages, currentPage, setIsPaused, goToPage } =
    useTalentCarousel(featuredTalent);

  return (
    <section id="featured-talent" className="bg-[#F7F7F2]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <SectionPill tone="sand" className="rotate-2">
            Featured talent
          </SectionPill>
          <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.75rem]">
            Senior AI engineers with real production depth
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
            A small sample of vetted engineers across applied AI, retrieval,
            evals, LLM products, and platform engineering.
          </p>
        </Reveal>

        <div
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPage}-${itemsPerView}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={cn("grid gap-6", getTalentGridClass(itemsPerView))}
              >
                {pages[currentPage]?.map((talent, talentIndex) => (
                  <TalentCard
                    key={`${talent.name}-${talent.role}-${talentIndex}`}
                    talent={talent}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {pages.length > 1 ? (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={`talent-page-${index}`}
                  type="button"
                  aria-label={`Go to featured candidate page ${index + 1}`}
                  onClick={() => goToPage(index)}
                  className={cn(
                    "h-3 rounded-full border-2 border-black transition duration-300 ease-out",
                    currentPage === index ? "w-10 bg-[#D4FF00]" : "w-3 bg-white",
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
