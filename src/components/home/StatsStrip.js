import Link from 'next/link'
import { m } from 'framer-motion'
import Reveal, { DrawPath, VIEWPORT } from '@/components/ui/Reveal'
import AvatarStack from '@/components/ui/AvatarStack'

const FIGURE_COLORS = { lime: 'text-lime', teal: 'text-teal', pink: 'text-pink', text: 'text-text' }

const AVATAR_MOTION = { y: 10, start: 0.3, step: 0.07, fade: 0.35, move: 0.45 }

/** One figure with a small graphic that pictures it, a label, and a glow in its colour. */
export function StatCard({ href, value, label, color, glow, children }) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-1 overflow-hidden rounded-[14px] border border-line bg-surface p-4 transition-colors duration-200 hover:border-muted sm:gap-2 sm:rounded-[18px] sm:py-5 sm:pl-6 sm:pr-5"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={glow}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-131px] top-[-121px] h-[250px] w-[300px] max-w-none sm:right-[-121px] sm:top-[-131px] sm:h-[290px] sm:w-[360px]"
      />
      <div className="relative flex items-center justify-between gap-3">
        <p className={`font-ui text-[30px] font-semibold leading-[34px] tracking-[-0.03em] sm:text-[56px] sm:leading-[60px] ${FIGURE_COLORS[color]}`}>{value}</p>
        <div className="max-sm:hidden">{children}</div>
      </div>
      <p className="relative font-code text-[11px] uppercase leading-[15px] tracking-[0.06em] text-muted sm:text-[12px] sm:leading-4">{label}</p>
    </Link>
  )
}

// Square colours cycle through the three brightest heat steps, as in the design.
const SQUARE_COLORS = ['bg-heat-4', 'bg-heat-3', 'bg-heat-4', 'bg-heat-2', 'bg-heat-3', 'bg-heat-4', 'bg-heat-2', 'bg-heat-4', 'bg-heat-4', 'bg-heat-2', 'bg-heat-4', 'bg-heat-3']

function ProductSquares({ count }) {
  return (
    <div aria-hidden className="grid shrink-0 grid-cols-4 gap-1">
      {Array.from({ length: count }, (_, index) => (
        <Reveal
          key={index}
          delay={0.3 + index * 0.05}
          fade={0.25}
          className={`h-4 w-4 rounded-[4px] ${SQUARE_COLORS[index % SQUARE_COLORS.length]}`}
        />
      ))}
    </div>
  )
}

// Semicircles centred on (56, 55); the paths are the Figma vectors, offset into place.
const TRACKS = [
  { x: 2.5, y: 1.5, opacity: 1, d: 'M1.5 53.5C1.5 39.7087 6.97856 26.4823 16.7304 16.7304C26.4823 6.97856 39.7087 1.5 53.5 1.5C67.2913 1.5 80.5177 6.97856 90.2696 16.7304C100.021 26.4823 105.5 39.7087 105.5 53.5' },
  { x: 10.5, y: 9.5, opacity: 0.88, d: 'M1.5 45.5C1.5 33.8305 6.1357 22.6389 14.3873 14.3873C22.6389 6.1357 33.8305 1.5 45.5 1.5C57.1695 1.5 68.3611 6.1357 76.6127 14.3873C84.8643 22.6389 89.5 33.8305 89.5 45.5' },
  { x: 18.5, y: 17.5, opacity: 0.76, d: 'M1.5 37.5C1.5 27.9522 5.29285 18.7955 12.0442 12.0442C18.7955 5.29285 27.9522 1.5 37.5 1.5C47.0478 1.5 56.2045 5.29285 62.9558 12.0442C69.7072 18.7955 73.5 27.9522 73.5 37.5' },
  { x: 26.5, y: 25.5, opacity: 0.64, d: 'M1.5 29.5C1.5 22.0739 4.44999 14.952 9.70101 9.70101C14.952 4.44999 22.0739 1.5 29.5 1.5C36.9261 1.5 44.048 4.44999 49.299 9.70101C54.55 14.952 57.5 22.0739 57.5 29.5' },
  { x: 34.5, y: 33.5, opacity: 0.52, d: 'M1.5 21.5C1.5 16.1957 3.60714 11.1086 7.35786 7.35786C11.1086 3.60714 16.1957 1.5 21.5 1.5C26.8043 1.5 31.8914 3.60714 35.6421 7.35786C39.3929 11.1086 41.5 16.1957 41.5 21.5' },
  { x: 42.5, y: 41.5, opacity: 0.4, d: 'M1.5 13.5C1.5 10.3174 2.76428 7.26515 5.01472 5.01472C7.26515 2.76428 10.3174 1.5 13.5 1.5C16.6826 1.5 19.7348 2.76428 21.9853 5.01472C24.2357 7.26515 25.5 10.3174 25.5 13.5' },
]

function LearningTracks({ count }) {
  return (
    <svg aria-hidden width="112" height="56" viewBox="0 0 112 56" fill="none" className="shrink-0 overflow-visible">
      {TRACKS.slice(0, count).map((track, index) => (
        <DrawPath
          key={index}
          d={track.d}
          transform={`translate(${track.x} ${track.y})`}
          stroke="#FF4A85"
          strokeOpacity={track.opacity}
          strokeWidth="3"
          delay={0.3 + index * 0.08}
          duration={0.6}
        />
      ))}
      <m.circle
        cx="19.2"
        cy="18.2"
        r="4.5"
        fill="#F2F5F3"
        style={{ filter: 'drop-shadow(0 0 5px rgba(255, 74, 133, 0.8))' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ delay: 0.9, duration: 0.3 }}
      />
    </svg>
  )
}

export default function StatsStrip({ counts, teamSession, teamAvatars, leaderAvatars }) {
  return (
    <div className="grid grid-cols-2 gap-[10px] sm:gap-4 xl:grid-cols-4">
      <StatCard href="/products" value={counts.products} label="products shipped" color="lime" glow="/swc/v1/stats/glow-1.svg">
        <ProductSquares count={counts.products} />
      </StatCard>
      <StatCard
        href="/team"
        value={counts.team}
        label={teamSession ? `people on the ${teamSession} team` : 'people on the team'}
        color="teal"
        glow="/swc/v1/stats/glow-2.svg"
      >
        <AvatarStack people={teamAvatars.slice(0, 4)} total={counts.team} color="teal" motion={AVATAR_MOTION} />
      </StatCard>
      <StatCard href="/resources" value={counts.tracks} label="learning tracks" color="pink" glow="/swc/v1/stats/glow-3.svg">
        <LearningTracks count={counts.tracks} />
      </StatCard>
      <StatCard href="/hall-of-fame" value={counts.leaders} label="leaders in the Hall of Fame" color="text" glow="/swc/v1/stats/glow-4.svg">
        <AvatarStack people={leaderAvatars} total={counts.leaders} color="text" motion={AVATAR_MOTION} />
      </StatCard>
    </div>
  )
}
