'use client'
import { useState } from 'react'
import { FiMessageCircle, FiX } from 'react-icons/fi'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+919876543210"
  
  const handleDirectChat = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleDirectChat}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <FiMessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </>
  )
}