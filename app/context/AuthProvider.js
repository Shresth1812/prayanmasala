'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for saved user session
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('prayan-user')
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // For demo purposes, simulate successful login
      const demoUser = {
        id: '1',
        name: 'Demo User',
        email: email,
        phone: '+91-9876543210'
      }
      setUser(demoUser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('prayan-user', JSON.stringify(demoUser))
      }
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const register = async (userData) => {
    try {
      // For demo purposes, simulate successful registration
      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      }
      setUser(newUser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('prayan-user', JSON.stringify(newUser))
      }
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('prayan-user')
      localStorage.removeItem('prayan-token')
    }
  }

  const updateProfile = async (updatedData) => {
    try {
      // For demo purposes, simulate successful update
      const updatedUser = { ...user, ...updatedData }
      setUser(updatedUser)
      if (typeof window !== 'undefined') {
        localStorage.setItem('prayan-user', JSON.stringify(updatedUser))
      }
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}