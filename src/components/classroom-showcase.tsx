import { motion } from "motion/react"

// Blank smartboard screen rect, measured from hero-classroom-scene.webp (1536x1024)
const BOARD_RECT = {
  left: "33.07%",
  top: "13.38%",
  width: "41.02%",
  height: "38.28%",
} as const

const viewport = { once: true, margin: "-80px" as const }

export default function ClassroomShowcase() {
  return (
    <section className="py-10">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", bounce: 0.3, duration: 1.5 }}
          className="mx-auto max-w-2xl px-6 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
            Made for the front of your classroom
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Project a lesson on the board, students join with a code, and the
            whole class works through it together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", bounce: 0.3, duration: 1.5 }}
          className="relative mt-12 overflow-hidden rounded-[2.5rem]"
        >
          <img
            src="/hero-classroom-scene.webp"
            alt="Illustrated classroom of kids watching a PatchUp activity on the smartboard"
            className="w-full"
          />
          {/* Live demo video positioned over the blank smartboard screen */}
          <video
            className="absolute rounded-sm object-cover"
            style={BOARD_RECT}
            src="/library-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </div>
    </section>
  )
}
