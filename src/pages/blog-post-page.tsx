import { useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { HeroHeader } from "@/components/hero-section/header"
import FooterSection from "@/components/footer"
import CallToActionTwo from "@/components/call-to-action-2"
import RelatedPosts from "@/components/blog/related-posts"
import TableOfContents from "@/components/blog/table-of-contents"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug, posts } from "@/content/blog/posts"
import { formatDate } from "@/lib/format-date"

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined
  const contentRef = useRef<HTMLDivElement>(null)

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <HeroHeader />
        <main className="flex-1 pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance text-foreground">
              Post not found
            </h1>
            <p className="mt-3 text-muted-foreground">
              We couldn't find that post.
            </p>
            <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">
              Back to the blog
            </Link>
          </div>
        </main>
        <FooterSection />
      </div>
    )
  }

  const { meta, Content } = post
  const related = posts.filter((p) => p.meta.slug !== meta.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <meta name="description" content={meta.excerpt} />
      <HeroHeader />
      <main className="flex-1 pt-24 lg:pt-28">
        <article className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div ref={contentRef} className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {meta.categories.map((category) => (
                  <Badge key={category} variant="tint">
                    {category}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
                {meta.title}
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">
                {meta.author} · {meta.readTime} · Published {formatDate(meta.date)}
              </p>
              <div className="mt-8 aspect-[16/9] overflow-hidden rounded-4xl bg-muted">
                <img
                  src={meta.image}
                  alt={meta.imageAlt}
                  className="size-full object-cover"
                />
              </div>
              <div className="mt-10 max-w-none space-y-6 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-muted-foreground">
                <Content />
              </div>
            </div>
            <div className="hidden lg:col-span-1 lg:block">
              <TableOfContents containerRef={contentRef} />
            </div>
          </div>
          <RelatedPosts posts={related} />
        </article>
        <div className="mt-20">
          <CallToActionTwo />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
