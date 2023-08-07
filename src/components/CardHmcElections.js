import React from 'react'
export default function CardHmcElections() {
  return (
    <div>  
      {/* card Component*/}
      <div className='flex flex-col relative w-[21rem] h-[25rem] sm:w-[28rem] sm:h-[32rem] rounded-3xl flex-initial m-0'>
        {/* Image part of Card */}
        <div className='h-[60%] sm:h-[65.5%] bg-[url(/swc/cards/hmcElections.jpg)] bg-cover rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' bg-[#2e2f2f] overflow-hidden w-full h-fit rounded-b-3xl px-[1rem]'>  
          <div>
            <div className='p-[0.5rem] sm:p-[1rem] text-white text-xl font-bold sticky'>HMC Election portal</div> {/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] pb-[0.5rem] sm:pb-[1rem] px-[0.5rem] sm:px-[1rem]'>
              {/* Buttons of Card*/}
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://swc.iitg.ac.in/hmc_elections/" target='_blank'>Website</a> </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
