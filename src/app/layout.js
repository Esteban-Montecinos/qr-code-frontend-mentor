import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qr code Frontend Mentor | Esteban Montecinos',
  description: 'Frontend Mentor - QR code component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-200`}>{children}</body>
    </html>
  )
}
