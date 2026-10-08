import { unstable_getImgProps as getImgProps } from 'next/image'

// Large screens get a lightly compressed file; phones get a smaller, more compressed one.
const DESKTOP_QUALITY = 85
const MOBILE_QUALITY = 60
const DESKTOP_QUERY = '(min-width: 1024px)'

/**
 * Photo that fills its nearest positioned ancestor, cropped to cover it.
 *
 * sizes     how wide the photo renders at each breakpoint, so the browser picks the smallest file that is sharp
 * position  object-position class; portraits default to slightly above centre so faces stay in frame
 * priority  load eagerly; set it only for photos visible without scrolling
 */
export default function Photo({ src, alt, sizes, position = 'object-[50%_22%]', priority = false, className = '' }) {
  const shared = { src, alt, sizes, fill: true, priority }
  const { props: desktop } = getImgProps({ ...shared, quality: DESKTOP_QUALITY })
  // React 18.2 only accepts the lowercase attribute name.
  const { fetchPriority, ...mobile } = getImgProps({ ...shared, quality: MOBILE_QUALITY }).props

  return (
    <picture>
      <source media={DESKTOP_QUERY} srcSet={desktop.srcSet} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...mobile} fetchpriority={fetchPriority} className={`object-cover ${position} ${className}`} />
    </picture>
  )
}
