// portfolio-data.ts
// Single source of truth for all portfolio content.
// Types are intentionally shaped to mirror a future Payload CMS collection schema —
// replacing these static exports with fetch() calls will be the only breaking change.

export type NavItem = {
  label: string;
  href: string;
};

export type BioData = {
  intro: string;
  detail: string;
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
  title: "Lead Engineer · Full-Stack",
  description:
    "Lead engineer and full-stack developer with a frontend focus. Five years building content platforms, lead pipelines, and analytics infrastructure at Svea Solar — now leading the team behind it.",
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
  eyebrow: "> lead engineer / full-stack",
  headline: "Building things\nthat last.",
  subheadline:
    "I spent a decade in sales before finding my way into software — and that background shaped how I think about the work. I care about the people using it, the business depending on it, and the engineers maintaining it. At Svea Solar I've spent five years building the platform behind our marketing and content, and the last year leading the team that keeps it moving.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

// ─── Bio ──────────────────────────────────────────────────────────────────────

export const bioData: BioData = {
  intro:
    "I came up through ten years in telecom sales before teaching myself to code and eventually going through KYH's frontend programme. That path gave me something I'm grateful for every day: a genuine curiosity about the people on the other side of the screen and the business problems underneath the interface.",
  detail:
    "I still get excited about both the technical solution and the experience it creates. Outside of work I shoot photography and think a lot about visual communication — which probably explains why I care as much about the interface as the infrastructure behind it.",
};

// ─── Philosophy ───────────────────────────────────────────────────────────────

export const philosophyCards: PhilosophyCard[] = [
  {
    icon: "Terminal",
    title: "Get the foundations right",
    body: "I've learned the hard way that skipping the architecture conversation costs you more than it saves. Good foundations are quiet — they let the team move fast without constantly fighting fires. I'd rather spend an afternoon getting the content model right than a week untangling the fallout.",
  },
  {
    icon: "Layers",
    title: "Code you can actually trust",
    body: "I build components in isolation — pieces that know their own shape but not where they'll end up. Paired with Cypress and Jest, that gives you a system you can refactor without second-guessing everything. Tests aren't a tax on development; they're what give you the confidence to keep moving.",
  },
  {
    icon: "Users",
    title: "Raise the ceiling",
    body: "The most valuable thing I can do as a lead isn't write the best code on the team — it's help the people around me think a little bigger. I share context generously, ask more questions than I give answers, and try to make sure my teammates genuinely own their work.",
  },
];

// ─── Expertise ────────────────────────────────────────────────────────────────

export const skillDomains: SkillDomain[] = [
  {
    domain: "Core Stack",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    domain: "Testing",
    items: [
      "Cypress (E2E)",
      "Jest (unit / integration)",
      "Component-driven development",
      "Test-driven refactoring",
    ],
  },
  {
    domain: "Platform & CMS",
    items: [
      "Headless CMS architecture",
      "Wagtail (Python)",
      "Payload CMS",
      "REST APIs",
      "Static site generation",
    ],
  },
  {
    domain: "Lead & CRM",
    items: [
      "Salesforce API",
      "Custom lead capture pipelines",
      "Form optimisation",
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
    title: "Content and marketing platform",
    employer: "Svea Solar",
    period: "2020 – present",
    role: "Frontend Engineer (2020–2024) → Lead Engineer (2024–now)",
    impact: [
      "Joined the sites team as a frontend engineer and spent four years building and maintaining the marketing and content infrastructure for a national solar brand.",
      "Architected the headless CMS platform that powers content creation across the organisation — editors publish autonomously without needing a developer in the loop.",
      "Built the lead capture tools and proprietary API connecting our frontend to Salesforce CRM, routing qualified leads at scale across the Swedish market.",
      "Developed the analytics and value-based bidding infrastructure that connects ad spend to persona-qualified leads in Google Ads, closing the loop between marketing and revenue.",
      "Since 2024, leading a team of 2–5 engineers across the full stack — TypeScript on the frontend, Python (Wagtail) on the backend — with a strong focus on testing, component quality, and sustainable architecture.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Wagtail",
      "Headless CMS",
      "Salesforce API",
      "Cypress",
      "Jest",
      "Google Ads",
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
