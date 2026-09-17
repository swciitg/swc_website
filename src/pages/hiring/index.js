import Head from 'next/head'
import { Inter} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { getHiringCardData } from '../../../lib/HiringCardData'
import WeAreHiring from '@/components/WeAreHiring'
import { getExperienceData } from '../../../lib/ExperienceData'
import CarouselSlides from '../../components/CarouselSlides'

export async function getStaticProps() {
  // Storing data of Hiring Cards from json file
  const hiringCardData=await getHiringCardData();
  const ExperienceData = await getExperienceData()

  return {
    notFound: true, // 404 not found
    props: { hiringCardData, ExperienceData }
  }
}

export default function Home({ExperienceData,hiringCardData}) {
// console.log(cardData)
  return (
    <>
    <Head>
      <title>Hiring - Students&#39; Web Committee</title>
      <meta name="description" content="Join the Students Web Committee at IIT Guwahati. See open roles and learn what it is like to build digital products for the campus community." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Students' Web Committee" />
      <meta property="og:title" content="Hiring - Students' Web Committee" />
      <meta property="og:description" content="Open roles at Students Web Committee, IIT Guwahati. Build digital products for campus life." />
      <meta property="og:image" content="https://swc.iitg.ac.in/og-image.png" />
      <meta property="og:url" content="https://swc.iitg.ac.in/hiring" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hiring - Students' Web Committee" />
      <meta name="twitter:description" content="Open roles at Students Web Committee, IIT Guwahati. Build digital products for campus life." />
      <meta name="twitter:image" content="https://swc.iitg.ac.in/og-image.png" />
    </Head>
    <div className='h-[12rem] w-full'> </div>

    <div>
       <WeAreHiring cardData={hiringCardData}></WeAreHiring>
    </div>
    <div className='flex justify-center xl:justify-center overflow-auto pt-16 px-[0.5rem] bg-black'>
      <CarouselSlides ExperienceData={ExperienceData}></CarouselSlides>
      </div>
    </>
  )
}
