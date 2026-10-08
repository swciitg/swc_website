import Reveal from './Reveal'

/** Lime Garamond italic word inside a section title. */
export function Accent({ children }) {
  return (
    <span className="font-accent text-[1.107em] font-normal italic leading-[0.9] tracking-[-0.01em] text-lime">{children}</span>
  )
}

/**
 * Eyebrow path + large title on the left, optional `aside` (button, stats, copy) on the right.
 * Wrap the emphasised word of the title in <Accent>.
 */
export default function SectionHeader({ eyebrow, title, aside, animate = true }) {
  const Wrapper = animate ? Reveal : 'div'
  const motionProps = animate ? { y: 14, delay: 0.2, fade: 0.4, move: 0.5 } : {}
  return (
    <Wrapper
      {...motionProps}
      className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
    >
      <div className="flex flex-col items-start gap-4">
        <p className="font-code text-[12px] uppercase leading-4 tracking-[0.08em] text-teal">{eyebrow}</p>
        <h2 className="font-ui text-[37px] font-semibold leading-10 tracking-[-0.04em] text-text sm:text-[48px] sm:leading-[1.08] xl:text-[56px] xl:leading-[60px]">
          {title}
        </h2>
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Wrapper>
  )
}
