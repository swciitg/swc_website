import React from 'react'
export default function CardOneStop() {
  return (
    <div>  
      {/* card Component*/}
      <div className='relative w-[50rem] h-[23rem] sm:w-[68rem] sm:h-[22rem] rounded-3xl flex-initial'>
        {/* Image part of Card */}
        <div className='h-3/4 bg-[url(/cards/oneStop.jpg)] bg-cover rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' h-1/4 bg-[#1A2636] overflow-auto w-full  rounded-b-3xl px-[1rem] pb-[0.5rem]'>  
          <div>
            <h1 className='p-[0.5rem] sm:p-[1rem] pb-[0.5rem] pt-[1rem] text-white font-bold'>One Stop</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] px-[0.5rem] sm:px-[1rem]'>
                {/* Buttons of Card*/}
            <li className='px-[0.5rem] rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border bg-[#0F0F1C]'><a href="" target='_blank'>Play Store</a> </li>
            <li className='px-[0.5rem] rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border bg-[#0F0F1C]'><a href="" target='_blank'>Dashboard</a></li>
            <li className='px-[0.5rem] rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border bg-[#0F0F1C]'><a href="" target='_blank'>Github</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
