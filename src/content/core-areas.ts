import {
  BrainCircuit,
  Code,
  FlaskConical,
  Globe,
  GraduationCap,
  Rocket,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { StatusKey } from "./types";

export type CoreArea = {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  href: string;
  chips?: string[];
  note?: string;
  status?: StatusKey;
};

export const coreAreas: CoreArea[] = [
  {
    id: "01",
    title: "Technology & Software Solutions",
    summary: "Build software and digital platforms that solve business and organizational problems.",
    icon: Code,
    href: "/solutions",
    chips: [
      "Business management systems",
      "Custom software",
      "Web applications",
      "Mobile applications",
      "Automation",
      "Data systems",
    ],
  },
  {
    id: "02",
    title: "Agriculture & Livestock Technology",
    summary:
      "Explore how digital technology can improve farm and livestock management, access to information and decision-making. A major strategic area, and still at the planning stage.",
    icon: Sprout,
    href: "/agriculture",
    status: "proposed",
  },
  {
    id: "03",
    title: "Global AgriTech Innovation",
    summary:
      "A future platform for discovering and studying agricultural and livestock technologies from around the world, and evaluating them for Tanzania.",
    icon: Globe,
    href: "/innovation",
    status: "future",
    note: "Technology that works elsewhere must still be evaluated in the Tanzanian context before adoption.",
  },
  {
    id: "04",
    title: "AI & Digital Innovation",
    summary:
      "Apply AI and digital systems to improve business processes, education, research, agriculture and other practical use cases, where they genuinely help.",
    icon: BrainCircuit,
    href: "/solutions#ai",
  },
  {
    id: "05",
    title: "Education & Professional Development",
    summary:
      "A proposed learning initiative, the Agriculture & Livestock Masterclass, for agricultural professionals, farmers and innovators.",
    icon: GraduationCap,
    href: "/masterclass",
    status: "proposed",
  },
  {
    id: "06",
    title: "Research & Development",
    summary:
      "We research problems before we build: identify, validate, design, pilot, measure and improve before anything is scaled.",
    icon: FlaskConical,
    href: "/research",
  },
  {
    id: "07",
    title: "Future Technology Products and Platforms",
    summary:
      "Ntinginya Tech is built to grow into more sectors over time. Every new product starts with a real problem and is labelled honestly until it exists.",
    icon: Rocket,
    href: "/products",
    status: "future",
  },
];
