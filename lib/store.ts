import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  nameHindi?: string
  price: number
  originalPrice?: number
  discount?: number
  image: string
  images: string[]
  description: string
  origin: string
  harvestDate: string
  batchNumber: string
  purityPercentage: number
  flavorProfile: string[]
  heatLevel?: number
  weight: string
  inStock: boolean
  stockQuantity: number
  category: string
  labTestUrl?: string
  farmerStory?: string
  usageInstructions: string
  shelfLife: string
  certifications: string[]
}

export interface CartItem extends Product {
  quantity: number
}

export interface WishlistItem extends Product {}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  addresses: Address[]
}

export interface Address {
  id: string
  name: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  country: string
  isDefault: boolean
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  subtotal: number
  shipping: number
  tax: number
  discount: number
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  paymentMethod: string
  shippingAddress: Address
  trackingNumber?: string
  createdAt: Date
  updatedAt: Date
}

interface StoreState {
  // Cart
  cart: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number

  // Wishlist
  wishlist: WishlistItem[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean

  // User
  user: User | null
  setUser: (user: User | null) => void

  // UI State
  isCartOpen: boolean
  setCartOpen: (open: boolean) => void
  isWishlistOpen: boolean
  setWishlistOpen: (open: boolean) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: (product, quantity = 1) => {
        const cart = get().cart
        const existingItem = cart.find(item => item.id === product.id)
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          })
        } else {
          set({
            cart: [...cart, { ...product, quantity }]
          })
        }
      },
      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter(item => item.id !== productId)
        })
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        
        set({
          cart: get().cart.map(item =>
            item.id === productId
              ? { ...item, quantity }
              : item
          )
        })
      },
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0)
      },

      // Wishlist
      wishlist: [],
      addToWishlist: (product) => {
        const wishlist = get().wishlist
        if (!wishlist.find(item => item.id === product.id)) {
          set({ wishlist: [...wishlist, product] })
        }
      },
      removeFromWishlist: (productId) => {
        set({
          wishlist: get().wishlist.filter(item => item.id !== productId)
        })
      },
      isInWishlist: (productId) => {
        return get().wishlist.some(item => item.id === productId)
      },

      // User
      user: null,
      setUser: (user) => set({ user }),

      // UI State
      isCartOpen: false,
      setCartOpen: (open) => set({ isCartOpen: open }),
      isWishlistOpen: false,
      setWishlistOpen: (open) => set({ isWishlistOpen: open }),
    }),
    {
      name: 'prayan-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
      }),
    }
  )
)