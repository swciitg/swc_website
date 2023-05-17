import React from 'react'
export default function CardElectionPortal() {
  return (
    <div>  
      {/* card Component width-*/}
      <div className='relative w-[21rem] h-[25rem] sm:w-[39rem] sm:h-[32rem] rounded-3xl flex-inital'>
        {/* Image part of Card */}
        <div className='h-[60%] sm:h-3/4 bg-[url(/cards/electionPortal.jpg)] bg-cover rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className=' bg-[#321F24] overflow-hidden w-full  h-fit rounded-b-3xl px-[1rem]'>  
          <div>
            <h1 className='p-[0.5rem] sm:p-[1rem] text-white text-xl font-bold'>Election Portal</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] pb-[0.5rem] sm:pb-[1rem] px-[0.5rem] sm:px-[1rem]'>
                {/* Buttons of Card*/}
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50'><a href="" target='_blank'>Chrome Web Store</a> </li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50'><a href="" target='_blank'>Product Hunt</a></li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50'><a href="" target='_blank'>Website</a></li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50'><a href="" target='_blank'>Github</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
