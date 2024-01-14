import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

const JuliusSansOne = Roboto_Condensed({subsets:["latin"]});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
