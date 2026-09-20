import {
  BrainCircuit,
  ClipboardList,
  Database,
  Droplets,
  Globe,
  GraduationCap,
  Radio,
  Sprout,
  Sun,
  Beef,
  FlaskConical,
  Users,
  type LucideIcon,
} from "lucide-react";

export type AgriArea = { title: string; text: string; icon: LucideIcon };

export const agriAreas: AgriArea[] = [
  { title: "Smart Farming", text: "Exploring practical ways technology can support everyday farm decisions.", icon: Sprout },
  { title: "Farm Management", text: "Simple digital records for plots, inputs, work and production.", icon: ClipboardList },
  { title: "Livestock Management", text: "Digital tools for herd records, health notes and productivity tracking.", icon: Beef },
  { title: "AI in Agriculture", text: "Studying where AI can genuinely help, and where it cannot.", icon: BrainCircuit },
  { title: "IoT & Sensors", text: "Learning which connected devices are affordable and useful in real farm conditions.", icon: Radio },
  { title: "Irrigation Technology", text: "Researching water-efficient approaches suited to local conditions.", icon: Droplets },
  { title: "Greenhouse Technology", text: "Understanding protected cultivation and what it takes to run it well.", icon: Sun },
  { title: "Digital Education", text: "Practical learning for farmers, officers and agribusiness professionals.", icon: GraduationCap },
  { title: "Agricultural Data", text: "Turning records and observations into information people can act on.", icon: Database },
  { title: "Global AgriTech Innovation", text: "Studying how the world farms, then adapting only what suits Tanzania.", icon: Globe },
  { title: "Farmer Support", text: "Ways to share useful knowledge with smallholder farmers, with qualified experts close by.", icon: Users },
  { title: "Agricultural Research", text: "Understanding real farm and livestock problems before building anything.", icon: FlaskConical },
];

export type StageItem = { title: string; text: string; href?: string };

/** CURRENT, PROPOSED and FUTURE are kept apart on purpose. Keep them honest. */
export const agriStages: { key: "current" | "proposed" | "future"; label: string; intro: string; items: StageItem[] }[] = [
  {
    key: "current",
    label: "Current",
    intro: "What is actually happening now.",
    items: [
      {
        title: "Research and planning",
        text: "We are studying farm and livestock problems, and the technologies that might help. No Ntinginya Tech agriculture product is live, and we are not claiming any field deployments.",
      },
    ],
  },
  {
    key: "proposed",
    label: "Proposed",
    intro: "Ideas we intend to design. Not built yet.",
    items: [
      { title: "Ntinginya Agriculture Platform", text: "Records, information and support for farmers and livestock keepers.", href: "/products/agriculture-platform" },
      { title: "Ntinginya Farmer Agent Network", text: "Trained agents sharing knowledge with smallholder farmers, alongside qualified experts.", href: "/products/farmer-agent-network" },
      { title: "Ntinginya AgriTech Innovation Hub", text: "Research on agricultural technology from around the world.", href: "/products/agritech-innovation-hub" },
      { title: "Agriculture & Livestock Masterclass", text: "Practical education for agricultural professionals and farmers.", href: "/products/agriculture-livestock-masterclass" },
    ],
  },
  {
    key: "future",
    label: "Future",
    intro: "Longer-term work that depends on research first.",
    items: [
      { title: "Pilots and field testing", text: "Small-scale trials in Tanzanian conditions before any wider rollout." },
      { title: "Technology adaptation", text: "Changing promising ideas to fit local crops, livestock, costs and skills." },
      { title: "Research partnerships", text: "Working with researchers and institutions. None have been announced." },
    ],
  },
];

export const agriJourney = [
  { label: "Global innovation", note: "Find promising ideas worldwide." },
  { label: "Research", note: "Study how and why they work." },
  { label: "Tanzania context", note: "Check fit with local conditions." },
  { label: "Pilot", note: "Test small before going big." },
  { label: "Adaptation", note: "Change what needs changing." },
  { label: "Farmer", note: "Put something useful in real hands." },
];
