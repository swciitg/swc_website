import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Team() {
  return (
    <>
    <div className='bg-black h-[12rem] w-full'></div> 
      <div className='text-white font-black bg-black mx-auto text-[3rem] sm:text-[4rem] text-center'>Our Team</div>
    </>
  )
}
