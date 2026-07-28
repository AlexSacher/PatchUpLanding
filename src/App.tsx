import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { BookOpen, Smile, Sparkles } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturesLibrary from "@/components/features-library"
import FeaturesChart from "@/components/features-chart"
import PricingTwo from "@/components/pricing-two"
import CallToActionTwo from "@/components/call-to-action-2"
import FooterSection from "@/components/footer"
import ContactPage from "@/pages/contact-page"
import NotFoundPage from "@/pages/not-found-page"

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesLibrary
        id="features"
        theme="sky"
        eyebrow="Ready-to-run lessons"
        eyebrowIcon={BookOpen}
        heading={
          <>
            Lessons that fit
            <br />
            right into your day
          </>
        }
        body="Step-by-step social emotional lessons you can use today, no prep, no planning. Each one gives students the language and tools to understand themselves and the people around them."
        cta="Get started free"
        video="/lesson5.mp4"
        aspectClassName="aspect-[4.3/3]"
        videoClassName="scale-100"
        pt="pt-0"
      />
      <FeaturesLibrary
        direction="reverse"
        theme="peach"
        eyebrow="Daily check-ins"
        eyebrowIcon={Smile}
        heading={
          <>
            Know how the room
            <br />
            feels before you start
          </>
        }
        body="Quick check-ins let every student share how they're doing in seconds. You get a read on the whole class at a glance, so you can meet kids where they are before the lesson even begins."
        cta="Get started free"
        video="/checkin-demo.mp4"
        videoClassName="scale-120"
        aspectClassName="aspect-[4.3/3]"
      />
      <FeaturesLibrary
        theme="mint"
        eyebrow="Standalone activities"
        eyebrowIcon={Sparkles}
        heading={
          <>
            A little reset,
            <br />
            whenever you need it
          </>
        }
        body="Breathing, grounding, gratitude, creative expression, and more. Drop-in activities you can run any moment of the day. Perfect for transitions, tough moments, or whenever the class needs to reset together."
        cta="Get started free"
        video="/activity-demo.mp4"
        aspectClassName="aspect-[5/3]"
      />
      {/* <ClassroomShowcase /> */}
      <FeaturesChart />
      <PricingTwo />
      {/* <FAQsTwo /> */}
      {/* <CallToAction /> */}
      <CallToActionTwo />
      <FooterSection />
    </>
  )
}

function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView()
      })
      return
    }

    window.scrollTo(0, 0)
  }, [hash, pathname])

  return null
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
