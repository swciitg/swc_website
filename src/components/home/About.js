import { m } from 'framer-motion'
import Reveal, { DrawPath, VIEWPORT } from '@/components/ui/Reveal'
import Chip, { DOT_COLORS } from '@/components/ui/Chip'
import AvatarStack from '@/components/ui/AvatarStack'
import SectionHeader, { Accent } from '@/components/ui/SectionHeader'

const TEXT_COLORS = { teal: 'text-teal', pink: 'text-pink', lime: 'text-lime' }
const BORDER_COLORS = { teal: 'border-teal', pink: 'border-pink', lime: 'border-lime' }

function HeaderStats({ stats }) {
  return (
    <dl className="grid grid-cols-3 gap-3 sm:flex sm:gap-x-12">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2">
          <dd className="font-ui text-[37px] font-semibold leading-10 tracking-[-0.03em] text-text sm:text-[56px] sm:leading-[60px]">
            {stat.value}
          </dd>
          <dt className="flex items-start gap-2 font-code text-[12px] uppercase leading-4 tracking-[0.08em] text-muted">
            <span aria-hidden className={`mt-1 h-2 w-2 shrink-0 ${DOT_COLORS[stat.color]}`} />
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  )
}

/** Card that pictures a principle: a terminal prompt in the corner and a glow behind the artwork. */
function Visual({ prompt, color, glow, glowClass, mobileHeight = 'h-[216px]', children }) {
  return (
    <div className={`relative ${mobileHeight} overflow-hidden rounded-[16.6px] border border-line bg-surface sm:h-[260px] sm:rounded-[20px]`}>
      {/* The artwork is drawn on a 421×260 canvas; phones show that canvas scaled down as one piece, inset so it has room around it. */}
      <div className="absolute left-1/2 top-[8px] h-[260px] w-[421px] origin-top -translate-x-1/2 scale-[0.72] sm:inset-0 sm:h-auto sm:w-auto sm:translate-x-0 sm:scale-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={glow} alt="" aria-hidden className={`pointer-events-none absolute left-1/2 max-w-none -translate-x-1/2 ${glowClass}`} />
        <p className={`absolute left-[23px] top-[21px] whitespace-nowrap font-code text-[12px] leading-4 ${TEXT_COLORS[color]}`}>{prompt}</p>
        {children}
      </div>
    </div>
  )
}

function SquadVisual({ people, total }) {
  return (
    <Visual prompt="$ swc team --list" color="teal" mobileHeight="h-[192px]" glow="/swc/v1/about/glow-squad.svg" glowClass="top-[29px] h-[340px] w-[440px]">
      <div className="absolute inset-x-0 top-[83px] flex justify-center">
        <AvatarStack
          people={people}
          total={total}
          size="lg"
          color="teal"
          motion={{ y: 18, start: 0.2, step: 0.08, fade: 0.4, move: 0.5 }}
        />
      </div>
      <div className="absolute inset-x-0 top-[185px] flex justify-center gap-2">
        <Chip dot="teal" tone="mist">devs</Chip>
        <Chip dot="pink" tone="mist">creatives</Chip>
        <Chip dot="lime" tone="mist">IIT Guwahati</Chip>
      </div>
    </Visual>
  )
}

// Five disciplines branch off and merge into main. Paths are the Figma vectors; x/y place them in the 421×260 card.
const LANES = [
  { label: 'product', y: 66, stroke: '#3FD3C3', commitX: 216.17, delay: 0.68, d: 'M1.5 1.5H209.665C231.682 1.5 231.682 149.5 253.7 149.5' },
  { label: 'design', y: 94, stroke: '#FF4A85', commitX: 194.15, delay: 0.56, d: 'M1.5 1.5H165.63C187.647 1.5 187.647 121.5 209.665 121.5' },
  { label: 'engineering', y: 122, stroke: '#F2F5F3', commitX: 172.14, delay: 0.44, d: 'M1.5 1.5H121.595C143.612 1.5 143.612 93.5 165.63 93.5' },
  { label: 'data', y: 150, stroke: '#A9B8BE', commitX: 150.12, delay: 0.32, d: 'M1.5 1.5H77.5602C99.5776 1.5 99.5776 65.5 121.595 65.5' },
  { label: 'management', y: 178, stroke: '#6E7F86', commitX: 128.1, delay: 0.2, d: 'M1.5 1.5H33.5253C55.5428 1.5 55.5428 37.5 77.5602 37.5' },
]
const LANE_X = 112.09
const MAIN_Y = 214
const HEAD_X = 386.31

