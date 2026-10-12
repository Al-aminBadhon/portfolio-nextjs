import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { social } from "@/data/social";
import { absoluteUrl } from "@/lib/seo";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: site.baseUrl,
    image: absoluteUrl(profile.avatar),
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    sameAs: social.filter((item) => item.icon !== "email").map((item) => item.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.baseUrl,
    description: site.description,
    author: { "@type": "Person", name: profile.name },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  summary: string;
  path: string;
  publishedAt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.summary,
    datePublished: input.publishedAt,
    author: {
      "@type": "Person",
      name: profile.name,
      url: site.baseUrl,
    },
    mainEntityOfPage: absoluteUrl(input.path),
    image: input.image ? absoluteUrl(input.image) : absoluteUrl(profile.avatar),
  };
}
