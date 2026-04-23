"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Check,
  Clock3,
  Code2,
  Gamepad2,
  Globe2,
  MessageSquareText,
  MoveDownRight,
  Sparkles,
  Stars,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const brandName = "Kinshu Labs";

const featuredTalent = [
  {
    name: "Maya Gurung",
    role: "Senior LLM Engineer",
    summary: "RAG systems, evaluation loops, and product-ready AI features.",
    skills: [
      { label: "OpenAI", className: "bg-[#FFE1EE]" },
      { label: "RAG", className: "bg-[#EEFF9D]" },
      { label: "LangChain", className: "bg-[#E9E1FF]" },
    ],
    experience: "7+ years",
    availability: "Available now",
    note: "Most requested",
    avatar: {
      frame: "bg-[#FFE7EF]",
      skin: "#FFD7B8",
      hair: "#1E1A1A",
      shirt: "#D4FF00",
    },
  },
  {
    name: "Aarav Shrestha",
    role: "Agentic Systems Architect",
    summary: "Tool-using workflows, orchestration, and clean system design.",
    skills: [
      { label: "LangGraph", className: "bg-[#F1E6FF]" },
      { label: "Pinecone", className: "bg-[#DFF4FF]" },
      { label: "Python", className: "bg-[#FFF5C9]" },
    ],
    experience: "8+ years",
    availability: "2 weeks",
    note: undefined,
    avatar: {
      frame: "bg-[#E6F6FF]",
      skin: "#EBC1A5",
      hair: "#37251B",
      shirt: "#8ED9FF",
    },
  },
  {
    name: "Niraj Karki",
    role: "Applied ML Engineer",
    summary: "Fine-tuning, inference performance, and production ML delivery.",
    skills: [
      { label: "PyTorch", className: "bg-[#FFD8D8]" },
      { label: "Llama 3", className: "bg-[#EEFF9D]" },
      { label: "HuggingFace", className: "bg-[#FFECC8]" },
    ],
    experience: "9+ years",
    availability: "This week",
    note: undefined,
    avatar: {
      frame: "bg-[#FFF1E7]",
      skin: "#C98C62",
      hair: "#21130E",
      shirt: "#FFD56B",
    },
  },
  {
    name: "Anisha Thapa",
    role: "Full-Stack AI Engineer",
    summary: "LLM interfaces, backend APIs, and fast product iteration.",
    skills: [
      { label: "Next.js", className: "bg-[#EFEFEF]" },
      { label: "FastAPI", className: "bg-[#EEFF9D]" },
      { label: "OpenAI", className: "bg-[#FFE1EE]" },
    ],
    experience: "6+ years",
    availability: "Available now",
    note: "Product-minded",
    avatar: {
      frame: "bg-[#FFF0F8]",
      skin: "#F2C7AB",
      hair: "#2A1B1A",
      shirt: "#FFB8D6",
    },
  },
  {
    name: "Prabin Rai",
    role: "AI Platform Engineer",
    summary:
      "Internal tooling, deployment pipelines, and observability for AI teams.",
    skills: [
      { label: "Kubernetes", className: "bg-[#DFF4FF]" },
      { label: "Modal", className: "bg-[#FFF5C9]" },
      { label: "LangSmith", className: "bg-[#E9E1FF]" },
    ],
    experience: "8+ years",
    availability: "3 weeks",
    note: undefined,
    avatar: {
      frame: "bg-[#EEF7FF]",
      skin: "#D8A481",
      hair: "#1E1E1E",
      shirt: "#9DD3FF",
    },
  },
  {
    name: "Sanjana KC",
    role: "Evaluation Engineer",
    summary:
      "Prompt testing, benchmarks, and feedback loops for safer releases.",
    skills: [
      { label: "Promptfoo", className: "bg-[#FFF5C9]" },
      { label: "Evals", className: "bg-[#EEFF9D]" },
      { label: "Python", className: "bg-[#DFF4FF]" },
    ],
    experience: "5+ years",
    availability: "Available now",
    note: undefined,
    avatar: {
      frame: "bg-[#FFF7D9]",
      skin: "#F0C3A5",
      hair: "#30211A",
      shirt: "#D4FF00",
    },
  },
  {
    name: "Kiran Bista",
    role: "Retrieval Engineer",
    summary: "Chunking, indexing, and search quality across knowledge systems.",
    skills: [
      { label: "Qdrant", className: "bg-[#E9E1FF]" },
      { label: "pgvector", className: "bg-[#DFF4FF]" },
      { label: "LlamaIndex", className: "bg-[#FFECC8]" },
    ],
    experience: "7+ years",
    availability: "2 weeks",
    note: undefined,
    avatar: {
      frame: "bg-[#F2F7FF]",
      skin: "#D9A27A",
      hair: "#2C201C",
      shirt: "#A9CFFF",
    },
  },
  {
    name: "Roshan Poudel",
    role: "Multimodal Engineer",
    summary: "Speech, image, and text workflows for AI-native products.",
    skills: [
      { label: "Whisper", className: "bg-[#FFECC8]" },
      { label: "PyTorch", className: "bg-[#FFD8D8]" },
      { label: "OpenCV", className: "bg-[#DFF4FF]" },
    ],
    experience: "6+ years",
    availability: "This month",
    note: undefined,
    avatar: {
      frame: "bg-[#FFF3EA]",
      skin: "#BF855F",
      hair: "#241915",
      shirt: "#FFD56B",
    },
  },
  {
    name: "Sofia Lama",
    role: "MLOps Engineer",
    summary: "Serving stacks, GPU workloads, and cost-aware production infra.",
    skills: [
      { label: "vLLM", className: "bg-[#EEFF9D]" },
      { label: "Docker", className: "bg-[#DFF4FF]" },
      { label: "W&B", className: "bg-[#FFE1EE]" },
    ],
    experience: "8+ years",
    availability: "4 weeks",
    note: undefined,
    avatar: {
      frame: "bg-[#FFF0F7]",
      skin: "#E1B79A",
      hair: "#1B1B1B",
      shirt: "#FFB8D6",
    },
  },
  {
    name: "Ritesh Adhikari",
    role: "Applied AI Engineer",
    summary: "Customer-facing copilots, agents, and automation features.",
    skills: [
      { label: "Agents", className: "bg-[#EEFF9D]" },
      { label: "Redis", className: "bg-[#FFD8D8]" },
      { label: "Postgres", className: "bg-[#DFF4FF]" },
    ],
    experience: "7+ years",
    availability: "Available now",
    note: "Fast starter",
    avatar: {
      frame: "bg-[#F5F7FF]",
      skin: "#D39C76",
      hair: "#221714",
      shirt: "#B8CEFF",
    },
  },
  {
    name: "Niraj Karki",
    role: "Applied ML Engineer",
    summary: "Fine-tuning, inference performance, and production ML delivery.",
    skills: [
      { label: "PyTorch", className: "bg-[#FFD8D8]" },
      { label: "Llama 3", className: "bg-[#EEFF9D]" },
      { label: "HuggingFace", className: "bg-[#FFECC8]" },
    ],
    experience: "9+ years",
    availability: "This week",
    note: undefined,
    avatar: {
      frame: "bg-[#FFF1E7]",
      skin: "#C98C62",
      hair: "#21130E",
      shirt: "#FFD56B",
    },
  },
  {
    name: "Anisha Thapa",
    role: "Full-Stack AI Engineer",
    summary: "LLM interfaces, backend APIs, and fast product iteration.",
    skills: [
      { label: "Next.js", className: "bg-[#EFEFEF]" },
      { label: "FastAPI", className: "bg-[#EEFF9D]" },
      { label: "OpenAI", className: "bg-[#FFE1EE]" },
    ],
    experience: "6+ years",
    availability: "Available now",
    note: "Product-minded",
    avatar: {
      frame: "bg-[#FFF0F8]",
      skin: "#F2C7AB",
      hair: "#2A1B1A",
      shirt: "#FFB8D6",
    },
  },
] as const;

