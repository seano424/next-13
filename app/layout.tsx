import '../styles/globals.css'
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black text-slate-100'>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
