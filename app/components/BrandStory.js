import Link from 'next/link'
import { FiArrowRight, FiUsers, FiMapPin, FiTrendingUp } from 'react-icons/fi'

export default function BrandStory() {
  const stats = [
    { icon: FiUsers, number: "150+", label: "Partner Farmers" },
    { icon: FiMapPin, number: "12", label: "Indian States" },
    { icon: FiTrendingUp, number: "50K+", label: "Happy Customers" }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                From Heritage Farms to Your <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Kitchen</span>
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

            <div className="grid grid-cols-3 gap-6 my-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full mb-3">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-orange-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                Read Our Full Story
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/farmers" className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Meet Our Farmers
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Spice farming in India"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center">
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

            <div className="absolute top-8 right-8 w-32 h-32 bg-yellow-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 right-12 w-24 h-24 bg-orange-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}