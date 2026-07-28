import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'
import { cn } from '@/lib/utils'

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
const signupUrl = 'https://patchup.ca'

type Plan = {
    name: string
    description: string
    monthly: number | null
    annual: number | null
    priceLabel?: string
    cadence: string
    cta: string
    highlighted?: boolean
    includesInsights?: boolean
    featuresLabel?: string
    features: string[]
    footnote?: string
}

const plans: Plan[] = [
    {
        name: 'Classroom',
        description: 'Everything a teacher needs to run SEL activities and lessons.',
        monthly: 0,
        annual: 0,
        cadence: 'Free for classroom use',
        cta: 'Get started free',
        features: [
            'All SEL lessons, activities, and check-ins',
            'Unlimited sessions',
            'Student access on tablet, desktop, or mobile',
        ],
        footnote: 'Insights & data available with Classroom+',
    },
    {
        name: 'Classroom+',
        description: 'Adds Insights, see how your students are doing over time.',
        monthly: 8,
        annual: 6,
        cadence: 'per teacher / month',
        cta: 'Book a demo',
        highlighted: true,
        includesInsights: true,
        featuresLabel: 'Everything in Classroom, plus:',
        features: [
            'Trends over time, before vs. after',
            'Class & student progress views',
            'Export & share reports and data',
            'Survey creation and implementation'
        ],
    },
    {
        name: 'District',
        description: 'For districts and divisions supporting many schools.',
        monthly: null,
        annual: null,
        priceLabel: 'Custom',
        cadence: "Let's talk",
        cta: 'Contact us',
        includesInsights: true,
        featuresLabel: 'Everything in Classroom+, plus:',
        features: [
            'District-wide onboarding & training',
            'Aggregated data and trends at all levels',
            'Dedicated success manager',
            'Custom agreements & invoicing',
        ],
    },
]

export default function PricingTwo() {
    const [annual, setAnnual] = useState(true)

    return (
        <section
            id="pricing"
            className="scroll-mt-24 py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={viewport}
                    transition={{ type: 'spring', bounce: 0.3, duration: 1.5 }}
                    className="mx-auto max-w-2xl text-center">
                    <h2 className="text-foreground text-balance text-4xl font-bold tracking-tight md:text-5xl">
                        Pricing that grows with your school
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Classroom is free for teachers. Add{' '}
                        <span className="text-primary font-medium">Insights</span> with Classroom+ to track
                        student progress over time.
                    </p>

                    {/* Billing toggle */}
                    <div className="mt-8 flex flex-col items-center">
                        <div className="bg-muted inline-flex items-center rounded-full p-1 text-sm">
                            <button
                                type="button"
                                onClick={() => setAnnual(false)}
                                className={cn(
                                    'rounded-full px-4 py-1.5 transition-colors',
                                    !annual ? 'bg-background text-foreground font-medium shadow-sm' : 'text-muted-foreground'
                                )}>
                                Monthly
                            </button>
                            <button
                                type="button"
                                onClick={() => setAnnual(true)}
                                className={cn(
                                    'rounded-full px-4 py-1.5 transition-colors',
                                    annual ? 'bg-background text-foreground font-medium shadow-sm' : 'text-muted-foreground'
                                )}>
                                Annually
                            </button>
                        </div>
                        <p className="mt-3 text-xs">
                            <span className="text-primary font-medium">Save 25%</span>{' '}
                            <span className="text-muted-foreground">on annual billing</span>
                        </p>
                    </div>
                </motion.div>

                {/* Plans */}
                <AnimatedGroup
                    className="relative mx-auto mt-14 grid max-w-5xl rounded-3xl border md:grid-cols-3"
                    variants={{ container: { visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }, ...inViewTransition }}
                    viewport={viewport}>
                    {plans.map((plan) => {
                        const amount = annual ? plan.annual : plan.monthly
                        const href = plan.cta === 'Get started free' ? signupUrl : '#contact'
                        return (
                            <div
                                key={plan.name}
                                className={cn(
                                    'flex flex-col p-8',
                                    plan.highlighted && 'bg-card z-10 border-r-1 border-l-1'
                                )}>
                                <h3 className="text-lg font-semibold">{plan.name}</h3>
                                <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>

                                <div className="mt-6">
                                    <span className="text-foreground text-4xl font-bold">
                                        {plan.priceLabel ? (
                                            plan.priceLabel
                                        ) : (
                                            <span className="inline-flex items-baseline">
                                                $<SlidingNumber value={amount ?? 0} />
                                            </span>
                                        )}
                                    </span>
                                </div>
                                <p className="text-muted-foreground mt-1 text-sm">{plan.cadence}</p>

                                <Button
                                    render={<a href={href} />}
                                    nativeButton={false}
                                    variant={plan.highlighted || plan.cta === 'Get started free' ? 'default' : 'outline'}
                                    className="mt-6 w-full">
                                    <span>{plan.cta}</span>
                                </Button>

                                {/* Shared "Includes Insights" token, color-coded to the Insights section */}
                                {plan.includesInsights && (
                                    <div className="mt-6 flex items-center gap-2 rounded-lg py-2 text-sm font-semibold text-blue-400">
                                        <BarChart3 className="size-4 shrink-0" />
                                        Includes Insights
                                    </div>
                                )}

                                {plan.featuresLabel && (
                                    <p className={cn('text-sm font-medium', plan.includesInsights ? 'mt-5' : 'mt-8')}>
                                        {plan.featuresLabel}
                                    </p>
                                )}
                                <ul className={cn('space-y-3 text-sm', plan.featuresLabel ? 'mt-4' : 'mt-8')}>
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5">
                                            <Check className="text-primary mt-0.5 size-4 shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {plan.footnote && (
                                    <p className="text-muted-foreground/80 mt-6 border-t pt-4 text-xs">{plan.footnote}</p>
                                )}
                            </div>
                        )
                    })}
                </AnimatedGroup>
            </div>
        </section>
    )
}
