import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CardCarousel from '../components/CardCarousel'
import CarouselSlides from '../components/CarouselSlides'
import { getExperienceData } from '../../../lib/ExperienceData';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const ExperienceData = await getExperienceData()

  return {
    props: { ExperienceData }
  }
}

export default function Products({ExperienceData}) {
  return (
    <>
    <CarouselSlides ExperienceData={ExperienceData}></CarouselSlides>
    </>
  )
}
