import { Button } from "@/components/ui/button"
import type { BlogCategory } from "@/components/blog/types"

const categories: (BlogCategory | "All")[] = [
  "All",
  "SEL",
  "Intercultural Communication",
  "Product",
  "Classroom Tips",
]

export default function CategoryTabs({
  active,
  onChange,
}: {
  active: BlogCategory | "All"
  onChange: (category: BlogCategory | "All") => void
}) {
  return (
    <div role="tablist" className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === active
        return (
          <Button
            key={category}
            role="tab"
            aria-selected={isActive}
            variant={isActive ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => onChange(category)}
          >
            {category}
          </Button>
        )
      })}
    </div>
  )
}
