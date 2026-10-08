import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Accent } from '@/components/ui/SectionHeader'
import { DOT_COLORS } from '@/components/ui/Chip'
import { CONTACT, FOOTER_COLUMNS, MAILTO, PROJECT_MAILTO, SOCIALS } from '@/data/site'

const LINK = 'whitespace-nowrap font-ui text-[15px] leading-[18px] text-mist transition-colors duration-200 hover:text-text'

function Column({ title, color, children }) {
  return (
    <div className="flex shrink-0 flex-col items-start gap-[18px]">
      <div className="mb-[14px] flex items-center gap-[10px]">
        <span aria-hidden className={`h-[14px] w-[14px] rounded-[2px] ${DOT_COLORS[color]}`} />
        <h3 className="font-code text-[13px] font-medium uppercase leading-4 tracking-[0.06em] text-text">{title}</h3>
      </div>
      {children}
    </div>
  )
}

function FooterLink({ link }) {
  if (link.internal) {
    return (
      <Link href={link.href} className={LINK}>
        {link.label}
      </Link>
    )
  }
  const external = /^https?:/.test(link.href)
  return (
    <a href={link.href} className={LINK} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {link.label}
    </a>
  )
}

function SocialPill({ social }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[10px] rounded-full border border-line bg-raised py-[10px] pl-3 pr-4 transition-colors max-sm:w-[calc(50%-6px)] sm:pr-[14px] duration-200 hover:border-muted"
    >
      <span className={`flex h-8 w-8 items-center justify-center rounded-full ${DOT_COLORS[social.color]}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={social.icon} alt="" width={18} height={18} loading="lazy" decoding="async" />
      </span>
      <span className="font-ui text-[14px] font-medium text-text">{social.label}</span>
      <span aria-hidden className="font-ui text-[14px] font-medium text-muted">↗</span>
    </a>
  )
}

/** Footer C2: dark partner band, tricolor stripes with a teal glow, colour-coded columns, social links, teal bar. */
export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="overflow-hidden bg-void">
      <div className="relative mx-auto max-w-[1920px] lg:h-[540px]">
        <div className="relative z-10 flex flex-col items-start gap-5 px-5 pt-10 sm:gap-6 sm:px-10 sm:pt-12 lg:absolute lg:left-24 lg:top-12 lg:p-0">
          <p className="font-code text-[12px] uppercase leading-4 tracking-[0.06em] text-teal">$ swc collaborate --org=yours</p>
          <h2 className="font-ui text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-text sm:text-[52px] sm:leading-[56px]">
            Got a product?
            <br />
            Let&apos;s build it <Accent>together.</Accent>
          </h2>
          <p className="max-w-[470px] font-ui text-[17px] leading-[26px] text-mist">
            Clubs, boards, startups and companies: bring us the idea. We design, build and ship it with you.
          </p>
          <div className="flex gap-2 sm:flex-wrap sm:gap-3">
            <Button href={PROJECT_MAILTO} arrow="→" className="max-sm:!p-4">
              Start a project
            </Button>
            <Button href="/products" variant="secondary" className="max-sm:!p-4">
              See our products
            </Button>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none relative mt-2 h-[240px] overflow-hidden max-sm:hidden lg:absolute lg:inset-0 lg:mt-0 lg:h-auto lg:overflow-visible"
        >
          <div className="absolute left-1/2 top-0 aspect-[1440/540] h-full -translate-x-[62%] lg:inset-0 lg:aspect-auto lg:translate-x-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/swc/v1/footer/glow.svg"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute left-[-22.92%] top-[-4.07%] h-[115.92%] w-[145.84%] max-w-none"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/swc/v1/footer/stripes.svg" alt="" loading="lazy" decoding="async" className="absolute left-[-3.33%] top-0 h-full w-[106.66%] max-w-none" />
          </div>
        </div>

        {/* Mobile stripe art: tucks 36px under the CTA, with the glow rising behind it. */}
        <div aria-hidden className="pointer-events-none relative z-[1] -mt-9 h-[270px] sm:hidden">
          <div className="absolute left-0 top-[-276px] h-[546px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/swc/v1/footer/glow-mobile.svg" alt="" loading="lazy" decoding="async" className="absolute left-[-43.59%] top-0 h-[104.58%] w-[187.18%] max-w-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/swc/v1/footer/stripes-mobile.svg" alt="" loading="lazy" decoding="async" className="absolute left-[-7.18%] top-0 h-full w-[114.36%] max-w-none" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 pb-10 pt-10 sm:pb-16 sm:px-10 lg:px-16 lg:pb-24 lg:pt-6 xl:flex-row xl:items-start xl:justify-between xl:px-24">
        <div className="hidden gap-x-8 gap-y-12 sm:flex sm:flex-wrap sm:gap-16 xl:flex-nowrap xl:gap-12">
          {FOOTER_COLUMNS.map((column) => (
            <Column key={column.title} title={column.title} color={column.color}>
              {column.links.map((link) => (
                <FooterLink key={link.label} link={link} />
              ))}
            </Column>
          ))}
          <Column title="Contact" color="text">
            <a href={MAILTO} className={LINK}>
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className={LINK}>
              {CONTACT.phone}
            </a>
            {CONTACT.address.map((line) => (
              <p key={line} className="whitespace-nowrap font-ui text-[15px] leading-[18px] text-mist">
                {line}
              </p>
            ))}
          </Column>
        </div>

        <div className="flex shrink-0 flex-col items-center sm:items-start xl:items-end">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/swc/v1/brand/glyph-paper.svg" alt="" width={111.489} height={80} loading="lazy" decoding="async" className="h-16 w-auto sm:h-20" />
            <p className="whitespace-nowrap font-ui text-[24px] font-semibold leading-[1.1] tracking-[-0.02em] text-text max-sm:text-center sm:text-[36px] sm:leading-10">
              Students’ <br className="max-sm:hidden" />
              Web Committee
            </p>
          </div>
          <p className="mt-6 max-w-[380px] font-ui text-[16px] leading-[25px] text-mist max-sm:text-center sm:mt-8 xl:mt-14 xl:text-right">
            The student tech team behind IIT Guwahati&apos;s web and apps. Twelve products shipped, built by students.
          </p>
          <div className="mt-3 flex flex-col items-center gap-3 max-sm:w-full sm:mt-6 sm:items-start sm:gap-[10px] xl:items-end">
            <p className="font-code text-[12px] font-medium uppercase leading-4 tracking-[0.06em] text-muted">Find us online</p>
            <div className="flex flex-wrap justify-center gap-3 max-sm:w-full sm:justify-start sm:gap-[10px] xl:flex-nowrap xl:justify-end">
              {SOCIALS.map((social) => (
                <SocialPill key={social.id} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 bg-teal sm:gap-x-8 sm:gap-y-2 px-5 py-4 font-code text-[12px] leading-4 text-ink">
        <p>© {year} Students&apos; Web Committee, IIT Guwahati</p>
        <a href={MAILTO} className="hover:underline">
          {CONTACT.email}
        </a>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline">
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
