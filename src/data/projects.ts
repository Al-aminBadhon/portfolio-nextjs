export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: "product" | "platform" | "tooling" | "open-source";
  featured?: boolean;
  year: string;
  cover: string;
  problem: string;
  contribution: string;
  stack: string[];
  outcome: string;
  screenshots: ProjectScreenshot[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "enterprise-commerce-platform",
    title: "Enterprise Commerce Platform",
    summary:
      "Modular storefront and admin platform for multi-office digital commerce with cleaner release cycles.",
    category: "platform",
    featured: true,
    year: "2023",
    cover: "/images/portfolio/portfolio-1.png",
    problem:
      "International teams were coordinating catalog, order, and admin workflows across brittle manual processes and fragmented modules.",
    contribution:
      "Designed and shipped three enterprise modules with .NET Core MVC, Clean Architecture, and automated Azure deployments, mentoring juniors on domain patterns along the way.",
    stack: [".NET Core", "nopCommerce", "Azure", "Docker", "CI/CD"],
    outcome:
      "Reduced manual processes by ~40% across offices and enabled zero-downtime blue-green releases.",
    screenshots: [
      {
        src: "/images/portfolio/portfolio-1.png",
        alt: "Commerce platform overview",
      },
      {
        src: "/images/projects/project-01/cover-01.jpg",
        alt: "Admin workflow screen",
      },
    ],
    links: [
      { label: "Case notes", href: "/notes/shipping-enterprise-modules-safely" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export const projectCategories = [
  "all",
  "product",
  "platform",
  "tooling",
  "open-source",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
