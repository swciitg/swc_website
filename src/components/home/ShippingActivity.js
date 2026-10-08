import { useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import Reveal, { VIEWPORT } from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import SectionHeader, { Accent } from '@/components/ui/SectionHeader'
import { GITHUB_URL } from '@/data/site'

const CELL = 18
const GAP = 4
const STEP = CELL + GAP
// Phones show only the most recent weeks, which fit without scrolling.
const MOBILE_WEEKS = 12
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', '']
const LEVELS = ['bg-heat-0', 'bg-heat-1', 'bg-heat-2', 'bg-heat-3', 'bg-heat-4']
const STAT_COLORS = ['text-text', 'text-lime', 'text-pink', 'text-teal']
const MONTH = 'absolute top-0 font-code text-[11px] leading-[15px] text-muted'

// Weeks fade in left to right once the grid is on screen, including the ones scrolled out of sight.
const GRID = { hidden: {}, show: { transition: { delayChildren: 0.45, staggerChildren: 0.012 } } }
const WEEK = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } } }

const number = (value) => value.toLocaleString('en-IN')
const plural = (count, word) => `${number(count)} ${word}${count === 1 ? '' : 's'}`

function Legend() {
  return (
    <div className="flex items-center gap-[6px] font-code text-[12px] leading-4 text-muted">
      <span>Less</span>
      {LEVELS.map((level) => (
        <span key={level} className={`h-[14px] w-[14px] rounded-[3px] ${level}`} />
      ))}
      <span>More</span>
    </div>
  )
}

