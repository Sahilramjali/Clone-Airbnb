import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
// import Modal from './components/Modals/Modal'
import ClientOnly from './components/clientOnly'
import RegisterModel from './components/Modals/registerModal'
import ToasterProvider from './providers/toasterProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font=Nunito({
  subsets:["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>
          Airbnb
        </title>
        <link rel='icon' href='/airbnb.svg' type='image/x-icon'/>
      </head>
      <body className={font.className}>
        
        <ClientOnly>
          <ToasterProvider/>
        <RegisterModel/>
        <Navbar/>
        
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
