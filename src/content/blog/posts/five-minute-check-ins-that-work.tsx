// src/content/blog/posts/five-minute-check-ins-that-work.tsx
import type { BlogPost, BlogPostMeta } from "@/components/blog/types"

const meta: BlogPostMeta = {
  slug: "five-minute-check-ins-that-work",
  title: "5-Minute Check-Ins That Actually Work",
  excerpt:
    "You don't need a spare period to find out how your class is doing. Three check-in formats that fit into the first five minutes, no prep required.",
  categories: ["SEL", "Classroom Tips"],
  date: "2026-06-02",
  readTime: "4 min read",
  author: "The PatchUp Team",
  image:
    "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "Elementary school students sitting on a classroom carpet raising their hands during a lesson.",
}

// This file intentionally pairs a component with post metadata in one
// default-exported object, so it does not qualify for React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
function Content() {
  return (
    <>
      <p>
        Every teacher knows the feeling: the bell rings, twenty-six kids
        walk in carrying twenty-six different mornings, and you have about
        four minutes before the lesson has to start. A check-in only earns
        its place in that window if it's fast, honest, and doesn't need a
        worksheet.
      </p>
      <h2>Start with a scale, not a sentence</h2>
      <p>
        Asking "how is everyone feeling?" out loud gets you silence or
        performance. Asking students to hold up 1–5 fingers, or drop a
        number into a quick PatchUp check-in, gets you data you can act on
        in the same breath — a room full of 4s and 5s means you start
        teaching, a cluster of 2s means you spend two minutes on a
        grounding activity first.
      </p>
      <h2>Rotate the question, not the format</h2>
      <p>
        Keep the mechanism identical every day (same scale, same code,
        same thirty seconds) and change only the prompt: energy level on
        Monday, one word for how the weekend went on Tuesday, a color that
        matches their mood on Wednesday. Consistency in the format is what
        makes it fast; variety in the question is what keeps it honest.
      </p>
      <h2>Use it to decide, not just to know</h2>
      <p>
        A check-in that never changes what happens next is just a survey.
        Let the read on the room decide whether you open with a lesson, a
        reset activity, or two minutes of just talking. That's the
        difference between collecting a temperature and actually using it.
      </p>
    </>
  )
}

const post: BlogPost = { meta, Content }
export default post
