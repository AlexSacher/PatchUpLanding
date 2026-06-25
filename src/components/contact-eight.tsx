import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

const inViewTransition = {
    item: {
        hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
        },
    },
}
const viewport = { once: true, margin: '-80px' as const }

const inputClass =
    'w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30'

export default function ContactEight() {
    return (
        <section className="py-8 md:py-12">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={viewport}
                    transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                    className="mx-auto max-w-2xl text-center">
                    <h1 className="text-foreground text-balance text-4xl font-bold tracking-tight md:text-5xl">
                        Contact us
                    </h1>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Questions about bringing PatchUp to your classroom or school? We'd love to help. Reach out and
                        our team will get back to you.
                    </p>
                </motion.div>

                <AnimatedGroup
                    className="mx-auto mt-12 max-w-2xl"
                    variants={{ container: { visible: { transition: { staggerChildren: 0.1 } } }, ...inViewTransition }}
                    viewport={viewport}>
                    {/* <h2 className="text-center text-2xl font-semibold tracking-tight">Talk to our team</h2>
                    <p className="text-muted-foreground mt-2 text-center text-sm">
                        Tell us a little about you and we'll be in touch.
                    </p> */}

                    <form className="mt-8 space-y-4">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium">First name</label>
                                <input
                                    type="text"
                                    placeholder="Jane"
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-medium">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className={inputClass}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium">Professional email</label>
                            <input
                                type="email"
                                placeholder="jane@school.edu"
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium">School / Organization</label>
                            <input
                                type="text"
                                placeholder="Maple Grove Elementary"
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className="mb-1.5 block text-sm font-medium">Message</label>
                            <textarea
                                rows={5}
                                placeholder="How can we help?"
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors">
                            Send message
                            <ArrowRight className="size-4" />
                        </button>
                    </form>
                </AnimatedGroup>
            </div>
        </section>
    )
}
