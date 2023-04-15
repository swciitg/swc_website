import React from 'react'

export default function Body() {
  return (
    <div>
      {/* this initial dummy div for adjusting top position */}
        <div className='bg-black w-full h-[12rem]'></div>  
      <div  className="h-[8rem] lg:h-[25rem] md:h-[18rem] sm:h-[18rem] relative font-inter bg-black" >
        <div className='w-85% sm:w-[30rem] md:w-[40rem] lg:w-[70rem] px-[1rem] sm:px-[0rem] mx-auto font-black text-[2rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[7rem] text-center leading-none'>
            <p className=' text-[#FEFBFF]'>We collaborate, build and ship
            </p>
        <ul className="bg-[url(/header-bg.png)] relative bg-contain inline-block leading-none text-transparent underline bg-clip-text">experiences 
        <p className='text-xs invisible'> dummy text </p>   
        </ul>
        </div>
      </div>
    </div>
  )
}