function Heatmap({ weeks, months, busiest }) {
  const scroller = useRef(null)

  // On tablets the full year scrolls sideways; start at the most recent weeks.
  useEffect(() => {
    const el = scroller.current
    if (el) el.scrollLeft = el.scrollWidth
  }, [])

  const width = weeks.length * STEP - GAP
  const firstMobileWeek = Math.max(0, weeks.length - MOBILE_WEEKS)
  // Centre the tooltip over the busiest day, kept inside the grid.
  const tooltipCenter = busiest ? Math.min(Math.max(busiest.week * STEP + CELL / 2, 109), width - 109) : 0
  // The scroller clips anything above the month labels, so the top rows put it underneath.
  const tooltipBelow = busiest && busiest.day < 2

  return (
    <div ref={scroller} className="sm:overflow-x-auto">
      <div className="flex w-max gap-2 sm:gap-3">
        <div aria-hidden className="flex flex-col gap-1 pt-[26px]">
          {DAY_LABELS.map((label, index) => (
            <span key={index} className="flex h-[18px] w-[30px] items-center font-code text-[11px] leading-[15px] text-muted sm:w-8">
              {label}
            </span>
          ))}
        </div>

        <div className="relative">
          <div aria-hidden className="relative h-4">
            {months.map((month) => (
              <span key={`${month.week}-${month.label}`} className={`${MONTH} max-sm:hidden`} style={{ left: month.week * STEP }}>
                {month.label}
              </span>
            ))}
            {months
              .filter((month) => month.week >= firstMobileWeek)
              .map((month) => (
                <span key={`m-${month.week}-${month.label}`} className={`${MONTH} sm:hidden`} style={{ left: (month.week - firstMobileWeek) * STEP }}>
                  {month.label}
                </span>
              ))}
          </div>

          <m.div
            variants={GRID}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            role="img"
            aria-label="Heatmap of daily commits across swciitg repositories over the last year"
            className="mt-[10px] flex gap-1"
          >
            {weeks.map((week, weekIndex) => (
              <m.div
                key={week[0].date}
                variants={WEEK}
                className={`flex flex-col gap-1 ${weekIndex < firstMobileWeek ? 'max-sm:hidden' : ''}`}
              >
                {week.map((day, dayIndex) => {
                  const isBusiest = busiest && busiest.week === weekIndex && busiest.day === dayIndex
                  if (day.level < 0) return <span key={day.date} className="h-[18px] w-[18px] rounded-[4px] border border-dashed border-line" />
                  return (
                    <span
                      key={day.date}
                      title={`${plural(day.count, 'commit')} on ${day.date}`}
                      className={`h-[18px] w-[18px] rounded-[4px] ${LEVELS[day.level]} ${
                        isBusiest ? 'border-[1.5px] border-text' : ''
                      }`}
                    />
                  )
                })}
              </m.div>
            ))}
          </m.div>

          {busiest && (
            <Reveal
              scale={0.92}
              delay={1.35}
              fade={0.3}
              move={0.4}
              className="pointer-events-none absolute z-10 max-sm:hidden"
              style={{ left: tooltipCenter, top: 26 + busiest.day * STEP + (tooltipBelow ? CELL + 8 : -8) }}
            >
              <div className={`flex -translate-x-1/2 ${tooltipBelow ? '' : '-translate-y-full'} items-center gap-2 whitespace-nowrap rounded-[8px] border border-line bg-raised px-[10px] py-[6px] font-code text-[12px] leading-4 shadow-[0px_8px_20px_0px_rgba(0,0,0,0.5)]`}>
                <span className="font-medium text-lime">{plural(busiest.count, 'commit')}</span>
                <span className="text-mist">{busiest.label}</span>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label, color, index }) {
  return (
    <Reveal
      y={12}
      delay={0.7 + index * 0.08}
      fade={0.36}
      move={0.45}
      className={`flex flex-col gap-[2px] sm:gap-[6px] sm:pt-6 ${index % 2 === 1 ? 'sm:border-l sm:border-line sm:pl-6' : ''} ${
        index > 0 ? 'lg:border-l lg:border-line lg:pl-6' : ''
      }`}
    >
      <p className={`whitespace-nowrap font-ui text-[22px] font-semibold leading-7 tracking-[-0.03em] sm:text-[36px] sm:leading-10 ${color}`}>{value}</p>
      <p className="font-code text-[11px] uppercase leading-[15px] tracking-[0.04em] text-muted sm:text-[12px] sm:leading-4">{label}</p>
    </Reveal>
  )
}

/** Organisation-wide commit activity for the last year, read from the GitHub API at build time. */
export default function ShippingActivity({ activity }) {
  const { busiest } = activity
  const stats = [
    { value: number(activity.activeDays), label: 'active days' },
    { value: plural(activity.longestStreak, 'day'), label: 'longest streak' },
    { value: busiest ? number(busiest.count) : '0', label: busiest ? `commits on ${busiest.shortLabel}, the busiest day` : 'commits on the busiest day' },
    { value: number(activity.repoCount), label: 'repos with commits' },
  ]

  return (
    <section id="activity" className="flex flex-col gap-8 pt-16 sm:gap-10 sm:pt-24 lg:pt-32">
      <SectionHeader
        eyebrow={`~/github — ${activity.org}`}
        title={
          <>
            We ship <Accent>all year.</Accent>
          </>
        }
        aside={
          <Button href={GITHUB_URL} variant="secondary" arrow="↗">
            github.com/{activity.org}
          </Button>
        }
      />

      <div className="flex flex-col gap-5 rounded-[24px] border border-line bg-surface px-5 py-7 sm:gap-7 sm:px-9 sm:py-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-col gap-[6px]">
            <p className="font-ui text-[22px] font-semibold leading-[27px] tracking-[-0.02em] text-text sm:text-[24px] sm:leading-[29px]">
              <span className="text-lime">{number(activity.total)}</span> commits in the last year
            </p>
            <p className="font-code text-[12px] leading-4 text-muted">
              Across {activity.repoCount} {activity.org} repositories · default branches · {activity.range}
            </p>
          </div>
          <Legend />
        </div>

        <Heatmap weeks={activity.weeks} months={activity.months} busiest={busiest} />

        <div className="grid grid-cols-2 gap-x-3 gap-y-4 border-t border-line pt-4 sm:gap-x-0 sm:gap-y-2 sm:pt-0 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Stat key={stat.label} {...stat} color={STAT_COLORS[index]} index={index} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 max-sm:hidden">
          <p className="mr-2 font-code text-[12px] uppercase leading-4 tracking-[0.06em] text-muted">Most active</p>
          {activity.topRepos.map((repo) => (
            <a
              key={repo.name}
              href={`${GITHUB_URL}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-raised px-3 py-[6px] font-code text-[12px] leading-4 text-text transition-colors duration-200 hover:border-muted"
            >
              {repo.name}
              <span className="text-lime">{number(repo.commits)}</span>
            </a>
          ))}
        </div>
      </div>

      <p className="font-code text-[11px] leading-[15px] text-muted max-sm:hidden">
        Source: GitHub API, public {activity.org} repositories, default branches, {activity.from} to {activity.to}.
      </p>
    </section>
  )
}
