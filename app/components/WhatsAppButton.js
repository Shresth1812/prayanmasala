'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX } from 'react-icons/fi'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+919876543210"
  const quickMessages = [
    "Hi! I'd like to know more about your spices.",
    "Can you help me choose the right spices for my cooking?",
    "I have a question about my order.",
    "I'd like to place a bulk order.",
    "Can you tell me about your quality assurance?"
  ]

  const handleQuickMessage = (message) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const handleDirectChat = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          {isOpen ? (
            <FiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <FiMessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>

        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        )}
      </motion.div>

      {/* Chat Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FiMessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with Prayan</h3>
                  <p className="text-sm opacity-90">We're here to help!</p>
                </div>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">Quick messages:</p>
              <div className="space-y-2">
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-green-300"
                  >
                    {message}
                  </button>
                ))}
              </div>

              {/* Direct Chat Button */}
              <button
                onClick={handleDirectChat}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <FiMessageCircle size={18} />
                <span>Start New Chat</span>
              </button>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Available Mon-Sat, 9 AM - 7 PM IST<br />
                  Response time: Usually within 5 minutes
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-30"
          />
        )}
      </AnimatePresence>
    </>
  )
}