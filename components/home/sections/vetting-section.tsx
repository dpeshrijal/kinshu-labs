import { motion } from "framer-motion";

import { vettingSteps } from "../home-data";
import { Reveal, SectionPill, StickerIcon } from "../primitives";

export function VettingSection() {
  return (
    <section id="process" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-4xl">
          <SectionPill tone="white" className="-rotate-1">
            The vetting process
          </SectionPill>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.75rem]">
            Four checks before we introduce a candidate
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">
            We assess technical depth, system design, live implementation, and
            communication before anyone reaches your inbox.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {vettingSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.06}>
                <motion.div
                  whileHover={{
                    scale: 1.005,
                    y: -2,
                    rotate: index % 2 ? 0.2 : -0.2,
                  }}
                  className="grid gap-5 rounded-[26px] border-2 border-black bg-white p-5 transition duration-300 ease-out sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                    <div className="text-5xl font-semibold tracking-tight text-black/[0.14]">
                      {step.number}
                    </div>
                    <StickerIcon icon={Icon} />
                  </div>

                  <div className="sm:pt-2">
                    <h3 className="text-xl font-semibold tracking-tight text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-black/72">
                      {step.description}
                    </p>
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
