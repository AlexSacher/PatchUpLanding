import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { RotateCcw, BarChart3, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { NoiseTexture } from "@/components/ui/noise-texture"

type SeriesKey = "before" | "after"

const data = [
  { group: "Calm", before: 18, after: 43 },
  { group: "Okay", before: 29, after: 37 },
  { group: "Frustrated", before: 34, after: 14 },
  { group: "Overwhelmed", before: 19, after: 6 },
]

const Y_MIN = 0
const Y_MAX = 50
const gridValues = [10, 20, 30, 40, 50]
const pos = (v: number) => ((v - Y_MIN) / (Y_MAX - Y_MIN)) * 100

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

export default function FeaturesChart() {
  const plotRef = useRef<HTMLDivElement>(null)
  const inView = useInView(plotRef, { once: true, margin: "-80px" })
  const [show, setShow] = useState<Record<SeriesKey, boolean>>({
    before: true,
    after: true,
  })
  const [hover, setHover] = useState<{ g: number; k: SeriesKey } | null>(null)
  const [playId, setPlayId] = useState(0)

  const toggle = (k: SeriesKey) => setShow((s) => ({ ...s, [k]: !s[k] }))

  return (
    <section id="insights" className="scroll-mt-24 py-12 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[2.5rem]  border-purple-100/80 bg-gradient-to-br from-violet-100  to-purple-100/90 py-12 sm:py-16">
          <NoiseTexture
            className="opacity-20"
            noiseOpacity={0.5}
          />
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
              {/* Chart card */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={viewport}
                transition={{ type: "spring", bounce: 0.3, duration: 1.5 }}
                className="rounded-2xl border border-violet-100/70 bg-card p-6 shadow-xl shadow-violet-900/5 lg:order-2"
              >
                <h3 className="text-sm font-semibold">
                  How one class answered "How are you feeling?", before and
                  after a few weeks of check-ins
                </h3>

                {/* Legend (toggles) + replay control */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <LegendChip
                      label="Before"
                      active={show.before}
                      swatch="bg-zinc-300"
                      onClick={() => toggle("before")}
                    />
                    <LegendChip
                      label="After"
                      active={show.after}
                      swatch="bg-violet-600"
                      onClick={() => toggle("after")}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlayId((p) => p + 1)}
                    className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <RotateCcw className="size-3" />
                    Replay
                  </button>
                </div>

                {/* Plot */}
                <div className="mt-6 flex gap-2">
                  <div className="flex items-center">
                    <span className="rotate-180 text-[10px] text-muted-foreground [writing-mode:vertical-lr]">
                      Share of responses
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex">
                      <div className="w-7 shrink-0" />
                      <div ref={plotRef} className="relative h-44 flex-1">
                        {/* Gridlines + y labels */}
                        {gridValues.map((v) => (
                          <div
                            key={v}
                            className="absolute inset-x-0"
                            style={{ bottom: `${pos(v)}%` }}
                          >
                            <span className="absolute -top-2 right-full mr-1.5 text-[10px] text-muted-foreground tabular-nums">
                              {v}%
                            </span>
                            <div className="border-t border-dashed border-border/60" />
                          </div>
                        ))}
                        {/* Bars */}
                        <div
                          key={playId}
                          className="absolute inset-0 flex items-end justify-around"
                        >
                          {data.map((d, gi) => {
                            const groupActive = hover === null || hover.g === gi
                            return (
                              <div
                                key={d.group}
                                className={cn(
                                  "flex h-full flex-1 items-end justify-center gap-1.5 transition-opacity duration-300",
                                  groupActive ? "opacity-100" : "opacity-40"
                                )}
                              >
                                <Bar
                                  k="before"
                                  gi={gi}
                                  value={d.before}
                                  pct={pos(d.before)}
                                  visible={show.before && inView}
                                  hovered={
                                    hover?.g === gi && hover?.k === "before"
                                  }
                                  onHover={setHover}
                                  delay={gi * 0.08}
                                />
                                <Bar
                                  k="after"
                                  gi={gi}
                                  value={d.after}
                                  pct={pos(d.after)}
                                  visible={show.after && inView}
                                  hovered={
                                    hover?.g === gi && hover?.k === "after"
                                  }
                                  onHover={setHover}
                                  delay={gi * 0.08 + 0.05}
                                />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    {/* X labels */}
                    <div className="flex">
                      <div className="w-7 shrink-0" />
                      <div className="mt-3 flex flex-1 justify-around">
                        {data.map((d) => (
                          <span
                            key={d.group}
                            className="flex-1 text-center text-xs text-muted-foreground"
                          >
                            {d.group}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Copy */}
              <AnimatedGroup
                className="lg:order-1 "
                variants={{
                  container: {
                    visible: { transition: { staggerChildren: 0.12 } },
                  },
                  ...inViewTransition,
                }}
                viewport={viewport}
              >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EC6866] px-3 py-1 text-sm font-semibold text-white shadow-sm shadow-[#EC6866]/20">
                  <BarChart3 className="size-3.5" />
                  Insights
                  <span className="font-medium text-white">with Classroom+</span>
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                  Notice when more students arrive ready to learn
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  A few minutes of SEL a day adds up. As students get the
                  language to name what they feel and simple tools to reset, the
                  whole room starts to settle.
                </p>
                <p className="mt-3 text-base text-muted-foreground">
                  Over a few weeks, patterns start to show, so you can spot
                  when more students are arriving calm, okay, and ready to
                  learn.
                </p>
                {/* <a
                  href="#pricing"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-violet-700 transition-all hover:gap-2"
                >
                  See Classroom+
                  <ArrowRight className="size-4" />
                </a> */}
              </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  )
}

function LegendChip({
  label,
  active,
  swatch,
  onClick,
}: {
  label: string
  active: boolean
  swatch: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 text-xs transition-opacity",
        active ? "opacity-100" : "opacity-40"
      )}
    >
      <span className={cn("size-3 rounded-[3px]", swatch)} />
      <span
        className={cn(
          active ? "text-foreground" : "text-muted-foreground line-through"
        )}
      >
        {label}
      </span>
    </button>
  )
}

function Bar({
  k,
  gi,
  value,
  pct,
  visible,
  hovered,
  onHover,
  delay,
}: {
  k: SeriesKey
  gi: number
  value: number
  pct: number
  visible: boolean
  hovered: boolean
  onHover: (h: { g: number; k: SeriesKey } | null) => void
  delay: number
}) {
  const isAfter = k === "after"
  return (
    <div
      className="relative flex h-full w-6 items-end justify-center md:w-7"
      onPointerEnter={() => onHover({ g: gi, k })}
      onPointerLeave={() => onHover(null)}
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: visible ? `${pct}%` : 0 }}
        transition={{
          type: "spring",
          bounce: 0.15,
          duration: 1.1,
          delay: visible ? delay : 0,
        }}
        className={cn(
          "relative w-full cursor-pointer rounded-t-[3px] transition-shadow",
          isAfter ? "bg-violet-600" : "bg-zinc-300",
          hovered && "ring-2 ring-offset-1 ring-offset-card",
          hovered && (isAfter ? "ring-violet-500/60" : "ring-zinc-400")
        )}
      >
        {/* Hover tooltip */}
        {hovered && visible && (
          <div className="absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 rounded-md bg-foreground px-2 py-1 text-[10px] font-medium whitespace-nowrap text-background shadow">
            {value}%
          </div>
        )}
      </motion.div>
    </div>
  )
}
