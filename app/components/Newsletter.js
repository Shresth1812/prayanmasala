'use client'
import { useState } from 'react'
import { FiMail } from 'react-icons/fi'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter your email address')
      return
    }

    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Welcome to Prayan! Check your email for a special discount.')
      setEmail('')
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Join Our Community
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Stay Connected with <span className="text-yellow-200">Prayan</span>
            </h2>
            <p className="text-xl text-orange-100 leading-relaxed">
              Join over 25,000 spice lovers who get exclusive recipes, cooking tips, 
              and special offers delivered straight to their inbox.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                <FiMail className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Get 10% Off Your First Order
              </h3>
              <p className="text-orange-100">
                Subscribe to our newsletter and receive an instant discount code
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-yellow-300 focus:bg-white/30 transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <FiMail size={18} />
                    <span>Subscribe & Get 10% Off</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}