import './globals.css'
import { Inter, Roboto, Great_Vibes, Montserrat } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto'     
})

export const metadata = {
  title: 'Delivery',
  description: 'delivery in all the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
        <AuthProvider >
       <div className="container">
       <Navbar />
       {children}
       <Footer />  
        </div>
          </AuthProvider>  
        </ThemeProvider>
      </body>
    </html>
  )
}




