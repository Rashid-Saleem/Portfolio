/**
 * Shared TypeScript interfaces for the portfolio.
 * All content data in `src/lib/portfolio/` conforms to these shapes.
 */

export type IconName =
  | "code"
  | "globe"
  | "smartphone"
  | "layers"
  | "terminal"
  | "robot"
  | "brain"
  | "eye"
  | "database"
  | "fileText"
  | "messageSquare"
  | "search"
  | "gauge"
  | "trendingUp"
  | "shieldCheck"
  | "zap"
  | "users"
  | "gitBranch"
  | "cloud"
  | "settings"
  | "lightbulb"
  | "target"
  | "rocket"
  | "penTool"
  | "flaskConical"
  | "lifeBuoy"
  | "heart"
  | "award"
  | "coffee";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  /** Lucide icon name — see `src/lib/portfolio/icon-map.ts` */
  icon: IconName;
  title: string;
  tagline: string;
  description: string;
  /** Bullet list of concrete deliverables / sub-services */
  offerings: string[];
  /** The business outcome a client gets from this service */
  businessValue: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  /** Short one-liner shown under the title */
  tagline: string;
  /** The real-world problem this project solves */
  problem: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface SkillCategory {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  skills: string[];
}

export interface ValueProp {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  /** Small concrete deliverables the client receives in this phase */
  deliverables: string[];
  icon: IconName;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  initials: string;
  /** ISO date string */
  date: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  whatsapp: string;
  email: string;
  /** Optional — leave empty string to hide */
  x?: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  url: string;
  email: string;
  whatsappNumber: string;
  location: string;
  availableForWork: boolean;
  socials: SocialLinks;
  /** Max years shown as "X+" — use a real number you can defend */
  yearsExperienceLabel: string;
}
