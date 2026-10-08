import Seo from '@/components/Seo'
import Page, { PageHeader } from '@/components/ui/Page'
import { Accent } from '@/components/ui/SectionHeader'
import Chip from '@/components/ui/Chip'
import SectionLabel from '@/components/ui/SectionLabel'
import LeadCard from '@/components/people/LeadCard'
import PersonCard from '@/components/people/PersonCard'
import PartnerTile from '@/components/team/PartnerTile'
import { getRoster } from '@/lib/roster'
import { DISCIPLINES, byDiscipline, inWords, isLead, toPerson } from '@/lib/people'
import { CONTACT, MAILTO } from '@/data/site'

const HEAD_COLUMNS = 4
// Core members have no role to colour by, so their cards cycle through the three accents.
const CORE_ACCENTS = Object.keys(DISCIPLINES)

// Read on the server so the team is in the HTML, and refreshed hourly without a redeploy.
export async function getStaticProps() {
  const { heads, core, session } = await getRoster()
  const people = heads.map(toPerson)

  return {
    props: {
      session,
      leads: people.filter(isLead),
      heads: byDiscipline(people.filter((person) => !isLead(person))),
      core: core.map(toPerson).map((person, index) => ({ ...person, discipline: CORE_ACCENTS[index % CORE_ACCENTS.length] })),
    },
    revalidate: 3600,
  }
}

function Legend({ session, members }) {
  return (
    <div className="flex flex-col items-start gap-[10px] lg:items-end">
      <Chip dot="lime">{[session, `${members} members`].filter(Boolean).join(' · ')}</Chip>
      <div className="flex flex-wrap gap-2">
        {Object.values(DISCIPLINES).map((discipline) => (
          <Chip key={discipline.label} dot={discipline.color} tone="mist">
            {discipline.label}
          </Chip>
        ))}
      </div>
    </div>
  )
}

const people = (count) => `${count} ${count === 1 ? 'person' : 'people'}`
const capitalise = (text) => text[0].toUpperCase() + text.slice(1)

export default function Team({ session, leads, heads, core }) {
  const headCount = leads.length + heads.length

  return (
    <Page className="pb-8">
      <Seo path="/team" />
      <PageHeader
        eyebrow="~/team"
        title={
          <>
            The people
            <br />
            <Accent>shipping</Accent> it.
          </>
        }
        lead={
          <>
            {capitalise(inWords(headCount))} heads and {inWords(core.length)} core members run SWC{session ? ` in ${session}` : ''}. Reach any
            of us at{' '}
            <a href={MAILTO} className="text-text underline decoration-line underline-offset-4 hover:decoration-lime">
              {CONTACT.email}
            </a>
            .
          </>
        }
        aside={<Legend session={session} members={headCount + core.length} />}
      />

      <div className="flex flex-col gap-5 lg:mt-2 lg:gap-6">
        <SectionLabel title="Heads" note={people(headCount)} delay={0.4} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {leads.map((person, index) => (
            <LeadCard key={person.id} person={person} delay={0.5 + index * 0.06} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {heads.map((person, index) => (
            <PersonCard key={person.id} person={person} delay={0.1 + (index % HEAD_COLUMNS) * 0.06} />
          ))}
          <PartnerTile delay={0.1 + (heads.length % HEAD_COLUMNS) * 0.06} />
        </div>

        <div className="mt-[68px] lg:mt-[72px]">
          <SectionLabel title="Core team" note={people(core.length)} />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-5">
          {core.map((person, index) => (
            <PersonCard key={person.id} person={person} variant="core" delay={0.1 + index * 0.06} />
          ))}
        </div>
      </div>
    </Page>
  )
}
