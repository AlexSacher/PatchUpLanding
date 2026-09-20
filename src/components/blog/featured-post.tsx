import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/format-date"
import type { BlogPostMeta } from "@/components/blog/types"

export default function FeaturedPost({ meta }: { meta: BlogPostMeta }) {
  return (
    <Link
      to={`/blog/${meta.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-4xl bg-muted sm:aspect-[16/10]"
    >
      <img
        src={meta.image}
        alt={meta.imageAlt}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-10">
        <div className="flex flex-wrap gap-2">
          {meta.categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-4xl">
          {meta.title}
        </h2>
        <p className="text-sm text-white/80">
          {meta.author} · {meta.readTime} · Published {formatDate(meta.date)}
        </p>
      </div>
    </Link>
  )
}
