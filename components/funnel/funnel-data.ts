import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  CalendarDays,
  Cloud,
  Clock3,
  Code2,
  Database,
  LayoutPanelTop,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

export interface RoleOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ExperienceOption {
  id: string;
  label: string;
  hourlyRate: string;
  monthlyRate: string;
}

export interface StartOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const roleOptions: readonly RoleOption[] = [
  { id: "ai-engineer", label: "AI Engineer", icon: BrainCircuit },
  { id: "fullstack-engineer", label: "Fullstack Engineer", icon: Code2 },
  { id: "frontend-engineer", label: "Frontend Engineer", icon: LayoutPanelTop },
  { id: "backend-engineer", label: "Backend Engineer", icon: Database },
  { id: "data-engineer", label: "Data Engineer", icon: Database },
  { id: "devops-engineer", label: "DevOps Engineer", icon: Cloud },
] as const;

export const experienceOptions: readonly ExperienceOption[] = [
  { id: "junior", label: "Junior", hourlyRate: "$7.95/hr", monthlyRate: "($1272/mo)" },
  { id: "mid", label: "Mid", hourlyRate: "$12.95/hr", monthlyRate: "($2072/mo)" },
  { id: "senior", label: "Senior", hourlyRate: "$19.95/hr", monthlyRate: "($3192/mo)" },
] as const;

export const startOptions: readonly StartOption[] = [
  { id: "asap", label: "ASAP", icon: Zap },
  { id: "within-2-weeks", label: "Within 2 weeks", icon: CalendarDays },
  { id: "one-to-two-months", label: "1–2 months", icon: Clock3 },
] as const;

export const experienceIcon = UserRound;
export const experienceAccentIcon = Sparkles;
