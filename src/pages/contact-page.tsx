import { HeroHeader } from '@/components/hero-section/header'
import ContactEight from '@/components/contact-eight'
import FooterSection from '@/components/footer'

export default function ContactPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-24 lg:pt-28">
                <ContactEight />
            </main>
            <FooterSection />
        </>
    )
}
