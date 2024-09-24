import '@/styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return (
    <main className='bg-black text-white'>
    <Component {...pageProps} />
    {/* <Header/> */}
    <Navbar/>
    <Footer/>
    </main>
  )
}
