import Seo from '@/components/Seo'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Seo path="/about" />
      <main className={styles.main}>
            About
      </main>
    </>
  )
}
