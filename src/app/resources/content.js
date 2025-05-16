import { Logo } from "@/once-ui/components";

const person = {
  firstName: "B M AL-amin",
  lastName: "Badhon",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Software Engineer",
  avatar: "/images/dp-1.jpeg",
  email: "example@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Al-aminBadhon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alamin-badhon/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/alamin-badhon",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Badhon is a Canada-based Software developer with 5+ years of hands-on experience in full-stack development, he is specialized in building scalable backend systems and enterprise-grade solutions using .NET Core, Java, and React.js. Successfully delivered 10+ high-performance backend systems and 3 enterprise management platforms, serving organizations ranging from fast-growing startups to multinational corporations (6–5,000+ employees).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "RAnLab - Research Analytic Lab",
        timeframe: "Aug 24 - Apr 25",
        role: "Full-stack Engineer",
        location: "St. John's, NL",
        achievements: [
          <>
            Optimized UI speed by 25% using Tailwind and JS and cut data retrieval by 15% while developing
PHP/Laravel for a 100+ client portal, ensuring secure data handling and scalable architecture.

          </>,
          <>
            Helped migration from Google Cloud to AWS (EC2/S3) with zero downtime, using Docker/auto-scaling
(20% cost savings) and CI/CD for efficient deployments.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Marine Learning System",
        timeframe: "Dec 23 - Jan 24",
        role: "Software Developer",
        location: "Vancouver, BC",
        achievements: [
          <>
           Resolved 10+ critical bugs across 2 modules, improving system stability and user satisfaction by 20%
          </>,
          <>
            Partnered with cross-functional teams to integrate Windows Services for background task automation,
reducing manual intervention.

          </>,
        ],
        images: [],
      },
      {
        company: "Banglalink Digital",
        timeframe: " May 23 - Aug 23",
        role: ".NET Developer",
        achievements: [
          <>
            Built 3 enterprise modules using .NET Core MVC, nopCommerce, and Clean Architecture, reducing
manual processes by 40% across international offices. Mentored junior developers in advanced .NET
patterns while implementing robust domain-driven design principles
          </>,
          <>
            Engineered CI/CD pipelines for automated deployments to Azure App Services, optimizing release cycles.
Containerized applications using Docker and implemented blue-green deployment strategies to ensure
zero-downtime updates in production environments.

          </>,
        ],
        images: [],
      },
      {
        company: "Leads Corporation",
        timeframe: "Jul 22 - Apr 23",
        role: "Full-Stack Software Engineer",
        location: "Dhaka, Bangladesh",
        achievements: [
          <>
            Developed CashVault and Banking Instrument modules using ASP.NET Core Web API, handling 50,000+
monthly transactions for Southeast Asian banks.
          </>,
          <>
           Led 6 developers using Azure DevOps (Boards, Repos, Pipelines) to achieve 100% on-time delivery for 4
releases. Improved code quality by 30% via CI/CD automation (unit testing), implemented JWT/Oracle
for security/scalability, and streamlined Scrum workflows
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Memorial University of Newfoundland",
        description: <>MASc in Software Engineering</>,
      }      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
