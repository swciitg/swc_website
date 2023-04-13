import React from 'react'
export default function CardSwcJourney() {
  return (
    <div>  
      {/* card Component*/}
      <div className='relative w-[21rem] h-[25rem] sm:w-[28rem] sm:h-[32rem] rounded-3xl flex-initial'>
        {/* Image part of Card */}
        <div className='h-3/4 bg-gradient-to-bl from-[#CBF4B7] via-[#93DAA5] to-[#36A27C]  rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' bg-[#1F322B] overflow-auto w-full h-1/4 rounded-b-3xl px-[1rem] pb-[0.5rem]'>  
          <div>
            <div className='p-[0.5rem] sm:p-[1rem] text-white font-bold sticky'>SWC Journeys</div> {/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] px-[0.5rem] sm:px-[1rem]'>
              {/* Buttons of Card*/}
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-[0.5rem] bg-[#1B2B25]'><a href="" target='_blank'>Chrome Web Store</a> </li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-[0.5rem] bg-[#1B2B25]'><a href="" target='_blank'>Product Hunt</a></li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-[0.5rem] bg-[#1B2B25]'><a href="" target='_blank'>Website</a></li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-[0.5rem] bg-[#1B2B25]'><a href="" target='_blank'>Github</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
