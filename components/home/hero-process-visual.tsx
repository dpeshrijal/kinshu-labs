import { Workflow } from "lucide-react";
import { motion } from "framer-motion";

import { heroMetrics, heroProcessSteps } from "./home-data";

export function HeroProcessVisual() {
  return (
    <div className="mx-auto w-full max-w-[31rem]">
      <motion.div
        whileHover={{ scale: 1.01, y: -2, rotate: 0.2 }}
        className="relative overflow-hidden rounded-[30px] border-2 border-black bg-white p-5 transition duration-300 ease-out sm:p-6"
      >
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-2 border-black bg-[#D4FF00]" />
        <div className="absolute right-8 top-10 h-3 w-3 rounded-full bg-[#FFB8D6]" />
        <div className="absolute right-16 top-16 h-2 w-2 rounded-full bg-[#8ED9FF]" />

        <div className="relative flex items-center justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <p className="inline-flex rotate-1 rounded-full border-2 border-black bg-[#FFF5C9] px-3 py-1 text-xs font-medium uppercase text-black">
              Matching process
            </p>
            <h2 className="mt-3 text-lg font-semibold leading-7 text-zinc-950">
              From request to onboarded engineer
            </h2>
          </div>
          <div className="hidden h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#D4FF00] text-black sm:flex">
            <Workflow className="h-5 w-5" />
          </div>
        </div>

        <div className="relative mt-5 space-y-5">
          {heroProcessSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.label} className="relative flex gap-4">
                {index < heroProcessSteps.length - 1 ? (
                  <div
                    aria-hidden
                    className="absolute left-5 top-11 h-[calc(100%+1.25rem)] w-0.5 bg-black"
                  />
                ) : null}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-zinc-950">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-black/40">
                      0{index + 1}
                    </span>
                    <h3 className="text-base font-semibold leading-6 text-zinc-950">
                      {step.label}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-5 grid grid-cols-3 gap-2">
          {heroMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`rounded-[18px] border-2 border-black p-3 text-center ${
                index === 0
                  ? "bg-[#D4FF00]"
                  : index === 1
                    ? "bg-[#DFF4FF]"
                    : "bg-[#FFE1EE]"
              }`}
            >
              <div className="text-sm font-semibold leading-6 text-zinc-950">
                {metric.value}
              </div>
              <div className="text-xs leading-5 text-zinc-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
