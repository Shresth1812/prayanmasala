'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiStar, FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartProvider'
import { showToast } from '../utils/toast'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart, isInCart } = useCart()

  // Demo products data
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
    },
    {
      id: 4,
      name: "Cardamom Pods",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 203,
      origin: "Kerala, India",
      harvest: "2024",
      description: "Aromatic green cardamom pods from Western Ghats",
      badge: "Premium",
      inStock: true,
      weights: ["50g", "100g", "250g"],
      features: ["Green Pods", "Aromatic", "Hand Picked"]
    },
    {
      id: 5,
      name: "Cinnamon Sticks",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      reviews: 78,
      origin: "Kerala, India",
      harvest: "2024",
      description: "Sweet and fragrant Ceylon cinnamon sticks",
      badge: "New",
      inStock: true,
      weights: ["50g", "100g", "200g"],
      features: ["Ceylon Type", "Sweet", "Authentic"]
    },
    {
      id: 6,
      name: "Red Chili Powder",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 134,
      origin: "Andhra Pradesh, India",
      harvest: "2024",
      description: "Fiery red chili powder with perfect heat balance",
      badge: "Hot",
      inStock: true,
      weights: ["100g", "250g", "500g"],
      features: ["Medium Heat", "Vibrant Color", "Pure"]
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(demoProducts)
      setLoading(false)
    }, 1000)
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product, 1, product.weights[0])
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Premium': return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      case 'Bestseller': return 'bg-gradient-to-r from-green-400 to-green-600'
      case 'Organic': return 'bg-gradient-to-r from-emerald-400 to-emerald-600'
      case 'New': return 'bg-gradient-to-r from-blue-400 to-blue-600'
      case 'Hot': return 'bg-gradient-to-r from-red-400 to-red-600'
      default: return 'bg-gradient-to-r from-primary-400 to-primary-600'
    }
  }

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="w-64 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-4 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
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
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Featured <span className="text-gradient">Spices</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium spices, each with its own story of origin and quality
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card p-0 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors">
                    <FiHeart size={18} />
                  </button>
                  <Link href={`/product/${product.id}`} className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors">
                    <FiEye size={18} />
                  </Link>
                </div>

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
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

                {/* Product Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                {/* Origin */}
                <p className="text-sm text-gray-600 mb-2">
                  Origin: {product.origin} • Harvest: {product.harvest}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
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

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-primary-600 hover:bg-primary-700 text-white transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FiShoppingCart size={18} />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/shop" className="btn-primary">
            View All Spices
          </Link>
        </motion.div>
      </div>
    </section>
  )
}