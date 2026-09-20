/**
 * Site-level config for the Apple-minimal redesign (multi-page).
 */
export const siteConfig = {
  heroHeadline: "Engineering High-Performance Systems. Scaling Software Ventures.",
  nav: [
    { href: "/about", label: "About Me" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Mind Dump" },
    { href: "/gallery", label: "Gallery" },
  ] as const,
  metrics: [
    { label: "Role", value: "Full-Stack Engineer" },
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: ".NET · React · AWS" },
    { label: "Based", value: "Canada" },
  ],
};

export type NavItem = (typeof siteConfig.nav)[number];
