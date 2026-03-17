import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import VisionQuote from '@/components/VisionQuote'
import WhyNow from '@/components/WhyNow'
import CtaSection from '@/components/CtaSection'
import InstagramStrip from '@/components/InstagramStrip'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <VisionQuote />
        <WhyNow />
        <CtaSection />
      </main>
      <InstagramStrip />
      <Footer />
    </>
  )
}
