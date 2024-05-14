import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Blogging App',
  description: 'It is Great to Blog Here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="bloglogo.png"
        />
      </head>
      <body className={roboto.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
