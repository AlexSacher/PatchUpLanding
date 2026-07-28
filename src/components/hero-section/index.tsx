import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ShinyButton } from '@/components/ui/shiny-button'
import { Highlighter } from '@/components/ui/highlighter'
import { HeroHeader } from './header'

export default function HeroSection() {
    const laptopVideoRef = useRef<HTMLVideoElement>(null)
    const tabletVideoRef = useRef<HTMLVideoElement>(null)
    // Which device is held in its lifted state. Clicking a device latches it,
    // clicking it again (or the other one) puts it back down.
    const [lifted, setLifted] = useState<'tablet' | 'laptop' | null>(null)
    const toggleLift = (device: 'tablet' | 'laptop') =>
        setLifted((current) => (current === device ? null : device))

    // Keep the laptop and tablet hero videos playing in lockstep. The laptop
    // is the master clock; the tablet is nudged back into sync whenever it
    // drifts (start-up jitter, looping, tab throttling).
    useEffect(() => {
        const laptop = laptopVideoRef.current
        const tablet = tabletVideoRef.current
        if (!laptop || !tablet) return

        const resync = () => {
            if (tablet.readyState < 2) return
            if (Math.abs(tablet.currentTime - laptop.currentTime) > 0.2) {
                tablet.currentTime = laptop.currentTime
            }
        }

        // Matching currentTime is not enough on its own. Browsers stop and start
        // these two elements independently (backgrounded tab, power saving, a
        // stalled buffer), so the tablet also has to follow the laptop's play
        // and pause, otherwise one runs on while the other sits still.
        const followPlay = () => {
            resync()
            if (tablet.paused) tablet.play().catch(() => { })
        }
        const followPause = () => {
            if (!tablet.paused) tablet.pause()
        }
        const onVisible = () => {
            if (document.visibilityState === 'visible') followPlay()
        }

        laptop.addEventListener('timeupdate', resync)
        laptop.addEventListener('seeked', resync)
        laptop.addEventListener('play', followPlay)
        laptop.addEventListener('playing', followPlay)
        laptop.addEventListener('pause', followPause)
        tablet.addEventListener('loadeddata', resync)
        document.addEventListener('visibilitychange', onVisible)

        return () => {
            laptop.removeEventListener('timeupdate', resync)
            laptop.removeEventListener('seeked', resync)
            laptop.removeEventListener('play', followPlay)
            laptop.removeEventListener('playing', followPlay)
            laptop.removeEventListener('pause', followPause)
            tablet.removeEventListener('loadeddata', resync)
            document.removeEventListener('visibilitychange', onVisible)
        }
    }, [])

    return (
        <div className="relative min-h-screen overflow-hidden">
            <HeroHeader />

            <main className="min-h-screen overflow-hidden">
                <section className="relative flex min-h-screen items-center">
                    {/* Background image */}
                    <img
                        src="/hero-bg.png"
                        alt=""
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 size-full object-cover"
                    />
                    {/* <InteractiveGridPattern
                        aria-hidden
                        className="absolute inset-0 z-0 h-full w-full stroke-slate-900/5 [mask-image:linear-gradient(180deg,white_60%,transparent)]"
                    /> */}

                    {/* Soft blue-teal gradient wash */}
                    {/* <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(90%_65%_at_100%_20%,rgba(102,214,234,0.28)_0%,rgba(102,214,234,0.10)_45%,transparent_75%),radial-gradient(70%_55%_at_0%_0%,rgba(0,162,232,0.14)_0%,transparent_70%),linear-gradient(135deg,#F3FBFD_0%,#FFFFFF_70%)]"
                    /> */}
                    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pt-20 sm:pt-0 sm:py-28 lg:max-w-[1280px] lg:grid-cols-[0.76fr_1.24fr] lg:gap-14 lg:py-32">
                        {/* Left, copy */}
                        <div className="text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                                className="text-foreground text-balance text-5xl font-bold tracking-tight md:text-6xl">
                                Helping kids feel calm, connected, and{' '}
                                <Highlighter
                                    action="underline"
                                    color="#00A2E8"
                                    strokeWidth={3}
                                    delay={700}>
                                    <span className="text-primary">ready to learn</span>
                                </Highlighter>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                                className="text-muted-foreground mx-auto mt-5 max-w-lg text-pretty text-lg lg:mx-0">
                                PatchUp provides teachers with simple, engaging tools to help students regulate their emotions, connect with others, and respond more positively to everyday challenges.
                            </motion.p>


                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                                className="mt-7">
                                <ShinyButton
                                    href="https://patchup.ca/register"
                                    className="bg-primary border-primary px-8 py-3">
                                    <span className="text-base normal-case tracking-normal text-white">Get started free</span>
                                </ShinyButton>
                                {/* <p className="text-muted-foreground mt-3 text-xs">Free for teachers · No student accounts</p> */}
                            </motion.div>
                        </div>

                        {/* Right, device + illustration scene.
                            One composition at every width. The cluster is a container, and
                            every fixed dimension inside it (bezels, radii, offsets) is
                            expressed in cqw, so the whole scene scales continuously with the
                            page instead of snapping at a breakpoint. 1cqw = 6.1831px at the
                            desktop reference width of 618.31px, which is where the cqw
                            numbers below come from, so desktop renders as it always has.

                            Clicking a device latches its hover transform via data-lifted, so
                            touch users get the same lift and it stays put until they click
                            again. The data- variant also outranks the plain z-index utilities,
                            which a bare `z-40` class would not. */}
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                            className="@container relative mx-auto mt-[min(28vw,80px)] w-[86%] max-w-[618px] lg:mx-0 lg:mt-20 lg:w-full lg:max-w-none lg:-mr-14 xl:-mr-32 2xl:-mr-44">
                            {/* Tablet, raised to the upper-left */}
                            <div
                                onClick={() => toggleLift('tablet')}
                                data-lifted={lifted === 'tablet'}
                                className="group/tablet absolute -top-[16cqw] z-0 w-[42%] origin-bottom cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-40 hover:rotate-[2deg] hover:scale-[1.03] data-[lifted=true]:z-40 data-[lifted=true]:rotate-[2deg] data-[lifted=true]:scale-[1.03]">
                                <div className="rounded-[3.105cqw] bg-neutral-900 p-[1.294cqw] shadow-xl shadow-sky-900/15 ring-1 ring-black/5">
                                    <div className="bg-muted aspect-[3/4.26] overflow-hidden rounded-[2.2cqw]">
                                        <video
                                            ref={tabletVideoRef}
                                            className="size-full object-cover"
                                            src="/lesson-tablet.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                        {/* <img
                                            src="/hero-6.png"
                                            alt=""=
                                            className='size-full object-cover '
                                        /> */}
                                    </div>
                                </div>
                                {/* Kid sitting on top of the tablet */}
                                <img
                                    src="/hero-kid-hang.png"
                                    alt=""
                                    aria-hidden
                                    className="pointer-events-none absolute left-2/5 top-0 z-20 w-[45%] -translate-x-1/2 -translate-y-[63%] drop-shadow-xl"
                                />
                            </div>

                            {/* Laptop, main screen */}
                            <div
                                onClick={() => toggleLift('laptop')}
                                data-lifted={lifted === 'laptop'}
                                className="group/laptop relative z-10 ml-auto mr-[2.5%] w-[75%] origin-bottom lg:mr-0 lg:w-[70%] cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-20 hover:-rotate-[2deg] hover:scale-[1.02] data-[lifted=true]:z-20 data-[lifted=true]:-rotate-[2deg] data-[lifted=true]:scale-[1.02] ">
                                <div className="mt-[2.588cqw] rounded-[2.588cqw] bg-neutral-900 p-[1.617cqw] shadow-2xl shadow-sky-900/15 ring-1 ring-black/5 ">
                                    <div className="bg-black aspect-[4.4/3] overflow-hidden rounded-[1.553cqw]">
                                        <video
                                            ref={laptopVideoRef}
                                            className="size-full object-cover"
                                            src="/laptop-lesson.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                        {/* <img
                                        src="/test-image7.png"
                                            alt=""
                                            className='size-full object-cover '
                                        /> */}
                                    </div>
                                </div>
                                {/* laptop base */}
                                <div className="mx-auto h-[1.941cqw] w-[114%] -translate-x-[6.1%] rounded-b-[1.941cqw] bg-neutral-800 shadow-lg" />

                                {/* Teacher leaning on the right side of the laptop. She lives
                                    inside the laptop so she inherits its lift, otherwise she
                                    stays planted while the thing she is leaning on moves. Her
                                    width is a share of the laptop rather than of the cluster. */}
                                <img
                                    src="/hero-teacher-dark.png"
                                    alt=""
                                    aria-hidden
                                    className="pointer-events-none absolute -right-[7.116cqw] bottom-[1.294cqw] z-30 w-[20%] drop-shadow-xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}






