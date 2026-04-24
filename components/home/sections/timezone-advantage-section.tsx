import { Clock3, MoveDownRight } from "lucide-react";
import { motion } from "framer-motion";

import { overnightFlow } from "../home-data";
import { Reveal, StickerIcon } from "../primitives";

export function TimezoneAdvantageSection() {
  return (
    <section className="bg-[#F7F7F2]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="rounded-[32px] border-2 border-black bg-[#F7F7F2] p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mt-6 flex items-center gap-3">
                <StickerIcon icon={Clock3} className="hidden sm:flex" />
                <div className="rotate-1 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-medium">
                  Time-zone advantage
                </div>
              </div>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.04] tracking-tight text-black sm:text-5xl lg:text-[3.75rem]">
                <span className="block">You sleep</span>
                <span className="mt-3 flex items-center gap-3">
                  <MoveDownRight className="hidden h-10 w-10 text-[#6D5EF7] sm:block" />
                  <span>We ship.</span>
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/72 sm:max-w-2xl sm:text-lg sm:leading-8">
                For US teams, Nepal creates a practical follow-the-sun workflow:
                clear evening handoffs, focused execution overnight, and
                progress waiting in the morning.
              </p>
            </div>

            <div className="grid gap-4">
              {overnightFlow.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    scale: 1.005,
                    y: -1,
                    rotate: index % 2 ? -0.2 : 0.2,
                  }}
                  className="rounded-[24px] border-2 border-black bg-white p-5 transition duration-300 ease-out"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                      <div className="absolute left-1 top-1 h-12 w-12 rounded-full bg-[var(--color-accent)]" />
                      <div className="relative text-3xl font-semibold tracking-tight text-black">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-black/48">{item.label}</div>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight text-black">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-black/72">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
