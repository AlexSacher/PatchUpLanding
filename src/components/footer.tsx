import { Link } from 'react-router-dom'

const links = [
    {
        title: 'Lessons & Activities',
        href: '/#features',
    },
    {
        title: 'Pricing',
        href: '/#pricing',
    },
    {
        title: 'For Teachers',
        href: '/#pricing',
    },
    {
        // No privacy page exists yet, so this points at contact until there is one.
        title: 'Privacy',
        href: '/contact',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white py-12">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {2026} PatchUp. All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
