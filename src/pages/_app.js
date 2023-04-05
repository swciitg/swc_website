import '@/styles/globals.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
export default function App({ Component, pageProps }) {
  return (
    
    // <Component {...pageProps} />
    // <Component {...pageProps} />
    <main>
    <Component {...pageProps} />
    <Header/>
    <Navbar/>
    </main>
  )
}