type TalentProfile = (typeof featuredTalent)[number];

const vettingSteps = [
  {
    number: "01",
    title: "Technical screening",
    description: "Python, systems thinking, and core problem solving.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Architecture deep dive",
    description: "RAG, evals, infrastructure, and real model tradeoffs.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Live coding",
    description: "Hands-on implementation under real constraints.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Communication check",
    description: "Clear thinking, ownership, and team readiness.",
    icon: MessageSquareText,
  },
] as const;

const overnightFlow = [
  {
    label: "US evening",
    title: "You hand off priorities",
    description: "Your team signs off with context, tasks, and blockers.",
  },
  {
    label: "Nepal daytime",
    title: "Execution keeps moving",
    description:
      "Your engineer continues shipping while the US team is offline.",
  },
  {
    label: "US morning",
    title: "You wake up to progress",
    description: "Updates land before the next workday starts.",
  },
] as const;

const techGroups = [
  {
    title: "Models & APIs",
    icon: BrainCircuit,
    items: ["OpenAI", "Claude", "Gemini", "Llama 3", "Mistral"],
    description: "Production LLM APIs and open model choices.",
    tone: "bg-[#FFF5C9]",
  },
  {
    title: "Orchestration",
    icon: Workflow,
    items: ["LangChain", "LangGraph", "LlamaIndex", "DSPy", "CrewAI"],
    description: "Agent workflows, tool use, and reusable AI pipelines.",
    tone: "bg-[#E9E1FF]",
  },
  {
    title: "Retrieval & Search",
    icon: Globe2,
    items: ["Pinecone", "Weaviate", "Qdrant", "pgvector", "Elasticsearch"],
    description: "Search quality, indexing, chunking, and knowledge systems.",
    tone: "bg-[#DFF4FF]",
  },
  {
    title: "Infra & Serving",
    icon: Code2,
    items: ["PyTorch", "vLLM", "Modal", "Docker", "Kubernetes"],
    description: "Reliable model serving, deployment, and cost control.",
    tone: "bg-[#EEFF9D]",
  },
  {
    title: "Evals & Observability",
    icon: Sparkles,
    items: ["LangSmith", "Promptfoo", "Weights & Biases", "Helicone", "Arize"],
    description: "Testing, monitoring, and release confidence for AI features.",
    tone: "bg-[#FFE1EE]",
  },
] as const;

