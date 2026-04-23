import type { LucideIcon } from "lucide-react";

export interface TalentSkill {
  label: string;
  className: string;
}

export interface TalentAvatarPalette {
  frame: string;
  skin: string;
  hair: string;
  shirt: string;
}

export interface TalentProfile {
  name: string;
  role: string;
  summary: string;
  skills: TalentSkill[];
  experience: string;
  availability: string;
  note?: string;
  avatar: TalentAvatarPalette;
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
