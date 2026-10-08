import { m } from 'framer-motion'

const VIEWPORT = { once: true, margin: '0px 0px -8% 0px' }

/**
 * Entrance animation, played once when the element scrolls into view.
 * Timings come from the Figma motion spec: `delay` is when the element starts,
 * `fade` and `move` are how long opacity and position take to settle.
 */
export default function Reveal({
  as = 'div',
  x = 0,
  y = 0,
  scale = 1,
  delay = 0,
  fade = 0.4,
  move = 0.5,
  children,
  ...rest
}) {
  const Tag = m[as]
  return (
    <Tag
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{
        opacity: { delay, duration: fade, ease: 'easeOut' },
        default: { delay, duration: move, ease: 'easeOut' },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** SVG stroke that draws itself from start to end. Use inside an <svg>. */
export function DrawPath({ delay = 0, duration = 0.7, ...rest }) {
  return (
    <m.path
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={VIEWPORT}
      transition={{
        pathLength: { delay, duration, ease: 'easeInOut' },
        opacity: { delay, duration: 0.01 },
      }}
      {...rest}
    />
  )
}

export { VIEWPORT }
