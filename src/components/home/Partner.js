import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import SectionHeader, { Accent } from '@/components/ui/SectionHeader'
import { CONTACT, MAILTO, PROJECT_MAILTO } from '@/data/site'

const ACCENTS = {
  lime: { bar: 'bg-lime', text: 'text-lime' },
  pink: { bar: 'bg-pink', text: 'text-pink' },
  teal: { bar: 'bg-teal', text: 'text-teal' },
}

const CAPABILITIES = [
  { scope: 'product', color: 'lime', title: ['Product', 'strategy'], body: 'Scoping, roadmaps and launch plans' },
  { scope: 'design', color: 'pink', title: ['Product', 'design'], body: 'Research, UX and interface design' },
  { scope: 'web', color: 'teal', title: ['Web', 'platforms'], body: 'Portals, dashboards and internal tools' },
  { scope: 'mobile', color: 'teal', title: ['Mobile', 'apps'], body: 'Android and iOS, from build to store' },
]

const STEPS = [
  {
    title: 'Reach out',
    body: (
      <>
        Email{' '}
        <a href={MAILTO} className="text-text underline decoration-line underline-offset-4 hover:decoration-lime">
          {CONTACT.email}
        </a>{' '}
        with what you want to build.
      </>
    ),
  },
  { title: 'Scope it together', body: 'We map the problem, the users and the timeline with you.' },
  { title: 'Build & ship', body: 'Design, engineering and launch, handled by one team.' },
]

function Capability({ capability, index }) {
  const accent = ACCENTS[capability.color]
  return (
    <Reveal
      y={22}
      delay={0.35 + index * 0.08}
      fade={0.44}
      move={0.55}
      className="flex flex-col items-start gap-6 rounded-[24px] border border-line bg-surface px-5 py-6 transition-colors duration-300 hover:border-muted sm:h-[260px] sm:justify-between sm:gap-0 sm:py-7 sm:pl-7 sm:pr-6"
    >
      <div className="flex flex-col items-start gap-3 sm:gap-[14px]">
        <span aria-hidden className={`h-1 w-8 rounded-[2px] ${accent.bar}`} />
        <p className={`whitespace-nowrap font-code text-[12px] leading-[16px] sm:text-[13px] sm:leading-[17px] ${accent.text}`}>$ swc build --scope={capability.scope}</p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-[10px]">
        <h3 className="font-ui text-[26px] font-semibold leading-[30px] tracking-[-0.03em] text-text sm:text-[28px] sm:leading-8">
          {capability.title[0]} <br className="max-sm:hidden" />
          {capability.title[1]}
        </h3>
        <p className="font-ui text-[14px] leading-[22px] text-mist">{capability.body}</p>
      </div>
    </Reveal>
  )
}

export default function Partner() {
  return (
    <section id="partner" className="flex scroll-mt-16 flex-col gap-8 pt-16 sm:gap-10 sm:pt-24 lg:scroll-mt-0 lg:pt-32">
      <SectionHeader
        eyebrow="~/partner"
        title={
          <>
            Got a product?
            <br />
            Let&apos;s <Accent>build</Accent> it.
          </>
        }
        aside={
          <p className="max-w-[460px] font-ui text-[17px] leading-[28px] text-mist">
            Product, design, engineering and data under one roof. Bring us the idea and we take it from first sketch to
            launch, the same way we ship our own twelve products.
          </p>
        }
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {CAPABILITIES.map((capability, index) => (
          <Capability key={capability.scope} capability={capability} index={index} />
        ))}
      </div>

      <div className="flex flex-col items-start gap-6 pt-2 lg:flex-row lg:items-center lg:gap-0">
        {STEPS.map((step, index) => (
          <Reveal
            key={step.title}
            y={12}
            delay={0.7 + index * 0.08}
            fade={0.36}
            move={0.45}
            className={`flex flex-1 flex-col gap-[6px] py-5 pr-4 max-lg:w-full lg:pr-5 ${
              index > 0 ? 'border-line max-lg:border-t max-lg:pt-4 lg:border-l lg:pl-7' : ''
            }`}
          >
            <div className="flex items-baseline gap-[10px]">
              <span className="font-code text-[12px] text-lime">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="font-ui text-[17px] font-medium leading-[21px] text-text">{step.title}</h3>
            </div>
            <p className="font-ui text-[14px] leading-[22px] text-mist">{step.body}</p>
          </Reveal>
        ))}
        <Reveal y={12} delay={0.94} fade={0.36} move={0.45} className="shrink-0">
          <Button href={PROJECT_MAILTO} arrow="→">
            Start a project
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
