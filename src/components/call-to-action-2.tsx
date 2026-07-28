import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"

const inViewTransition = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
}
const viewport = { once: true, margin: "-80px" as const }

export default function CallToActionTwo() {
  return (
    <section className="px-4 pb-12 md:px-6 md:pb-12 mt-6 lg:mt-24">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 32, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={viewport}
          transition={{ type: "spring", bounce: 0.3, duration: 1.1 }}
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-white px-6 pt-7 pb-[10.5rem]  shadow-sm sm:px-10 md:pt-24 md:pb-[28rem] lg:px-16"
        >
          {/* Classroom scene, full-bleed behind the card content */}
          <img
            src="/hero-classroom-scene-clean.webp"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -z-20 h-full w-[110%] max-w-none -translate-x-[55%] md:-translate-x-[53%]  object-cover object-center"
          />
          {/* White gradient wash so the scene fades softly into the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/40 to-white/25 md:via-white/25 md:to-transparent"
          />
          {/* Below md the copy sits inside the whiteboard painted into the
              background scene, which is narrower than the card itself, so the
              block is clamped short of the card's width until the art grows. */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.25 },
                },
              },
              ...inViewTransition,
            }}
            viewport={viewport}
            className="relative z-10 mx-auto flex max-w-[46vw] flex-col items-center text-center sm:max-w-sm md:max-w-md"
          >
            {/* <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
              Ready in minutes
            </span> */}
            <h2 className="mt-4 text-[5vw] sm:text-2xl font-semibold tracking-tight text-balance text-slate-950 md:text-4xl">
              Bring PatchUp into tomorrow's lesson
            </h2>
            <p className="hidden md:block mt-4 max-w-sm text-base leading-7 font-normal text-balance text-black md:font-normal md:text-slate-700 ">
              Pick a lesson, activity, or check-in, share the class code, and get everyone participating in seconds.
            </p>
            <div className="mt-3 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button
                render={<Link to="/contact" />}
                nativeButton={false}
                size="lg"
                className="bg-primary h-8 rounded-lg px-3 text-sm text-primary-foreground hover:bg-primary/90 md:h-10 md:px-4 md:text-sm"
              >
                <span>Book a demo</span>
              </Button>
            </div>
          </AnimatedGroup>
        </motion.div>
      </div>
    </section>
  )
}
