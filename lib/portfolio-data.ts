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

export type StorySection = {
  label: string;
  title: string;
  body: string;
};

export type AboutPageData = {
  story: StorySection[];
  deepPhilosophy: PhilosophyCard[];
  leadSection: {
    title: string;
    body: string;
  };
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
  { label: "About", href: "/about" },
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

// Short versions for the homepage — one or two sentences each.
// Full versions live in aboutPageData.deepPhilosophy below.
export const philosophyCards: PhilosophyCard[] = [
  {
    icon: "Terminal",
    title: "Get the foundations right",
    body: "Good architecture is quiet. I invest the time upfront so the team can move fast without constantly fighting fires.",
  },
  {
    icon: "Layers",
    title: "Code you can trust",
    body: "Components built in isolation. Cypress and Jest as standard. The confidence to refactor without fear.",
  },
  {
    icon: "Users",
    title: "Raise the ceiling",
    body: "The most valuable thing I can do as a lead is help everyone around me think a little bigger.",
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

// ─── About Page ───────────────────────────────────────────────────────────────

export const aboutPageData: AboutPageData = {
  story: [
    {
      label: "before the code",
      title: "Ten years in sales",
      body: "I spent a decade in telecom retail — selling phones, broadband plans, and home electronics to everyday people. Customer-facing, service-minded, technically curious. I was always the one explaining what the products actually did under the hood. That job gave me something I still draw on: an instinct for what makes something genuinely useful to the person on the other end of it, and a comfort with talking to non-technical people about technical things.",
    },
    {
      label: "finding the craft",
      title: "KYH frontend programme, 2018",
      body: "I enrolled in KYH's frontend development programme in 2018. It was project-based from day one — no dry theory, straight into building things with teams. We learned agile the way you actually learn it: by doing standups, missing deadlines, retrospecting, and doing better. I came out with a solid React and JavaScript foundation, a habit of iterating quickly, and a real respect for the discipline of writing maintainable code. In parallel I was taking on small commissions — sites for friends, local businesses, the occasional redesign — enough to know this was where I wanted to go.",
    },
    {
      label: "svea solar, 2020 – now",
      title: "From frontend engineer to lead",
      body: "I joined Svea Solar's sites team in 2020 and spent four years going from building pages to owning the platform they ran on. The headless CMS, the lead capture system, the Salesforce API integration, the analytics layer — I built all of these incrementally, taking on ownership as the system and my understanding of the business grew. In 2024 I moved into the lead engineer role. Now I run a team of 2–5 developers across the full stack — TypeScript on the frontend, Python (Wagtail) on the backend. That shift from individual contributor to lead has been the most interesting challenge of my career so far.",
    },
  ],
  deepPhilosophy: [
    {
      icon: "Terminal",
      title: "Get the foundations right",
      body: "Features are temporary. The content model, the data contracts, the CI pipeline — those live forever. Every time I've rushed past an architecture decision I've paid for it later, and every time I've slowed down and thought it through I've been grateful. I'm not precious about it — I can move fast when the situation calls for it — but I've developed a strong instinct for when to pause and get the structure right first. A morning spent on the right abstraction is worth weeks of untangling a bad one.",
    },
    {
      icon: "Layers",
      title: "Code you can actually trust",
      body: "I build components in isolation — pieces that know their own shape and API without caring where they end up in the application. That forces genuine reusability rather than coupling to the page they started on. Paired with a Cypress suite for critical user paths and Jest for logic-heavy pieces, you get a system you can refactor without second-guessing everything. Tests aren't a tax on development. They're what give you permission to keep moving confidently as the codebase grows.",
    },
    {
      icon: "Users",
      title: "Raise the ceiling",
      body: "When I moved into the lead role I realised quickly that my output as an individual engineer was no longer the most important variable. What matters more is whether the people I work with are growing, whether they understand the system well enough to make good decisions without me, and whether they feel real ownership over their work. I try to be generous with context, curious about how people think rather than prescriptive about solutions, and honest when I don't know something. The goal is a team that makes good calls when I'm not in the room.",
    },
  ],
  leadSection: {
    title: "How I think about learning",
    body: "I came from sales, not computer science. That means I've always had to be deliberate about building depth — reading source code, experimenting, taking on things that are slightly beyond what I know. I'm drawn to architecture more than any specific technology: how systems are shaped, how data flows, how you draw boundaries that make the whole thing maintainable over years. I'm also genuinely excited about where agentic coding tools are taking the craft — not as a shortcut, but as a new kind of leverage that rewards people who think clearly about structure.",
  },
};

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.github, icon: "Github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "Linkedin" },
];
