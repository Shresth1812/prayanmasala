'use client'
import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Spices', href: '/shop' },
      { name: 'Premium Collection', href: '/shop?category=premium' },
      { name: 'Organic Spices', href: '/shop?category=organic' },
      { name: 'Spice Blends', href: '/shop?category=blends' },
      { name: 'Gift Sets', href: '/shop?category=gifts' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Quality Promise', href: '/quality' },
      { name: 'Farmers', href: '/farmers' },
      { name: 'Careers', href: '/careers' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Track Order', href: '/track' }
    ],
    resources: [
      { name: 'Recipes', href: '/recipes' },
      { name: 'Blog', href: '/blog' },
      { name: 'Spice Guide', href: '/guide' },
      { name: 'Cooking Tips', href: '/tips' },
      { name: 'Newsletter', href: '/newsletter' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
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

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-400" size={18} />
                <span className="text-gray-300">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary-400" size={18} />
                <span className="text-gray-300">hello@prayanspices.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-primary-400 mt-1" size={18} />
                <span className="text-gray-300">
                  123 Spice Street, Mumbai,<br />
                  Maharashtra 400001, India
                </span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest recipes, spice tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Prayan Spices. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiYoutube size={20} />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}