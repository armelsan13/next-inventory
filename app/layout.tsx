import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from '@/context/AuthProviders'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Armel\'s App',
  description: 'Hooray!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="light">
      <body className='dark:bg-gray-100 dark:text-gray-900'>
        <NextAuthProvider>
        <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  )
}
