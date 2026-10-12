export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "email" | "x";
};

export const social: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Al-aminBadhon",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alamin-badhon/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alamin.badhonn/",
    icon: "instagram",
  },
  {
    name: "Email",
    href: "mailto:alamin.badhonn@gmail.com",
    icon: "email",
  },
];
