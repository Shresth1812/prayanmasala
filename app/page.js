import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import BrandStory from './components/BrandStory'
import QualityAssurance from './components/QualityAssurance'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import TrustBadges from './components/TrustBadges'
import RecipeSection from './components/RecipeSection'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <FeaturedProducts />
        <BrandStory />
        <QualityAssurance />
        <RecipeSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}