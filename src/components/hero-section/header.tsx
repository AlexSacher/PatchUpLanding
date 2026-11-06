import { Logo } from '@/components/logo'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import React from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Insights', href: '/#insights' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/contact' },
]

const signupUrl = 'https://patchup.ca/register'
// Conference banner, remove after the event.
const conferenceUrl = 'https://patchup.ca/mind-over-matters-2026'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn(
                    'fixed top-0 z-20 w-full border-b transition-colors duration-300',
                    scrolled || menuState
                        // Solid white on the mobile header, translucent + blurred
                        // from lg up, which is where the desktop nav takes over.
                        ? 'border-border bg-background lg:bg-background/60 lg:backdrop-blur-lg'
                        : 'border-transparent bg-background/0',
                )}>
                <a
                    href={conferenceUrl}
                    className="bg-primary hover:bg-primary/90 flex h-11 items-center justify-center gap-2 px-4 text-sm font-semibold text-white transition-colors sm:text-base">
                    <span className="relative flex size-2.5 shrink-0">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-white" />
                    </span>
                    <span className="truncate">
                        <span className="sm:hidden">Mind Over Matters 2026? Tap here</span>
                        <span className="hidden sm:inline">
                            At Mind Over Matters 2026? Visit our conference page
                        </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0" />
                </a>
                <div className="mx-auto max-w-6xl px-6 lg:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                onClick={() => setMenuState(false)}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    render={<Link to="/contact" />}
                                    nativeButton={false}
                                    variant="outline"
                                    size="sm">
                                    <span>Book a demo</span>
                                </Button>
                                <Button
                                    render={<a href={signupUrl} />}
                                    nativeButton={false}
                                    size="sm">
                                    <span>Get started free</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
