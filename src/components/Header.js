import Link from 'next/link'
import React from 'react'
export default function Header() {
  return (
    <div>
      <header className="fixed top-0 w-full h-[3rem] flex flex-col  box-border items-center justify-center ">
      <header className="relative top-0 flex flex-auto flex-row items-center  justify-center gap-[0.5rem] text-left text-[0.75rem] md:text-[1rem]  text-white font-inter bg-[url(/header-bg.png)] bg-contain 2xl:bg-cover bg-repeat-y bg-top  overflow-hidden w-full h-[3rem] ">
        <div className="w-auto xl:w-[60rem] lg:w-[40rem] p-2 leading-[120%] uppercase tracking-wide	">
          <span>SWC is hiring for various </span>
          <b>positions</b>
        </div>
        <Link
          className="[text-decoration:none] relative flex flex-row p-2 items-center justify-start gap-[0.5rem] text-[inherit]"
          href="/hiring"
          target="_blank"
          id="header"
        >
          <b className="relative right-0 leading-[120%] uppercase w-[3rem] sm:w-[5rem] md:w-[7rem]">Learn More</b>
          <img
            className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
            alt=""
            src="/arrowup.svg"
          />
        </Link>
      </header>
    </header>
    </div>
  )
}
