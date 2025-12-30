'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiUsers, FiMapPin, FiTrendingUp } from 'react-icons/fi'

export default function BrandStory() {
  const stats = [
    { icon: FiUsers, number: "150+", label: "Partner Farmers" },
    { icon: FiMapPin, number: "12", label: "Indian States" },
    { icon: FiTrendingUp, number: "50K+", label: "Happy Customers" }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                From Heritage Farms to Your <span className="text-gradient">Kitchen</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Prayan was born from a simple belief: that the incredible diversity and quality of Indian spices deserves to be experienced in its purest form. Our journey began when we discovered that most spices lose their potency and authenticity by the time they reach your kitchen.
              </p>
              
              <p>
                We decided to change that. By partnering directly with heritage farms across India, we ensure that every spice maintains its original character, aroma, and nutritional value. From the saffron fields of Kashmir to the pepper plantations of Kerala, we work with farmers who have been perfecting their craft for generations.
              </p>

              <p>
                Today, Prayan represents more than just spices – we're a bridge between traditional farming wisdom and modern quality standards, bringing you the authentic taste of India with complete transparency and trust.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-3">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-primary-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-primary group">
                Read Our Full Story
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/farmers" className="btn-secondary">
                Meet Our Farmers
              </Link>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Spice farming in India"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Prayan Promise</h4>
                    <p className="text-sm text-gray-600">Farm to Kitchen in 30 days</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Every spice is harvested, processed, and delivered within 30 days to ensure maximum freshness and potency.
                </p>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-accent-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 right-12 w-24 h-24 bg-primary-200 rounded-full opacity-30 -z-10"></div>
            
            {/* Decorative Spice Elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-4 w-4 h-4 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}