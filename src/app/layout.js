import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unleashing DePIN',
  description: 'Your favorite podcast for everything DePIN!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="google-site-verification" content="pGYeQXTsutqLCDxQqrPZOxUHGN84zT9979eyuKxSejQ" />
      </head>
      <body className={inter.className}>
        {children} 
        <Analytics />
        </body>
    </html>
  )
}
