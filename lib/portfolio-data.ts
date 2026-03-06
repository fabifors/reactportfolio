// portfolio-data.ts
// Single source of truth for all portfolio content.
// Types are intentionally shaped to mirror a future Payload CMS collection schema —
// replacing these static exports with fetch() calls will be the only breaking change.

export type NavItem = {
  label: string;
  href: string;
};

export type PhilosophyCard = {
  icon: string;
  title: string;
  body: string;
};

export type SkillDomain = {
  domain: string;
  items: string[];
};

export type WorkHighlight = {
  title: string;
  employer: string;
  period: string;
  role: string;
  impact: string[];
  tags: string[];
};

export type LegacyProject = {
  title: string;
  url?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

// ─── Site Config ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Fabian Forsström",
  title: "Tech Lead · Full-Stack Engineer",
  description:
    "Tech Lead and full-stack engineer with a frontend focus. Six years building content platforms, lead pipelines, and analytics infrastructure at Svea Solar.",
  github: "https://github.com/fabifors/",
  linkedin: "https://linkedin.com/in/fabian-forsström-22958159/",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroData = {
  eyebrow: "> tech lead / full-stack engineer",
  headline: "Building systems\nthat scale with intent.",
  subheadline:
    "Six years taking a marketing website from static HTML to a full content platform — headless CMS architecture, lead capture pipelines, Salesforce API integrations, and analytics that close the loop between ad spend and revenue. Now leaning hard into AI-augmented engineering.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

// ─── Philosophy ───────────────────────────────────────────────────────────────

export const philosophyCards: PhilosophyCard[] = [
  {
    icon: "Terminal",
    title: "Systems before features",
    body: "Features are temporary. The content model, the data contracts, the CI pipeline — those live forever. I spend the time upfront to get the architecture right so iteration is fast and regressions are rare.",
  },
  {
    icon: "GitBranch",
    title: "Frontend as infrastructure",
    body: "A marketing site is not just HTML. It is a lead generation engine, a performance budget, a CMS contract, and a tracking layer. I treat it with the same discipline as a backend service.",
  },
  {
    icon: "Cpu",
    title: "Augmented, not replaced",
    body: "I use agentic coding tools to compress cycle time — not to avoid thinking. The leverage is real, but it requires stronger architecture instincts, not weaker ones.",
  },
];

// ─── Expertise ────────────────────────────────────────────────────────────────

export const skillDomains: SkillDomain[] = [
  {
    domain: "Core Stack",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    domain: "Platform & CMS",
    items: [
      "Headless CMS architecture",
      "Payload CMS",
      "Wagtail",
      "REST APIs",
      "Static site generation",
    ],
  },
  {
    domain: "Lead & CRM",
    items: [
      "Salesforce API",
      "Custom lead capture pipelines",
      "Form optimization",
      "CRM integration",
    ],
  },
  {
    domain: "Analytics",
    items: [
      "Google Ads value-based bidding",
      "Conversion tracking",
      "Persona mapping",
      "Data layer architecture",
    ],
  },
  {
    domain: "Tooling",
    items: ["Git", "Figma", "Firebase", "Agile / Scrum", "VS Code"],
  },
  {
    domain: "Agentic Engineering",
    items: [
      "Claude Code",
      "AI-assisted development",
      "Prompt engineering",
      "Automated code workflows",
    ],
  },
];

// ─── Work ─────────────────────────────────────────────────────────────────────

export const workHighlights: WorkHighlight[] = [
  {
    title: "Full content and marketing platform",
    employer: "Svea Solar",
    period: "2019 – present",
    role: "Frontend Engineer → Tech Lead",
    impact: [
      "Architected and own the headless CMS powering all content creation for a national solar brand, enabling editors to publish autonomously without developer involvement.",
      "Built and maintain the statically-generated Next.js marketing website responsible for lead generation at scale across the Swedish market.",
      "Engineered custom lead capture tools and a proprietary API bridging the frontend to Salesforce CRM, routing thousands of qualified leads per month.",
      "Developed value-based bidding analytics infrastructure connecting ad spend to persona-qualified leads in Google Ads, directly improving marketing ROI.",
      "Grew from individual contributor frontend engineer to Tech Lead over six years, now owning the technical direction of the full content and acquisition stack.",
    ],
    tags: [
      "Next.js",
      "Headless CMS",
      "Salesforce API",
      "TypeScript",
      "Analytics",
      "Tech Lead",
    ],
  },
];

export const legacyProjects: LegacyProject[] = [
  { title: "Hitta Webbhotellet", url: "https://hittawebbhotellet.se" },
  { title: "Hittasmslån", url: "https://hittasmslan.se" },
  { title: "Refine-It" },
  { title: "Quire" },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, icon: "Github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "Linkedin" },
];
