import { HeroHeader } from '@/components/hero-section/header'
import ContactEight from '@/components/contact-eight'
import FooterSection from '@/components/footer'

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <HeroHeader />
            <main className="flex-1 pt-24 lg:pt-28">
                <ContactEight />
            </main>
            <FooterSection />
        </div>
    )
}
