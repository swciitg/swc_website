import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { EB_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import { LazyMotion } from 'framer-motion'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains', display: 'swap' })
const garamond = EB_Garamond({ subsets: ['latin'], weight: ['400'], style: ['italic'], variable: '--font-garamond', display: 'swap' })

// Both are fetched after the first paint: the footer sits below the fold on every page,
// and animations only start once the page is visible.
const SiteFooter = dynamic(() => import('@/components/SiteFooter'))
const loadMotion = () => import('@/lib/motionFeatures').then((module) => module.default)

export default function App({ Component, pageProps }) {
  return (
    <LazyMotion features={loadMotion}>
      <main className={`${inter.variable} ${jetbrains.variable} ${garamond.variable} bg-black text-white`}>
        <Nav />
        <Component {...pageProps} />
        <SiteFooter />
      </main>
    </LazyMotion>
  )
}
