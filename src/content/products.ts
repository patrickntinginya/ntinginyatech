import {
  Briefcase,
  Globe,
  GraduationCap,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { StatusKey } from "./types";

export type ProductGroup = "live" | "mvp" | "future";

export type Product = {
  slug: string;
  name: string;
  category: string;
  group: ProductGroup;
  badges: StatusKey[];
  icon: LucideIcon;
  summary: string;
  problem: string;
  users: string[];
  scope: string[];
  statusNote: string;
  interestSubject: string;
};

/**
 * Only products in group "live" may be described as available.
 * Nothing is live yet, so the LIVE group renders an honest empty state.
 * Allowed statuses: live, mvp, in-development, proposed, future (see content/types.ts).
 */
export const products: Product[] = [
  {
    slug: "business-manager",
    name: "Ntinginya Business Manager",
    category: "Business Software",
    group: "mvp",
    badges: ["mvp", "in-development"],
    icon: Briefcase,
    summary:
      "Helps small and medium businesses manage products, stock, sales, customers, expenses and reports digitally.",
    problem:
      "Many small businesses track stock, sales and expenses in notebooks, memory or scattered files, which makes it hard to see how the business is really doing.",
    users: ["Small and medium businesses", "Shop and store owners", "Growing entrepreneurs"],
    scope: ["Products", "Stock", "Sales", "Customers", "Expenses", "Reports"],
    statusNote:
      "This is an MVP in development. It is not yet publicly available, and its features may change as we test it with real businesses.",
    interestSubject: "Ntinginya Business Manager",
  },
  {
    slug: "agriculture-platform",
    name: "Ntinginya Agriculture Platform",
    category: "Agriculture & Livestock Technology",
    group: "future",
    badges: ["proposed", "future"],
    icon: Sprout,
    summary: "A future digital ecosystem for farmers and livestock keepers.",
    problem:
      "Farmers and livestock keepers often lack simple tools for keeping records and easy access to reliable information, expertise and technology resources.",
    users: ["Farmers", "Livestock keepers", "Agricultural and livestock officers", "Farmer agents"],
    scope: [
      "Farm records",
      "Livestock records",
      "Production tracking",
      "Education",
      "Expert support",
      "Farmer agents",
      "Agricultural information",
      "Technology resources",
    ],
    statusNote:
      "Proposed and future. This product has not launched, and the features listed are possibilities we want to explore, not commitments.",
    interestSubject: "Ntinginya Agriculture Platform",
  },
  {
    slug: "agritech-innovation-hub",
    name: "Ntinginya AgriTech Innovation Hub",
    category: "Global Agricultural Innovation",
    group: "future",
    badges: ["proposed", "future"],
    icon: Globe,
    summary:
      "Discover, research and document agricultural technologies and innovations from different countries, and evaluate their potential adaptation to Tanzania.",
    problem:
      "Useful agricultural innovation is spread across many countries and sources, and it is rarely studied with local conditions in mind.",
    users: [
      "Agricultural professionals",
      "Agribusiness professionals",
      "Researchers",
      "Technology innovators",
    ],
    scope: ["Country research profiles", "Technology documentation", "Suitability analysis for Tanzania", "Pilot and adaptation notes"],
    statusNote:
      "Proposed and future. This product has not launched. Technology that works elsewhere must still be evaluated in the Tanzanian context before adoption, and we will not claim any foreign technology works here until it has been tested here.",
    interestSubject: "Ntinginya AgriTech Innovation Hub",
  },
  {
    slug: "agriculture-livestock-masterclass",
    name: "Ntinginya Agriculture & Livestock Masterclass",
    category: "Education",
    group: "future",
    badges: ["proposed", "future"],
    icon: GraduationCap,
    summary:
      "Professional and practical education around modern agriculture, livestock management and agricultural technology.",
    problem:
      "Practical, up-to-date learning about modern agriculture and agricultural technology is not always easy to reach for the people who need it.",
    users: [
      "Agricultural officers",
      "Livestock officers",
      "Agricultural and livestock experts",
      "Commercial farmers",
      "Livestock keepers",
      "Agribusiness professionals",
      "Agricultural students",
      "Farmer agents",
    ],
    scope: ["Foundation level", "Professional level", "Innovation level", "Theory, technology, practical training and field demonstration"],
    statusNote:
      "Proposed and future. The curriculum has not been published and enrolment is not open. It is not currently operating.",
    interestSubject: "Ntinginya Masterclass",
  },
  {
    slug: "farmer-agent-network",
    name: "Ntinginya Farmer Agent Network",
    category: "Agricultural Extension / Digital Support",
    group: "future",
    badges: ["proposed", "future"],
    icon: Users,
    summary:
      "Connect trained farmer agents with smallholder farmers while providing access to digital tools and expert support.",
    problem:
      "Useful knowledge and tools often struggle to reach smallholder farmers in a form they can trust and apply.",
    users: ["Smallholder farmers", "Trained farmer agents", "Agricultural and livestock experts"],
    scope: [
      "Trained farmer agents",
      "Access to digital tools",
      "Expert support",
      "Knowledge transfer to smallholder farmers",
      "Escalation to qualified experts when a problem needs professional advice",
    ],
    statusNote:
      "Proposed and future. Farmer agents would support, and never replace, qualified agricultural and livestock professionals. Problems that need professional advice would be passed on to qualified experts.",
    interestSubject: "Ntinginya Farmer Agent Network",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
