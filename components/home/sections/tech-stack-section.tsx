import { motion } from "framer-motion";

import { techGroups } from "../home-data";
import { Reveal, SectionPill, StickerIcon } from "../primitives";

export function TechStackSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-4xl">
          <SectionPill tone="sand" className="rotate-1">
            Core stack
          </SectionPill>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.75rem]">
            AI expertise your team can hire for.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/72 sm:text-lg sm:leading-8">
            Models, orchestration, retrieval, infra, and eval tooling our
            engineers already work with.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <motion.div
                  whileHover={{
                    scale: 1.006,
                    y: -2,
                    rotate: index % 2 ? 0.2 : -0.2,
                  }}
                  className="rounded-[26px] border-2 border-black bg-white p-5 transition duration-300 ease-out"
                >
                  <div className="flex items-start gap-4">
                    <StickerIcon icon={Icon} />
                    <div>
                      <div
                        className={`inline-flex rounded-full border-2 border-black px-3 py-1 text-sm font-medium ${group.tone}`}
                      >
                        {group.title}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-black/65">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border-2 border-black bg-[#FBFBF7] px-3 py-2 text-sm text-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
