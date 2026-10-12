import type { Metadata } from "next";
import { site } from "@/data/site";
import { profile } from "@/data/profile";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.baseUrl}${normalized === "/" ? "" : normalized}`;
}

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image,
  type = "website",
}: BuildMetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} · ${site.shortName}` : `${profile.name} · ${profile.role}`;
  const ogImage = image ?? absoluteUrl(`/og?title=${encodeURIComponent(title ?? profile.name)}`);
  const url = absoluteUrl(path);

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(site.baseUrl),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}
