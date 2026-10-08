import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'

const PILL =
  'whitespace-nowrap px-4 pb-2 pt-[2px] font-ui text-[36px] font-semibold leading-[39px] tracking-[-0.045em] text-ink sm:px-[0.34em] sm:text-[52px] sm:leading-[57px] xl:text-[64px] xl:leading-[70px]'

const HEADLINE = [
  { text: 'We collaborate,', offset: '', color: 'bg-teal', radius: 'rounded-t-[18px] rounded-bl-[18px]', delay: 0.2 },
  { text: 'build & ship', offset: 'pl-16 sm:pl-[21.4%]', color: 'bg-pink', radius: 'rounded-b-[18px] rounded-tr-[18px]', delay: 0.32 },
  { text: 'experiences.', offset: 'pl-5 sm:pl-[5.8%]', color: 'bg-lime', radius: 'rounded-[18px]', delay: 0.44, accent: true },
]

const SCREENS = [
  {
    src: '/swc/v1/hero/placement-stats.jpg',
    alt: 'Placement Stats portal showing branch-wise placement charts',
    frame: 'left-[220px] top-[20px] h-[283px] w-[360px] rounded-[16px] border border-line shadow-[0px_24px_40px_0px_rgba(0,0,0,0.45)]',
    image: '',
    sizes: '(min-width: 640px) 360px, 192px',
    delay: 0.35,
  },
  {
    src: '/swc/v1/hero/onestop-app.png',
    alt: 'One Stop app home screen with campus map, timetable and quick links',
    frame: 'left-[6px] top-[200px] h-[400px] w-[196px] rounded-[26px] border-[6px] border-raised shadow-[0px_24px_60px_0px_rgba(0,0,0,0.6)]',
    image: 'object-top',
    sizes: '(min-width: 640px) 196px, 105px',
    delay: 0.47,
  },
  {
    src: '/swc/v1/products/college-cupid.jpg',
    alt: 'CollegeCupid app profile screen',
    frame: 'left-[176px] top-[110px] h-[516px] w-[250px] rounded-[30px] border-[6px] border-raised shadow-[0px_24px_60px_0px_rgba(0,0,0,0.6)]',
    image: '',
    sizes: '(min-width: 640px) 250px, 134px',
    delay: 0.59,
  },
]

// `desktop` positions sit on the 580×640 canvas; `mobile` ones on the 310×342 canvas, where chips scale less than the screens.
const CHIPS = [
  { label: 'Live · Placement Stats', dot: 'lime', delay: 0.95, desktop: 'left-[400px] top-[318px]', mobile: 'left-[132px] top-[170px]' },
  { label: 'Install now · CollegeCupid', dot: 'pink', delay: 1.05, desktop: 'left-[330px] top-[560px]', mobile: 'left-[107px] top-[299px]' },
  { label: 'iOS + Android · One Stop', dot: 'teal', delay: 1.15, desktop: 'left-0 top-[160px]', mobile: 'left-[4px] top-[85.5px]' },
]

function Screens() {
  return SCREENS.map((screen) => (
    <Reveal key={screen.src} y={28} delay={screen.delay} fade={0.52} move={0.65} className={`absolute overflow-hidden ${screen.frame}`}>
      {/* Above the fold on every screen size, so these load eagerly. */}
      <Image src={screen.src} alt={screen.alt} fill priority sizes={screen.sizes} className={`object-cover ${screen.image}`} />
    </Reveal>
  ))
}

function Collage() {
  return (
    <div className="relative h-[640px] w-[580px] shrink-0 origin-top scale-[0.8] lg:origin-right lg:scale-[0.72] xl:scale-100">
      <Screens />
      {CHIPS.map((chip) => (
        <Reveal key={chip.label} scale={0.92} delay={chip.delay} fade={0.3} move={0.4} className={`absolute ${chip.desktop}`}>
          <Chip dot={chip.dot}>{chip.label}</Chip>
        </Reveal>
      ))}
    </div>
  )
}

function CollageMobile() {
  return (
    <div className="relative mx-auto h-[342px] w-[310px] shrink-0">
      <div className="absolute left-0 top-0 h-[640px] w-[580px] origin-top-left scale-[0.5345]">
        <Screens />
      </div>
      {CHIPS.map((chip) => (
        <div key={chip.label} className={`absolute origin-top-left scale-[0.875] ${chip.mobile}`}>
          <Reveal scale={0.92} delay={chip.delay} fade={0.3} move={0.4}>
            <Chip dot={chip.dot}>{chip.label}</Chip>
          </Reveal>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#010304]">
      <div className="flex flex-col gap-6 px-5 pb-6 pt-8 sm:gap-10 sm:px-10 sm:pb-0 sm:pt-10 lg:min-h-[720px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-10 lg:pl-12 lg:pr-6 xl:pl-16 xl:pr-10">
        <div className="relative z-10 flex flex-col items-start gap-7 sm:gap-8 lg:w-[52%] xl:w-[620px]">
          <Reveal y={10} delay={0.1} fade={0.32} move={0.4} className="max-sm:hidden">
            <Chip dot="lime">Students&apos; Web Committee · IIT Guwahati</Chip>
          </Reveal>

          <h1 className="flex flex-col items-start">
            {HEADLINE.map((line) => (
              <Reveal key={line.text} x={-28} delay={line.delay} fade={0.4} move={0.55} className={`flex ${line.offset}`}>
                <span className={`${PILL} ${line.color} ${line.radius}`}>
                  {line.accent ? (
                    <span className="font-accent text-[1.1875em] font-normal italic leading-[0.92] tracking-[-0.01em]">{line.text}</span>
                  ) : (
                    line.text
                  )}
                </span>
              </Reveal>
            ))}
          </h1>

          <Reveal as="p" y={14} delay={0.55} fade={0.4} move={0.5} className="max-w-[520px] font-ui text-[17px] leading-[27px] text-mist sm:text-[19px] sm:leading-[30px]">
            We&apos;re the student tech team behind IIT Guwahati&apos;s web and apps. Twelve products shipped, built by students, for students.
          </Reveal>

          <Reveal y={14} delay={0.68} fade={0.4} move={0.5} className="flex flex-wrap items-center gap-3">
            <Button href="/products" arrow="→">
              Explore products
            </Button>
            <Button href="/#partner" variant="secondary" arrow="↗">
              Work with us
            </Button>
          </Reveal>
        </div>

        <div className="sm:hidden">
          <CollageMobile />
        </div>
        <div className="hidden h-[520px] min-w-0 justify-center sm:flex lg:h-[470px] lg:flex-1 lg:justify-end xl:h-[640px]">
          <Collage />
        </div>
      </div>

      {/* Inner glow: lime rising from the bottom edge, teal around the frame. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-90px_160px_-30px_rgba(208,255,120,0.28),inset_0px_0px_250px_50px_rgba(1,84,115,0.5),inset_0px_0px_110px_14px_rgba(64,212,194,0.45),inset_0px_0px_18px_1px_rgba(64,212,194,0.9)]"
      />
    </div>
  )
}
