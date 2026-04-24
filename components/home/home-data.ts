import {
  BrainCircuit,
  Check,
  Code2,
  Globe2,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react";

import type {
  FooterLink,
  HeroMetric,
  HeroProcessStep,
  OvernightFlowStep,
  TalentProfile,
  TechGroup,
  VettingStep,
} from "./home-types";

export const brandName = "Kinshu Labs";

export const featuredTalent = [
  {
    name: "Maya Gurung",
    role: "Senior LLM Engineer",
    summary: "RAG systems, evaluation loops, and product-ready AI features.",
    skills: [
      { label: "OpenAI", className: "bg-[#FFE1EE]" },
      { label: "RAG", className: "bg-[var(--color-accent-muted)]" },
      { label: "LangChain", className: "bg-[#E9E1FF]" },
    ],
    experience: "7+ years",
    availability: "Available now",
    note: "Most requested",
    avatar: {
      frame: "bg-[#FFE7EF]",
      skin: "#FFD7B8",
      hair: "#1E1A1A",
      shirt: "var(--color-accent)",
    },
  },
  {
    name: "Aarav Shrestha",
    role: "Agentic Systems Architect",
    summary: "Tool-using workflows, orchestration, and clean system design.",
    skills: [
      { label: "LangGraph", className: "bg-[#F1E6FF]" },
      { label: "Pinecone", className: "bg-[#DFF4FF]" },
      { label: "Python", className: "bg-[var(--color-accent-soft)]" },
    ],
    experience: "8+ years",
    availability: "2 weeks",
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
      { label: "Llama 3", className: "bg-[var(--color-accent-muted)]" },
      { label: "HuggingFace", className: "bg-[#FFECC8]" },
    ],
    experience: "9+ years",
    availability: "This week",
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
      { label: "FastAPI", className: "bg-[var(--color-accent-muted)]" },
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
      { label: "Modal", className: "bg-[var(--color-accent-soft)]" },
      { label: "LangSmith", className: "bg-[#E9E1FF]" },
    ],
    experience: "8+ years",
    availability: "3 weeks",
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
      { label: "Promptfoo", className: "bg-[var(--color-accent-soft)]" },
      { label: "Evals", className: "bg-[var(--color-accent-muted)]" },
      { label: "Python", className: "bg-[#DFF4FF]" },
    ],
    experience: "5+ years",
    availability: "Available now",
    avatar: {
      frame: "bg-[#FFF7D9]",
      skin: "#F0C3A5",
      hair: "#30211A",
      shirt: "var(--color-accent)",
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
      { label: "vLLM", className: "bg-[var(--color-accent-muted)]" },
      { label: "Docker", className: "bg-[#DFF4FF]" },
      { label: "W&B", className: "bg-[#FFE1EE]" },
    ],
    experience: "8+ years",
    availability: "4 weeks",
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
      { label: "Agents", className: "bg-[var(--color-accent-muted)]" },
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
      { label: "Llama 3", className: "bg-[var(--color-accent-muted)]" },
      { label: "HuggingFace", className: "bg-[#FFECC8]" },
    ],
    experience: "9+ years",
    availability: "This week",
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
      { label: "FastAPI", className: "bg-[var(--color-accent-muted)]" },
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
] satisfies readonly TalentProfile[];

export const vettingSteps = [
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
] satisfies readonly VettingStep[];

export const overnightFlow = [
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
] satisfies readonly OvernightFlowStep[];

export const techGroups = [
  {
    title: "Models & APIs",
    icon: BrainCircuit,
    items: ["OpenAI", "Claude", "Gemini", "Llama 3", "Mistral"],
    description: "Production LLM APIs and open model choices.",
    tone: "bg-[var(--color-accent-soft)]",
  },
  {
    title: "Orchestration",
    icon: Workflow,
    items: ["LangChain", "LangGraph", "LlamaIndex", "DSPy", "CrewAI"],
    description: "Agentic workflows, tool use, and reusable AI pipelines.",
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
    tone: "bg-[var(--color-accent-muted)]",
  },
  {
    title: "Evals & Observability",
    icon: Sparkles,
    items: ["LangSmith", "Promptfoo", "Weights & Biases", "Helicone", "Arize"],
    description: "Testing, monitoring, and release confidence for AI features.",
    tone: "bg-[#FFE1EE]",
  },
] satisfies readonly TechGroup[];

export const heroProcessSteps = [
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
] satisfies readonly HeroProcessStep[];

export const heroMetrics = [
  { value: "24-48h", label: "shortlist" },
  { value: "Rigorous", label: "technical vetting" },
  { value: "Client-ready", label: "communication" },
] satisfies readonly HeroMetric[];

export const requestMatchBenefits = [
  "Top 1% AI Specialists",
  "Rigorous Technical Audit",
  "Product-Minded Partners",
] as const;

export const footerLinks = [
  { href: "#featured-talent", label: "Talent" },
  { href: "#process", label: "Vetting" },
  { href: "#match", label: "Match" },
  { href: "#apply", label: "Apply" },
] satisfies readonly FooterLink[];
