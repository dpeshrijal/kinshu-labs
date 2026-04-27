import type { LucideIcon } from "lucide-react";

export interface TalentSkill {
  label: string;
}

export interface TalentProfile {
  name: string;
  role: string;
  subtitle: string;
  skills: TalentSkill[];
  highlights: string[];
  availability: string;
  photoUrl?: string;
  placeholderLabel: string;
}

export interface VettingStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface OvernightFlowStep {
  label: string;
  title: string;
  description: string;
}

export interface TechGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
  description: string;
  tone: string;
}

export interface HeroProcessStep {
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface FooterLink {
  href: `#${string}`;
  label: string;
}

export interface NavLink {
  href: `#${string}`;
  label: string;
  hasCaret?: boolean;
}

export interface TrustedCompany {
  name: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  photoUrl?: string;
  placeholderLabel: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface PricingTier {
  title: string;
  hourlyRate: string;
  monthlyRate: string;
  vettingHours: string;
  applicantPool: string;
  summary: string;
  featured?: boolean;
}
