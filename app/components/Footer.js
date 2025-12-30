import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-white">Prayan</h1>
                <p className="text-xs text-gray-400 -mt-1">Premium Spices</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bringing you the finest single-origin spices directly from heritage farms across India. 
              Experience authentic flavors with complete transparency and quality assurance.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-orange-400" size={18} />
                <span className="text-gray-300">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-orange-400" size={18} />
                <span className="text-gray-300">hello@prayanspices.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-orange-400 mt-1" size={18} />
                <span className="text-gray-300">
                  123 Spice Street, Mumbai,<br />
                  Maharashtra 400001, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-gray-300 hover:text-orange-400 transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/quality" className="text-gray-300 hover:text-orange-400 transition-colors">Quality</Link></li>
              <li><Link href="/recipes" className="text-gray-300 hover:text-orange-400 transition-colors">Recipes</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-gray-300 hover:text-orange-400 transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-300 hover:text-orange-400 transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-orange-400 transition-colors">Returns</Link></li>
              <li><Link href="/track" className="text-gray-300 hover:text-orange-400 transition-colors">Track Order</Link></li>
              <li><Link href="/help" className="text-gray-300 hover:text-orange-400 transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Prayan Spices. All rights reserved.
            </div>

            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FiFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FiInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FiTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <FiYoutube size={20} />
              </Link>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}