export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Prayan Spices - Premium Indian Spices</title>
        <meta name="description" content="Premium single-origin spices from India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}