'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem('prayan-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call - replace with actual API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData.user)
        localStorage.setItem('prayan-user', JSON.stringify(userData.user))
        localStorage.setItem('prayan-token', userData.token)
        toast.success('Login successful!')
        return { success: true }
      } else {
        const error = await response.json()
        toast.error(error.message || 'Login failed')
        return { success: false, error: error.message }
      }
    } catch (error) {
      // For demo purposes, simulate successful login
      const demoUser = {
        id: '1',
        name: 'Demo User',
        email: email,
        phone: '+91-9876543210'
      }
      setUser(demoUser)
      localStorage.setItem('prayan-user', JSON.stringify(demoUser))
      toast.success('Login successful! (Demo Mode)')
      return { success: true }
    }
  }

  const register = async (userData) => {
    try {
      // Simulate API call - replace with actual API
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      if (response.ok) {
        const result = await response.json()
        setUser(result.user)
        localStorage.setItem('prayan-user', JSON.stringify(result.user))
        localStorage.setItem('prayan-token', result.token)
        toast.success('Registration successful!')
        return { success: true }
      } else {
        const error = await response.json()
        toast.error(error.message || 'Registration failed')
        return { success: false, error: error.message }
      }
    } catch (error) {
      // For demo purposes, simulate successful registration
      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      }
      setUser(newUser)
      localStorage.setItem('prayan-user', JSON.stringify(newUser))
      toast.success('Registration successful! (Demo Mode)')
      return { success: true }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('prayan-user')
    localStorage.removeItem('prayan-token')
    toast.success('Logged out successfully')
  }

  const updateProfile = async (updatedData) => {
    try {
      // Simulate API call - replace with actual API
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('prayan-token')}`
        },
        body: JSON.stringify(updatedData)
      })

      if (response.ok) {
        const result = await response.json()
        setUser(result.user)
        localStorage.setItem('prayan-user', JSON.stringify(result.user))
        toast.success('Profile updated successfully!')
        return { success: true }
      } else {
        const error = await response.json()
        toast.error(error.message || 'Update failed')
        return { success: false, error: error.message }
      }
    } catch (error) {
      // For demo purposes, simulate successful update
      const updatedUser = { ...user, ...updatedData }
      setUser(updatedUser)
      localStorage.setItem('prayan-user', JSON.stringify(updatedUser))
      toast.success('Profile updated successfully! (Demo Mode)')
      return { success: true }
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