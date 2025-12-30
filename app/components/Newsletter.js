'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGift, FiTrendingUp, FiBook } from 'react-icons/fi'
import { showToast } from '../utils/toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const benefits = [
    {
      icon: FiGift,
      title: "Exclusive Offers",
      description: "Get 10% off your first order and access to member-only deals"
    },
    {
      icon: FiBook,
      title: "Recipe Collection",
      description: "Weekly recipes and cooking tips from our spice experts"
    },
    {
      icon: FiTrendingUp,
      title: "New Arrivals",
      description: "Be the first to know about new spices and seasonal collections"
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      showToast('Please enter your email address', 'error')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter signup:', email)
      
      showToast('Welcome to Prayan! Check your email for a special discount.')
      setEmail('')
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Join Our Community
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Stay Connected with <span className="text-accent-200">Prayan</span>
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed">
                Join over 25,000 spice lovers who get exclusive recipes, cooking tips, 
                and special offers delivered straight to their inbox.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="text-accent-200" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-primary-100">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-400 rounded-full mb-4">
                <FiMail className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Get 10% Off Your First Order
              </h3>
              <p className="text-primary-100">
                Subscribe to our newsletter and receive an instant discount code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-accent-300 focus:bg-white/30 transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent-400 hover:bg-accent-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="spinner w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <FiMail size={18} />
                    <span>Subscribe & Get 10% Off</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-primary-200">
                By subscribing, you agree to our Privacy Policy and Terms of Service. 
                Unsubscribe at any time.
              </p>
            </div>

            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center space-x-4 text-sm text-primary-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>25,000+ subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Weekly recipes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}