'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Truck, Leaf, Users, Star } from 'lucide-react'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Lab Tested',
    subtitle: '99.8% Purity Guaranteed'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    subtitle: 'Single Origin Spices'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    subtitle: 'Free shipping above ₹500'
  },
  {
    icon: Leaf,
    title: 'Organic Certified',
    subtitle: 'Sustainably Sourced'
  },
  {
    icon: Users,
    title: '10,000+ Customers',
    subtitle: 'Trusted Nationwide'
  },
  {
    icon: Star,
    title: '4.9/5 Rating',
    subtitle: '2,847+ Reviews'
  }
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-b border-neutral-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <point.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                {point.title}
              </h3>
              <p className="text-xs text-neutral-600">
                {point.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}