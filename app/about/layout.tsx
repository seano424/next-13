// This is a Server Component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-rose-100/10 text-slate-900 container py-10">
      <head>
        <title>About Page</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
