import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prayan - Premium Indian Spices | Lab-Tested Purity',
  description: 'Discover India\'s finest premium spices with complete farm-to-kitchen transparency. Lab-tested purity, authentic flavors, and ethical sourcing.',
  keywords: 'premium spices, indian spices, organic spices, lab tested spices, authentic masala, farm fresh spices',
  authors: [{ name: 'Prayan Spices' }],
  creator: 'Prayan Spices',
  publisher: 'Prayan Spices',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prayan.com',
    title: 'Prayan - Premium Indian Spices',
    description: 'Lab-tested premium spices with complete transparency from farm to kitchen.',
    siteName: 'Prayan Spices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prayan - Premium Indian Spices',
    description: 'Lab-tested premium spices with complete transparency from farm to kitchen.',
    creator: '@PrayanSpices',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}