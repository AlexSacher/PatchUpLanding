import { HeroHeader } from '@/components/hero-section/header'
import ContactEight from '@/components/contact-eight'
import FooterSection from '@/components/footer'

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <HeroHeader />
            <main className="flex-1 pt-36 lg:pt-40">
                <ContactEight />
            </main>
            <FooterSection />
        </div>
    )
}
