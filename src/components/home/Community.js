import Reveal from '@/components/ui/Reveal'
import { DOT_COLORS } from '@/components/ui/Chip'
import { SOCIALS } from '@/data/site'

export default function Community() {
  const socials = SOCIALS.filter((social) => social.cta)
  return (
    <section aria-label="Community" className="grid grid-cols-1 gap-4 pt-16 max-sm:hidden lg:grid-cols-3 lg:gap-6">
      {socials.map((social, index) => (
        <Reveal key={social.id} y={12} delay={0.3 + index * 0.08} fade={0.36} move={0.45}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-full border border-line py-5 pl-6 pr-5 transition-colors duration-200 hover:border-muted hover:bg-surface"
          >
            <span className="flex items-center gap-3">
              <span aria-hidden className={`h-2 w-2 rounded-full ${DOT_COLORS[social.color]}`} />
              <span className="font-ui text-[16px] font-medium leading-[19px] text-text">{social.cta}</span>
            </span>
            <span className="whitespace-nowrap font-code text-[12px] leading-4 text-muted transition-colors duration-200 group-hover:text-text">
              {social.id} ↗
            </span>
          </a>
        </Reveal>
      ))}
    </section>
  )
}
