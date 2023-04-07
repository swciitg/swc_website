import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import WhoAreWe from '../../components/WhoAreWe'
import Footer from '../../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <WhoAreWe></WhoAreWe>
     <Footer></Footer>
    </>
  )
}
