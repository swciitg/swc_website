import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import Chip from '@/components/ui/Chip'

const WELL = 'relative flex items-end overflow-hidden bg-gradient-to-b from-[#002845] to-surface px-5 pt-5 sm:px-6 sm:pt-6'

function Screenshot({ product, sizes, priority }) {
  const image = (
    <Image
      src={product.image}
      alt={`${product.name} screenshot`}
      fill
      sizes={product.frame === 'phone' ? '232px' : sizes}
      priority={priority}
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
    />
  )

  if (product.frame === 'phone') {
    return (
      <div className="relative mx-auto h-full w-[232px] shrink-0 overflow-hidden rounded-t-[24px] border-[6px] border-b-0 border-raised">
        {image}
      </div>
    )
  }
  return <div className="relative h-full w-full overflow-hidden rounded-t-[12px]">{image}</div>
}

/**
 * Screenshot well over a name, status chip, link chips and an arrow. The whole card opens the product;
 * the link chips stay separately clickable.
 *
 * well      Tailwind height classes for the screenshot well
 * sizes     `sizes` hint for the screenshot, so phones download a phone-sized image
 * index     optional catalogue number shown in the corner of the well
 * priority  load the screenshot eagerly; set it only for cards visible without scrolling
 */
export default function ProductCard({ product, well, sizes, index, priority = false, delay = 0, className = '' }) {
  return (
    <Reveal
      as="article"
      y={22}
      delay={delay}
      fade={0.44}
      move={0.55}
      className={`group relative flex flex-col overflow-hidden rounded-[24px] border border-line bg-surface transition-colors duration-300 hover:border-muted ${className}`}
    >
      <div className={`${WELL} ${well}`}>
        <Screenshot product={product} sizes={sizes} priority={priority} />
        {index != null && (
          <span className="absolute left-5 top-4 font-code text-[12px] leading-4 text-muted">{String(index).padStart(2, '0')}</span>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 py-5 pl-5 pr-4 sm:pl-6 sm:pr-5">
        <div className="flex min-w-0 flex-col items-start gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-[10px]">
            <h3 className="font-ui text-[20px] font-semibold leading-6 tracking-[-0.02em] text-text sm:text-[22px] sm:leading-[27px]">
              <a href={product.href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                {product.name}
              </a>
            </h3>
            {product.status && <Chip dot="lime">{product.status}</Chip>}
          </div>
          <div className="relative z-10 flex flex-wrap gap-2">
            {product.links.map((link) => (
              <Chip key={link.label} href={link.href} tone="mist">
                {link.label}
              </Chip>
            ))}
          </div>
        </div>
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-raised font-ui text-[16px] font-medium text-text transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink sm:h-10 sm:w-10"
        >
          ↗
        </span>
      </div>
    </Reveal>
  )
}
