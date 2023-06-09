import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import CardSwcJourney from '../../components/CardSwcJourney'
import CardElectionPortal from '../../components/CardElectionPortal'
import CardOneStop from '../../components/CardOneStop'
const inter = Inter({ subsets: ['latin'] })

export default function Products({ExperienceData}) {
  return (
    <>
    {/* this dummy div is for adjusting top position Must be included in every index file-- 3rem for Header and 9rem for Navbar*/}
    <div className='bg-black h-[12rem] w-full'></div> 
      <div className='text-white font-black bg-black mx-auto text-[3rem] sm:text-[4rem] text-center'>Our Products</div>
      {/* Total max width of card container - 68rem or 68*16px */}
      <div className='flex gap-[1rem] overflow-auto justify-start xl:justify-center justify-items-center px-[0.5rem] pt-[1rem] bg-black'>
      <CardSwcJourney/>
      <CardElectionPortal/>
      </div>
      <div className='flex justify-start xl:justify-center overflow-auto pt-[1rem] px-[0.5rem] bg-black'> <CardOneStop/> </div>     
 
    </>
  )
}
