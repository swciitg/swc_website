import Head from 'next/head'
import { Inter} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { getHiringCardData } from '../../../lib/HiringCardData'
import WeAreHiring from '@/components/WeAreHiring'
import { getExperienceData } from '../../../lib/ExperienceData'
import CarouselSlides from '../components/CarouselSlides'

export async function getStaticProps() {
  // Storing data of Hiring Cards from json file
  const hiringCardData=await getHiringCardData();
  const ExperienceData = await getExperienceData()

  return {
    props: { hiringCardData, ExperienceData }
  }
}

export default function Home({ExperienceData,hiringCardData}) {
// console.log(cardData)
  return (
    <> 
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
