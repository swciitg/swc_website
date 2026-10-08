import Reveal from './Reveal'

/** Dashed pill that closes a page with one question and one link. */
export default function CalloutBar({ href, action, children }) {
  return (
    <Reveal y={12} delay={0.1} fade={0.36} move={0.45}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-6 rounded-[36px] border border-dashed border-line p-5 transition-colors duration-200 hover:border-muted lg:flex-row lg:items-center lg:justify-between lg:rounded-full lg:py-5 lg:pl-7 lg:pr-6"
      >
        <span className="font-ui text-[16px] font-medium leading-[19px] text-text">{children}</span>
        <span className="whitespace-nowrap font-code text-[13px] leading-[17px] text-teal group-hover:underline">{action} ↗</span>
      </a>
    </Reveal>
  )
}
