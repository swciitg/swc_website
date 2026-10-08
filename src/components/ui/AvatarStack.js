import Image from 'next/image'
import Reveal from './Reveal'

const SIZES = {
  sm: { box: 'h-9 w-9', pixels: '36px', ring: 'border-[2.5px]', overlap: '-ml-[10px]', more: 'text-[12px]' },
  lg: {
    box: 'h-16 w-16',
    pixels: '64px',
    ring: 'border-[3px]',
    overlap: '-ml-[14px]',
    more: 'text-[18px]',
  },
}

const MORE_COLORS = { teal: 'bg-teal', text: 'bg-text' }

/**
 * Overlapping round portraits followed by a "+N" counter for everyone not shown.
 * `people` is [{ name, photo }], with `photo` a path in public/ so it can be resized to avatar size.
 * `total` is the size of the whole group; `motion` is { y, start, step } from the motion spec.
 */
export default function AvatarStack({ people, total, size = 'sm', color = 'teal', motion }) {
  const s = SIZES[size]
  const rest = Math.max(0, total - people.length)
  const reveal = (index) => ({
    y: motion.y,
    delay: motion.start + index * motion.step,
    fade: motion.fade,
    move: motion.move,
  })

  return (
    <div className="flex items-center">
      {people.map((p, index) => (
        <Reveal
          key={p.photo}
          {...reveal(index)}
          className={`relative ${s.box} ${s.ring} shrink-0 overflow-hidden rounded-full border-surface bg-raised ${
            index > 0 ? s.overlap : ''
          }`}
        >
          <Image src={p.photo} alt={p.name} fill sizes={s.pixels} className="object-cover object-top" />
        </Reveal>
      ))}
      {rest > 0 && (
        <Reveal
          {...reveal(people.length)}
          className={`${s.box} ${s.ring} ${s.overlap} ${MORE_COLORS[color]} flex shrink-0 items-center justify-center rounded-full border-surface font-ui ${s.more} font-semibold text-ink`}
        >
          +{rest}
        </Reveal>
      )}
    </div>
  )
}
