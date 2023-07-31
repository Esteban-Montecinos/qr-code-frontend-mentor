import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({weight:['400', '700', '800'], subsets: ['latin'] })

export const metadata = {
  title: 'Qr code Frontend Mentor | Esteban Montecinos',
  description: 'Frontend Mentor - QR code component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-blue-200`}>{children}</body>
    </html>
  )
}
