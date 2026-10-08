import Link from 'next/link'

/** SWC hex-node mark. Height drives the size; the mark keeps its 30.66:22 ratio. */
export function Mark({ className = 'h-[22px]' }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/swc/v1/brand/mark.svg" alt="" width={30.66} height={22} className={`${className} w-auto`} />
}

/** Mark + lowercase wordmark + "IIT Guwahati" descriptor. Use on Void or Surface. */
export default function LogoLockup({ onClick }) {
  return (
    <Link href="/" onClick={onClick} aria-label="Students' Web Committee, IIT Guwahati: home" className="flex items-center gap-3">
      <Mark />
      <span className="font-ui text-[26px] font-semibold leading-8 tracking-[-0.05em] text-text">swc</span>
      <span aria-hidden className="hidden h-[22px] w-px bg-line sm:block lg:hidden xl:block" />
      <span className="hidden whitespace-nowrap font-code text-[11px] uppercase leading-[14px] tracking-[0.06em] text-muted sm:block lg:hidden xl:block">
        IIT Guwahati
      </span>
    </Link>
  )
}
