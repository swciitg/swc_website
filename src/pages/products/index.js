import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CardSwcJourney from '../../components/CardSwcJourney'
import CardElectionPortal from '../../components/CardElectionPortal'
import CardOneStop from '../../components/CardOneStop'
import CardPlacementStats from '@/components/CardPlacementStats'
const inter = Inter({ subsets: ['latin'] })

export default function Products({ExperienceData}) {
  return (
    <>
    {/* this dummy div is for adjusting top position Must be included in every index file-- 3rem for Header and 9rem for Navbar*/}
    <div className='bg-black h-[12rem] w-full'></div> 
    <div className="flex flex-col h-fit">
      <div className='text-white font-black bg-black mx-auto text-[3rem] sm:text-[4rem] text-center mb-12'>Our Products</div>
      {/* Total max width of card container - 68rem or 68*16px */}
      <div className='flex gap-4 overflow-auto justify-start xl:justify-center justify-items-center bg-black'>
        <CardSwcJourney/>
        <CardElectionPortal/>
      </div>
      <div className='flex flex-row justify-center overflow-auto bg-black mb-4'> 
        <CardOneStop/> 
      </div>
      <div className='flex gap-4 overflow-y-hidden justify-start xl:justify-center justify-items-center bg-black h-fit'>
        <CardPlacementStats/>
        <CardSwcJourney/>
      </div>    
    </div>
      
    </>
  )
}
