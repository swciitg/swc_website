import Reveal from '@/components/ui/Reveal'
import Photo from '@/components/ui/Photo'
import { DISCIPLINES, initials } from '@/lib/people'

const TOP_BORDER = { teal: 'border-teal', pink: 'border-pink', lime: 'border-lime' }
const TEXT = { teal: 'text-teal', pink: 'text-pink', lime: 'text-lime' }

const ROLE = 'font-code text-[11px] uppercase leading-[15px] tracking-[0.06em]'

/**
 * head    role, name and degree, left aligned (current heads)
 * core    name only, on a smaller card (core team)
 * alumni  name then role, centred (Hall of Fame)
 *
 * Each keeps one aspect ratio at every width, so a photo is cropped the same way on phones and desktops.
 */
const VARIANTS = {
  head: {
    shape: 'aspect-[310/380]',
    body: 'items-start px-4 pb-5 lg:px-5',
    name: 'text-[17px] leading-[1.1] tracking-[-0.02em] lg:text-[24px] lg:leading-[29px]',
    sizes: '(min-width: 1024px) 310px, (min-width: 768px) 33vw, 50vw',
  },
  core: {
    shape: 'aspect-[170/220]',
    body: 'items-start px-4 pb-5 lg:px-5',
    name: 'text-[16px] leading-[19px] tracking-[-0.02em] lg:text-[18px] lg:leading-[22px]',
    sizes: '(min-width: 1024px) 170px, (min-width: 640px) 25vw, 50vw',
  },
  alumni: {
    shape: 'aspect-[310/410]',
    body: 'items-center px-4 pb-5 text-center lg:px-5 lg:pb-6',
    name: 'text-[20px] leading-6 tracking-[-0.02em] lg:text-[22px] lg:leading-[27px]',
    sizes: '(min-width: 1024px) 310px, (min-width: 768px) 33vw, 50vw',
  },
}

function Monogram({ name, color }) {
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center bg-raised pb-[38%] lg:pb-0">
      <span className={`font-accent text-[72px] italic leading-none lg:text-[129px] ${TEXT[color]}`}>{initials(name)}</span>
    </div>
  )
}

/** Portrait card for one person: photo (or initials), a fade for legibility, and their details. */
export default function PersonCard({ person, variant = 'head', priority = false, delay = 0 }) {
  const style = VARIANTS[variant]
  const { color } = DISCIPLINES[person.discipline]
  const role = person.role && <p className={`${ROLE} ${TEXT[color]}`}>{person.role}</p>

  return (
    <Reveal
      as="article"
      y={22}
      delay={delay}
      fade={0.44}
      move={0.55}
      className={`relative flex flex-col justify-end gap-1 overflow-hidden rounded-[20px] border-t-[3px] bg-surface ${TOP_BORDER[color]} ${style.shape} ${style.body}`}
    >
      {person.photo ? (
        <Photo src={person.photo} alt={`Portrait of ${person.name}`} sizes={style.sizes} priority={priority} />
      ) : (
        <Monogram name={person.name} color={color} />
      )}
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,7,10,0)_38%,rgba(4,7,10,0.75)_72%,#04070a)]" />

      {variant === 'head' && <div className="relative">{role}</div>}
      <h3 className={`relative font-ui font-semibold text-text ${style.name}`}>{person.name}</h3>
      {variant === 'head' && person.degree && <p className="relative font-code text-[12px] leading-4 text-mist">{person.degree}</p>}
      {variant === 'alumni' && <div className="relative">{role}</div>}
    </Reveal>
  )
}
