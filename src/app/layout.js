import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

const JuliusSansOne = Roboto_Condensed({subsets:["latin"]});

export const metadata = {
  title: 'Self Drive Car Rental - Kanha Tour & Travells',
  description: 'Experience the freedom and flexibility of exploring your destination at your own pace with our reliable and convenient self-drive car rental service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JuliusSansOne.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
