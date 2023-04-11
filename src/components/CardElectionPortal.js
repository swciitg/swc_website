import React from 'react'
export default function CardElectionPortal() {
  return (
    <div>  
      {/* card Component width-*/}
      <div className='relative w-[39rem] h-[32rem] rounded-3xl flex-inital'>
        {/* Image part of Card */}
        <div className='h-4/5 bg-gradient-to-bl from-[#A06DB2] via-[#EEDDA1] to-[#9A5D89]  rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' bg-[#321F24] overflow-hidden w-full h-1/5 rounded-b-3xl px-[1rem]'>  
          <div>
            <h1 className='p-[1rem] text-white font-bold'>Election Portal</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] px-[1rem]'>
                {/* Buttons of Card*/}
            <li className='rounded-[2.5rem] border-white/50 border px-[0.5rem] bg-[#2B1B1B]'><a href="" target='_blank'>Chrome Web Store</a> </li>
            <li className='rounded-[2.5rem] border-white/50 border px-[0.5rem] bg-[#2B1B1B]'><a href="" target='_blank'>Product Hunt</a></li>
            <li className='rounded-[2.5rem] border-white/50 border px-[0.5rem] bg-[#2B1B1B]'><a href="" target='_blank'>Website</a></li>
            <li className='rounded-[2.5rem] border-white/50 border px-[0.5rem] bg-[#2B1B1B]'><a href="" target='_blank'>Github</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
