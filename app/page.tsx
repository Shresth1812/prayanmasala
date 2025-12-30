import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import FeaturedSpices from '@/components/sections/FeaturedSpices'
import QualityPromise from '@/components/sections/QualityPromise'
import CustomerReviews from '@/components/sections/CustomerReviews'
import RecipeInspiration from '@/components/sections/RecipeInspiration'
import Newsletter from '@/components/sections/Newsletter'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <FeaturedSpices />
      <QualityPromise />
      <CustomerReviews />
      <RecipeInspiration />
      <Newsletter />
    </main>
  )
}