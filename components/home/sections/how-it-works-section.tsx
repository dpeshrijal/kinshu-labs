import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { vettingSteps } from "../home-data";
import { Reveal, StickerIcon } from "../primitives";

export function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="text-[2.7rem] font-semibold tracking-tight text-[#111111] sm:text-5xl">
              A better way to hire AI talent
            </h2>
            <p className="mt-3 text-[1.02rem] text-[#606864]">
              We handle the heavy lifting so you can focus on building.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {vettingSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="contents">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-[20px] border border-[#ebe7df] bg-white p-5 shadow-[0_16px_36px_rgba(24,38,24,0.04)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                        {step.number}
                      </div>
                      <StickerIcon icon={Icon} className="h-10 w-10 rounded-full" />
                    </div>
                    <h3 className="mt-8 text-[1.45rem] font-semibold tracking-tight text-[#111111]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[1rem] leading-8 text-[#4f5652]">
                      {step.description}
                    </p>
                  </motion.div>

                  {index < vettingSteps.length - 1 ? (
                    <div className="hidden items-center justify-center lg:flex">
                      <ArrowRight className="h-5 w-5 text-[#424844]" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
