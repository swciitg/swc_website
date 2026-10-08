export const DOT_COLORS = {
  lime: 'bg-lime',
  teal: 'bg-teal',
  pink: 'bg-pink',
  text: 'bg-text',
}

/** Mono label in a raised pill. `dot` adds a status dot; `href` makes it a link. */
export default function Chip({ dot, tone = 'text', href, className = '', children, ...rest }) {
  const classes = `inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-raised px-3 py-[6px] font-code text-[12px] leading-4 ${
    tone === 'mist' ? 'text-mist' : 'text-text'
  } ${href ? 'transition-colors duration-200 hover:border-muted hover:text-text' : ''} ${className}`

  const content = (
    <>
      {dot && <span aria-hidden className={`h-[6px] w-[6px] shrink-0 rounded-full ${DOT_COLORS[dot]}`} />}
      {children}
    </>
  )

  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <span className={classes} {...rest}>
      {content}
    </span>
  )
}
