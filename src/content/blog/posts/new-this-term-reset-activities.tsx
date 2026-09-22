// src/content/blog/posts/new-this-term-reset-activities.tsx
import type { BlogPost, BlogPostMeta } from "@/components/blog/types"

const meta: BlogPostMeta = {
  slug: "new-this-term-reset-activities",
  title: "New This Term: Standalone Reset Activities",
  excerpt:
    "A new set of drop-in breathing, grounding, and gratitude activities you can run in any spare moment — no lesson plan required.",
  categories: ["Product"],
  date: "2026-07-22",
  readTime: "3 min read",
  author: "The PatchUp Team",
  image:
    "https://images.unsplash.com/photo-1786293424511-0ab6db8f7ac6?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "A young boy standing calmly with his hands resting on his chest during a classroom activity.",
}

// This file intentionally pairs a component with post metadata in one
// default-exported object, so it does not qualify for React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
function Content() {
  return (
    <>
      <p>
        Starting this term, PatchUp has a new set of standalone reset
        activities: breathing exercises, grounding routines, and short
        gratitude prompts you can run in any class, at any moment, without
        connecting them to a lesson or a unit at all. They're built for
        the two-minute gap between "the room needs something" and "the
        room got it."
      </p>
      <h2>Built for the moments you can't plan for</h2>
      <p>
        You can't schedule a fire drill announcement, a substitute
        transition, or the ten minutes after a hard assembly — and those
        are exactly the moments where a reset activity earns its keep.
        These new activities don't assume anything about what came before
        or what's coming next. Open one, run it, move on. That's the
        whole design brief.
      </p>
      <h2>How to try them</h2>
      <p>
        Open PatchUp, pick "Activities" from the dashboard, and choose
        any of the new breathing, grounding, or gratitude sessions —
        they're tagged separately from the curriculum-linked ones so
        they're easy to find in a hurry. Share the join code with your
        class the same way you would for anything else in PatchUp; no
        student accounts, no sign-in, no setup beyond the code on the
        board. Most run in under three minutes, which is usually exactly
        how much time you have.
      </p>
    </>
  )
}

const post: BlogPost = { meta, Content }
export default post
