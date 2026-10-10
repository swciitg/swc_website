import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { DM_Mono, EB_Garamond } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { LazyMotion } from 'framer-motion'
import Nav from '@/components/Nav'

const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' })
const garamond = EB_Garamond({ subsets: ['latin'], weight: ['400'], style: ['italic'], variable: '--font-garamond', display: 'swap' })

// Both are fetched after the first paint: the footer sits below the fold on every page,
// and animations only start once the page is visible.
const SiteFooter = dynamic(() => import('@/components/SiteFooter'))
const loadMotion = () => import('@/lib/motionFeatures').then((module) => module.default)

// Agentation is a dev-only annotation toolbar. It is a devDependency, so the production image
// (npm ci --production) does not have it: the constant condition lets the build drop this import.
const Agentation =
  process.env.NODE_ENV === 'development'
    ? dynamic(() => import('agentation').then((module) => module.Agentation), { ssr: false })
    : () => null

export default function App({ Component, pageProps }) {
  return (
    <LazyMotion features={loadMotion}>
      <div className={`${GeistSans.variable} ${dmMono.variable} ${garamond.variable} bg-black text-white`}>
        <Nav />
        <Component {...pageProps} />
        <SiteFooter />
        <Agentation />
      </div>
    </LazyMotion>
  )
}
