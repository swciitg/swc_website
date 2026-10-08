import Reveal from './Reveal'

const GLOWS = {
  pink: 'shadow-[inset_0px_0px_90px_8px_rgba(255,74,133,0.25),inset_0px_0px_14px_1px_rgba(255,74,133,0.7)]',
  teal: 'shadow-[inset_0px_0px_90px_8px_rgba(63,211,195,0.25),inset_0px_0px_14px_1px_rgba(63,211,195,0.7)]',
}
const OUTPUT_COLORS = { muted: 'text-muted', pink: 'text-pink', teal: 'text-teal', lime: 'text-lime' }

/**
 * Glowing terminal panel: window dots, a command, and its output lines.
 * `output` is [{ text, color }]; the last line ends with a blinking cursor.
 * `children` sit beside the terminal on desktop and below it on phones.
 */
export default function Terminal({ command, output, glow = 'pink', children }) {
  return (
    <Reveal y={18} delay={0.4} fade={0.44} move={0.55} className="relative overflow-hidden rounded-[24px] bg-[#010304]">
      <div className="relative flex flex-col gap-6 px-5 py-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
        <div className="flex flex-col items-start gap-4 lg:gap-[14px]">
          <div aria-hidden className="mb-[26px] flex gap-[6px] lg:mb-6">
            <span className="h-[10px] w-[10px] rounded-full bg-pink" />
            <span className="h-[10px] w-[10px] rounded-full bg-lime" />
            <span className="h-[10px] w-[10px] rounded-full bg-teal" />
          </div>
          <p className="font-code text-[22px] font-medium leading-[29px] text-text lg:text-[24px] lg:leading-8">$ {command}</p>
          {output.map((line, index) => (
            <p key={line.text} className={`font-code text-[16px] leading-[21px] ${OUTPUT_COLORS[line.color]}`}>
              → {line.text}
              {index === output.length - 1 && <span aria-hidden className="animate-pulse">_</span>}
            </p>
          ))}
        </div>
        {children}
      </div>
      <div aria-hidden className={`pointer-events-none absolute inset-0 rounded-[inherit] ${GLOWS[glow]}`} />
    </Reveal>
  )
}
