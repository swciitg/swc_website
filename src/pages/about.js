import Seo from '@/components/Seo'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


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
