import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { Spotify } from '@/components/ui/svgs/spotify'
import { VercelFull } from '@/components/ui/svgs/vercel'
import { SupabaseFull } from '@/components/ui/svgs/supabase'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Bolt } from '@/components/ui/svgs/bolt'
import { FirebaseFull } from '@/components/ui/svgs/firebase'
import { Beacon } from '@/components/ui/svgs/beacon'
import { Claude } from '@/components/ui/svgs/claude'
import { Cisco } from '@/components/ui/svgs/cisco'
import { Figma } from '@/components/ui/svgs/figma'

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by teachers in K–12 classrooms</p>
                    </div>
                    <div className="**:fill-foreground relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <Bolt className="h-5 w-14 fill-current" />
                            <VercelFull className="h-5 w-20 fill-current" />
                            <SupabaseFull className="h-6 fill-current" />
                            <Hulu className="h-4 w-14 fill-current" />
                            <Spotify className="h-6 w-20 fill-current" />
                            <FirebaseFull className="h-6 w-20 fill-current" />
                            <Beacon className="h-6 w-20 fill-current" />
                            <Claude className="h-6 w-24 fill-current" />
                            <Figma className="h-6 w-6 fill-current" />
                            <Cisco className="h-7 w-16 fill-current" />
                        </InfiniteSlider>

                        <div
                            aria-hidden
                            className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
                        />
                        <div
                            aria-hidden
                            className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
