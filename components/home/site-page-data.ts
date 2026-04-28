export interface SitePageLink {
  href: string;
  label: string;
}

export interface SitePageCard {
  title: string;
  body: string;
}

export interface SitePageSection {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
}

export interface SitePageData {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: SitePageLink;
  secondaryCta?: SitePageLink;
  stats: SitePageCard[];
  highlights: SitePageCard[];
  sections: SitePageSection[];
  featureTitle: string;
  featureIntro: string;
  features: SitePageCard[];
}

export const sitePages = {
  about: {
    slug: "about",
    eyebrow: "About Kinshu Labs",
    title: "A focused engineering partner for teams that need software shipped well.",
    description:
      "Kinshu Labs connects global companies with deeply vetted software developers from Nepal. We stay close to the work from first brief to onboarding, so hiring feels calm, fast, and unusually clear.",
    primaryCta: { href: "/hire", label: "Start hiring" },
    secondaryCta: { href: "/#developers", label: "Meet the talent" },
    stats: [
      { title: "Nepal-rooted", body: "Built around a strong local engineering community." },
      { title: "Global-ready", body: "Designed for distributed teams across time zones." },
      { title: "Hands-on", body: "We support scoping, matching, onboarding, and follow-through." },
    ],
    highlights: [
      {
        title: "Why we exist",
        body: "Great companies need dependable engineers, and great engineers need access to meaningful global work. Kinshu Labs sits carefully in the middle.",
      },
      {
        title: "How we stay different",
        body: "We do not flood teams with resumes. We learn the role, screen for the real work, and introduce a small set of people who can actually contribute.",
      },
      {
        title: "What clients can expect",
        body: "Clear communication, transparent pricing, practical hiring guidance, and a partner who remains involved after the first interview.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "We combine technical signal with human judgment.",
        body: "A strong match is not only a skills checklist. We look at project ownership, product sense, communication habits, and the kind of environment where each engineer does their best work.",
        items: ["Role discovery", "Technical screening", "Communication review", "Ongoing support"],
      },
      {
        eyebrow: "02",
        title: "We keep the process lean on purpose.",
        body: "Hiring should create momentum, not another operational burden. Our workflow is built to help teams move from need to interview to contribution without unnecessary ceremony.",
        items: ["Fast shortlist", "Practical interviews", "Simple engagement terms", "14-day risk-free trial"],
      },
    ],
    featureTitle: "What guides every match",
    featureIntro:
      "The site has a calm surface, but the operating model underneath is intentionally rigorous.",
    features: [
      { title: "Quality over volume", body: "A tighter shortlist beats a noisy candidate pipeline every time." },
      { title: "Context before candidates", body: "We clarify what success looks like before recommending anyone." },
      { title: "Reliable communication", body: "We value engineers who can think clearly, write clearly, and collaborate steadily." },
    ],
  },
  faq: {
    slug: "faq",
    eyebrow: "FAQ",
    title: "Answers to the questions teams ask before hiring through Kinshu Labs.",
    description:
      "Here are the basics around vetting, pricing, trials, engagement structure, and what happens after you choose a developer.",
    primaryCta: { href: "/hire", label: "Start hiring" },
    secondaryCta: { href: "/hire", label: "Talk to us" },
    stats: [
      { title: "Trial", body: "14-day risk-free start to validate fit." },
      { title: "Pricing", body: "Clear hourly rates by developer seniority." },
      { title: "Support", body: "Help through matching, onboarding, and early delivery." },
    ],
    highlights: [
      {
        title: "How fast can we meet candidates?",
        body: "Timelines depend on the role, but the process is designed for a focused shortlist rather than a long sourcing cycle.",
      },
      {
        title: "Are developers full-time or part-time?",
        body: "Engagements can be flexible. The right structure depends on workload, urgency, seniority, and the kind of ownership required.",
      },
      {
        title: "What does risk-free mean?",
        body: "The initial trial period helps both sides confirm fit before the engagement becomes a longer commitment.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "How are developers vetted?",
        body: "We review technical ability, project experience, communication habits, reliability, and fit for remote collaboration.",
        items: ["Technical screen", "Experience review", "Communication review", "Reference to role needs"],
      },
      {
        eyebrow: "02",
        title: "What happens after we choose someone?",
        body: "We help set the engagement up clearly: scope, first tasks, communication rhythm, expectations, and check-ins.",
        items: ["Onboarding", "Trial period", "Progress rhythm", "Ongoing support"],
      },
    ],
    featureTitle: "More quick answers",
    featureIntro:
      "If your question is more specific, the hiring flow gives us enough context to respond usefully.",
    features: [
      { title: "Can we hire for AI work?", body: "Yes. We support AI apps, RAG systems, automation, and LLM-backed workflows." },
      { title: "Can we hire a small team?", body: "Yes. Kinshu Labs can help assemble one developer or a compact pod." },
      { title: "Can developers work with our tools?", body: "Yes. Onboarding should include your repo, project management, communication, and deployment workflows." },
    ],
  },
} satisfies Record<string, SitePageData>;

export type SitePageSlug = keyof typeof sitePages;

export const sitePageSlugs = Object.keys(sitePages) as SitePageSlug[];

export function getSitePage(slug: string) {
  if (slug in sitePages) {
    return sitePages[slug as SitePageSlug];
  }

  return undefined;
}
