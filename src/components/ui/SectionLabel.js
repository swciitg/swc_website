import Reveal from './Reveal'

/** Ruled heading for a group inside a page, with a small count or note on the right. */
export default function SectionLabel({ title, note, delay = 0.1 }) {
  return (
    <Reveal y={22} delay={delay} fade={0.44} move={0.55} className="flex items-center justify-between gap-4 border-b border-line pb-3">
      <h2 className="font-ui text-[24px] font-semibold leading-[29px] tracking-[-0.03em] text-text lg:text-[28px] lg:leading-[34px]">{title}</h2>
      {note && <p className="font-code text-[12px] uppercase leading-4 tracking-[0.06em] text-muted">{note}</p>}
    </Reveal>
  )
}
