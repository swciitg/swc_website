import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
export default function Header() {
  return (
    <div>
      <header className="fixed top-0 w-full h-[3rem] flex flex-col  box-border items-center justify-center ">
      <header className="relative top-0 flex flex-auto flex-row items-center  justify-center gap-[0.5rem] text-left text-[0.75rem] md:text-[1rem]  text-white font-inter bg-[url(/swc/header-bg.png)] bg-contain 2xl:bg-cover bg-repeat-y bg-top  overflow-hidden w-full h-[3rem] ">
        <div className="w-auto xl:w-[60rem] lg:w-[40rem] p-2 leading-[120%] uppercase tracking-wide	">
          <span>Your chance awaits to find your </span>
          <b>Valentine</b>
        </div>
        <Link
          className="[text-decoration:none] relative flex flex-row p-2 items-center justify-start gap-[0.5rem] text-[inherit]"
          href='/cards/apk/CollegeCupid_v1.0.6.apk' download={true}
          target="_blank"
          id="header"
        >
          <b className="relative right-0 leading-[100%]  w-[3rem] sm:w-[5rem] md:w-[9rem] ">Download Now</b>
          
           
            <svg  className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7426 3.75819L12.7426 3.25819L12.2426 3.25819H5.1715L4.6715 3.25819L4.6715 3.75819V4.75521L4.6715 5.25488L5.17117 5.25521L9.32859 5.25795L3.05018 11.5364L2.69662 11.8899L3.05018 12.2435L3.75728 12.9506L4.11084 13.3041L4.46439 12.9506L10.7428 6.67216L10.7455 10.8296L10.7459 11.3293L11.2455 11.3293H12.2426L12.7426 11.3293L12.7426 10.8293L12.7426 3.75819Z" fill="white" stroke="white"/>
</svg>

        </Link>
      </header>
    </header>
    </div>
  )
}
