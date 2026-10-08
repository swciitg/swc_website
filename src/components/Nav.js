import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import LogoLockup, { Mark } from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
import { CONTACT, GITHUB_URL, MAILTO, NAV_LINKS, PROJECT_MAILTO, SOCIALS } from '@/data/site'

const isActive = (pathname, href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

function MenuButton({ open, onClick }) {
  const bar = 'absolute left-[10px] h-[2px] w-[18px] rounded-[1px] bg-text transition-all duration-200'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="relative h-10 w-10 shrink-0 rounded-[12px] border border-line bg-raised lg:hidden"
    >
      <span className={`${bar} ${open ? 'top-[18px] rotate-45' : 'top-[11px]'}`} />
      <span className={`${bar} top-[18px] ${open ? 'opacity-0' : ''}`} />
      <span className={`${bar} ${open ? 'top-[18px] -rotate-45' : 'top-[25px]'}`} />
    </button>
  )
}

function MobileMenu({ pathname, onNavigate }) {
  return (
    <m.div
      id="mobile-menu"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-void lg:hidden"
    >
      <nav aria-label="Primary" className="flex flex-col px-5 pt-5">
        {NAV_LINKS.map((link, index) => {
          const active = isActive(pathname, link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              aria-current={active ? 'page' : undefined}
              className="flex items-center justify-between border-b border-line py-5"
            >
              <span className={`flex items-baseline gap-4 ${active ? 'text-lime' : ''}`}>
                <span className={`font-code text-[12px] ${active ? '' : 'text-muted'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`font-ui text-[30px] font-semibold leading-9 tracking-[-0.02em] ${active ? '' : 'text-text'}`}>
                  {link.label}
                </span>
              </span>
              <span aria-hidden className="font-ui text-[18px] text-mist">↗</span>
            </Link>
          )
        })}
      </nav>
      <div className="min-h-[24px] flex-1" />
      <div className="flex flex-col items-start gap-4 px-5 pb-8 pt-5">
        <Button href={PROJECT_MAILTO} arrow="→" className="w-full !py-4 !text-[16px] !font-semibold">
          Start a project
        </Button>
        <div className="flex flex-wrap gap-2">
          {SOCIALS.map((social) => (
            <Chip key={social.id} href={social.href} dot={social.color} tone="mist" className="!py-[7px]">
              {social.label} ↗
            </Chip>
          ))}
        </div>
        <a href={MAILTO} className="font-code text-[12px] text-muted hover:text-text">
          {CONTACT.email}
        </a>
      </div>
    </m.div>
  )
}

/** Global nav. The link for the current page gets the Raised fill, Text colour and the active dot. */
export default function Nav() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <m.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ opacity: { duration: 0.35, ease: 'easeOut' }, y: { duration: 0.4, ease: 'easeOut' } }}
        className="fixed inset-x-0 top-0 z-50 border-b border-line bg-void/85 backdrop-blur-[12px]"
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between pl-5 pr-4 lg:h-20 lg:px-10 xl:px-16">
          <div className="hidden sm:block">
            <LogoLockup onClick={close} />
          </div>
          <Link href="/" onClick={close} aria-label="Students' Web Committee: home" className="flex items-center gap-[10px] sm:hidden">
            <Mark className="h-6" />
            <span className="font-ui text-[22px] font-semibold tracking-[-0.02em] text-text">SWC</span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-[2px] rounded-full border border-line bg-surface p-[6px] lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-[6px] whitespace-nowrap rounded-full px-[14px] py-2 font-ui text-[14px] font-medium leading-[17px] transition-colors duration-200 ${
                    active ? 'bg-raised text-text' : 'text-mist hover:text-text'
                  }`}
                >
                  {active && <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-lime" />}
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 lg:gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden whitespace-nowrap font-ui text-[14px] font-medium text-mist transition-colors duration-200 hover:text-text xl:block"
            >
              GitHub ↗
            </a>
            <Link
              href="/#partner"
              onClick={close}
              // The open menu has its own "Start a project" button, so the bar shows only the logo and close.
              className={`whitespace-nowrap rounded-full bg-lime px-[14px] py-[9px] font-ui text-[13px] font-semibold leading-4 text-ink lg:hidden ${open ? 'hidden' : ''}`}
            >
              Work with us
            </Link>
            <Button href="/#partner" arrow="→" className="max-lg:hidden">
              Work with us
            </Button>
            <MenuButton open={open} onClick={() => setOpen((value) => !value)} />
          </div>
        </div>
      </m.header>

      <AnimatePresence>{open && <MobileMenu pathname={pathname} onNavigate={close} />}</AnimatePresence>
    </>
  )
}
