import { MotionConfig } from 'framer-motion'
import Reveal from './Reveal'

/** Page body on the Void background: clears the fixed nav and holds content to the 1440 grid. */
export default function Page({ className = '', children }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-void pt-16 lg:pt-20">
        <div className={`mx-auto max-w-[1440px] px-5 sm:px-10 xl:px-16 ${className}`}>{children}</div>
      </div>
    </MotionConfig>
  )
}

/**
 * Opening block of an inner page: eyebrow path, display title, a lead paragraph, and an optional
 * `aside` (filters, a chip) aligned to the bottom right. Wrap the emphasised word of the title in <Accent>.
 */
export function PageHeader({ eyebrow, title, lead, aside }) {
  return (
    <header className="flex flex-col gap-6 pb-8 pt-14 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pb-12 lg:pt-28">
      <div className="flex flex-col items-start gap-5">
        <Reveal as="p" y={16} delay={0.1} fade={0.4} move={0.5} className="font-code text-[12px] uppercase leading-4 tracking-[0.08em] text-teal">
          {eyebrow}
        </Reveal>
        <Reveal
          as="h1"
          y={16}
          delay={0.2}
          fade={0.4}
          move={0.5}
          className="font-ui text-[44px] font-semibold leading-none tracking-[-0.05em] text-text sm:text-[72px] xl:text-[96px]"
        >
          {title}
        </Reveal>
        <Reveal as="p" y={16} delay={0.3} fade={0.4} move={0.5} className="max-w-[580px] font-ui text-[17px] leading-[27px] text-mist sm:text-[19px] sm:leading-[30px]">
          {lead}
        </Reveal>
      </div>
      {aside && (
        <Reveal y={10} delay={0.45} fade={0.36} move={0.45} className="shrink-0">
          {aside}
        </Reveal>
      )}
    </header>
  )
}
