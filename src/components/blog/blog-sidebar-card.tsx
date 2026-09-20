import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/format-date"
import type { BlogPostMeta } from "@/components/blog/types"

export default function BlogSidebarCard({ meta }: { meta: BlogPostMeta }) {
  return (
    <article className="border-b border-border py-5 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap gap-2">
        {meta.categories.map((category) => (
          <Badge key={category} variant="tint">
            {category}
          </Badge>
        ))}
      </div>
      <h4 className="mt-2 font-heading text-base font-semibold text-foreground transition-colors duration-300 hover:text-primary">
        <Link to={`/blog/${meta.slug}`}>{meta.title}</Link>
      </h4>
      <p className="mt-1 text-xs text-muted-foreground">
        {meta.author} · {meta.readTime} · {formatDate(meta.date)}
      </p>
    </article>
  )
}
