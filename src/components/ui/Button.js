import Link from 'next/link'

const BASE =
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-[22px] py-[14px] font-ui text-[15px] font-medium leading-[18px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime'

const VARIANTS = {
  // The only lime element on a view: one per section at most.
  primary: 'bg-lime text-ink hover:bg-[#deff9c]',
  secondary: 'border border-line bg-raised text-text hover:border-muted',
}

const isInternal = (href) => href.startsWith('/') && !href.startsWith('/swc/')

/**
 * Pill button that renders as a link. `arrow` is the trailing glyph:
 * "→" for an action that continues on this site, "↗" for one that leaves the page.
 */
export default function Button({ href, variant = 'primary', arrow, className = '', children, ...rest }) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className={`transition-transform duration-200 ${
            arrow === '↗' ? 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5' : 'group-hover:translate-x-0.5'
          } ${variant === 'secondary' ? 'text-mist' : ''}`}
        >
          {arrow}
        </span>
      )}
    </>
  )

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {content}
    </a>
  )
}