const heroProcessSteps = [
  {
    label: "Brief",
    description: "Share the kind of engineer you need.",
    icon: MessageSquareText,
  },
  {
    label: "Match",
    description:
      "We shortlist vetted engineers with the right technical depth and working style.",
    icon: BrainCircuit,
  },
  {
    label: "Start",
    description: "Interview, onboard, and begin shipping in days.",
    icon: Check,
  },
] as const;

const heroMetrics = [
  { value: "24-48h", label: "shortlist" },
  { value: "Rigorous", label: "technical vetting" },
  { value: "Client-ready", label: "communication" },
] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionPill({
  children,
  tone = "white",
  className = "",
}: {
  children: ReactNode;
  tone?: "white" | "lime" | "sand";
  className?: string;
}) {
  const tones = {
    white: "bg-white",
    lime: "bg-[#D4FF00]",
    sand: "bg-[#FFF5C9]",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-2 text-xs font-medium uppercase text-black ${tones[tone]} ${className}`}
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function StickerIcon({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-black ${className}`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

function ActionLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "secondary" | "dark";
}) {
  const tones = {
    primary: "border-black bg-[#D4FF00] text-black",
    secondary: "border-black bg-white text-black hover:bg-[#FFF5C9]",
    dark: "border-black bg-black text-white hover:bg-zinc-900",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className="w-full sm:w-auto"
    >
      <Link
        href={href}
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-medium transition duration-300 ease-out sm:w-auto sm:px-6 sm:py-3 ${tones[tone]}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function ActionButton({
  children,
  type = "button",
  fullWidth = true,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.985 }}
      className={fullWidth ? "w-full" : "w-full sm:w-auto"}
    >
      <button
        type={type}
        className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-[#D4FF00] px-6 py-3 text-sm font-medium text-black transition duration-300 ease-out sm:px-7 ${
          fullWidth ? "w-full" : "w-full sm:w-auto"
        }`}
      >
        {children}
      </button>
    </motion.div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  className = "",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-black">{label}</span>
      <input
        name={name} // Passed to input
        type={type}
        required={required} // Passed to input
        aria-label={label}
        placeholder={placeholder}
        className="h-14 w-full rounded-[20px] border-2 border-black bg-[#FBFBF7] px-4 text-base font-normal text-black outline-none transition duration-300 ease-out placeholder:text-black/40 focus:bg-white"
      />
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  className = "",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-black">{label}</span>
      <textarea
        name={name}
        required={required}
        aria-label={label}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-[24px] border-2 border-black bg-[#FBFBF7] px-4 py-4 text-base font-normal leading-7 text-black outline-none transition duration-300 ease-out placeholder:text-black/40 focus:bg-white"
      />
    </label>
  );
}

function getAvailabilityStyles(availability: string) {
  const normalized = availability.toLowerCase();

  if (normalized.includes("available")) {
    return "bg-[#DFF4FF]";
  }

  if (normalized.includes("week")) {
    return "bg-[#FFF5C9]";
  }

  return "bg-[#F1F1F1]";
}

function Avatar({
  skin,
  hair,
  shirt,
  frame,
}: {
  skin: string;
  hair: string;
  shirt: string;
  frame: string;
}) {
  return (
    <div
      className={`relative h-24 w-24 overflow-hidden rounded-[28px] border-2 border-black ${frame}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.7),transparent_35%)]" />
      <div
        className="absolute left-1/2 top-5 h-14 w-14 -translate-x-1/2 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute left-[14px] top-[34px] h-3.5 w-3.5 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute right-[14px] top-[34px] h-3.5 w-3.5 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute left-1/2 top-2.5 h-12 w-[3.9rem] -translate-x-1/2 rounded-[999px_999px_18px_18px] border-2 border-black"
        style={{ backgroundColor: hair }}
      />
      <div className="absolute left-[33px] top-[42px] h-1.5 w-1.5 rounded-full bg-black" />
      <div className="absolute right-[33px] top-[42px] h-1.5 w-1.5 rounded-full bg-black" />
      <div className="absolute left-[26px] top-[36px] h-1 w-3 rounded-full bg-black" />
      <div className="absolute right-[26px] top-[36px] h-1 w-3 rounded-full bg-black" />
      <div className="absolute left-[29px] top-[50px] h-2.5 w-2.5 rounded-full bg-[#FFB6B6]/60" />
      <div className="absolute right-[29px] top-[50px] h-2.5 w-2.5 rounded-full bg-[#FFB6B6]/60" />
      <div className="absolute left-1/2 top-[56px] h-[7px] w-5 -translate-x-1/2 rounded-b-full border-b-2 border-black" />
      <div
        className="absolute left-1/2 top-[62px] h-5 w-5 -translate-x-1/2 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute inset-x-3 bottom-0 h-10 rounded-t-[20px] border-2 border-black"
        style={{ backgroundColor: shirt }}
      />
    </div>
  );
}

