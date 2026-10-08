import Reveal from '@/components/ui/Reveal'
import { Accent } from '@/components/ui/SectionHeader'
import { CONTACT, PROJECT_MAILTO } from '@/data/site'

/** Dashed tile that fills the last slot of the heads grid with an invitation to work with the team. */
export default function PartnerTile({ delay = 0 }) {
  return (
    <Reveal y={22} delay={delay} fade={0.44} move={0.55} className="aspect-[310/380]">
      <a
        href={PROJECT_MAILTO}
        className="flex h-full flex-col items-start justify-between rounded-[20px] border border-dashed border-line p-4 transition-colors duration-200 hover:border-muted lg:p-6"
      >
        <p className="font-code text-[11px] leading-[14px] text-lime lg:text-[13px] lg:leading-[17px]">$ swc collaborate</p>
        <div className="flex flex-col items-start gap-3">
          <p className="font-ui text-[20px] font-semibold leading-6 tracking-[-0.045em] text-text lg:text-[36px] lg:leading-10">
            Building something? <Accent>Let&apos;s talk.</Accent>
          </p>
          <p className="max-w-[250px] font-ui text-[11px] leading-[14px] text-mist lg:text-[14px] lg:leading-[22px]">
            Orgs and companies can reach the whole team at {CONTACT.email}.
          </p>
        </div>
      </a>
    </Reveal>
  )
}
