import BlogPostCard from "@/components/blog/blog-post-card"
import type { BlogPost } from "@/components/blog/types"

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 border-t border-border pt-16">
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        More from the blog
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogPostCard key={post.meta.slug} meta={post.meta} variant="grid" />
        ))}
      </div>
    </section>
  )
}