function anonymizeName(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part, index) => {
      if (index === 0) {
        const [firstLetter = ""] = Array.from(part);

        return firstLetter ? `${firstLetter}${"*".repeat(4)}` : "";
      }

      return part;
    })
    .filter(Boolean)
    .join(" ");
}

function TalentCard({ talent }: { talent: TalentProfile }) {
  const displayName = anonymizeName(talent.name);

  return (
    <motion.article
      whileHover={{ scale: 1.012, y: -3, rotate: -0.25 }}
      className="relative h-full rounded-[28px] border-2 border-black bg-white p-5 transition duration-300 ease-out sm:p-6"
    >
      <div className="flex items-start justify-center gap-4 sm:justify-between">
        <div className="rounded-full border-2 border-black bg-[#D4FF00] px-3 py-1 text-xs font-medium">
          Verified
        </div>
        {talent.note ? (
          <div className="hidden rotate-1 rounded-full border-2 border-black bg-[#FFF5C9] px-3 py-1 text-xs font-medium sm:inline-flex">
            {talent.note}
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <Avatar {...talent.avatar} />
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
            {displayName}
          </h3>
          <p className="mt-1 text-sm text-black/60">{talent.role}</p>
        </div>
      </div>

      <p className="mt-5 hidden text-sm leading-7 text-black/72 sm:block">
        {talent.summary}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start">
        {talent.skills.map((skill, index) => (
          <span
            key={skill.label}
            className={`rounded-full border-2 border-black px-3 py-1 text-xs font-medium text-black ${skill.className} ${
              index > 1 ? "hidden sm:inline-flex" : ""
            }`}
          >
            {skill.label}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-zinc-200 pt-5 sm:mt-7">
        <div className="flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 text-black/72">
            <Clock3 className="h-4 w-4" />
            Experience
          </div>
          <span className="font-medium text-black">{talent.experience}</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 text-black/72">
            <CalendarDays className="h-4 w-4" />
            Availability
          </div>
          <span
            className={`rounded-full border-2 border-black px-3 py-1 text-xs font-medium text-black ${getAvailabilityStyles(
              talent.availability,
            )}`}
          >
            {talent.availability}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function HeroProcessVisual() {
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

function SketchDivider({
  bg,
  fill,
  flip = false,
}: {
  bg: "white" | "lemon";
  fill: "white" | "lemon";
  flip?: boolean;
}) {
  const bgClass = {
    white: "bg-white",
    lemon: "bg-[#F7F7F2]",
  }[bg];
  const fillClass = {
    white: "fill-white",
    lemon: "fill-[#F7F7F2]",
  }[fill];

  return (
    <div aria-hidden className={`${bgClass} leading-none`}>
      <svg
        viewBox="0 0 1440 96"
        className={`block h-10 w-full ${fillClass} sm:h-16 ${
          flip ? "scale-x-[-1]" : ""
        }`}
        preserveAspectRatio="none"
      >
        <path d="M0 34C82 18 145 42 226 35C332 25 420 10 524 31C630 52 728 72 829 49C925 27 1006 13 1111 33C1227 55 1328 45 1440 25V96H0Z" />
        <path
          d="M0 34C82 18 145 42 226 35C332 25 420 10 524 31C630 52 728 72 829 49C925 27 1006 13 1111 33C1227 55 1328 45 1440 25"
          fill="none"
          stroke="#111111"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16 44C98 27 160 51 240 44C345 34 430 21 534 40C642 60 734 78 838 57C936 36 1018 25 1120 43C1231 63 1330 53 1424 34"
          fill="none"
          opacity="0.72"
          stroke="#D4FF00"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function HomePage() {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [currentTalentPage, setCurrentTalentPage] = useState(0);
  const [talentPaused, setTalentPaused] = useState(false);

  useEffect(() => {
    function updateItemsPerView() {
      const width = window.innerWidth;

      if (width >= 1440) {
        setItemsPerView(4);
      } else if (width >= 1024) {
        setItemsPerView(3);
      } else if (width >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    }

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const talentPages = useMemo(() => {
    const pages: TalentProfile[][] = [];

    for (let index = 0; index < featuredTalent.length; index += itemsPerView) {
      pages.push(Array.from(featuredTalent.slice(index, index + itemsPerView)));
    }

    return pages;
  }, [itemsPerView]);

  const safeCurrentTalentPage = Math.min(
    currentTalentPage,
    Math.max(talentPages.length - 1, 0),
  );

  useEffect(() => {
    setCurrentTalentPage(0);
  }, [itemsPerView]);

  useEffect(() => {
    if (talentPages.length <= 1 || talentPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentTalentPage((current) => (current + 1) % talentPages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [talentPages.length, talentPaused]);

  function goToTalentPage(index: number) {
    setCurrentTalentPage(index);
  }

  return (
    <main className="relative overflow-hidden bg-white text-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(212,255,0,0.16),transparent_15%),radial-gradient(circle_at_88%_10%,rgba(255,184,214,0.12),transparent_12%),radial-gradient(circle_at_78%_72%,rgba(142,217,255,0.12),transparent_16%)]" />

      <header className="sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border-2 border-black bg-white">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="2"
                  width="4"
                  height="20"
                  rx="1.2"
                  fill="#111111"
                />
                <path
                  d="M9 11.2L19.5 2H21L12.8 11L21 22H19.5L9 12.8V11.2Z"
                  fill="#111111"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-semibold leading-none tracking-tight text-black sm:text-lg">
                {brandName}
              </div>
              <div className="hidden pt-1 text-xs leading-none text-black/55 sm:block">
                Vetted network of senior AI engineers
              </div>
            </div>
          </Link>

          <div className="flex shrink-0 items-center gap-3">
            <ActionLink href="#match" tone="secondary">
              Hire talent
            </ActionLink>
            <div className="hidden sm:block">
              <ActionLink href="#apply" tone="dark">
                Apply as dev
              </ActionLink>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-white">
        <div className="pointer-events-none absolute left-5 top-24 hidden h-16 w-16 rotate-12 rounded-full border-2 border-black bg-[#FFF5C9] md:block" />
        <div className="pointer-events-none absolute bottom-14 right-8 hidden h-10 w-10 -rotate-12 rounded-[14px] border-2 border-black bg-[#FFE1EE] lg:block" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <SectionPill tone="lime" className="-rotate-2">
                Top 1% AI Engineers
              </SectionPill>
              <h1 className="mt-7 max-w-4xl text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-black sm:mt-8 sm:text-6xl sm:leading-[1] lg:text-[4.65rem]">
                Senior AI engineers, ready to build
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/72 sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8">
                From RAG pipelines to agent workflows and model infra, we match
                you with vetted engineers who can start fast and ship in
                production.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                <ActionLink href="#match" tone="primary">
                  Request a match
                  <ArrowRight className="h-4 w-4" />
                </ActionLink>
                <ActionLink href="#featured-talent" tone="secondary">
                  Explore talent
                </ActionLink>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <HeroProcessVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <SketchDivider bg="white" fill="lemon" />

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
            onMouseEnter={() => setTalentPaused(true)}
            onMouseLeave={() => setTalentPaused(false)}
          >
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${safeCurrentTalentPage}-${itemsPerView}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`grid gap-6 ${
                    itemsPerView === 1
                      ? "grid-cols-1"
                      : itemsPerView === 2
                        ? "grid-cols-2"
                        : itemsPerView === 3
                          ? "grid-cols-3"
                          : "grid-cols-4"
                  }`}
                >
                  {talentPages[safeCurrentTalentPage]?.map(
                    (talent, talentIndex) => (
                      <TalentCard
                        key={`${talent.name}-${talent.role}-${talentIndex}`}
                        talent={talent}
                      />
                    ),
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {talentPages.length > 1 ? (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {talentPages.map((_, index) => (
                  <button
                    key={`talent-page-${index}`}
                    type="button"
                    aria-label={`Go to featured candidate page ${index + 1}`}
                    onClick={() => goToTalentPage(index)}
                    className={`h-3 rounded-full border-2 border-black transition duration-300 ease-out ${
                      safeCurrentTalentPage === index
                        ? "w-10 bg-[#D4FF00]"
                        : "w-3 bg-white"
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <SketchDivider bg="lemon" fill="white" flip />

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

      <SketchDivider bg="white" fill="lemon" />

      <section className="bg-[#F7F7F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="rounded-[32px] border-2 border-black bg-[#F7F7F2] p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                {/* <SectionPill tone="lime" className="-rotate-2">
                  The Nepal advantage
                </SectionPill> */}
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
                  For US teams, Nepal creates a practical follow-the-sun
                  workflow: clear evening handoffs, focused execution overnight,
                  and progress waiting in the morning.
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
                        <div className="absolute left-1 top-1 h-12 w-12 rounded-full bg-[#D4FF00]" />
                        <div className="relative text-3xl font-semibold tracking-tight text-black">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-black/48">
                          {item.label}
                        </div>
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

      <SketchDivider bg="lemon" fill="white" flip />

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

      <SketchDivider bg="white" fill="lemon" />

      <section id="match" className="bg-[#F7F7F2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] border-2 border-black bg-white p-6 sm:p-8">
              <SectionPill tone="sand" className="-rotate-1">
                Request a match
              </SectionPill>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl">
                Ready to build?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/72 sm:text-lg sm:leading-8">
                Tell us about your project. We'll hand-pick the best fit from
                our network and respond within 48 hours.
              </p>

              <div className="mt-10 hidden space-y-4 sm:block">
                {[
                  "Top 1% AI Specialists",
                  "Rigorous Technical Audit",
                  "Product-Minded Partners",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-black"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-[#D4FF00]">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <form
              action="https://formspree.io/f/xyklbkdn"
              method="POST"
              className="rounded-[28px] border-2 border-black bg-white p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  name="founder_name"
                  label="Founder name"
                  placeholder="Jane Smith"
                />
                <Field
                  name="email"
                  label="Work email"
                  placeholder="jane@startup.com"
                  type="email"
                />
                <Field name="company" label="Company" placeholder="Acme AI" />

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-black">
                    Hiring timeline
                  </label>
                  <select
                    className="h-14 rounded-[20px] border-2 border-black bg-[#FBFBF7] px-4 text-sm outline-none transition duration-300 ease-out focus:bg-white"
                    name="timeline"
                  >
                    <option value="immediately">Immediately</option>
                    <option value="1-2-weeks">In 1-2 weeks</option>
                    <option value="1-month">In 1 month</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <TextareaField
                  name="message"
                  label="Who do you need to hire?"
                  placeholder="e.g. A Senior LLM Engineer to build a RAG pipeline using Pinecone. Ideally someone with FinTech experience."
                  className="sm:col-span-2"
                />

                <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:col-span-2">
                  <ActionButton type="submit" fullWidth={false}>
                    Submit request
                    <ArrowRight className="h-4 w-4" />
                  </ActionButton>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <SketchDivider bg="lemon" fill="white" flip />

      <section id="apply" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal className="rounded-[32px] border-2 border-black bg-[#FFF5C9] p-8 text-center sm:p-10">
            <SectionPill tone="white" className="-rotate-1">
              For developers
            </SectionPill>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.75rem]">
              Nepal based AI engineer?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/72 sm:max-w-2xl sm:text-lg sm:leading-8">
              Join a selective network of senior engineers building AI products
              for global teams.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <ActionLink href="mailto:deepeshrijal@gmail.com" tone="dark">
                Apply as dev
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t-2 border-black bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-black/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-black">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border-2 border-black ">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="2"
                  width="4"
                  height="20"
                  rx="1.2"
                  fill="#111111"
                />
                <path
                  d="M9 11.2L19.5 2H21L12.8 11L21 22H19.5L9 12.8V11.2Z"
                  fill="#111111"
                />
              </svg>
            </div>
            {brandName}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="#featured-talent"
              className="transition duration-300 ease-out hover:text-black"
            >
              Talent
            </Link>
            <Link
              href="#process"
              className="transition duration-300 ease-out hover:text-black"
            >
              Vetting
            </Link>
            <Link
              href="#match"
              className="transition duration-300 ease-out hover:text-black"
            >
              Match
            </Link>
            <Link
              href="#apply"
              className="transition duration-300 ease-out hover:text-black"
            >
              Apply
            </Link>
          </div>

          <div>Built in Nepal for the World</div>
        </div>
      </footer>
    </main>
  );
}
