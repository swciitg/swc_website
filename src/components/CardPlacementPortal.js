import React from 'react'
export default function CardPlacementPortal() {
  return (
    <div>  
      {/* card Component*/}
      <div className='flex flex-col relative w-[50rem] h-[23rem] sm:w-[68rem] sm:h-[22rem] rounded-3xl flex-initial'>
        {/* Image part of Card */}
        <div className='h-[60%] sm:h-[65%] bg-[url(/cards/placementPortal.jpg)] bg-cover rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className='bg-[#571A18] overflow-hidden w-full h-fit rounded-b-3xl px-[1rem] pb-[0.5rem]'>  
          <div>
            <h1 className='p-[0.5rem] sm:p-[1rem] pb-[0.5rem] pt-[1rem] text-white text-xl font-bold'>Placement Portal</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] pb-[0.5rem] sm:pb-[1rem] px-[0.5rem] sm:px-[1rem]'>
                {/* Buttons of Card*/}
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://online.iitg.ac.in/tnp/" target='_blank'>Website</a> </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
