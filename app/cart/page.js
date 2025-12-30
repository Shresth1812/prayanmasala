'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowRight, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi'
import { useCart } from '../context/CartProvider'
import { showToast } from '../utils/toast'

export default function CartPage() {
  const { cartItems, cartTotal, cartCount, updateQuantity, removeFromCart, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const shippingCost = cartTotal >= 999 ? 0 : 99
  const tax = Math.round(cartTotal * 0.05) // 5% tax
  const finalTotal = cartTotal + shippingCost + tax - discount

  const handleQuantityChange = (id, selectedWeight, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id, selectedWeight)
    } else {
      updateQuantity(id, selectedWeight, newQuantity)
    }
  }

  const handleApplyPromo = async () => {
    setIsApplyingPromo(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const promoCodes = {
      'WELCOME10': 0.1,
      'SAVE20': 0.2,
      'FIRST15': 0.15
    }
    
    if (promoCodes[promoCode.toUpperCase()]) {
      const discountAmount = Math.round(cartTotal * promoCodes[promoCode.toUpperCase()])
      setDiscount(discountAmount)
      showToast(`Promo code applied! You saved ₹${discountAmount}`)
    } else {
      showToast('Invalid promo code', 'error')
    }
    
    setIsApplyingPromo(false)
  }

  if (cartCount === 0) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container-max py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiShoppingBag size={48} className="text-gray-400" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any spices to your cart yet. 
              Explore our premium collection and discover authentic flavors.
            </p>
            <Link href="/shop" className="btn-primary">
              Start Shopping
            </Link>
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
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Cart Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <FiTrash2 size={16} />
                    <span>Clear Cart</span>
                  </button>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.selectedWeight}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-6"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Weight: {item.selectedWeight}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-primary-600">
                            ₹{item.price}
                          </span>
                          <span className="text-sm text-gray-500">per unit</span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.selectedWeight, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-500 hover:text-primary-600 transition-colors"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.selectedWeight, item.quantity + 1)}
                          disabled={item.quantity >= item.maxQuantity}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-500 hover:text-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          ₹{item.price * item.quantity}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedWeight)}
                          className="text-red-600 hover:text-red-700 text-sm mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 flex items-center space-x-3">
                <FiTruck className="text-green-600" size={24} />
                <div>
                  <h4 className="font-medium text-gray-900">Free Shipping</h4>
                  <p className="text-sm text-gray-600">On orders above ₹999</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center space-x-3">
                <FiShield className="text-blue-600" size={24} />
                <div>
                  <h4 className="font-medium text-gray-900">Secure Payment</h4>
                  <p className="text-sm text-gray-600">SSL encrypted checkout</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center space-x-3">
                <FiRefreshCw className="text-purple-600" size={24} />
                <div>
                  <h4 className="font-medium text-gray-900">Easy Returns</h4>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={!promoCode || isApplyingPromo}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isApplyingPromo ? 'Applying...' : 'Apply'}
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Try: WELCOME10, SAVE20, FIRST15
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cartTotal}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : `₹${shippingCost}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span className="font-medium">₹{tax}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-primary-600">₹{finalTotal}</span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Progress */}
              {cartTotal < 999 && (
                <div className="mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-800">
                      Add ₹{999 - cartTotal} more for free shipping
                    </span>
                    <FiTruck className="text-green-600" size={16} />
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((cartTotal / 999) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <Link 
                href="/checkout"
                className="w-full btn-primary flex items-center justify-center space-x-2 mb-4"
              >
                <span>Proceed to Checkout</span>
                <FiArrowRight size={18} />
              </Link>

              {/* Continue Shopping */}
              <Link 
                href="/shop"
                className="w-full btn-secondary text-center block"
              >
                Continue Shopping
              </Link>

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <FiShield size={16} />
                  <span>Secure SSL Encrypted Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}