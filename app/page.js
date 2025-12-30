'use client'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import BrandStory from './components/BrandStory'
import QualityAssurance from './components/QualityAssurance'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import TrustBadges from './components/TrustBadges'
import RecipeSection from './components/RecipeSection'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-serif text-primary-800 mb-2">Prayan Spices</h2>
          <p className="text-primary-600">Loading premium spices...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Brand Story */}
      <BrandStory />
      
      {/* Quality Assurance */}
      <QualityAssurance />
      
      {/* Recipe Section */}
      <RecipeSection />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}