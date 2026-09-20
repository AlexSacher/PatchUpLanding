import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { formatDate } from "@/lib/format-date"
import type { BlogPostMeta } from "@/components/blog/types"

export default function BlogPostCard({
  meta,
  variant = "row",
}: {
  meta: BlogPostMeta
  variant?: "row" | "grid"
}) {
  const isGrid = variant === "grid"

  const image = (
    <Link
      to={`/blog/${meta.slug}`}
      aria-hidden="true"
      tabIndex={-1}
      className={cn(
        "block shrink-0 overflow-hidden bg-muted",
        isGrid ? "aspect-[16/9] w-full" : "aspect-[4/3] w-full rounded-2xl sm:w-64"
      )}
    >
      <img
        src={meta.image}
        alt={meta.imageAlt}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </Link>
  )

  const text = (
    <div className={cn(isGrid ? "flex flex-1 flex-col gap-3 p-6" : "flex-1")}>
      <div className="flex flex-wrap gap-2">
        {meta.categories.map((category) => (
          <Badge key={category} variant="tint">
            {category}
          </Badge>
        ))}
      </div>
      <h3
        className={cn(
          "mt-3 font-heading font-semibold text-foreground transition-colors duration-300 group-hover:text-primary",
          isGrid ? "text-lg" : "text-xl sm:text-2xl"
        )}
      >
        <Link to={`/blog/${meta.slug}`}>{meta.title}</Link>
      </h3>
      {isGrid && (
        <p className="text-sm text-muted-foreground">{meta.excerpt}</p>
      )}
      <p className="mt-2 text-sm text-muted-foreground">
        {meta.author} · {meta.readTime} · Published {formatDate(meta.date)}
      </p>
    </div>
  )

  if (isGrid) {
    return (
      <Card className="group gap-0 overflow-hidden p-0">
        {image}
        {text}
      </Card>
    )
  }

  return (
    <article className="group flex flex-col-reverse items-start gap-6 border-b border-border py-8 sm:flex-row sm:items-center sm:justify-between">
      {text}
      {image}
    </article>
  )
}
