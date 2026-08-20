import Link from 'next/link'
import React, { useState } from 'react'
import { Cedarville_Cursive } from 'next/font/google'
import Image from 'next/image'
import { HiMenu, HiX } from 'react-icons/hi'
const cedar = Cedarville_Cursive({subsets:['latin'], weight:['400']})

// Single source of truth for nav items - update here to add/remove tabs
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/resources', label: 'Resources' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/team', label: 'Team' },
  { href: '/hall-of-fame', label: 'Hall of Fame' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (

    // Total Navbar height is 9rem/9*16px and a dummy box of this height to be included in every index page to fit properly other elements
      //  Total max width of Navbar from SWC logo to last button - 68rem or 68*16px
      // Below lg (1024px) the pill nav is replaced by a hamburger + dropdown menu since it no longer fits alongside the logo

    <div className="fixed top-[0rem] w-screen h-[9rem] z-50 text-left text-[1.25rem] text-white font-Inter bg-black">
      <div className="relative mx-auto mt-[0.5rem] md:mt-[2rem] h-auto flex flex-row justify-between items-center
      w-full px-[1.25rem] sm:px-[2rem] lg:px-0 xl:w-[68rem] lg:w-[48rem]">

          {/* SWC LOGO AND HEADING */}

          <Link
            className="[text-decoration:none] flex flex-row items-center justify-start gap-[0.6rem] sm:gap-[1rem] min-w-0"
            href="/"
          >
            <div className="w-[2rem] h-[3.6rem] sm:w-[2.5rem] sm:h-[4.5rem] shrink-0 flex flex-col justify-center">
             <Image src="/swc/swc-logo.png" width={250} height={250}/>
            </div>
            <div className="relative leading-[1.1rem] sm:leading-[1.25rem] font-black text-[0.9rem] sm:text-[1.1rem] lg:text-[1.25rem]">
              Students’ Web Committee
            </div>
          </Link>

          {/* DESKTOP NAVBAR (lg and up) */}

          <div className="hidden lg:flex rounded-3xl shrink-0 bg-[#1C1C1C] h-[4rem] py-[1.5rem] px-[2rem] box-border items-center justify-center text-[1rem] text-[inherit]">
            <div className="flex flex-row items-center justify-center gap-[1rem] whitespace-nowrap">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="[text-decoration:none] relative text-sm leading-[1.3rem] font-semibold text-[#777777] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              {/* <div className=" flex flex-row items-center justify-start text-[0.88rem]">
                <div className=" bg-[#A523AA] rounded-2xl h-[2rem] flex flex-row py-[0.25rem] px-[0.75rem]  items-center justify-center">
                  <Link href='/hiring' className=" text-white font-serif text-[0.4rem] md:text-[0.65rem] text-center">We Are Hiring!
                  </Link>
                </div>
              </div> */}
            </div>
          </div>

          {/* MOBILE / TABLET HAMBURGER TOGGLE (below lg) */}

          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center shrink-0 w-[2.75rem] h-[2.75rem] rounded-full bg-[#1C1C1C] text-white"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
      </div>

      {/* MOBILE / TABLET DROPDOWN MENU */}

      {isOpen && (
        <div className="lg:hidden absolute top-[9rem] left-0 w-full bg-[#1C1C1C] border-t border-white/10 shadow-lg">
          <div className="flex flex-col items-center py-[1.5rem] gap-[1.25rem]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="[text-decoration:none] text-base font-semibold text-[#777777] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

          {/* TAP FOR MORE AMAZING PROJECTS */}
              {/* Visible till md screen and invisible for smaller screens and has floating text */}
            {/* <div className=" invisible md:visible absolute -bottom-[5rem]  sm:-bottom-[7rem] lg:-right-[4em] md:-right-[6rem] sm:right-[5rem] right-[6rem] sm:w-[11.19rem] w-[8rem] md:h-[6.38rem] h-[0rem] text-center ">
              <div className="absolute top-[1.88rem] left-[6.5rem] leading-[1.5rem] md:text-[1.25rem] text-[1rem] {cedar.className} text-white">
              <p className={cedar.className}>Tap for</p>
              <p className={cedar.className}>amazing</p>
              <p className={cedar.className}>projects</p>
              </div>
              <Image src={"/swc/tap-for.svg"} width={100} height={100}/>
            </div> */}
    </div>

  )
}
