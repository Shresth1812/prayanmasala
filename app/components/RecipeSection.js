'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiClock, FiUsers, FiChefHat, FiArrowRight } from 'react-icons/fi'

export default function RecipeSection() {
  const recipes = [
    {
      id: 1,
      title: "Authentic Garam Masala Chicken",
      description: "A rich and aromatic chicken curry using our premium garam masala blend",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cookTime: "45 mins",
      serves: "4 people",
      difficulty: "Medium",
      spices: ["Garam Masala", "Turmeric", "Red Chili"],
      chef: "Chef Priya"
    },
    {
      id: 2,
      title: "Golden Turmeric Latte",
      description: "A warming and healthy drink with our premium turmeric powder",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cookTime: "10 mins",
      serves: "2 people",
      difficulty: "Easy",
      spices: ["Turmeric", "Cinnamon", "Cardamom"],
      chef: "Chef Arjun"
    },
    {
      id: 3,
      title: "Saffron Rice Pilaf",
      description: "Fragrant basmati rice infused with our premium Kashmir saffron",
      image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cookTime: "30 mins",
      serves: "6 people",
      difficulty: "Easy",
      spices: ["Saffron", "Cardamom", "Bay Leaves"],
      chef: "Chef Meera"
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Recipe Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Cook with <span className="text-gradient">Prayan Spices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover authentic recipes crafted by our chefs to showcase the true potential of our premium spices
            </p>
          </motion.div>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card p-0 overflow-hidden"
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Difficulty Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </div>

                {/* Chef Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {recipe.chef}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Link href={`/recipes/${recipe.id}`} className="btn-primary w-full text-center">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {recipe.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Recipe Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <FiClock size={16} />
                    <span>{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiUsers size={16} />
                    <span>{recipe.serves}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiChefHat size={16} />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                {/* Spices Used */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Spices used:</p>
                  <div className="flex flex-wrap gap-1">
                    {recipe.spices.map((spice, i) => (
                      <span key={i} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Recipe Link */}
                <Link 
                  href={`/recipes/${recipe.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group/link"
                >
                  View Full Recipe
                  <FiArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recipe Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Explore Recipe Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Curries", count: "25+ recipes", icon: "🍛" },
              { name: "Beverages", count: "15+ recipes", icon: "🥤" },
              { name: "Desserts", count: "20+ recipes", icon: "🍮" },
              { name: "Snacks", count: "30+ recipes", icon: "🥨" }
            ].map((category, index) => (
              <Link
                key={index}
                href={`/recipes?category=${category.name.toLowerCase()}`}
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/recipes" className="btn-primary">
            View All Recipes
          </Link>
        </motion.div>
      </div>
    </section>
  )
}