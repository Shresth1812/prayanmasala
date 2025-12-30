'use client'
import { createContext, useContext, useReducer, useEffect } from 'react'
import { showToast } from '../utils/toast'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload || []
      }
    
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.selectedWeight === action.payload.selectedWeight
      )
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id && item.selectedWeight === action.payload.selectedWeight
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        return { ...state, items: updatedItems }
      } else {
        return { ...state, items: [...state.items, action.payload] }
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.selectedWeight === action.payload.selectedWeight)
        )
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.selectedWeight === action.payload.selectedWeight
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }
    
    case 'CLEAR_CART':
      return { ...state, items: [] }
    
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('prayan-cart')
      if (savedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) })
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('prayan-cart', JSON.stringify(state.items))
    }
  }, [state.items])

  const addToCart = (product, quantity = 1, selectedWeight = '100g') => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedWeight,
      quantity,
      maxQuantity: product.stock || 10
    }
    
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    showToast(`${product.name} added to cart!`)
  }

  const removeFromCart = (id, selectedWeight) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, selectedWeight } })
    showToast('Item removed from cart', 'info')
  }

  const updateQuantity = (id, selectedWeight, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, selectedWeight)
      return
    }
    
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, selectedWeight, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    showToast('Cart cleared')
  }

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }

  const isInCart = (id, selectedWeight = '100g') => {
    return state.items.some(item => item.id === id && item.selectedWeight === selectedWeight)
  }

  const getCartItem = (id, selectedWeight = '100g') => {
    return state.items.find(item => item.id === id && item.selectedWeight === selectedWeight)
  }

  const value = {
    cartItems: state.items,
    cartCount: getCartCount(),
    cartTotal: getCartTotal(),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getCartItem
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}