export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  image?: string;
};