import Head from 'next/head'
import { Inter} from 'next/font/google'
import Headline from '../components/Headline'
import WhoAreWe from '../components/WhoAreWe'
import SocialTags from '@/components/SocialTags'
import ExploreBrowseTags from '@/components/ExploreBrowseTags'
const inter = Inter({ subsets: ['latin'] })
// import { getHiringCardData } from '../../lib/HiringCardData'
// import WeAreHiring from '@/components/WeAreHiring'
import LandingCard1 from '@/components/LandingCard1'
import LandingCard2 from '@/components/LandingCard2'
import LandingCard3 from '@/components/LandingCard3'
import LandingCard4 from '@/components/LandingCard4'



export default function Home() {
// console.log(cardData)
  return (
    <>
      <Head>
        <title>Students&#39; Web Committee</title>
        <meta name="description" content="Students Web Committee (SWC) at IIT Guwahati designs and builds digital platforms and tools that power student life on campus, from elections to placements." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Students' Web Committee" />
        <meta property="og:title" content="Students' Web Committee" />
        <meta property="og:description" content="Students Web Committee at IIT Guwahati builds digital platforms and tools that power student life on campus." />
        <meta property="og:image" content="https://swc.iitg.ac.in/og-image.png" />
        <meta property="og:url" content="https://swc.iitg.ac.in" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Students' Web Committee" />
        <meta name="twitter:description" content="Students Web Committee at IIT Guwahati builds digital platforms and tools that power student life on campus." />
        <meta name="twitter:image" content="https://swc.iitg.ac.in/og-image.png" />
      </Head>
      <Headline/>
      {/* <LandingCard></LandingCard> */}
       <div className="flex w-full justify-center items-center my-[5%]">
        <div className="w-full md:w-4/5 lg:w-3/5 flex flex-col md:flex-row justify-center items-center min-h-fit space-y-6 md:space-x-6 md:space-y-0">
          <div className="flex flex-col justify-center items-center self-center w-full space-y-6">
            <SocialTags></SocialTags>
            <LandingCard1></LandingCard1>
            <LandingCard2></LandingCard2>

          </div>
          <div className="flex flex-col justify-center items-center self-center w-full space-y-6">
          <LandingCard3></LandingCard3>
          <LandingCard4></LandingCard4>

            <ExploreBrowseTags></ExploreBrowseTags>
          </div>
        </div>
      </div>
      <WhoAreWe></WhoAreWe> 
    </>
  )
}
