export type ExperienceItem = {
  company: string;
  role: string;
  timeframe: string;
  location?: string;
  type?: "employment" | "founder" | "placeholder";
  achievements: string[];
  /** Set true for entries you still need to fill in. */
  placeholder?: boolean;
};

export type EducationItem = {
  institution: string;
  degree: string;
  timeframe: string;
  detail?: string;
};

export const experience: ExperienceItem[] = [
  // TODO: Replace with your current role details.
  {
    company: "Current Role — TBD",
    role: "Senior Full-Stack Engineer",
    timeframe: "2025 — Present",
    location: "Canada",
    type: "placeholder",
    placeholder: true,
    achievements: [
      "Placeholder: describe your current responsibilities and impact.",
      "Placeholder: add 1–2 measurable outcomes once cleared for public use.",
    ],
  },
  {
    company: "RAnLab — Research Analytic Lab",
    role: "Full-stack Engineer",
    timeframe: "Aug 2024 — Apr 2025",
    location: "St. John's, NL",
    type: "employment",
    achievements: [
      "Optimized UI speed by 25% with Tailwind and JavaScript, and cut data retrieval by 15% while building PHP/Laravel features for a 100+ client portal.",
      "Supported a zero-downtime Google Cloud to AWS (EC2/S3) migration using Docker, auto-scaling (~20% cost savings), and CI/CD.",
    ],
  },
  {
    company: "Marine Learning System",
    role: "Software Developer",
    timeframe: "Dec 2023 — Jan 2024",
    location: "Vancouver, BC",
    type: "employment",
    achievements: [
      "Resolved 10+ critical bugs across 2 modules, improving system stability and user satisfaction by ~20%.",
      "Partnered with cross-functional teams to integrate Windows Services for background task automation, reducing manual intervention.",
    ],
  },
  {
    company: "Banglalink Digital",
    role: ".NET Developer",
    timeframe: "May 2023 — Aug 2023",
    type: "employment",
    achievements: [
      "Built 3 enterprise modules with .NET Core MVC, nopCommerce, and Clean Architecture, reducing manual processes by 40% across international offices.",
      "Engineered CI/CD pipelines for Azure App Services and containerized apps with Docker and blue-green deployments for zero-downtime releases.",
    ],
  },
  {
    company: "Leads Corporation",
    role: "Full-Stack Software Engineer",
    timeframe: "Jul 2022 — Apr 2023",
    location: "Dhaka, Bangladesh",
    type: "employment",
    achievements: [
      "Developed CashVault and Banking Instrument modules with ASP.NET Core Web API, handling 50,000+ monthly transactions for Southeast Asian banks.",
      "Led 6 developers with Azure DevOps to deliver 4 releases on time; improved code quality by ~30% via CI/CD and unit testing.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Memorial University of Newfoundland",
    degree: "MASc in Software Engineering",
    timeframe: "Sep 2023 — Apr 2025",
    detail: "CGPA 3.72 / 4.00",
  },
];
