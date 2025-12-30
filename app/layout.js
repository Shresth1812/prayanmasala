export const metadata = {
  title: 'Prayan Spices - Premium Indian Spices',
  description: 'Premium single-origin spices from India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}