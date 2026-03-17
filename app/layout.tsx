import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Snick Sports — Know your game. Grow your game.',
  description:
    'AI-powered sports performance platform. Get frame-by-frame analysis, auto-edited highlights, and a shareable player profile.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#08040F] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
