'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiStar, FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const demoProducts = [
    {
      id: 1,
      name: "Kashmir Saffron",
      price: 2499,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1609501676725-7186f0b4c4b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 127,
      origin: "Kashmir, India",
      harvest: "2024",
      description: "Premium Grade A saffron threads from Kashmir valleys",
      badge: "Premium",
      inStock: true,
      weights: ["1g", "2g", "5g"],
      features: ["Lab Tested", "Single Origin", "Grade A"]
    },
    {
      id: 2,
      name: "Malabar Black Pepper",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1599909533730-f9e0c5b0b3b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 89,
      origin: "Kerala, India",
      harvest: "2024",
      description: "Bold and aromatic black pepper from Malabar coast",
      badge: "Bestseller",
      inStock: true,
      weights: ["50g", "100g", "250g"],
      features: ["Organic", "Single Origin", "Fresh Ground"]
    },
    {
      id: 3,
      name: "Turmeric Powder",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 156,
      origin: "Tamil Nadu, India",
      harvest: "2024",
      description: "Golden turmeric with high curcumin content",
      badge: "Organic",
      inStock: true,
      weights: ["100g", "250g", "500g"],
      features: ["High Curcumin", "Organic", "Stone Ground"]
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setProducts(demoProducts)
      setLoading(false)
    }, 1000)
  }, [])

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`)
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Premium': return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      case 'Bestseller': return 'bg-gradient-to-r from-green-400 to-green-600'
      case 'Organic': return 'bg-gradient-to-r from-emerald-400 to-emerald-600'
      default: return 'bg-gradient-to-r from-orange-400 to-orange-600'
    }
  }

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-64 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-4 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Spices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium spices, each with its own story of origin and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>

                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors">
                    <FiHeart size={18} />
                  </button>
                  <Link href={`/product/${product.id}`} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-orange-600 transition-colors">
                    <FiEye size={18} />
                  </Link>
                </div>

                {product.originalPrice > product.price && (
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-2">
                  Origin: {product.origin} • Harvest: {product.harvest}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    per {product.weights[0]}
                  </span>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-orange-600 hover:bg-orange-700 text-white transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FiShoppingCart size={18} />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Spices
          </Link>
        </div>
      </div>
    </section>
  )
}