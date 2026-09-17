import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CardSwcJourney from '../../components/CardSwcJourney'
import CardElectionPortal from '../../components/CardElectionPortal'
import CardOneStop from '../../components/CardOneStop'
import CardPlacementStats from '@/components/CardPlacementStats'
import CardHmcElections from '@/components/CardHmcElections'
import CardPlacementPortal from '@/components/CardPlacementPortal'
import CardSenatePortal from '@/components/CardSenatePortal'
import CardResumeBuilder from '@/components/CardResumeBuilder'
import CardWelfareBoard from '@/components/CardWelfareBoard'
import CardSportsBoard from '@/components/CardSportsBoard'
const inter = Inter({ subsets: ['latin'] })

export default function Products({ExperienceData}) {
  return (
    <>
    <Head>
      <title>Our Products - Students&#39; Web Committee</title>
      <meta name="description" content="Explore the digital products built by Students Web Committee at IIT Guwahati, including election portals, placement stats, and campus board websites." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Students' Web Committee" />
      <meta property="og:title" content="Our Products - Students' Web Committee" />
      <meta property="og:description" content="Digital products built by Students Web Committee at IIT Guwahati for campus life." />
      <meta property="og:image" content="https://swc.iitg.ac.in/og-image.png" />
      <meta property="og:url" content="https://swc.iitg.ac.in/products" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Products - Students' Web Committee" />
      <meta name="twitter:description" content="Digital products built by Students Web Committee at IIT Guwahati for campus life." />
      <meta name="twitter:image" content="https://swc.iitg.ac.in/og-image.png" />
    </Head>
    {/* this dummy div is for adjusting top position Must be included in every index file-- 3rem for Header and 9rem for Navbar*/}
    <div className='bg-black h-[12rem] w-full'></div>
    <div className="flex flex-col h-fit w-[90%] overflow-hidden sm:w-full sm:items-center mx-auto">
      <div className='text-white font-black bg-black mx-auto text-[3rem] sm:text-[4rem] text-center'>Our Products</div>
      <hr class="w-48 h-px mx-auto mt-6 mb-10 bg-white border-0 rounded"></hr>
      {/* Total max width of card container - 68rem or 68*16px */}
      <div className='flex gap-4 overflow-x-auto justify-start xl:justify-center justify-items-center bg-black'>
        <CardSwcJourney/>
        <CardElectionPortal/>
      </div>
      <div className='flex flex-row justify-start items-center overflow-auto bg-black sm:mb-4 sm:mt-2'> 
        <CardOneStop/> 
      </div>
      <div className='flex gap-4 overflow-y-hidden justify-start xl:justify-center justify-items-center bg-black h-fit'>
        <CardPlacementStats/>
        <CardHmcElections/>
      </div>
      <div className='flex flex-row justify-start overflow-auto bg-black mb-4 mt-2'>
        <CardPlacementPortal/>
      </div>
      <div className='flex gap-4 overflow-y-hidden justify-start xl:justify-center justify-items-center bg-black h-fit'>
        <CardSenatePortal/>
        <CardResumeBuilder/>
      </div>
      <div className='flex gap-4 overflow-y-hidden justify-start xl:justify-center justify-items-center bg-black h-fit'>
        <CardWelfareBoard/>
        <CardSportsBoard/>
      </div>
    </div>
      
    </>
  )
}
