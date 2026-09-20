import { useState } from "react"
import { HeroHeader } from "@/components/hero-section/header"
import FooterSection from "@/components/footer"
import CallToActionTwo from "@/components/call-to-action-2"
import FeaturedPost from "@/components/blog/featured-post"
import BlogSidebarCard from "@/components/blog/blog-sidebar-card"
import BlogPostCard from "@/components/blog/blog-post-card"
import CategoryTabs from "@/components/blog/category-tabs"
import { Button } from "@/components/ui/button"
import { posts, getPostsByCategory } from "@/content/blog/posts"
import type { BlogCategory } from "@/components/blog/types"

const PAGE_SIZE = 4

export default function BlogIndexPage() {
  const [category, setCategory] = useState<BlogCategory | "All">("All")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  if (posts.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <title>Blog — PatchUp</title>
        <HeroHeader />
        <main className="flex-1 pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center text-muted-foreground">
            No posts yet — check back soon.
          </div>
        </main>
        <FooterSection />
      </div>
    )
  }

  const [hero, ...rest] = posts
  const spotlightPosts = posts.filter((post) =>
    post.meta.categories.includes("Intercultural Communication")
  )

  const filteredFeed =
    category === "All"
      ? rest
      : getPostsByCategory(category).filter((p) => p.meta.slug !== hero.meta.slug)

  const visiblePosts = filteredFeed.slice(0, visibleCount)
  const hasMore = visibleCount < filteredFeed.length

  return (
    <div className="flex min-h-screen flex-col">
      <title>Blog — PatchUp</title>
      <meta
        name="description"
        content="SEL, intercultural communication, and classroom ideas from the PatchUp team."
      />
      <HeroHeader />
      <main className="flex-1 pt-24 lg:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            SEL, intercultural communication, and classroom ideas from the
            PatchUp team.
          </p> */}

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FeaturedPost meta={hero.meta} />
            </div>
            <div className="lg:col-span-1">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Building belonging
              </h2>
              <div className="mt-4">
                {spotlightPosts.map((post) => (
                  <BlogSidebarCard key={post.meta.slug} meta={post.meta} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CategoryTabs
                active={category}
                onChange={(next) => {
                  setCategory(next)
                  setVisibleCount(PAGE_SIZE)
                }}
              />
              <div className="mt-6">
                {visiblePosts.map((post) => (
                  <BlogPostCard key={post.meta.slug} meta={post.meta} />
                ))}
                {visiblePosts.length === 0 && (
                  <p className="py-8 text-muted-foreground">
                    No posts in this category yet.
                  </p>
                )}
              </div>
              {hasMore && (
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  >
                    Load More
                  </Button>
                </div>
              )}
            </div>
            <div className="lg:col-span-1" />
          </div>
        </div>

        <div className="mt-20">
          <CallToActionTwo />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
