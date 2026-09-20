// src/content/blog/posts/belonging-when-classroom-doesnt-look-the-same.tsx
import type { BlogPost, BlogPostMeta } from "@/components/blog/types"

const meta: BlogPostMeta = {
  slug: "belonging-when-classroom-doesnt-look-the-same",
  title: "Building Belonging When Your Classroom Doesn't Look the Same",
  excerpt:
    "Cultural difference in a classroom isn't a problem to manage — it's material to teach with. Three small moves that turn \"different\" into \"ours.\"",
  categories: ["Intercultural Communication"],
  date: "2026-06-18",
  readTime: "5 min read",
  author: "The PatchUp Team",
  image:
    "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "Children sitting together at classroom desks in a rural school, smiling and interacting with each other.",
}

// This file intentionally pairs a component with post metadata in one
// default-exported object, so it does not qualify for React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
function Content() {
  return (
    <>
      <p>
        Most schools treat a classroom with ten home languages, six
        religious calendars, and a dozen family structures as a logistics
        problem — something to accommodate quietly and move past as fast
        as possible. But that difference isn't overhead. It's the richest
        material a class will ever have for learning how to actually talk
        to people who aren't like them, which is a skill every student
        needs long after they leave your room.
      </p>
      <h2>Name the difference before a student has to</h2>
      <p>
        If the first time a classroom acknowledges that Amara doesn't
        celebrate the same holidays as everyone else is when a worksheet
        assumes she does, she's the one stuck explaining herself in real
        time, in front of everyone, usually mid-lesson. Naming differences
        proactively — mentioning up front that families celebrate winter
        in different ways, that some students fast in the spring, that
        "what does your dad do" isn't a safe assumption for every kid —
        takes that burden off the student and puts it where it belongs, on
        the adult who planned the lesson. Normalizing difference before
        it's forced into the open is the single highest-leverage move a
        teacher can make.
      </p>
      <h2>Give every culture in the room a turn, not a unit</h2>
      <p>
        The heritage-month approach — one assembly, one bulletin board, one
        week in March — quietly tells students that their culture is a
        guest in the curriculum, welcome for a scheduled visit and then
        expected to leave. Weaving cultural perspective through the whole
        year instead (a math word problem set at a quinceañera, a reading
        passage from a Hmong folktale in October instead of only during a
        designated unit) sends the opposite message: this isn't content
        we cover, it's part of how we always think.
      </p>
      <h2>Belonging is a skill you can teach, not just a feeling you hope for</h2>
      <p>
        Belonging isn't a mood that descends on a well-run classroom. It's
        built from specific, teachable moves — asking a genuine question
        instead of a polite one, sitting with a perspective you don't
        share instead of correcting it, noticing when someone's been left
        out of a conversation. That's exactly what PatchUp's intercultural
        communication activities are built to practice: short, structured
        exercises where students rehearse those moves the same way they'd
        rehearse a math skill, rather than being told once that
        differences are "okay" and hoping it sticks.
      </p>
    </>
  )
}

const post: BlogPost = { meta, Content }
export default post
