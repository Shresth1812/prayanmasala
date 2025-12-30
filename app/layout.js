import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { CartProvider } from './context/CartProvider'
import { AuthProvider } from './context/AuthProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ClientWrapper from './components/ClientWrapper'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Prayan Spices - Premium Single Origin Spices from India',
  description: 'Discover authentic, premium single-origin spices directly sourced from Indian farmers. Pure, fresh, and ethically sourced masalas for your kitchen.',
  keywords: 'premium spices, indian masala, single origin spices, authentic spices, pure spices, organic spices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <ClientWrapper>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
                <WhatsAppButton />
              </div>
            </ClientWrapper>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}