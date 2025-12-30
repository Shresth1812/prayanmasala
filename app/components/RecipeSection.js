import Link from 'next/link'
import { FiClock, FiUsers, FiChefHat } from 'react-icons/fi'

export default function RecipeSection() {
  const recipes = [
    {
      id: 1,
      title: "Authentic Garam Masala Chicken",
      description: "A rich and aromatic chicken curry using our premium garam masala blend",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cookTime: "45 mins",
      serves: "4 people",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Golden Turmeric Latte",
      description: "A warming and healthy drink with our premium turmeric powder",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cookTime: "10 mins",
      serves: "2 people",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Saffron Rice Pilaf",
      description: "Fragrant basmati rice infused with our premium Kashmir saffron",
      image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      cookTime: "30 mins",
      serves: "6 people",
      difficulty: "Easy"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Recipe Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Cook with <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Prayan Spices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover authentic recipes crafted by our chefs to showcase the true potential of our premium spices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {recipe.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {recipe.description}
                </p>

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

                <Link 
                  href={`/recipes/${recipe.id}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/recipes" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  )
}