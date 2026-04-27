import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  Boxes,
  BrainCircuit,
  DatabaseZap,
  ScanSearch,
} from "lucide-react";

import { cn } from "@/lib/utils";

const capabilityLabels = [
  {
    label: "LLM Engineering",
    mobileLabel: "LLM Engineering",
    icon: BrainCircuit,
    className: "left-5 top-5 sm:left-10 sm:top-6",
  },
  {
    label: "AI Agents",
    mobileLabel: "AI Agents",
    icon: Bot,
    className: "right-4 top-[4.9rem] sm:right-10 sm:top-[4.6rem]",
  },
  {
    label: "Computer Vision",
    mobileLabel: "Computer Vision",
    icon: ScanSearch,
    className: "left-1 top-[51%] sm:left-5 sm:top-[52%]",
  },
  {
    label: "RAG & Vector Search",
    mobileLabel: "RAG Search",
    icon: Boxes,
    className: "right-0 top-[69%] sm:right-3 sm:top-[66%]",
  },
  {
    label: "MLOps & Deployment",
    mobileLabel: "MLOps",
    icon: DatabaseZap,
    className: "bottom-4 left-1/2 -translate-x-1/2 sm:bottom-4",
  },
] as const;

export function HeroAiVisual() {
  return (
    <div className="mx-auto w-full max-w-[46rem]">
      <motion.div
        whileHover={{ y: -2 }}
        className="relative min-h-[372px] overflow-hidden rounded-[28px] border border-[#e7e2d9] bg-orbit p-4 shadow-[0_18px_50px_rgba(20,32,18,0.08)] sm:aspect-[1.22/1] sm:min-h-0 sm:p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,234,228,0.72),transparent_34%)]" />

        {capabilityLabels.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={cn(
                "absolute z-20 inline-flex items-center gap-1.5 rounded-[18px] border border-[#ece7df] bg-white px-3 py-2.5 text-[12px] font-medium text-[#2f3734] shadow-[0_10px_28px_rgba(20,32,18,0.08)] sm:gap-2 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-[15px]",
                item.className,
              )}
            >
              <Icon className="h-3.5 w-3.5 text-[var(--color-accent)] sm:h-4 sm:w-4" />
              <span className="sm:hidden">{item.mobileLabel}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          );
        })}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] max-w-[760px] -translate-x-1/2 -translate-y-1/2 sm:h-[94%] sm:w-[94%]">
            <Image
              src="/hero-globe-tight.png"
              alt="Connected AI globe"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 640px) 96vw, 760px"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
