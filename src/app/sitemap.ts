import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getNotes } from "@/lib/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = site.nav.map((item) => ({
    url: `${site.baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
  }));

  const workRoutes = projects.map((project) => ({
    url: `${site.baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  const noteRoutes = getNotes().map((note) => ({
    url: `${site.baseUrl}/notes/${note.slug}`,
    lastModified: new Date(note.metadata.publishedAt),
  }));

  return [...staticRoutes, ...workRoutes, ...noteRoutes];
}
