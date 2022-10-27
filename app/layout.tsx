import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black text-slate-100">
      <head>
        <title>Next 13</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
