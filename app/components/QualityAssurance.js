'use client'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiShield, FiEye, FiTruck, FiAward, FiLeaf } from 'react-icons/fi'

export default function QualityAssurance() {
  const qualitySteps = [
    {
      icon: FiLeaf,
      title: "Farm Selection",
      description: "We partner only with certified organic farms that follow sustainable farming practices",
      features: ["Organic Certification", "Soil Testing", "Sustainable Methods"]
    },
    {
      icon: FiEye,
      title: "Harvest Monitoring",
      description: "Our team monitors the harvest process to ensure optimal timing and quality",
      features: ["Optimal Timing", "Quality Check", "Fresh Harvest"]
    },
    {
      icon: FiShield,
      title: "Lab Testing",
      description: "Every batch undergoes rigorous testing for purity, potency, and safety",
      features: ["Purity Analysis", "Pesticide Testing", "Nutritional Value"]
    },
    {
      icon: FiAward,
      title: "Quality Grading",
      description: "Spices are graded based on color, aroma, flavor, and overall quality",
      features: ["Color Grading", "Aroma Testing", "Flavor Profile"]
    },
    {
      icon: FiTruck,
      title: "Fresh Packaging",
      description: "Vacuum-sealed packaging preserves freshness and extends shelf life",
      features: ["Vacuum Sealed", "Light Protection", "Airtight Storage"]
    },
    {
      icon: FiCheckCircle,
      title: "Final Inspection",
      description: "One final quality check before shipping to ensure perfection",
      features: ["Visual Inspection", "Weight Verification", "Package Integrity"]
    }
  ]

  const certifications = [
    { name: "FSSAI Certified", image: "/cert-fssai.png" },
    { name: "Organic India", image: "/cert-organic.png" },
    { name: "ISO 22000", image: "/cert-iso.png" },
    { name: "HACCP", image: "/cert-haccp.png" }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Quality Assurance
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Quality Promise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From farm to your kitchen, every step is carefully monitored to ensure you receive the purest, most potent spices possible
            </p>
          </motion.div>
        </div>

        {/* Quality Process */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualitySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < qualitySteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0"></div>
              )}
              
              <div className="card p-6 relative z-10 h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-4 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                  <step.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lab Testing Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Comprehensive Lab Testing
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiShield className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Purity Analysis</h4>
                    <p className="text-gray-600">Testing for adulterants, artificial colors, and foreign matter</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiShield className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pesticide Residue</h4>
                    <p className="text-gray-600">Comprehensive screening for harmful chemical residues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiShield className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Nutritional Content</h4>
                    <p className="text-gray-600">Verification of essential oils, curcumin, and other active compounds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiShield className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Microbial Safety</h4>
                    <p className="text-gray-600">Testing for harmful bacteria, yeast, and mold contamination</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Lab testing facility"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Our Certifications & Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">{cert.name}</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">{cert.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}