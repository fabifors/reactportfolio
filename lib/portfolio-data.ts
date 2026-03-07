// portfolio-data.ts
// Single source of truth for all portfolio content.
// Types are intentionally shaped to mirror a future Payload CMS collection schema —
// replacing these static exports with fetch() calls will be the only breaking change.

export type NavItem = {
  label: string;
  href: string;
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

export type WorkPhase = {
  period: string;
  role: string;
  impact: string[];
};

export type WorkHighlight = {
  title: string;
  employer: string;
  team: string;
  phases: WorkPhase[];
  tags: string[];
};

export type LegacyProject = {
  title: string;
  description: string;
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
  { label: "Expertise", href: "/#expertise" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroData = {
  eyebrow: "> lead engineer / full-stack",
  headline: "Building things\nthat last.",
  subheadline:
    "I spent a decade in sales before finding my way into software — and that background shapes how I think about the work. I care about the people using it, the business depending on it, and the engineers maintaining it.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

// ─── Philosophy ───────────────────────────────────────────────────────────────

// Short versions for the homepage — two sentences each.
// Full versions live in aboutPageData.deepPhilosophy below.
export const philosophyCards: PhilosophyCard[] = [
  {
    icon: "Terminal",
    title: "Get the foundations right",
    body: "Good architecture is quiet. I invest the time upfront so the team can move fast without constantly fighting fires — because the cost of a bad foundation grows every sprint.",
  },
  {
    icon: "Layers",
    title: "Code you can trust",
    body: "Components built in isolation. Cypress and Jest as standard. The confidence to refactor without fear is what separates a codebase that scales from one you're afraid to touch.",
  },
  {
    icon: "Users",
    title: "Raise the ceiling",
    body: "The most valuable thing I can do as a lead is help everyone around me think a little bigger. Good systems come from teams that own their decisions, not just execute them.",
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
    domain: "Tooling",
    items: [
      "Git",
      "Figma",
      "Firebase",
      "Agile / Scrum",
      "Exploring: Claude Code & agentic workflows",
    ],
  },
];

// ─── Work ─────────────────────────────────────────────────────────────────────

export const workHighlights: WorkHighlight[] = [
  {
    title: "Svea Solar",
    employer: "Svea Solar",
    team: "2–5 engineers",
    phases: [
      {
        period: "2024 – present",
        role: "Lead Engineer",
        impact: [
          "Moved from individual contributor to leading the engineering team across the full stack — TypeScript on the frontend, Python (Wagtail) on the backend.",
          "Introduced Cypress and Jest as standards across the codebase, shifting the team toward component-driven development and test-driven refactoring.",
          "Focused on sustainable architecture: clear ownership boundaries, good documentation, and a team that makes sound decisions independently.",
        ],
      },
      {
        period: "2020 – 2024",
        role: "Frontend Engineer",
        impact: [
          "Built and maintained the marketing and content infrastructure for a national solar brand over four years.",
          "Architected the headless CMS platform that powers the editorial team — they publish autonomously without needing a developer in the loop.",
          "Built the lead capture tools and proprietary API connecting the frontend to Salesforce CRM, routing qualified leads across the Swedish market at scale.",
          "Developed the analytics and value-based bidding infrastructure that connects ad spend to persona-qualified pipeline in Google Ads.",
        ],
      },
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
  {
    title: "Hitta Webbhotellet",
    description: "web hosting comparison, design & UX",
    url: "https://hittawebbhotellet.se",
  },
  {
    title: "Hittasmslån",
    description: "loan comparison, design & UX",
    url: "https://hittasmslan.se",
  },
  {
    title: "Refine-It",
    description: "internal tool, React",
  },
  {
    title: "Quire",
    description: "school project, end-to-end design",
  },
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
