import { useEffect, useState, type RefObject } from "react"
import { cn } from "@/lib/utils"

type TocItem = {
  id: string
  text: string
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default function TableOfContents({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement | null>
}) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const headings = Array.from(container.querySelectorAll("h2"))
    const seen = new Set<string>()
    const nextItems = headings.map((heading) => {
      const base = slugify(heading.textContent ?? "")
      let id = base
      let i = 1
      while (seen.has(id)) {
        id = `${base}-${i++}`
      }
      seen.add(id)
      heading.id = id
      return { id, text: heading.textContent ?? "" }
    })
    setItems(nextItems)

    const offset = 128
    let ticking = false
    const updateActive = () => {
      ticking = false
      let current = nextItems[0]?.id ?? ""
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top - offset <= 0) {
          current = heading.id
        }
      }
      setActiveId(current)
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [containerRef])

  if (items.length === 0) return null

  const activeIndex = items.findIndex((item) => item.id === activeId)

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <p className="text-base font-semibold text-foreground">Content</p>
      <ul className="mt-4 space-y-4">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-base leading-snug transition-all duration-300",
                activeIndex >= 0 && index <= activeIndex
                  ? "translate-x-2 font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
