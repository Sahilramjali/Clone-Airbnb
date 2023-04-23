import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Modal from './components/Modals/Modal'
import ClientOnly from './components/clientOnly'
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
      <body className={inter.className}>
        <Modal isOpen/>
        <ClientOnly>
        <Navbar/>
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
