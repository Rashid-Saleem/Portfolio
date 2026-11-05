/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PORTFOLIO CONTENT — EDIT THIS FILE TO CUSTOMIZE ALL SECTIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * The projects and testimonials below are SAMPLE PLACEHOLDERS so the layout
 * renders fully. Replace them with your real work and client feedback.
 * To remove an item, delete it from the array. To add one, copy the shape.
 */

import type {
  NavItem,
  ProcessStep,
  Project,
  Service,
  SkillCategory,
  Testimonial,
  ValueProp,
} from "./types";

/* Site config (identity, links, SEO) lives in `config.ts` and is
 * re-exported here so components can pull everything from one module. */
export { siteConfig } from "./config";

/* ─────────────────────────────── Navigation ─────────────────────────────── */

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero ──────────────────────────────────────────────────────────────────── */

/** Tech badges shown under the hero headline */
export const heroTechStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "PostgreSQL",
  "LangChain",
];

export const heroStats: { value: string; label: string }[] = [
  { value: "3+", label: "Years of experience" }, // PLACEHOLDER: defendable number
  { value: "30+", label: "Projects delivered" }, // PLACEHOLDER
  { value: "3", label: "Core specializations" },
];

/* ── Services ─────────────────────────────────────────────────────────────── */

export const services: Service[] = [
  {
    id: "web-development",
    icon: "code",
    title: "Web Development",
    tagline: "Full-stack applications built to scale",
    description:
      "End-to-end development of modern web applications — from marketing sites that convert to complex, data-driven platforms. I turn requirements into clean architecture, pixel-accurate UI, and production deployments.",
    offerings: [
      "Next.js & React.js applications",
      "TypeScript-first codebases",
      "Tailwind CSS design systems",
      "Fully responsive, mobile-first builds",
      "API design & third-party integrations",
    ],
    businessValue:
      "Ship a product that looks premium, loads instantly, and won't need a rewrite in six months — reducing long-term maintenance costs.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "ai-development",
    icon: "brain",
    title: "AI & Python Development",
    tagline: "Practical AI that solves real problems",
    description:
      "I build AI-powered products that go beyond demos: Retrieval-Augmented Generation (RAG) systems that answer questions from your own documents, intelligent chatbots, computer-vision pipelines, and automation workflows built on solid Python backends.",
    offerings: [
      "RAG & document-based Q&A systems",
      "AI chatbots & assistants",
      "Computer-vision solutions",
      "Machine-learning pipelines",
      "Python backends & automation",
    ],
    businessValue:
      "Automate repetitive knowledge work, unlock insights trapped in your documents, and give customers instant answers 24/7.",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI", "PyTorch"],
  },
  {
    id: "seo-optimization",
    icon: "search",
    title: "SEO & Performance",
    tagline: "Get found, load fast, rank higher",
    description:
      "Search-engine visibility is engineered, not sprinkled on top. I build SEO-friendly architectures from day one and audit existing sites for technical issues, Core Web Vitals problems, and on-page gaps.",
    offerings: [
      "Technical SEO audits & fixes",
      "On-page SEO & structured data",
      "Core Web Vitals optimization",
      "SEO-friendly site architecture",
      "Performance profiling & tuning",
    ],
    businessValue:
      "Higher rankings and faster pages mean more organic traffic and better conversion rates — compounding returns without ad spend.",
    technologies: ["Next.js", "Lighthouse", "Schema.org", "Analytics", "Ahrefs"],
  },
];

/* ── Projects (SAMPLE PLACEHOLDERS — replace with your real work) ────────── */

