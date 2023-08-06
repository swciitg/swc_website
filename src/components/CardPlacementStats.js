import React from 'react'
export default function CardPlacementStats() {
  return (
    <div>  
      {/* card Component width-*/}
      <div className='relative w-[21rem] h-[25rem] sm:w-[39rem] sm:h-[32rem] rounded-3xl flex-inital'>
        {/* Image part of Card */}
        <div className='h-[60%] sm:h-3/4 bg-[url(../../public/cards/placementStats.jpg)] bg-cover rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' bg-[#0D2368] overflow-hidden w-full  h-fit  rounded-b-3xl px-[1rem]'>  
          <div>
            <h1 className='p-[0.5rem] sm:p-[1rem] text-white text-xl font-bold'>Placement Stats Portal</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] pb-[0.5rem] sm:pb-[1rem] px-[0.5rem] sm:px-[1rem]'>
                {/* Buttons of Card*/}
                <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://swc.iitg.ac.in/placement-stats/" target='_blank'>Website</a></li>
                <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://swc.iitg.ac.in/placement-stats/table/" target='_blank'>Tabular View</a></li>
                <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://swc.iitg.ac.in/placement-stats/charts/" target='_blank'>Chart View</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
