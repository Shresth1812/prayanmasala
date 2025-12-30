import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Prayan Spices - Premium Single Origin Spices from India',
  description: 'Discover authentic, premium single-origin spices directly sourced from Indian farmers. Pure, fresh, and ethically sourced masalas for your kitchen.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}