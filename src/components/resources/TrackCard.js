import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import Chip from '@/components/ui/Chip'

/** One learning track: logo well, category, name, summary and a link out to the material. */
export default function TrackCard({ track, index, delay = 0 }) {
  return (
    <Reveal
      as="article"
      y={22}
      delay={delay}
      fade={0.44}
      move={0.55}
      className="group relative flex flex-col overflow-hidden rounded-[24px] border border-line bg-surface transition-colors duration-300 hover:border-muted lg:h-[476px]"
    >
      <div className="relative flex h-[140px] shrink-0 items-center justify-center bg-[radial-gradient(ellipse_closest-side,#002845,#061d2d_50%,#0b1114)] lg:h-[200px]">
        <div className="relative h-24 transition-transform duration-500 ease-out group-hover:scale-105" style={{ width: track.logoWidth }}>
          <Image src={track.logo} alt="" fill sizes={`${track.logoWidth}px`} className="object-contain" />
        </div>
        <span className="absolute left-5 top-[18px] font-code text-[11px] uppercase leading-[15px] tracking-[0.08em] text-muted">
          Track {String(index).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-start gap-4 p-5 lg:gap-[14px] lg:p-6">
        <Chip dot={track.color} tone="mist">
          {track.category}
        </Chip>
        <h2 className="font-ui text-[22px] font-semibold leading-[27px] tracking-[-0.03em] text-text lg:text-[26px] lg:leading-8">
          <a href={track.href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {track.name}
          </a>
        </h2>
        <p className="font-ui text-[15px] leading-6 text-mist">{track.description}</p>
        <p
          aria-hidden
          className="mt-auto flex w-full items-center gap-2 border-t border-line pt-4 font-ui text-[15px] font-medium leading-[18px] text-lime max-lg:mt-5"
        >
          Start learning
          <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </p>
      </div>
    </Reveal>
  )
}
