// src/content/blog/posts/wild-west-of-support-programming.tsx
import type { BlogPost, BlogPostMeta } from "@/components/blog/types"

const meta: BlogPostMeta = {
  slug: "wild-west-of-support-programming",
  title: "Are We in the Wild West of Support Programming?",
  excerpt:
    "Schools are investing more than ever in behavioural and student-support programs. Measurement needs to keep up with that investment, not trail behind it.",
  categories: ["Product", "SEL"],
  date: "2026-09-21",
  readTime: "5 min read",
  author: "The PatchUp Team",
  image:
    "https://images.unsplash.com/photo-1723750600453-3606c844636b?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "Silhouette of a lone rider on horseback against a wide, open sunset sky.",
}

// This file intentionally pairs a component with post metadata in one
// default-exported object, so it does not qualify for React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
function Content() {
  return (
    <>
      <h2>We're not in Kansas anymore</h2>
      <p>
        It's no surprise that things have changed drastically inside the
        classroom in the last decade. Here in Saskatchewan, we call it
        increasing classroom complexity, an umbrella term for the multitude
        of factors that complicate an educator's ability to teach.
      </p>
      <p>
        One survey puts some sobering numbers behind this trend. In 2015,
        70% of teachers reported being generally satisfied with teaching as
        a career. By 2025, that had fallen to just 50%.[1] Perhaps the clearest
        indicator, though, is how teachers describe the classrooms
        themselves. 84.2% said classroom complexity had increased in just
        the previous two years, while 96% said complexity was increasing the
        demands placed on them and contributing to physical, mental or
        emotional fatigue.[1]
      </p>
      <h2>A promising response</h2>
      <p>
        There is a bright side, though. There is a promising amount of new
        resources, programs and roles being introduced to help address these
        growing issues. Here in Saskatchewan, the province launched a
        Specialized Support Classroom pilot in early 2024. It started with
        eight schools and $3.6 million in funding.[2] By the 2026–27 school
        year, that model had expanded to 108 sites across all 27
        Saskatchewan school divisions, backed by a total investment of more
        than $35 million.[3]
      </p>
      <p>
        This is an encouraging step in the right direction, though it
        creates a new problem: how do we know which programs are working and
        worth the investment? Every school and classroom is unique, has
        unique challenges and requires unique solutions. Clearly a
        one-size-fits-all approach is not appropriate, so what should be
        guiding the program design and implementation?
      </p>
      <h2>Measuring closer to the goal</h2>
      <p>
        As more resources and effort are directed toward new behavioural and
        student-support programs, measurement needs to become a much bigger
        part of the conversation. Traditionally, educators look at the data
        they already collect. Academic performance, attendance and incident
        data are often used to assess programs because they are already
        available. These can be useful, but shouldn't we be looking at
        measures closer to the actual goals of the program? Unfortunately,
        measuring aspects of behavioural, social, and emotional support is
        much harder. But harder to measure shouldn't mean unmeasured.
      </p>
      <h2>The Wild West of student support</h2>
      <p>
        I think of the current student support landscape a bit like the
        Wild West. There's a lot of opportunity, but we're still figuring
        out the right type of supports needed. Is it a new support role? A
        new support classroom? More 1:1s? Obviously the answer is specific
        to the school and students, but how do you know that intervention is
        having the effect you hoped for?
      </p>
      <p>
        This current period of experimentation could be incredibly valuable,
        if approached thoughtfully. Schools are trying new programs and
        committing significant resources to student support. We should be
        equally committed to learning from those efforts, not just
        implementing them. If we're going to invest in new ways of
        supporting students, we owe it to them to understand what actually
        works. That means applying the same rigour to program evaluation as
        we do to program implementation. Shooting from the hip might've
        worked for cowboys, but when it comes to student support, we should
        know where we're aiming.
      </p>
      <h2>References</h2>
      <p>
        [1] Saskatchewan Teachers' Federation. Teaching Profession Remains
        Challenging, STF Members Survey Reveals. March 17, 2026. The results
        are from the STF's 2025 longitudinal member survey of more than
        3,500 Saskatchewan teachers.
      </p>
      <p>
        [2] Government of Saskatchewan. Progress Continues on Specialized
        Support Classrooms. February 13, 2024. The province announced eight
        participating schools supported by a $3.6 million investment.
      </p>
      <p>
        [3] Government of Saskatchewan. Growing Knowledge and Abilities —
        Saskatchewan's Children and Youth Strategy. The 2026–27 budget
        provides for 108 Specialized Support Model sites across
        Saskatchewan and reports a total investment of $35.2 million.
      </p>
    </>
  )
}

const post: BlogPost = { meta, Content }
export default post
