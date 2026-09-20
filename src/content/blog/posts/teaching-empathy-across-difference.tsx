// src/content/blog/posts/teaching-empathy-across-difference.tsx
import type { BlogPost, BlogPostMeta } from "@/components/blog/types"

const meta: BlogPostMeta = {
  slug: "teaching-empathy-across-difference",
  title: "Teaching Empathy Across Difference, Not Just About It",
  excerpt:
    "Empathy units often stop at \"everyone is different, and that's okay.\" Real intercultural communication asks students to actually practice understanding someone unlike them.",
  categories: ["Intercultural Communication"],
  date: "2026-08-05",
  readTime: "5 min read",
  author: "The PatchUp Team",
  image:
    "https://images.unsplash.com/photo-1759143101324-d375443f1955?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "Three students of different backgrounds in school uniforms gathered around a classroom desk, one smiling.",
}

// This file intentionally pairs a component with post metadata in one
// default-exported object, so it does not qualify for React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
function Content() {
  return (
    <>
      <p>
        Ask most students what they learned in their empathy unit and
        you'll get some version of the same sentence: everyone is
        different, and that's okay. It's a fine thing to believe. It is
        not, by itself, a skill. Knowing that difference exists and
        knowing how to navigate a real disagreement with someone whose
        perspective genuinely isn't yours are two different competencies,
        and most curricula only ever build the first one.
      </p>
      <h2>Awareness isn't the finish line</h2>
      <p>
        Tolerance-only framing — "respect other cultures," "everyone is
        equal," "be kind to people who are different" — treats difference
        as a fact to be accepted rather than a situation to be handled.
        It's the intercultural equivalent of teaching a student that
        numbers exist without ever asking them to add two of them
        together. Students walk away able to recite the value without
        ever having practiced the skill it's supposed to produce, which
        is exactly why so many well-meaning empathy units leave barely a
        trace by the following semester.
      </p>
      <h2>Give students real disagreements to navigate</h2>
      <p>
        Skill-building requires friction. Instead of a lesson on what a
        holiday means to another culture, put students in a structured
        scenario where they have to reconcile two classmates who
        genuinely see the same situation differently — whose family has a
        different rule about interrupting, whose culture treats directness
        as respect where another treats it as rude — and ask them to find
        a way through it, not a right answer to memorize. That's the
        difference between learning a fact about a culture and practicing
        the muscle of actually understanding someone who isn't from it.
        It's harder to design, and it's the part that actually transfers.
      </p>
      <h2>Make it routine, not a unit</h2>
      <p>
        A skill practiced for two weeks in October and never touched
        again isn't a skill, it's a memory of one. Intercultural
        communication holds up the same way any other SEL competency
        does: in small, repeated doses folded into the normal rhythm of
        the year, not concentrated into a single unit and then shelved.
        PatchUp's check-ins and activities are built to make that
        repetition easy — a short intercultural scenario dropped into a
        regular week, alongside everything else, so the practice never
        actually stops.
      </p>
    </>
  )
}

const post: BlogPost = { meta, Content }
export default post
