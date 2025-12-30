'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiGrid, FiList, FiSearch, FiStar, FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi'
import { useCart } from '../context/CartProvider'
import Link from 'next/link'

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [showFilters, setShowFilters] = useState(false)
  
  const { addToCart } = useCart()

  // Demo products data (expanded)
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
      category: "premium",
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
      category: "spices",
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
      category: "organic",
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
      category: "premium",
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
      category: "spices",
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
      category: "spices",
      badge: "Hot",
      inStock: true,
      weights: ["100g", "250g", "500g"],
      features: ["Medium Heat", "Vibrant Color", "Pure"]
    },
    {
      id: 7,
      name: "Garam Masala Blend",
      price: 449,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 92,
      origin: "Punjab, India",
      harvest: "2024",
      description: "Traditional garam masala blend with 12 spices",
      category: "blends",
      badge: "Traditional",
      inStock: true,
      weights: ["100g", "200g", "500g"],
      features: ["12 Spices", "Traditional", "Aromatic"]
    },
    {
      id: 8,
      name: "Cumin Seeds",
      price: 249,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1599909533730-f9e0c5b0b3b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      reviews: 67,
      origin: "Rajasthan, India",
      harvest: "2024",
      description: "Earthy and warm cumin seeds for tempering",
      category: "organic",
      badge: "Organic",
      inStock: true,
      weights: ["100g", "250g", "500g"],
      features: ["Organic", "Whole Seeds", "Fresh"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Spices', count: demoProducts.length },
    { id: 'premium', name: 'Premium', count: demoProducts.filter(p => p.category === 'premium').length },
    { id: 'organic', name: 'Organic', count: demoProducts.filter(p => p.category === 'organic').length },
    { id: 'spices', name: 'Single Spices', count: demoProducts.filter(p => p.category === 'spices').length },
    { id: 'blends', name: 'Spice Blends', count: demoProducts.filter(p => p.category === 'blends').length }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(demoProducts)
      setFilteredProducts(demoProducts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return b.id - a.id
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [products, selectedCategory, searchQuery, priceRange, sortBy])

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
      case 'Traditional': return 'bg-gradient-to-r from-purple-400 to-purple-600'
      default: return 'bg-gradient-to-r from-primary-400 to-primary-600'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container-max py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container-max py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Premium Spice Collection
          </h1>
          <p className="text-xl text-gray-600">
            Discover our carefully curated selection of single-origin spices from across India
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-6">Filters</h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Spices
                </label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search spices..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-800'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 text-gray-600 hover:text-primary-600"
                >
                  <FiFilter size={18} />
                  <span>Filters</span>
                </button>
                <span className="text-gray-600">
                  {filteredProducts.length} products found
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <FiList size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group card p-0 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                      }`}
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
                  <div className="p-6 flex-1">
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

            {/* No Products Found */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                    setPriceRange([0, 5000])
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}