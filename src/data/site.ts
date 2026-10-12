export const site = {
  name: "B M AL-amin Badhon",
  shortName: "Badhon",
  baseUrl: "https://alaminbadhon.dev",
  description:
    "Portfolio of B M AL-amin Badhon — Senior Full-Stack Software Engineer and tech-startup founder building scalable products and useful tools.",
  locale: "en_CA",
  nav: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/notes", label: "Notes" },
    { href: "/contact", label: "Contact" },
  ] as const,
} as const;

export type NavItem = (typeof site.nav)[number];
