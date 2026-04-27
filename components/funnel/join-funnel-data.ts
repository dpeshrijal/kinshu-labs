import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  Cloud,
  Clock3,
  Code2,
  Database,
  MonitorSmartphone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export interface EngineerRoleOption {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface TechnologyOption {
  id: string;
  label: string;
}

export interface AvailabilityOption {
  id: string;
  label: string;
  description: string;
}

export interface FunnelBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const engineerRoleOptions: readonly EngineerRoleOption[] = [
  {
    id: "ai-engineer",
    label: "AI Engineer",
    description: "Build AI models, agents and intelligent systems.",
    icon: BriefcaseBusiness,
  },
  {
    id: "fullstack-engineer",
    label: "Fullstack Engineer",
    description: "End-to-end web application development.",
    icon: Code2,
  },
  {
    id: "frontend-engineer",
    label: "Frontend Engineer",
    description: "Create beautiful and responsive user interfaces.",
    icon: MonitorSmartphone,
  },
  {
    id: "backend-engineer",
    label: "Backend Engineer",
    description: "Build robust APIs and scalable backend systems.",
    icon: Database,
  },
  {
    id: "data-engineer",
    label: "Data Engineer",
    description: "Design pipelines, warehouses and production data systems.",
    icon: Database,
  },
  {
    id: "devops-engineer",
    label: "DevOps Engineer",
    description: "Infrastructure, CI/CD and deployment automation.",
    icon: Cloud,
  },
] as const;

export const yearExperienceOptions = [
  "0 - 2 years",
  "3 - 5 years",
  "6 - 8 years",
  "9+ years",
] as const;

export const technologyOptions: readonly TechnologyOption[] = [
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "node-js", label: "Node.js" },
  { id: "java", label: "Java" },
  { id: "go", label: "Go" },
  { id: "rust", label: "Rust" },
  { id: "c-plus-plus", label: "C++" },
  { id: "c-sharp", label: "C#" },
  { id: "dotnet", label: ".NET" },
  { id: "php", label: "PHP" },
  { id: "ruby", label: "Ruby" },
  { id: "llm-nlp", label: "LLM / NLP" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "prompt-engineering", label: "Prompt Engineering" },
  { id: "pytorch", label: "PyTorch" },
  { id: "tensorflow", label: "TensorFlow" },
  { id: "rag", label: "RAG" },
  { id: "langchain", label: "LangChain" },
  { id: "langgraph", label: "LangGraph" },
  { id: "llamaindex", label: "LlamaIndex" },
  { id: "hugging-face", label: "Hugging Face" },
  { id: "openai-api", label: "OpenAI API" },
  { id: "anthropic-claude", label: "Anthropic Claude" },
  { id: "vector-databases", label: "Vector Databases" },
  { id: "fine-tuning", label: "Fine-tuning" },
  { id: "mlops", label: "MLOps" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "speech-ai", label: "Speech AI" },
  { id: "time-series", label: "Time Series ML" },
  { id: "fastapi", label: "FastAPI" },
  { id: "react", label: "React" },
  { id: "next-js", label: "Next.js" },
  { id: "vue", label: "Vue" },
  { id: "angular", label: "Angular" },
  { id: "tailwind-css", label: "Tailwind CSS" },
  { id: "graphql", label: "GraphQL" },
  { id: "rest-apis", label: "REST APIs" },
  { id: "microservices", label: "Microservices" },
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "gcp", label: "GCP" },
  { id: "docker", label: "Docker" },
  { id: "kubernetes", label: "Kubernetes" },
  { id: "terraform", label: "Terraform" },
  { id: "linux", label: "Linux" },
  { id: "ci-cd", label: "CI/CD" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "mongodb", label: "MongoDB" },
  { id: "redis", label: "Redis" },
  { id: "elasticsearch", label: "Elasticsearch" },
  { id: "snowflake", label: "Snowflake" },
  { id: "databricks", label: "Databricks" },
  { id: "airflow", label: "Airflow" },
  { id: "spark", label: "Apache Spark" },
  { id: "pyspark", label: "PySpark" },
  { id: "pandas", label: "Pandas" },
  { id: "numpy", label: "NumPy" },
] as const;

export const availabilityOptions: readonly AvailabilityOption[] = [
  {
    id: "asap",
    label: "ASAP",
    description: "I'm available to start immediately.",
  },
  {
    id: "within-2-weeks",
    label: "Within 2 weeks",
    description: "I can join within the next 2 weeks.",
  },
  {
    id: "one-to-two-months",
    label: "1 - 2 months",
    description: "I can join within 1 to 2 months.",
  },
] as const;

export const funnelBenefits: readonly FunnelBenefit[] = [
  {
    title: "Vetted by experts",
    description: "We review every profile to ensure quality.",
    icon: ShieldCheck,
  },
  {
    title: "Top companies",
    description: "Get matched with leading startups and enterprises.",
    icon: Building2,
  },
  {
    title: "Great compensation",
    description: "Earn competitive pay for your skills and expertise.",
    icon: CircleDollarSign,
  },
  {
    title: "Flexible work",
    description: "Choose projects that fit your schedule and goals.",
    icon: Clock3,
  },
  {
    title: "Career growth",
    description: "Build your profile and grow your career with us.",
    icon: TrendingUp,
  },
] as const;