export const projects: Project[] = [
  {
    id: "analytics-dashboard",
    title: "InsightBoard — Analytics SaaS",
    tagline: "Multi-tenant analytics platform with real-time dashboards",
    problem:
      "Small e-commerce teams were juggling five disconnected tools to understand their store performance.",
    description:
      "A full-stack SaaS dashboard that unifies sales, traffic and inventory data into real-time visual reports, with role-based access, scheduled email digests and CSV exports.",
    image: "/images/project-analytics.png",
    imageAlt:
      "Screenshot of a dark-themed analytics dashboard with charts and KPI cards",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    features: [
      "Real-time KPI dashboards",
      "Multi-tenant auth & roles",
      "Scheduled email reports",
    ],
    links: {
      demo: "#", // PLACEHOLDER: live demo URL
      github: "#", // PLACEHOLDER: repository URL
    },
  },
  {
    id: "doc-ai-assistant",
    title: "DocuMind — AI Document Q&A",
    tagline: "RAG assistant that answers questions from your own files",
    problem:
      "Support teams spent hours digging through manuals, contracts and wikis to answer repetitive questions.",
    description:
      "A Retrieval-Augmented Generation system that ingests PDFs, DOCX and wikis, chunks and embeds the content, and serves grounded answers with source citations through a chat interface.",
    image: "/images/project-ai-chat.png",
    imageAlt:
      "Screenshot of an AI chat interface answering a question with cited document sources",
    technologies: ["Python", "FastAPI", "LangChain", "pgvector", "Next.js"],
    features: [
      "Multi-format document ingestion",
      "Grounded answers with citations",
      "Streaming chat responses",
    ],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: "ecommerce-storefront",
    title: "NovaCart — Headless E-commerce",
    tagline: "Fast, SEO-first storefront with a custom checkout flow",
    problem:
      "A retailer's legacy storefront scored poorly on Core Web Vitals and ranked below competitors for key queries.",
    description:
      "A headless commerce storefront rebuilt with Next.js App Router: server-rendered product pages, image optimization, edge caching, structured-data markup and a one-page checkout.",
    image: "/images/project-ecommerce.png",
    imageAlt:
      "Screenshot of a modern e-commerce storefront with product grid and cart",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Sanity", "Vercel"],
    features: [
      "One-page optimized checkout",
      "SEO with structured data",
      "Optimized images & edge caching",
    ],
    links: {
      demo: "#",
    },
  },
];

/* ── Skills ───────────────────────────────────────────────────────────────── */

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    icon: "layers",
    title: "Frontend Development",
    description: "Interfaces that are fast, accessible and pixel-accurate",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Zustand",
      "React Hook Form",
    ],
  },
  {
    id: "backend",
    icon: "terminal",
    title: "Backend Development",
    description: "Reliable APIs and services that hold up in production",
    skills: [
      "Node.js",
      "Next.js API Routes",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Authentication (NextAuth/JWT)",
      "Serverless & Edge",
    ],
  },
  {
    id: "languages",
    icon: "code",
    title: "Programming Languages",
    description: "Polyglot where it matters, pragmatic everywhere",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Bash"],
  },
  {
    id: "ai-ml",
    icon: "brain",
    title: "AI & Machine Learning",
    description: "Applied AI — from prototype to production",
    skills: [
      "LangChain",
      "RAG Architectures",
      "Vector Databases",
      "OpenAI & LLM APIs",
      "PyTorch",
      "scikit-learn",
      "Prompt Engineering",
    ],
  },
  {
    id: "databases",
    icon: "database",
    title: "Database Technologies",
    description: "The right store for the data shape and scale",
    skills: ["PostgreSQL", "SQLite", "Prisma ORM", "Redis", "pgvector", "MongoDB"],
  },
  {
    id: "seo",
    icon: "trendingUp",
    title: "SEO & Optimization",
    description: "Search visibility built into the architecture",
    skills: [
      "Technical SEO",
      "On-Page SEO",
      "Core Web Vitals",
      "Structured Data",
      "Sitemaps & Robots",
      "Lighthouse",
    ],
  },
  {
    id: "tools",
    icon: "settings",
    title: "Development Tools",
    description: "A workflow tuned for shipping and collaborating",
    skills: [
      "Git & GitHub",
      "Docker",
      "Vercel",
      "CI/CD (GitHub Actions)",
      "Figma",
      "Playwright",
      "Vitest",
    ],
  },
];

/* ── Why work with me ─────────────────────────────────────────────────────── */

