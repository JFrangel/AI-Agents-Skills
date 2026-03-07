import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeuralForge AI Skills',
  description: 'Catálogo de skills y design system para AI Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  )
}
