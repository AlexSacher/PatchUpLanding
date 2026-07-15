import type { ComponentType, ReactNode } from "react"
import { motion } from "motion/react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { cn } from "@/lib/utils"

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

const themes = {
  sky: {
    panel: "from-sky-50 to-sky-100/70",
    eyebrow: "text-sky-600",
    env: "/env-sky.png",
    envClass: "",
    button: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  peach: {
    panel: "from-orange-50 to-amber-100/70",
    eyebrow: "text-orange-600",
    env: "/env-peach.png",
    envClass: "",
    button: "bg-orange-500 text-white hover:bg-orange-600",
  },
  mint: {
    panel: "from-green-50 to-green-100/70",
    eyebrow: "text-green-700",
    env: "/env-mint.png",
    envClass: "opacity-80",
  button: "bg-green-700 text-white hover:bg-green-700",
  },
} as const

export default function FeaturesLibrary({
  id,
  direction = "default",
  theme = "sky",
  eyebrow = "Social-emotional learning",
  eyebrowIcon: EyebrowIcon = Sparkles,
  heading = (
    <>
      Skills for understanding
      <br />
      themselves and others
    </>
  ),
  body = "Lessons, activities, and check-ins that help students name what they feel, build empathy, and learn to manage big emotions, woven into your day, not added on top.",
  cta = "Get started free",
  video,
  videoClassName,
}: {
  id?: string
  direction?: "default" | "reverse"
  theme?: keyof typeof themes
  eyebrow?: string
  eyebrowIcon?: ComponentType<{ className?: string }>
  heading?: ReactNode
  body?: string
  cta?: string
  video?: string
  videoClassName?: string
}) {
  const reverse = direction === "reverse"
  const t = themes[theme]

  return (
    <section id={id} className="scroll-mt-24 py-10">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        {/* Tabs */}
        {/* <motion.div
                    initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={viewport}
                    transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                    className="flex justify-center">
                    <div
                        role="tablist"
                        className="bg-primary inline-flex flex-wrap items-center justify-center gap-1 rounded-full p-1.5 text-sm font-medium shadow-sm">
                        {tabs.map((tab, index) => {
                            const Icon = tab.icon
                            const isActive = index === active
                            return (
                                <button
                                    key={tab.name}
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setActive(index)}
                                    className={cn(
                                        'flex items-center gap-2 rounded-full px-4 py-2 transition-colors',
                                        isActive
                                            ? 'bg-background text-primary shadow-sm'
                                            : 'text-primary-foreground/80 hover:text-primary-foreground'
                                    )}>
                                    <Icon className="size-4" />
                                    <span>{tab.name}</span>
                                </button>
                            )
                        })}
                        <span className="text-primary-foreground/70 px-3 py-2">+12 more</span>
                    </div>
                </motion.div> */}

        {/* Content panel */}
        <div
          className={cn(
            "relative flex min-h-[90vh] items-center overflow-hidden rounded-[2.5rem] bg-gradient-to-b py-12 sm:py-16",
            t.panel
          )}
        >
          <img
            src={t.env}
            alt=""
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-96 w-full object-cover object-bottom",
              t.envClass
            )}
          />
          <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
            {/* Plain tablet mockup */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={viewport}
              transition={{ type: "spring", bounce: 0.3, duration: 1.5 }}
              className={cn(reverse && "lg:order-2")}
            >
              <div className="rounded-[2rem] bg-neutral-900 p-3 shadow-2xl ring-1 shadow-black/10 ring-black/5">
                <div className="relative aspect-[4.3/3] overflow-hidden rounded-[1.25rem] bg-muted ">
                  {video ? (
                    <video
                      className={cn(
                        "absolute inset-0 size-full object-cover",
                        videoClassName
                      )}
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline

                    />
                  ) : (
                    /* front camera */
                    <span className="absolute top-3 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-neutral-700/60" />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                  },
                },
                ...inViewTransition,
              }}
              viewport={viewport}
              className={cn(reverse && "lg:order-1")}
            >
              <p
                className={cn(
                  "flex items-center gap-2 text-sm font-semibold",
                  t.eyebrow
                )}
              >
                <EyebrowIcon className="size-4" />
                {eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
                {heading}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">{body}</p>
              <Button
                render={<a href="https://patchup.ca" />}
                nativeButton={false}
                size="lg"
                className={cn("mt-8", t.button)}
              >
                <span>{cta}</span>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
