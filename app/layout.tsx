import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
// import Modal from './components/Modals/Modal'
import ClientOnly from './components/clientOnly'
import RegisterModel from './components/Modals/registerModal'
import ToasterProvider from './providers/toasterProvider'
import LoginModal from './components/Modals/loginModal';
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/Modals/rentModal'
import SearchModal from './components/Modals/searchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font=Nunito({
  subsets:["latin"],
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser=await getCurrentUser();
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
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterModel/>
          <Navbar currentUser={currentUser}/>
        
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      
      </body>
    </html>
  )
}
