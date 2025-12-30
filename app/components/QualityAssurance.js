import { FiCheckCircle, FiShield, FiEye, FiTruck, FiAward, FiLeaf } from 'react-icons/fi'

export default function QualityAssurance() {
  const qualitySteps = [
    {
      icon: FiLeaf,
      title: "Farm Selection",
      description: "We partner only with certified organic farms that follow sustainable farming practices"
    },
    {
      icon: FiEye,
      title: "Harvest Monitoring",
      description: "Our team monitors the harvest process to ensure optimal timing and quality"
    },
    {
      icon: FiShield,
      title: "Lab Testing",
      description: "Every batch undergoes rigorous testing for purity, potency, and safety"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Quality Assurance
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Quality Promise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From farm to your kitchen, every step is carefully monitored to ensure you receive the purest, most potent spices possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualitySteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-4">
                <step.icon className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}