function BranchesVisual() {
  const fade = (delay, duration = 0.3) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: VIEWPORT,
    transition: { delay, duration },
  })

  return (
    <Visual prompt="$ git log --graph" color="pink" mobileHeight="h-[202px]" glow="/swc/v1/about/glow-branches.svg" glowClass="ml-[78px] top-[39px] h-[330px] w-[420px]">
      <svg
        role="img"
        aria-label="Product, design, engineering, data and management branches merging into main"
        viewBox="0 0 421.33 260"
        className="absolute left-1/2 top-0 h-[260px] w-[421.33px] max-w-none -translate-x-1/2 overflow-visible"
        fill="none"
      >
        {LANES.map((lane) => (
          <g key={lane.label}>
            <text x="24" y={lane.y + 4} className="fill-muted font-code text-[11px]">
              {lane.label}
            </text>
            <DrawPath
              d={lane.d}
              transform={`translate(${LANE_X - 1.5} ${lane.y - 1.5})`}
              stroke={lane.stroke}
              strokeWidth="3"
              delay={lane.delay}
              duration={0.7}
            />
            <m.circle cx={lane.commitX} cy={lane.y} r="5" fill={lane.stroke} stroke="#0B1114" strokeWidth="2" {...fade(lane.delay + 0.45, 0.2)} />
          </g>
        ))}
        <text x="24" y={MAIN_Y + 4} className="fill-lime font-code text-[11px]">
          main
        </text>
        <DrawPath d={`M${LANE_X} ${MAIN_Y}H${LANE_X + 260.206}`} stroke="#D0FF78" strokeWidth="4" delay={0.1} duration={1.2} />
        <m.circle cx={HEAD_X} cy={MAIN_Y} r="14" stroke="#D0FF78" strokeOpacity="0.35" strokeWidth="1.5" {...fade(1.4, 0.4)} />
        <m.circle
          cx={HEAD_X}
          cy={MAIN_Y}
          r="8"
          fill="#D0FF78"
          style={{ filter: 'drop-shadow(0 0 8px rgba(208, 255, 120, 0.6))', transformBox: 'fill-box', transformOrigin: 'center' }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{ delay: 1.25, duration: 0.4, ease: [0.45, 1.45, 0.8, 1] }}
        />
      </svg>
    </Visual>
  )
}

const SHOT = 'h-[164px] w-[124px] overflow-hidden rounded-[14px] border border-line shadow-[0px_14px_28px_0px_rgba(0,0,0,0.55)]'

function ProductsVisual({ total }) {
  const fan = (x, rotate) => ({
    initial: { x, rotate: 0 },
    whileInView: { x: 0, rotate },
    viewport: VIEWPORT,
    transition: { delay: 0.3, duration: 0.7, ease: 'easeOut' },
  })

  return (
    <Visual prompt="$ ls ./products" color="lime" mobileHeight="h-[206px]" glow="/swc/v1/about/glow-products.svg" glowClass="ml-[8px] top-[29px] h-[330px] w-[440px]">
      <Chip dot="lime" tone="mist" className="absolute right-[19px] top-[15px]">
        {total} shipped
      </Chip>
      <div className="absolute left-1/2 top-0 h-full w-[421px] -translate-x-1/2">
        <m.div {...fan(82, -9)} className={`absolute left-[65px] top-[69px] ${SHOT}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/swc/v1/products/college-cupid.jpg" alt="CollegeCupid" loading="lazy" className="h-full w-full object-cover" />
        </m.div>
        <m.div {...fan(-82, 9)} className={`absolute left-[230px] top-[69px] ${SHOT}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/swc/v1/products/sa-portal.png" alt="SA Portal" loading="lazy" className="h-full w-full object-cover" />
        </m.div>
        <div className={`absolute left-[147.5px] top-[57px] ${SHOT}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/swc/v1/hero/onestop-app.png" alt="One Stop" loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
      </div>
    </Visual>
  )
}

function Principle({ index, color, title, children }) {
  return (
    <div className={`flex flex-col items-start gap-[10px] pt-1 max-sm:mb-6 sm:gap-4 sm:border-t-2 sm:pt-7 sm:max-xl:mb-8 ${BORDER_COLORS[color]}`}>
      <p className={`font-code text-[12px] leading-4 tracking-[0.08em] ${TEXT_COLORS[color]}`}>{String(index).padStart(2, '0')}</p>
      <h3 className="font-ui text-[24px] font-semibold leading-[29px] tracking-[-0.03em] text-text sm:text-[28px] sm:leading-[34px]">{title}</h3>
      <p className="font-ui text-[17px] leading-[28px] text-mist">{children}</p>
    </div>
  )
}

export default function About({ counts, teamAvatars }) {
  const stats = [
    { value: '100+', label: 'Members', color: 'teal' }, // shown as a milestone, not the live roster count
    { value: counts.tracks, label: 'Learning tracks', color: 'pink' },
    { value: counts.products, label: 'Products shipped', color: 'lime' },
  ]

  return (
    <section id="about" className="flex flex-col gap-7 pt-16 sm:gap-12 sm:pt-24 lg:pt-32">
      <SectionHeader
        eyebrow="~/about"
        animate={false}
        title={
          <>
            A squad of devs and <Accent>creatives.</Accent>
          </>
        }
        aside={<HeaderStats stats={stats} />}
      />

      {/* Three columns on desktop: visuals in one row, principles in the next. Stacked in pairs below that. */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:gap-y-7 xl:grid-flow-col xl:grid-cols-3 xl:grid-rows-[auto_auto]">
        <SquadVisual people={teamAvatars} total={counts.team} />
        <Principle index={1} color="teal" title="Who we are">
          We are a squad of experienced devs and creatives, driving web and apps for IIT Guwahati.
        </Principle>
        <BranchesVisual />
        <Principle index={2} color="pink" title="Growth at SWC">
          We bring together product, design, engineering, data and management to build a growth culture.
        </Principle>
        <ProductsVisual total={counts.products} />
        <Principle index={3} color="lime" title="Products at SWC">
          We create products and keep improving them. The team has the zeal to make every product better, adapting to
          changing tech and shipping quality.
        </Principle>
      </div>
    </section>
  )
}
