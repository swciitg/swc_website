import Reveal from '@/components/ui/Reveal'
import Chip from '@/components/ui/Chip'
import { Accent } from '@/components/ui/SectionHeader'

// The tile takes whatever columns the last row of portraits leaves free, or a full row if there are none.
const MD_SPAN = { 1: 'md:col-span-1', 2: 'md:col-span-2', 3: 'md:col-span-3' }
const LG_SPAN = { 1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: 'lg:col-span-3', 4: 'lg:col-span-4' }
const remaining = (count, columns) => columns - (count % columns)

/** Closing tile of a batch: how many leaders it had, a thank-you, and the split by discipline. */
export default function TributeTile({ batch, leaders, disciplines, delay = 0 }) {
  return (
    <Reveal
      y={22}
      delay={delay}
      fade={0.44}
      move={0.55}
      className={`relative col-span-2 overflow-hidden rounded-[20px] bg-[#010304] ${MD_SPAN[remaining(leaders, 3)]} ${LG_SPAN[remaining(leaders, 4)]}`}
    >
      <div className="relative flex h-full flex-col gap-6 py-8 pl-7 pr-6 lg:flex-row lg:items-end lg:justify-between lg:py-10 lg:pl-12 lg:pr-10">
        <div className="flex flex-col items-start gap-4">
          <p className="font-code text-[12px] uppercase leading-4 tracking-[0.08em] text-lime">Batch {batch}</p>
          <h2 className="font-ui text-[37px] font-semibold leading-10 tracking-[-0.04em] text-text xl:text-[56px] xl:leading-[60px]">
            {leaders} leaders.
            <br />
            One <Accent>committee.</Accent>
          </h2>
          <p className="max-w-[440px] font-ui text-[17px] leading-[28px] text-mist">
            Thank you for the products, the people and the culture you left behind.
          </p>
        </div>
        <ul className="flex shrink-0 flex-col items-start gap-1 lg:items-end">
          {disciplines.map((discipline) => (
            <li key={discipline.id}>
              <Chip dot={discipline.color} tone="mist">
                {discipline.count} {discipline.label.toLowerCase()}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_100px_10px_rgba(64,212,194,0.3),inset_0px_0px_14px_1px_rgba(208,255,120,0.6)]"
      />
    </Reveal>
  )
}
