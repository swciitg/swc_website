import React from 'react'
export default function CardOneStop() {
  return (
    <div>  
      {/* card Component*/}
      <div className='relative w-[68rem] h-[22rem] rounded-3xl flex-initial'>
        {/* Image part of Card */}
        <div className='h-3/4 bg-gradient-to-br from-[#839BCC] via-[#5271AD] to-[#3A5C95]  rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' h-1/4 bg-[#1A2636] overflow-hidden w-full  rounded-b-3xl px-[1rem]'>  
          <div>
            <h1 className='px-[1rem] pb-[0.5rem] pt-[1rem] text-white font-bold'>One Stop</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] px-[1rem]'>
                {/* Buttons of Card*/}
            <li className='px-[0.5rem] rounded-[2.5rem] border-white/50 border bg-[#0F0F1C]'><a href="" target='_blank'>Play Store</a> </li>
            <li className='px-[0.5rem] rounded-[2.5rem] border-white/50 border bg-[#0F0F1C]'><a href="" target='_blank'>Dashboard</a></li>
            <li className='px-[0.5rem] rounded-[2.5rem] border-white/50 border bg-[#0F0F1C]'><a href="" target='_blank'>Github</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
