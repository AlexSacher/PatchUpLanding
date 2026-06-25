import { motion } from 'motion/react'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { ShinyButton } from '@/components/ui/shiny-button'
import { Highlighter } from '@/components/ui/highlighter'
import { HeroHeader } from './header'

export default function HeroSection() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <HeroHeader />

            <main className="min-h-screen overflow-hidden">
                <section className="relative flex min-h-screen items-center">
                    {/* Background image */}
                    {/* <img
                        src="/hero-bg.png"
                        alt=""
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 size-full object-cover"
                    /> */}

                    {/* Grid pattern background (static) */}
                    <div className="absolute inset-0 z-0 overflow-hidden [mask-image:radial-gradient(ellipse_100%_70%_at_center,white_4%,transparent_75%)]">
                        {/* <InteractiveGridPattern
                            className="pointer-events-none h-full w-full"
                            width={40}
                            height={40}
                            squares={[60, 40]}
                            squaresClassName="stroke-primary/20"
                        /> */}
                    </div>
                    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
                        {/* Left, copy */}
                        <div className="text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                                className="text-foreground text-balance text-5xl font-bold tracking-tight md:text-6xl">
                                Helping kids feel calm, kind, and{' '}
                                <Highlighter
                                    action="underline"
                                    color="#00A2E8"
                                    strokeWidth={3}>
                                    connected
                                </Highlighter>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.5 }}
                                className="text-muted-foreground mx-auto mt-6 max-w-xl text-pretty text-lg lg:mx-0">
                                PatchUp gives K–12 teachers ready-to-run lessons, activities, and check-ins for
                                social-emotional learning and intercultural communication building the skills kids
                                need to name what they feel, connect across differences, and feel like they belong. No
                                prep, no accounts: just share a code and go.
                            </motion.p>


                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.9 }}
                                className="mt-8">
                                <ShinyButton
                                    href="https://patchup.ca"
                                    className="bg-primary border-primary px-8 py-3">
                                    <span className="text-base normal-case tracking-normal text-white">Get started free</span>
                                </ShinyButton>
                                {/* <p className="text-muted-foreground mt-3 text-xs">Free for teachers · No student accounts</p> */}
                            </motion.div>
                        </div>

                        {/* Right, device + illustration */}
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ type: 'spring', bounce: 0.3, duration: 1.5, delay: 0.4 }}
                            className="relative">
                            <div className="rounded-[2rem] bg-neutral-900 p-3 shadow-2xl shadow-sky-900/15 ring-1 ring-black/5">
                                <div className="bg-muted aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                                    <video
                                        className="size-full object-cover"
                                        src="/library-demo.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>

                            {/* Friendly kid peeking over the top-right corner of the device */}
                            <img
                                src="/hero-kid-hang.png"
                                alt=""
                                aria-hidden
                                className="pointer-events-none absolute -top-25 w-32 drop-shadow-xl sm:w-40"
                            />
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}
