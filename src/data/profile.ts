export const profile = {
  firstName: "B M AL-amin",
  lastName: "Badhon",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Full-Stack Software Engineer",
  headline: "Eat-Sleep-Code-Repeat.",
  positioning: "Building scalable software products and useful tools.",
  bio: "Canada-based software engineer with 5+ years of hands-on experience building scalable backend systems and enterprise-grade solutions with .NET, Java, and React. Delivered 10+ high-performance backend systems and 3 enterprise platforms for organizations ranging from startups to multinational corporations.",
  avatar: "/images/dp-1.jpeg",
  location: "Canada",
  timezone: "America/Toronto",
  email: "alamin.badhonn@gmail.com",
  calendarUrl: "https://cal.com/alamin-badhon",
  availability: {
    status: "open" as const,
    label: "Open to select opportunities",
    detail: "Available for senior engineering roles, founding collaborations, and product consulting.",
  },
  proofPoints: [
    { label: "5+ years experience", variant: "filled" as const },
    { label: "Startup founder", variant: "outline" as const },
    { label: "10+ production systems", variant: "filled" as const },
  ],
} as const;
