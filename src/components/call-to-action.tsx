import { Link } from "react-router-dom"
import { motion } from "motion/react"
import HeroGeometric from "@/components/ui/hero-geometric"
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

export default function CallToAction() {
  return (
    <section className="px-4 pb-16 md:px-6 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 32, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={viewport}
          transition={{ type: "spring", bounce: 0.3, duration: 1.1 }}
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-sky-100 bg-sky-50 px-6 py-16 shadow-sm sm:px-10 md:py-20 lg:px-16"
        >
          <HeroGeometric
            className="absolute inset-0 -z-10 h-full min-h-0 w-full"
            color1="#00A2E8"
            color2="#F0F9FF"
            speed={0.45}
          />
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
            className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100">
              Ready in minutes
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-slate-950 md:text-5xl">
              Bring whole-class SEL into tomorrow's lesson
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-balance text-slate-700">
              Pick a lesson, activity, or check-in, share the class code, and
              give every student a simple way to build empathy, reset, and
              belong.
            </p>
            <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              {/* <Button
                render={<a href="https://patchup.ca" />}
                nativeButton={false}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <span>Get started free</span>
                <ArrowRight className="size-4" />
              </Button> */}
              <Button
                render={<Link to="/contact" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-white/70 bg-white/75 text-slate-900 hover:bg-white"
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
