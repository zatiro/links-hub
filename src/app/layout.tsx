import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Links Hub',
  description: 'Everything linked in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-zinc-900'}>
        <header className="sticky top-0 z-50 h-16 w-full bg-sky-700 bg-opacity-70 shadow-md backdrop-blur"></header>
        {children}
      </body>
    </html>
  )
}
