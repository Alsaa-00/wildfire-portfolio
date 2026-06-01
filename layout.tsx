import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Wildfire Evacuation Zone Prediction | ML Research Project',
  description: 'Predictive Modeling for Wildfire Evacuation Zone Hit Probability - Machine Learning Course Project by KLE Technological University',
  keywords: ['wildfire prediction', 'machine learning', 'evacuation zones', 'disaster management', 'AI research'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
