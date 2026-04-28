import {
  Bot,
  BrainCircuit,
  CircleDollarSign,
  Clock3,
  Database,
  Eye,
  FileSearch2,
  Globe2,
  MessageSquareText,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type {
  EngineerNetworkBenefit,
  FooterColumn,
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
    role: "Fullstack Engineer",
    subtitle: "5+ years building product features and scalable backend systems.",
    skills: [
      { label: "TypeScript" },
      { label: "React" },
      { label: "Node.js" },
      { label: "PostgreSQL" },
    ],
    highlights: [
      "5+ years building web platforms and backend systems",
      "Ex-BigTech",
      "MS in CS",
    ],
    availability: "Available",
    photoUrl: "/candidates/arjun-b.png",
    placeholderLabel: "AB",
  },
  {
    name: "Saurav K.",
    role: "Data Engineer",
    subtitle: "4+ years building pipelines, warehouses, and cloud data systems.",
    skills: [
      { label: "Python" },
      { label: "Airflow" },
      { label: "PySpark" },
      { label: "Databricks" },
    ],
    highlights: [
      "4+ years building data pipelines and analytics platforms",
      "Ex-Research Lab",
      "MS in AI",
    ],
    availability: "Available",
    photoUrl: "/candidates/saurav-k.png",
    placeholderLabel: "SK",
  },
  {
    name: "Pragya M.",
    role: "Frontend Engineer",
    subtitle: "4+ years building responsive product interfaces and design systems.",
    skills: [
      { label: "TypeScript" },
      { label: "Next.js" },
      { label: "React" },
      { label: "Tailwind" },
    ],
    highlights: [
      "4+ years building frontend systems for production products",
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
      "Tell us about your project and the kind of developer you need.",
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
    title: "Fullstack Apps",
    icon: Bot,
    items: ["Web apps, internal tools,", "and SaaS products"],
    description: "Fullstack Apps",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "AI & Automation",
    icon: Sparkles,
    items: ["Copilots, workflows,", "and intelligent automation"],
    description: "AI & Automation",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "Backend Systems",
    icon: FileSearch2,
    items: ["APIs, business logic,", "and platform services"],
    description: "Backend Systems",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "Frontend Engineering",
    icon: Eye,
    items: ["Responsive interfaces", "and design systems"],
    description: "Frontend Engineering",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "Data Engineering",
    icon: Database,
    items: ["Pipelines, warehouses,", "and analytics platforms"],
    description: "Data Engineering",
    tone: "bg-[#f3f7f4]",
  },
  {
    title: "DevOps & Cloud",
    icon: Globe2,
    items: ["Infrastructure, deployment,", "and observability"],
    description: "DevOps & Cloud",
    tone: "bg-[#f3f7f4]",
  },
] satisfies readonly TechGroup[];

export const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
] satisfies readonly NavLink[];

export const testimonials = [
  {
    quote:
      "Kinshu Labs helped us hire an exceptional developer in less than a week. The quality of talent and communication is top-notch.",
    name: "Jason M.",
    role: "CTO",
    company: "SupraAgents AI",
    photoUrl: undefined,
    placeholderLabel: "JM",
  },
] satisfies readonly Testimonial[];

export const stats = [
  { value: "50+", label: "Engineers" },
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

export const engineerNetworkBenefits = [
  {
    title: "Work on impactful products",
    icon: Rocket,
  },
  {
    title: "Competitive compensation",
    icon: CircleDollarSign,
  },
  {
    title: "Flexible engagement",
    icon: Clock3,
  },
  {
    title: "Vetted and trusted by top teams",
    icon: ShieldCheck,
  },
] satisfies readonly EngineerNetworkBenefit[];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/join", label: "Careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/#solutions", label: "Solutions" },
      { href: "/#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/faq", label: "FAQ" },
    ],
  },
] satisfies readonly FooterColumn[];
