'use client'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Prayan Spices - Premium Single Origin Spices from India</title>
        <meta name="description" content="Discover authentic, premium single-origin spices directly sourced from Indian farmers. Pure, fresh, and ethically sourced masalas for your kitchen." />
        <meta name="keywords" content="premium spices, indian masala, single origin spices, authentic spices, pure spices, organic spices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Prayan Spices - Premium Single Origin Spices" />
        <meta property="og:description" content="Authentic premium spices directly from Indian farmers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prayanspices.com" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prayan Spices - Premium Single Origin Spices" />
        <meta name="twitter:description" content="Authentic premium spices directly from Indian farmers" />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Prayan Spices",
              "url": "https://prayanspices.com",
              "logo": "https://prayanspices.com/logo.png",
              "description": "Premium single-origin spices directly sourced from Indian farmers",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}