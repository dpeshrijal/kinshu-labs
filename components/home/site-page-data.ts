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
    secondaryCta: { href: "/software-developers", label: "Meet the talent" },
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
  careers: {
    slug: "careers",
    eyebrow: "Careers",
    title: "Build your engineering career with global product teams.",
    description:
      "Join the Kinshu Labs talent network to work on serious software projects with companies that value clear thinking, strong delivery, and respectful collaboration.",
    primaryCta: { href: "/join", label: "Apply to join" },
    secondaryCta: { href: "/guides", label: "Read the guides" },
    stats: [
      { title: "Remote-friendly", body: "Engagements built for distributed engineering work." },
      { title: "Skill-first", body: "Selection is based on ability, clarity, and ownership." },
      { title: "Supported", body: "We help with positioning, interviews, and onboarding." },
    ],
    highlights: [
      {
        title: "For engineers who want meaningful work",
        body: "We look for developers who can own real product outcomes, communicate honestly, and keep learning when the problem gets blurry.",
      },
      {
        title: "A better path to global clients",
        body: "Instead of chasing scattered opportunities, you get introduced to roles where your skills and working style make sense.",
      },
      {
        title: "The bar is high, and fair",
        body: "Our process evaluates practical engineering judgment, not trivia. We want to understand how you build, debug, document, and collaborate.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "Apply with your background and strongest work.",
        body: "Show us the projects, systems, and product problems that best represent how you think as an engineer.",
        items: ["Experience profile", "Portfolio or GitHub", "Preferred stack", "Availability"],
      },
      {
        eyebrow: "02",
        title: "Complete a practical review.",
        body: "We review technical depth, communication, and reliability so client introductions feel earned and credible.",
        items: ["Technical conversation", "Work sample review", "Communication screen", "Role calibration"],
      },
    ],
    featureTitle: "Who tends to thrive here",
    featureIntro:
      "Kinshu Labs is a strong fit for engineers who want international work without losing the craft and care of good engineering.",
    features: [
      { title: "Product-minded builders", body: "You think about user outcomes, not just tickets." },
      { title: "Steady communicators", body: "You raise blockers early and make progress visible." },
      { title: "Responsible owners", body: "You care about maintainable code and clean handoffs." },
    ],
  },
  contact: {
    slug: "contact",
    eyebrow: "Contact",
    title: "Tell us what you are building. We will help you find the right next step.",
    description:
      "Whether you are hiring, exploring a project, or applying as an engineer, use the right flow below and we will route you quickly.",
    primaryCta: { href: "/hire", label: "I want to hire" },
    secondaryCta: { href: "/join", label: "I am a developer" },
    stats: [
      { title: "Hiring teams", body: "Share the role, stack, timeline, and desired outcomes." },
      { title: "Developers", body: "Apply with your experience, availability, and strongest work." },
      { title: "Partners", body: "Start with context and we will point you to the right person." },
    ],
    highlights: [
      {
        title: "Hiring inquiries",
        body: "Use the hiring form if you need one engineer, a small pod, or help scoping the right technical profile.",
      },
      {
        title: "Developer applications",
        body: "Use the developer application if you want to join the talent network and be considered for global client work.",
      },
      {
        title: "General direction",
        body: "Not sure where you fit? Start with the hiring flow if a company is involved, and the developer flow if an individual profile is involved.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "For companies, useful context speeds everything up.",
        body: "The best first message includes what you are building, the skill gaps on your team, how soon you want someone to start, and what success looks like in the first month.",
        items: ["Product context", "Required stack", "Budget range", "Start timeline"],
      },
      {
        eyebrow: "02",
        title: "For engineers, show the work behind the resume.",
        body: "We care about what you have shipped, how you explain tradeoffs, and where you want to grow next.",
        items: ["Recent projects", "Technical strengths", "Communication style", "Availability"],
      },
    ],
    featureTitle: "Choose the fastest route",
    featureIntro:
      "Every contact path should lead somewhere useful, so these pages point directly into the flows that already collect the right information.",
    features: [
      { title: "Hire developers", body: "Best for founders, operators, and engineering leaders." },
      { title: "Join the network", body: "Best for software developers looking for vetted global opportunities." },
      { title: "Explore services", body: "Best if you want to understand the engagement model first." },
    ],
  },
  "software-developers": {
    slug: "software-developers",
    eyebrow: "Software Developers",
    title: "Pre-vetted developers who can join your team and start contributing.",
    description:
      "Hire fullstack, frontend, backend, AI, data, and cloud engineers from Nepal with technical screening, communication review, and onboarding support already handled.",
    primaryCta: { href: "/hire", label: "Get matched" },
    secondaryCta: { href: "/hiring-process", label: "See the process" },
    stats: [
      { title: "Top talent", body: "Shortlists built around technical depth and ownership." },
      { title: "Flexible scope", body: "Part-time, full-time, project-based, or longer-term support." },
      { title: "Team-ready", body: "Engineers screened for collaboration, clarity, and remote habits." },
    ],
    highlights: [
      {
        title: "Roles we commonly support",
        body: "Frontend engineers, fullstack builders, backend developers, data engineers, AI application engineers, and DevOps-focused cloud engineers.",
      },
      {
        title: "What makes the match work",
        body: "We align on the technical work, product context, communication cadence, and seniority level before recommending engineers.",
      },
      {
        title: "How hiring stays low-risk",
        body: "You interview pre-vetted candidates, choose who fits, and start with a 14-day risk-free trial to validate the match in practice.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "Talent matched to the work, not just the stack.",
        body: "A React project, a data pipeline, and an internal AI tool all require different habits. We screen for the kind of judgment your project actually needs.",
        items: ["Frontend systems", "Backend APIs", "AI workflows", "Data platforms"],
      },
      {
        eyebrow: "02",
        title: "Built for startups and lean teams.",
        body: "If you need senior help without a long hiring cycle, Kinshu Labs gives you a narrow, high-signal path to capable people.",
        items: ["Fast shortlist", "Direct interviews", "Simple onboarding", "Flexible engagement"],
      },
    ],
    featureTitle: "Developer categories",
    featureIntro:
      "The network is intentionally broad enough for modern software work, but curated enough to stay useful.",
    features: [
      { title: "Fullstack engineers", body: "Product features, dashboards, SaaS apps, and internal tools." },
      { title: "AI application engineers", body: "RAG systems, copilots, automations, and LLM-backed workflows." },
      { title: "Data and cloud engineers", body: "Pipelines, warehouses, deployments, observability, and platform support." },
    ],
  },
  solutions: {
    slug: "solutions",
    eyebrow: "Solutions",
    title: "Engineering capacity for the software your business actually needs.",
    description:
      "From fullstack products to AI automation and data infrastructure, Kinshu Labs helps you add the right builders for the next stage of your roadmap.",
    primaryCta: { href: "/hire", label: "Build with us" },
    secondaryCta: { href: "/pricing", label: "View pricing" },
    stats: [
      { title: "Apps", body: "Web products, SaaS platforms, dashboards, and internal tools." },
      { title: "AI", body: "Copilots, RAG workflows, automations, and intelligent interfaces." },
      { title: "Data", body: "Pipelines, warehouses, reporting layers, and analytics products." },
    ],
    highlights: [
      {
        title: "Fullstack product development",
        body: "Add engineers who can work across UI, APIs, databases, integrations, and deployment workflows.",
      },
      {
        title: "AI and automation",
        body: "Bring in developers who can turn fuzzy automation ideas into practical systems with useful feedback loops.",
      },
      {
        title: "Platform and data support",
        body: "Strengthen the foundations behind your product with backend, cloud, DevOps, and data engineering capacity.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "Start with the outcome.",
        body: "We help translate the business need into the engineering profile required to move it forward.",
        items: ["Product scope", "Technical stack", "Delivery milestones", "Team gaps"],
      },
      {
        eyebrow: "02",
        title: "Match the engineer to the stage.",
        body: "Early prototypes need different instincts than scaling systems. We calibrate for speed, quality, and ownership based on where you are.",
        items: ["MVP builds", "Feature delivery", "System modernization", "Long-term team extension"],
      },
    ],
    featureTitle: "Common engagement types",
    featureIntro:
      "Use Kinshu Labs when you need reliable engineering momentum without building a large hiring operation first.",
    features: [
      { title: "Dedicated developer", body: "One engineer embedded with your team for focused delivery." },
      { title: "Small engineering pod", body: "A compact group for product builds, migrations, or AI workflows." },
      { title: "Specialist support", body: "Targeted help for data, DevOps, backend, frontend, or automation problems." },
    ],
  },
  "hiring-process": {
    slug: "hiring-process",
    eyebrow: "How It Works",
    title: "A simple path from hiring need to productive engineer.",
    description:
      "We keep the process intentionally direct: understand the role, shortlist vetted engineers, support interviews, and help the chosen developer ramp smoothly.",
    primaryCta: { href: "/hire", label: "Start the process" },
    secondaryCta: { href: "/faq", label: "Read FAQ" },
    stats: [
      { title: "Step 1", body: "Share your goals, team context, and technical requirements." },
      { title: "Step 2", body: "Review a focused shortlist of pre-vetted engineers." },
      { title: "Step 3", body: "Interview, choose, onboard, and start building." },
    ],
    highlights: [
      {
        title: "Discovery",
        body: "We clarify the role, the work, the stack, the collaboration model, and what the engineer should accomplish first.",
      },
      {
        title: "Vetting",
        body: "Candidates are reviewed for technical skill, practical problem solving, communication, and reliability.",
      },
      {
        title: "Onboarding",
        body: "Once you choose a developer, we help set expectations, working rhythm, and early success criteria.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "The shortlist is intentionally small.",
        body: "You should not need to screen a dozen people to find one strong fit. We send a focused set of candidates aligned with the role.",
        items: ["Role calibration", "Candidate review", "Interview scheduling", "Decision support"],
      },
      {
        eyebrow: "02",
        title: "The trial turns confidence into proof.",
        body: "The 14-day risk-free trial gives you room to validate collaboration, technical output, and fit inside the actual work environment.",
        items: ["Clear first tasks", "Communication cadence", "Progress check-ins", "Fit validation"],
      },
    ],
    featureTitle: "What you avoid",
    featureIntro:
      "The process is designed to remove the common drag of hiring while preserving the judgment that good hiring requires.",
    features: [
      { title: "No resume flood", body: "You get curated recommendations, not a raw pipeline." },
      { title: "No blind technical bets", body: "Screening happens before candidates reach your calendar." },
      { title: "No lonely onboarding", body: "We stay close while the engagement starts." },
    ],
  },
  pricing: {
    slug: "pricing",
    eyebrow: "Pricing",
    title: "Transparent developer rates for flexible engineering support.",
    description:
      "Start with the seniority level your work needs, then scale the engagement up or down as your roadmap changes.",
    primaryCta: { href: "/hire", label: "Get a quote" },
    secondaryCta: { href: "/software-developers", label: "Compare talent" },
    stats: [
      { title: "Junior", body: "From $7.95/hr for well-scoped implementation tasks." },
      { title: "Mid-level", body: "From $12.95/hr for most product and platform work." },
      { title: "Senior", body: "From $19.95/hr for complex systems and technical leadership." },
    ],
    highlights: [
      {
        title: "Simple starting points",
        body: "Pricing is organized by seniority so you can quickly estimate the right level of support for the role.",
      },
      {
        title: "Flexible engagement",
        body: "Use Kinshu Labs for a project, an embedded developer, or longer-term team capacity without locking yourself into unnecessary overhead.",
      },
      {
        title: "Risk-conscious start",
        body: "The 14-day trial helps you validate fit before committing to a longer working relationship.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "Choose seniority based on responsibility.",
        body: "Junior engineers fit clear tasks, mid-level engineers fit most roadmap execution, and senior engineers help with architecture, ambiguity, and leadership.",
        items: ["Task complexity", "Need for autonomy", "Architecture responsibility", "Communication load"],
      },
      {
        eyebrow: "02",
        title: "Match budget to expected output.",
        body: "We can help you decide whether the work needs one strong generalist, a specialist, or a small pod.",
        items: ["Single developer", "Part-time support", "Full-time support", "Small team"],
      },
    ],
    featureTitle: "What pricing includes",
    featureIntro:
      "The hourly rate is only useful if the matching process protects the quality of the work behind it.",
    features: [
      { title: "Pre-vetted talent", body: "Technical and communication screening before the interview stage." },
      { title: "Matching support", body: "Help clarifying role requirements and selecting the right seniority." },
      { title: "Engagement guidance", body: "Support around onboarding, expectations, and early delivery rhythm." },
    ],
  },
  resources: {
    slug: "resources",
    eyebrow: "Resources",
    title: "Useful context for hiring, evaluating, and working with software developers.",
    description:
      "Explore practical resources from Kinshu Labs: engagement examples, hiring guides, and straightforward answers to common questions.",
    primaryCta: { href: "/guides", label: "Read the guides" },
    secondaryCta: { href: "/case-studies", label: "View case studies" },
    stats: [
      { title: "Case studies", body: "Representative examples of how engineering support creates momentum." },
      { title: "Guides", body: "Practical thinking for hiring, onboarding, and remote collaboration." },
      { title: "FAQ", body: "Clear answers about pricing, trials, vetting, and engagement structure." },
    ],
    highlights: [
      {
        title: "Learn from project patterns",
        body: "The case studies show the kinds of work Kinshu Labs is built for: product delivery, AI workflows, data platforms, and technical cleanup.",
      },
      {
        title: "Make better hiring decisions",
        body: "The guides help you define the role, choose the right seniority, interview for signal, and avoid common remote hiring traps.",
      },
      {
        title: "Get unstuck quickly",
        body: "The FAQ gives direct answers for teams that want to understand the process before starting a hiring conversation.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "Start with the kind of clarity you need.",
        body: "If you are comparing engagement types, begin with case studies. If you are shaping a role, begin with guides. If you are checking terms, begin with the FAQ.",
        items: ["Project examples", "Role design", "Pricing basics", "Trial details"],
      },
      {
        eyebrow: "02",
        title: "Turn browsing into a stronger brief.",
        body: "The best hiring conversations happen when teams already know the outcome they want, the constraints they are facing, and the kind of engineer who can help.",
        items: ["Define outcomes", "Map constraints", "Choose seniority", "Plan onboarding"],
      },
    ],
    featureTitle: "Resource paths",
    featureIntro:
      "Resources should help you make a decision, not bury you in generic content. Each path points to a practical next step.",
    features: [
      { title: "Case Studies", body: "Use these when you want to see where Kinshu Labs fits inside real engineering situations." },
      { title: "Guides", body: "Use these when you are designing the role, interview, or onboarding plan." },
      { title: "FAQ", body: "Use this when you need fast answers before starting the hiring flow." },
    ],
  },
  "case-studies": {
    slug: "case-studies",
    eyebrow: "Case Studies",
    title: "Engagement snapshots that show how Kinshu Labs teams create momentum.",
    description:
      "These representative examples show the kinds of outcomes clients come to Kinshu Labs for: faster product delivery, practical AI workflows, and stronger engineering foundations.",
    primaryCta: { href: "/hire", label: "Discuss your project" },
    secondaryCta: { href: "/solutions", label: "Explore solutions" },
    stats: [
      { title: "Product build", body: "A lean team adds fullstack capacity to ship a customer-facing feature set." },
      { title: "AI workflow", body: "A business turns manual research and review into a guided internal tool." },
      { title: "Data platform", body: "A team stabilizes reporting with cleaner pipelines and ownership." },
    ],
    highlights: [
      {
        title: "SaaS feature delivery",
        body: "A fullstack engineer joins an existing product team to move from backlog pressure to steady weekly releases.",
      },
      {
        title: "Internal AI assistant",
        body: "An AI-focused developer helps prototype a retrieval workflow, connect data sources, and build a reviewable interface.",
      },
      {
        title: "Analytics foundation",
        body: "A data engineer improves pipeline reliability, table structure, and reporting confidence for a growing operations team.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "The common pattern is practical progress.",
        body: "Clients do not come to us for theater. They need capable engineers who can understand the situation and move real work forward.",
        items: ["Clear scope", "Fast ramp", "Visible delivery", "Maintainable handoff"],
      },
      {
        eyebrow: "02",
        title: "The right match changes the shape of the project.",
        body: "A strong engineer does more than close tickets. They reduce ambiguity, improve technical decisions, and make the team feel less stuck.",
        items: ["Better tradeoffs", "Cleaner execution", "More confidence", "Sustainable pace"],
      },
    ],
    featureTitle: "Use cases we see often",
    featureIntro:
      "These snapshots are intentionally anonymized and representative rather than tied to public client claims.",
    features: [
      { title: "Startup delivery gaps", body: "Founders need experienced execution without a long recruitment cycle." },
      { title: "AI product experiments", body: "Teams want to test useful AI workflows before hiring a full internal team." },
      { title: "Platform cleanup", body: "Growing products need stronger backend, data, and deployment foundations." },
    ],
  },
  guides: {
    slug: "guides",
    eyebrow: "Guides",
    title: "Practical hiring guides for building better software teams.",
    description:
      "Use these guide topics to think through role design, interviews, onboarding, remote collaboration, and choosing the right engineering support.",
    primaryCta: { href: "/hire", label: "Get hiring help" },
    secondaryCta: { href: "/faq", label: "Read FAQ" },
    stats: [
      { title: "Role design", body: "Define outcomes before skills." },
      { title: "Interviewing", body: "Test judgment, not trivia." },
      { title: "Onboarding", body: "Make the first week concrete." },
    ],
    highlights: [
      {
        title: "How to define the developer you need",
        body: "Start with the work: product goals, technical constraints, seniority required, and the decisions this person must own.",
      },
      {
        title: "How to interview remote engineers",
        body: "Use practical conversations around past work, tradeoffs, debugging habits, and written communication.",
      },
      {
        title: "How to make onboarding work",
        body: "Give the first two weeks a clear rhythm: access, context, first task, communication channels, and check-in expectations.",
      },
    ],
    sections: [
      {
        eyebrow: "01",
        title: "Good hiring begins before candidates appear.",
        body: "If the role is vague, the shortlist will be vague. The strongest hiring process starts with a crisp definition of success.",
        items: ["Outcome", "Stack", "Seniority", "Ownership"],
      },
      {
        eyebrow: "02",
        title: "Remote collaboration should be designed.",
        body: "Great remote engineers thrive when expectations are explicit and decisions are documented enough for async work.",
        items: ["Daily rhythm", "Written updates", "Code review norms", "Decision logs"],
      },
    ],
    featureTitle: "Guide library",
    featureIntro:
      "These are the topics this site can grow into as Kinshu Labs publishes more detailed resources.",
    features: [
      { title: "Choosing seniority", body: "When to hire junior, mid-level, or senior engineering help." },
      { title: "Evaluating AI engineers", body: "What to look for beyond prompt demos and model familiarity." },
      { title: "Working with offshore talent", body: "How to set communication, ownership, and delivery expectations." },
    ],
  },
  faq: {
    slug: "faq",
    eyebrow: "FAQ",
    title: "Answers to the questions teams ask before hiring through Kinshu Labs.",
    description:
      "Here are the basics around vetting, pricing, trials, engagement structure, and what happens after you choose a developer.",
    primaryCta: { href: "/hire", label: "Start hiring" },
    secondaryCta: { href: "/contact", label: "Contact us" },
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
