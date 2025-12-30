'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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
        <div className="inline-flex items-center bg-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          {slides[currentSlide].badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">
          {slides[currentSlide].title}
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-6 text-yellow-200">
          {slides[currentSlide].subtitle}
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/shop" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
            {slides[currentSlide].cta}
            <FiArrowRight className="ml-2" />
          </Link>
          
          <button className="flex items-center text-white hover:text-yellow-200 transition-colors group">
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mr-3 group-hover:border-yellow-200 transition-colors">
              <FiPlay className="ml-1" />
            </div>
            <span className="font-medium">Watch Our Story</span>
          </button>
        </div>
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
    </section>
  )
}