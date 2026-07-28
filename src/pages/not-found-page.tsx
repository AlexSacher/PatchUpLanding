import { Link } from 'react-router-dom'
import { HeroHeader } from '@/components/hero-section/header'
import FooterSection from '@/components/footer'

export default function NotFoundPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <HeroHeader />
            <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
                <p className="text-primary text-sm font-semibold">404</p>
                <h1 className="text-foreground mt-2 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                    Page not found
                </h1>
                <p className="text-muted-foreground mt-4 max-w-md text-lg">
                    The page you're looking for doesn't exist or may have moved.
                </p>
                <Link
                    to="/"
                    className="bg-primary hover:bg-primary/90 mt-8 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors">
                    Back to home
                </Link>
            </main>
            <FooterSection />
        </div>
    )
}
