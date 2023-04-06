import Link from 'next/link'
import React from 'react'
import { Cedarville_Cursive } from 'next/font/google'
const cedar = Cedarville_Cursive({subsets:['latin'], weight:['400']})

export default function Navbar() {
  return (

    <div className="fixed z-40 top-[3rem] w-screen h-[9rem] sm:h-[15rem]  text-left text-[1.25rem] text-white font-Inter bg-black">
      <div className=" relative mx-auto mt-[0.5rem] md:mt-[2rem] h-auto flex md:flex-row flex-col justify-between items-top 
      xl:w-[68rem] lg:w-[48rem] md:w-[35rem]">
        
          {/* SWC LOGO AND HEADING */}

          <a
            className="[text-decoration:none] flex flex-row items-center justify-start gap-[1rem] md:mx-0 mx-auto"
            href="/"
          >
            <div className="w-[2.5rem] h-[4.5rem] shrink-0 flex flex-col justify-center">
              <img
                className="relative w-[2.5rem] h-[1.81rem] shrink-0 object-cover"
                alt=""
                src="/swc-logo.png"
              />
            </div>
            <div className="relative leading-[1.25rem] font-black">
              Students’ Web Committee
            </div>
          </a>

          {/* NAVBAR */}

          <div className="rounded-3xl shrink-0 bg-[#1C1C1C] w-[20rem] sm:w-[27rem]  h-[2rem] sm:h-[4rem] md:mx-0 mx-auto overflow-hidden flex flex-row py-[1.5rem] px-[2rem] box-border items-center justify-center text-[1rem] text-[inherit]">
            <div className="flex flex-row items-center justify-center gap-[1.5rem]">
              <div className=" h-[1.25rem] flex flex-col items-center justify-start gap-[0.25rem] text-[inherit]">
                <Link href='/'className="relative leading-[1.25rem] text-[#777777] hover:text-white font-semibold">Home</Link>
                {/* <div className="relative box-border w-[0.38rem] h-[0.13rem] shrink-0 border-t-[2px] border-solid border-white" /> */}
              </div>
              <a href='/product' className="[text-decoration:none] relative leading-[1.25rem] font-semibold text-[#777777] hover:text-white">
                Products
              </a>
              <a href='/team'className="[text-decoration:none] relative leading-[1.25rem] font-semibold  text-[#777777] hover:text-white">
                Team
              </a>
              <div className=" flex flex-row items-center justify-start text-[0.88rem]">
                <div className=" bg-[#A523AA] rounded-2xl h-[2rem] flex flex-row py-[0.25rem] px-[0.75rem]  items-center justify-center">
                  <a href='/hiring' className=" text-white font-serif text-[0.5rem] sm:text-[0.75rem] text-center lg:text-[1rem]">We Are Hiring!"
                  </a> 
              </div>
            </div>
          </div>
          </div>

          {/* TAP FOR MORE AMAZING PROJECTS*/}

            <div className=" invisible md:visible absolute -bottom-[5rem]  sm:-bottom-[7rem] lg:-right-[4em] md:-right-[6rem] sm:right-[5rem] right-[6rem] sm:w-[11.19rem] w-[8rem] md:h-[6.38rem] h-[0rem] text-center ">
              <div className="absolute top-[1.88rem] left-[6.5rem] leading-[1.5rem] md:text-[1.25rem] text-[1rem] {cedar.className} text-white">
              <p className={cedar.className}>Tap for</p>
              <p className={cedar.className}>amazing</p>
              <p className={cedar.className}>projects</p>
              </div>
              <img
              className="absolute top-[-0.03rem] left-[0.03rem] w-[3rem] h-[2rem] md:w-[5.76rem] md:h-[4.32rem]"
              alt=""
              src="/tap-for.svg"
              />  
            </div>
      </div>
    </div>
  )
}
