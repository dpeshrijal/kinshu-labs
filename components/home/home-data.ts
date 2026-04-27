import {
  Bot,
  BrainCircuit,
  Database,
  Eye,
  FileSearch2,
  Globe2,
  MessageSquareText,
  Rocket,
  ScanSearch,
  Sparkles,
} from "lucide-react";

import type {
  FooterColumn,
  FooterLink,
  NavLink,
  PricingTier,
  StatItem,
  TalentProfile,
  Testimonial,
  TechGroup,
  VettingStep,
} from "./home-types";

export const brandName = "Kinshu Labs";

export const featuredTalent = [
  {
    name: "Arjun B.",
    role: "Senior LLM Engineer",
    subtitle: "5+ years building LLM apps and AI agents.",
    skills: [
      { label: "Python" },
      { label: "LangChain" },
      { label: "RAG" },
      { label: "GPT" },
    ],
    highlights: [
      "5+ years building LLM apps and AI agents",
      "Ex-BigTech",
      "MS in CS",
    ],
    availability: "Available",
    photoUrl: "/candidates/arjun-b.png",
    placeholderLabel: "AB",
  },
  {
    name: "Saurav K.",
    role: "Machine Learning Engineer",
    subtitle: "4+ years in deep learning and model deployment.",
    skills: [
      { label: "PyTorch" },
      { label: "Transformers" },
      { label: "MLOps" },
    ],
    highlights: [
      "4+ years in deep learning and model deployment",
      "Ex-Research Lab",
      "MS in AI",
    ],
    availability: "Available",
    photoUrl: "/candidates/saurav-k.png",
    placeholderLabel: "SK",
  },
  {
    name: "Pragya M.",
    role: "Computer Vision Engineer",
    subtitle: "4+ years in computer vision and image processing.",
    skills: [{ label: "Python" }, { label: "OpenCV" }, { label: "YOLO" }],
    highlights: [
      "4+ years in computer vision and image processing",
      "Ex-Product Company",
      "MS in CS",
    ],
    availability: "Available",
    photoUrl: "/candidates/pragya-m.png",
    placeholderLabel: "PM",
  },
] satisfies readonly TalentProfile[];

export const vettingSteps = [
  {
    number: "01",
    title: "Share your needs",
    description:
      "Tell us about your project and the kind of AI engineer you need.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "We find and vet",
    description:
      "We source and rigorously vet top engineers for technical skills and communication.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "You interview",
    description:
      "Meet pre-vetted engineers and choose the right fit for your team.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Start building",
    description:
      "Engineer joins your team and helps you ship faster with continuous support.",
    icon: Rocket,
  },
] satisfies readonly VettingStep[];

export const techGroups = [
  {
    title: "LLM Applications",
    icon: Bot,
    items: ["Chatbots, copilots,", "and AI SaaS platforms"],
    description: "LLM Applications",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "AI Agents",
    icon: Sparkles,
    items: ["Autonomous agents", "for complex tasks"],
    description: "AI Agents",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "RAG Systems",
    icon: FileSearch2,
    items: ["Enterprise search", "and knowledge bases"],
    description: "RAG Systems",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "Computer Vision",
    icon: Eye,
    items: ["Image, video analysis", "and automation"],
    description: "Computer Vision",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "AI Data Pipelines",
    icon: Database,
    items: ["Data processing", "and model pipelines"],
    description: "AI & Data Pipelines",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "MLOps",
    icon: Globe2,
    items: ["Deployment, monitoring", "and optimization"],
    description: "MLOps",
    tone: "bg-[#f3f7f4]",
  },
] satisfies readonly TechGroup[];

export const footerLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#ai-engineers", label: "AI Engineers" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About Us" },
  { href: "#footer", label: "Resources" },
] satisfies readonly FooterLink[];

export const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#ai-engineers", label: "AI Engineers" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About Us" },
  { href: "#footer", label: "Resources", hasCaret: true },
] satisfies readonly NavLink[];

export const testimonials = [
  {
    quote:
      "Kinshu Labs helped us hire an exceptional AI engineer in less than a week. The quality of talent and communication is top-notch.",
    name: "Jason M.",
    role: "CTO",
    company: "SupraAgents AI",
    photoUrl: undefined,
    placeholderLabel: "JM",
  },
] satisfies readonly Testimonial[];

export const stats = [
  { value: "50+", label: "AI Engineers" },
  { value: "20+", label: "Clients Worldwide" },
  { value: "100+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
] satisfies readonly StatItem[];

export const pricingTiers = [
  {
    title: "Junior Engineer",
    hourlyRate: "$7.95/hr",
    monthlyRate: "($1272/mo)",
    vettingHours: "Vetted engineers",
    applicantPool: "Top 10% talent",
    summary: "Great for small tasks and early-stage projects.",
  },
  {
    title: "Mid-Level Engineer",
    hourlyRate: "$12.95/hr",
    monthlyRate: "($2072/mo)",
    vettingHours: "Vetted engineers",
    applicantPool: "Top 5% talent",
    summary: "Ideal for most projects and growing teams.",
    featured: true,
  },
  {
    title: "Senior Engineer",
    hourlyRate: "$19.95/hr",
    monthlyRate: "($3192/mo)",
    vettingHours: "Vetted engineers",
    applicantPool: "Top 3% talent",
    summary: "Best for complex projects and technical leadership.",
  },
] satisfies readonly PricingTier[];

export const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Services",
    links: ["AI Engineers", "Solutions", "Hiring Process", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Guides", "FAQ", "Docs"],
  },
] satisfies readonly FooterColumn[];
