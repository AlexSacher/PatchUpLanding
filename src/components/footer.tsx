const links = [
    {
        title: 'How it works',
        href: '#',
    },
    {
        title: 'Lessons & Activities',
        href: '#',
    },
    {
        title: 'For Teachers',
        href: '#',
    },
    {
        title: 'Privacy',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
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
                            <a
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
