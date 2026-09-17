import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About - Students&#39; Web Committee</title>
        <meta name="description" content="Learn about the Students Web Committee at IIT Guwahati, the student body that designs, develops, and maintains digital platforms for the campus community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Students' Web Committee" />
        <meta property="og:title" content="About - Students' Web Committee" />
        <meta property="og:description" content="Meet the Students Web Committee, the team behind IIT Guwahatis digital campus platforms." />
        <meta property="og:image" content="https://swc.iitg.ac.in/og-image.png" />
        <meta property="og:url" content="https://swc.iitg.ac.in/about" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - Students' Web Committee" />
        <meta name="twitter:description" content="Meet the Students Web Committee, the team behind IIT Guwahatis digital campus platforms." />
        <meta name="twitter:image" content="https://swc.iitg.ac.in/og-image.png" />
      </Head>
      <main className={styles.main}>
            About
      </main>
    </>
  )
}
