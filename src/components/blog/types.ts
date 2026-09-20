import type { JSX } from "react"

export type BlogCategory =
  | "SEL"
  | "Intercultural Communication"
  | "Product"
  | "Classroom Tips"

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  categories: BlogCategory[]
  /** ISO date, e.g. "2026-08-05" */
  date: string
  readTime: string
  author: string
  /** Direct images.unsplash.com URL, verified to load (see Task 2). */
  image: string
  imageAlt: string
}

export interface BlogPost {
  meta: BlogPostMeta
  Content: () => JSX.Element
}
