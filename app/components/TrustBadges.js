'use client'
import { motion } from 'framer-motion'
import { FiShield, FiTruck, FiAward, FiHeart, FiLeaf, FiGlobe } from 'react-icons/fi'

export default function TrustBadges() {
  const badges = [
    {
      icon: FiShield,
      title: "Lab Tested",
      description: "Every batch tested for purity & quality",
      color: "text-blue-600"
    },
    {
      icon: FiTruck,
      title: "Free Shipping",
      description: "On orders above ₹999",
      color: "text-green-600"
    },
    {
      icon: FiAward,
      title: "Premium Quality",
      description: "Single-origin, Grade A spices",
      color: "text-yellow-600"
    },
    {
      icon: FiHeart,
      title: "Fair Trade",
      description: "Direct farmer partnerships",
      color: "text-red-600"
    },
    {
      icon: FiLeaf,
      title: "Organic",
      description: "Naturally grown, no chemicals",
      color: "text-emerald-600"
    },
    {
      icon: FiGlobe,
      title: "Worldwide Shipping",
      description: "Delivering globally",
      color: "text-purple-600"
    }
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-white transition-colors duration-300 mb-3 ${badge.color}`}>
                <badge.icon size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}