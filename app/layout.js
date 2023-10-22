import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBNB CLONE',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://kit.fontawesome.com/your-kit-id.js" crossorigin="anonymous"></script>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
