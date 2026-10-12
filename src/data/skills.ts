export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript", icon: "TypeScript.svg" },
      { name: "JavaScript", icon: "JavaScript.svg" },
      { name: "React", icon: "React.svg" },
      { name: "Next.js", icon: "Next.js.svg" },
      { name: "HTML5", icon: "HTML5.svg" },
      { name: "CSS3", icon: "CSS3.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "C# / .NET", icon: "dotnet.svg" },
      { name: "Java", icon: "Java.svg" },
      { name: "Node.js", icon: "Node.js.svg" },
      { name: "Express", icon: "Express.svg" },
      { name: "Nest.js", icon: "Nest.js.svg" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: "AWS.svg" },
      { name: "Azure", icon: "Azure.png" },
      { name: "Docker", icon: "Docker.svg" },
      { name: "Kubernetes", icon: "Kubernetes.svg" },
      { name: "Terraform", icon: "HashiCorp-Terraform.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "PostgresSQL.svg" },
      { name: "MongoDB", icon: "MongoDB.svg" },
      { name: "MySQL", icon: "MySQL.svg" },
      { name: "Redis", icon: "Redis.svg" },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "Clean Architecture" },
      { name: "Domain-Driven Design" },
      { name: "Microservices" },
      { name: "CI/CD" },
      { name: "REST & event-driven APIs" },
    ],
  },
  {
    category: "AI",
    skills: [
      { name: "Python", icon: "Python.svg" },
      { name: "PyTorch", icon: "PyTorch.svg" },
      { name: "LLM integrations" },
      { name: "Prompt & evaluation workflows" },
    ],
  },
  {
    category: "Leadership",
    skills: [
      { name: "Mentoring" },
      { name: "Technical planning" },
      { name: "Cross-functional delivery" },
      { name: "Founding engineering" },
    ],
  },
];
