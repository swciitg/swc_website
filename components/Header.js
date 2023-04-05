import React from 'react'
export default function Header() {
  return (
    <div>
      <header className="fixed top-0 z-50 w-full h-[3rem] flex flex-col  box-border items-center justify-center ">
      <header className="relative top-0 flex flex-auto flex-row items-center  justify-center gap-[0.5rem] text-left text-[0.75rem] md:text-[1rem]  text-white font-inter bg-[url(/header-bg.png)] bg-contain bg-repeat-y bg-top  overflow-hidden w-full h-[3rem] ">
        <div className="w-auto xl:w-[60rem] lg:w-[40rem] p-2 leading-[120%] uppercase">
          <span>Freshers Orientation is scheduled on </span>
          <b>23RD APR ‘22</b>
        </div>
        <a
          className="[text-decoration:none] relative flex flex-row p-2 items-center justify-start gap-[0.5rem] text-[inherit]"
          href="https://swc.iitg.ac.in/"
          target="_blank"
          id="header"
        >
          <b className="relative right-0 leading-[120%] uppercase w-[3rem] sm:w-[5rem] md:w-[7rem]">Learn More</b>
          <img
            className="relative w-[1rem] h-[1rem] shrink-0 overflow-hidden"
            alt=""
            src="/arrowup.svg"
          />
        </a>
      </header>
    </header>
    </div>
  )
}
