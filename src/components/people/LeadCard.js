import Reveal from '@/components/ui/Reveal'
import Photo from '@/components/ui/Photo'

/** Wide card for the two people leading the committee: photo beside (or above, on phones) their details. */
export default function LeadCard({ person, delay = 0 }) {
  return (
    <Reveal
      as="article"
      y={22}
      delay={delay}
      fade={0.44}
      move={0.55}
      className="flex flex-col overflow-hidden rounded-[24px] border border-line bg-surface lg:flex-row"
    >
      <div className="relative h-[313px] shrink-0 bg-raised lg:h-[340px] lg:w-[280px]">
        {person.photo && (
          <Photo src={person.photo} alt={`Portrait of ${person.name}`} sizes="(min-width: 1024px) 280px, 100vw" priority />
        )}
      </div>
      <div className="flex flex-1 flex-col items-start justify-between px-5 py-[52px] lg:gap-7 lg:p-8">
        <div className="flex flex-col items-start gap-3">
          <span aria-hidden className="h-1 w-8 rounded-[2px] bg-lime" />
          <p className="font-code text-[12px] uppercase leading-4 tracking-[0.08em] text-lime">{person.role}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-accent text-[35px] italic leading-[34px] tracking-[-0.01em] text-text lg:text-[53px] lg:leading-[52px]">
            {person.name}
          </h3>
          {person.degree && <p className="font-code text-[13px] leading-[17px] text-mist">{person.degree}</p>}
        </div>
      </div>
    </Reveal>
  )
}
