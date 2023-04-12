import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CardCarousel from '../components/CardCarousel'

const inter = Inter({ subsets: ['latin'] })
export default function Products() {
  return (
    <>
      {/* <Cursor nums={10} startColor ='yellow' endColor='orange'/> */}
      <CardCarousel></CardCarousel>
      Products
    </>
  )
}