export const valueProps: ValueProp[] = [
  {
    id: "clean-code",
    icon: "fileText",
    title: "Clean, maintainable code",
    description:
      "Readable structure, sensible abstractions and typed interfaces — code your next developer will thank you for.",
  },
  {
    id: "responsive-ui",
    icon: "smartphone",
    title: "Responsive & user-friendly interfaces",
    description:
      "Mobile-first layouts, accessible components and interaction details that make products feel effortless.",
  },
  {
    id: "performance",
    icon: "zap",
    title: "Performance-focused development",
    description:
      "Fast by default: optimized assets, smart caching and Core Web Vitals treated as features, not afterthoughts.",
  },
  {
    id: "communication",
    icon: "messageSquare",
    title: "Clear, proactive communication",
    description:
      "Regular updates, honest estimates and no surprises — you always know what is being built and why.",
  },
  {
    id: "problem-solving",
    icon: "lightbulb",
    title: "Problem-solving mindset",
    description:
      "I start from your business goal and work backwards to the simplest technical solution that achieves it.",
  },
  {
    id: "scalable",
    icon: "rocket",
    title: "Scalable solutions",
    description:
      "Architectures designed for your next stage of growth — not just the launch screenshot.",
  },
  {
    id: "quality",
    icon: "shieldCheck",
    title: "Commitment to quality",
    description:
      "Testing, code review discipline and documentation are part of every delivery, not an upsell.",
  },
];

/* ── Development process ──────────────────────────────────────────────────── */

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: "Discovery & Requirements",
    description:
      "We define the problem, users and success metrics — so we build the right thing before building the thing right.",
    deliverables: ["Kickoff call", "Requirements brief", "Scope & quote"],
    icon: "search",
  },
  {
    id: "planning",
    step: 2,
    title: "Planning & Architecture",
    description:
      "Tech stack, data model and system architecture are decided up front, with milestones you can track.",
    deliverables: ["Architecture plan", "Data model", "Project roadmap"],
    icon: "gitBranch",
  },
  {
    id: "design",
    step: 3,
    title: "UI/UX Design",
    description:
      "Wireframes evolve into high-fidelity, on-brand screens — validated on mobile before a line of app code.",
    deliverables: ["Wireframes", "UI design", "Interactive prototype"],
    icon: "penTool",
  },
  {
    id: "development",
    step: 4,
    title: "Development",
    description:
      "Short build cycles with preview deployments, so you see real progress in a staging link — not just reports.",
    deliverables: ["Staging previews", "Weekly demos", "Clean commits"],
    icon: "code",
  },
  {
    id: "testing",
    step: 5,
    title: "Testing & Optimization",
    description:
      "Functional testing, performance profiling and SEO checks across devices before anything ships.",
    deliverables: ["QA pass", "Performance audit", "SEO checklist"],
    icon: "flaskConical",
  },
  {
    id: "launch",
    step: 6,
    title: "Deployment & Support",
    description:
      "Production launch, monitoring setup and documentation — plus a support window so you're never on your own.",
    deliverables: ["Production deploy", "Docs & handover", "Support window"],
    icon: "rocket",
  },
];

/* ── Testimonials (SAMPLE PLACEHOLDERS — replace with real client feedback) ─ */

export const testimonials: Testimonial[] = [
  {
    id: "sample-1",
    quote:
      "We weren't ranking for any of our high-intent commercial keywords. Within four months of implementing your targeted SEO strategy, our organic traffic tripled, and we hit the first page for our top five target terms.",
    authorName: "Nazakat Ali",
    authorRole: "Product Manager",
    authorCompany: "ICB",
    initials: "NA",
    date: "2025-01-15",
  },
  {
    id: "sample-2",
    quote:
      "Our legacy e-commerce site was slow and bleeding conversions. You rebuilt our entire platform using Next.js, kept us updated daily via Slack, and delivered a seamless site that immediately boosted our sales by 35%.",
    authorName: "David Villey",
    authorRole: "Founder",
    authorCompany: "David Styles",
    initials: "DV",
    date: "2026-03-02",
  },
  {
    id: "sample-3",
    quote:
      "Our customer acquisition costs were unsustainable before we started working together. You completely overhauled our paid ad campaigns right after our Q2 launch, resulting in a 4x ROI and our most profitable quarter yet.",
    authorName: "Elena Rodriguez",
    authorRole: "VP of Growth",
    authorCompany: "Retail Vanguard",
    initials: "ER",
    date: "2025-05-20",
  },
];

/* ── Contact form options ─────────────────────────────────────────────────── */

export const projectTypeOptions = [
  "Web application development",
  "Website / landing page",
  "AI / LLM integration (RAG, chatbot)",
  "Computer vision / ML project",
  "SEO & performance optimization",
  "Something else",
] as const;

export const budgetOptions = [
  "< $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
] as const;
