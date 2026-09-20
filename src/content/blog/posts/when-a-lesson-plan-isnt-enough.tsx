// src/content/blog/posts/when-a-lesson-plan-isnt-enough.tsx
import type { BlogPost, BlogPostMeta } from "@/components/blog/types"

const meta: BlogPostMeta = {
  slug: "when-a-lesson-plan-isnt-enough",
  title: "What to Do When a Lesson Plan Isn't Enough",
  excerpt:
    "Some days the curriculum has to wait. A short framework for the moments when what your class needs isn't in today's plan.",
  categories: ["SEL"],
  date: "2026-07-01",
  readTime: "4 min read",
  author: "The PatchUp Team",
  image:
    "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "A teacher leaning in closely to help a young student read through a workbook at her desk.",
}

// This file intentionally pairs a component with post metadata in one
// default-exported object, so it does not qualify for React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
function Content() {
  return (
    <>
      <p>
        There's a version of this morning that every teacher has lived:
        two kids came to blows at recess, a third is still shaking from a
        rough car ride to school, and your lesson plan says today is the
        day you introduce fractions. The plan was written for a class
        that, on paper, walks in ready to learn. The class you actually
        have walked in carrying something else. Neither the plan nor the
        kids are wrong — but pretending the plan wins by default usually
        means you spend the whole period fighting a room that was never
        going to be there for you.
      </p>
      <h2>Notice before you teach</h2>
      <p>
        The fastest fix is also the easiest to skip: look at the room
        before you start talking. Are kids avoiding eye contact, still
        worked up from the hallway, unusually quiet? Thirty seconds of
        actually reading the room — not just taking attendance — tells you
        whether today is a normal teaching day or a day that needs
        something else first. Teachers who skip this step aren't lazy,
        they're just moving fast; the fix isn't more effort, it's building
        the pause in on purpose.
      </p>
      <h2>Borrow five minutes, don't lose the day</h2>
      <p>
        You don't have to choose between the fraction lesson and the fight
        at recess. A short, targeted activity — a two-minute breathing
        reset, a quick round of naming one thing that's bugging you — can
        clear enough of the noise that the room is actually available for
        the lesson that follows. Think of it as borrowing five minutes
        against the period, not abandoning it. Most days, that trade pays
        for itself twice over in how much smoother the other forty minutes
        go.
      </p>
      <h2>Build the flexibility in ahead of time</h2>
      <p>
        The hard part isn't deciding you need a reset — it's not having
        one ready when you do, which is how five minutes turns into
        fifteen minutes of scrambling for an idea. Keep a small,
        standing library of short activities you can run without prep:
        PatchUp's activity set is built for exactly this, a menu you can
        open and run with a join code in under a minute, no lesson plan of
        its own required. Having options ready ahead of time is what
        turns "the plan didn't work today" from a crisis into a normal
        Tuesday.
      </p>
    </>
  )
}

const post: BlogPost = { meta, Content }
export default post
