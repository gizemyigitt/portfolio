import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";
import BlogPostClient from "@/components/BlogPostClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return { title: post.title.tr, description: post.excerpt.tr };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  return <BlogPostClient post={post} related={related} />;
}
