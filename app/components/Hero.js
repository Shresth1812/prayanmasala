'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Pure. Authentic. Premium.",
      subtitle: "Single-Origin Spices from India's Finest Farms",
      description: "Experience the true essence of Indian spices with our carefully curated collection sourced directly from heritage farms across India.",
      cta: "Shop Premium Spices",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      badge: "Farm to Kitchen"
    },
    {
      title: "Taste the Heritage",
      subtitle: "Traditional Masalas, Modern Standards",
      description: "Every spice tells a story of generations of farming wisdom, now brought to your kitchen with complete purity assurance.",
      cta: "Explore Our Story",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      badge: "Lab Tested"
    },
    {
      title: "Freshness Guaranteed",
      subtitle: "Harvest to Home in 30 Days",
      description: "Our spices reach you within 30 days of harvest, ensuring maximum potency, aroma, and flavor in every pinch.",
      cta: "View Quality Promise",
      image: "https://images.unsplash.com/photo-1599909533730-f9e0c5b0b3b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      badge: "30-Day Fresh"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-primary-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {slides[currentSlide].badge}
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-accent-200">
            {slides[currentSlide].subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop" className="btn-primary group">
              {slides[currentSlide].cta}
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="flex items-center text-white hover:text-accent-200 transition-colors group">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mr-3 group-hover:border-accent-200 transition-colors">
                <FiPlay className="ml-1" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Spice Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent-400 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-secondary-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}