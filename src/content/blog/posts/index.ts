// src/content/blog/posts/index.ts
import type { BlogCategory, BlogPost } from "@/components/blog/types"
import fiveMinuteCheckIns from "./five-minute-check-ins-that-work"
import belonging from "./belonging-when-classroom-doesnt-look-the-same"
import lessonPlanIsntEnough from "./when-a-lesson-plan-isnt-enough"
import resetActivities from "./new-this-term-reset-activities"
import transitionTime from "./three-ways-to-use-transition-time"
import teachingEmpathy from "./teaching-empathy-across-difference"

export const posts: BlogPost[] = [
  fiveMinuteCheckIns,
  belonging,
  lessonPlanIsntEnough,
  resetActivities,
  transitionTime,
  teachingEmpathy,
].sort((a, b) => b.meta.date.localeCompare(a.meta.date))

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.meta.slug === slug)
}

export function getPostsByCategory(
  category: BlogCategory | "All"
): BlogPost[] {
  if (category === "All") return posts
  return posts.filter((post) => post.meta.categories.includes(category))
}
