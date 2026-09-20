import { MindDump } from "@/components/site/sections/MindDump";
import { getPosts } from "@/app/utils/utils";

export default function BlogPage() {
  const posts = getPosts(["src", "app", "blog", "posts"])
    .map((post) => ({
      slug: post.slug,
      title: post.metadata.title,
      summary: post.metadata.summary,
      publishedAt: post.metadata.publishedAt,
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return <MindDump posts={posts} />;
}
