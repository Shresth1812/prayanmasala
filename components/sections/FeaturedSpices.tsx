'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Star, MapPin } from 'lucide-react'
import { getFeaturedProducts } from '@/lib/products'
import { useStore } from '@/lib/store'
import toast from 'react-hot-toast'

export default function FeaturedSpices() {
  const featuredProducts = getFeaturedProducts()
  const { addToCart, addToWishlist, isInWishlist } = useStore()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  const handleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      toast.error('Already in wishlist!')
    } else {
      addToWishlist(product)
      toast.success(`${product.name} added to wishlist!`)
    }
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
            Premium Spice Collection
          </h2>
          <p className="subtitle max-w-2xl mx-auto">
            Discover our handpicked selection of the finest spices, each with complete traceability from farm to your kitchen.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="spice-card bg-white rounded-xl overflow-hidden shadow-card"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.discount}% OFF
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => handleWishlist(product)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'text-red-500 fill-current' : 'text-neutral-600'}`} />
                </button>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-white text-neutral-900 px-4 py-2 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
                  >
                    Quick View
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Origin */}
                <div className="flex items-center gap-1 text-xs text-neutral-500 mb-2">
                  <MapPin className="w-3 h-3" />
                  {product.origin}
                </div>

                {/* Name */}
                <h3 className="font-semibold text-neutral-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                {product.nameHindi && (
                  <p className="text-sm text-neutral-600 font-hindi mb-2">
                    {product.nameHindi}
                  </p>
                )}

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-neutral-500 ml-1">(4.9)</span>
                </div>

                {/* Purity Badge */}
                <div className="inline-flex items-center gap-1 bg-accent-50 text-accent-700 px-2 py-1 rounded-full text-xs font-medium mb-3">
                  <ShieldCheck className="w-3 h-3" />
                  {product.purityPercentage}% Pure
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="price-text">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Weight */}
                <p className="text-sm text-neutral-600 mb-4">{product.weight}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <Link href="/shop" className="btn-secondary">
            View All Spices
          </Link>
        </motion.div>
      </div>
    </section>
  )
}