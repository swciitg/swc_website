import { useState } from 'react'
import Seo from '@/components/Seo'
import Page, { PageHeader } from '@/components/ui/Page'
import { Accent } from '@/components/ui/SectionHeader'
import FilterPills from '@/components/ui/FilterPills'
import PersonCard from '@/components/people/PersonCard'
import TributeTile from '@/components/hall-of-fame/TributeTile'
import { getRoster } from '@/lib/roster'
import { disciplineCounts, sessionLabel, toPerson } from '@/lib/people'

const COLUMNS = 4

// Read on the server so the leaders are in the HTML, and refreshed hourly without a redeploy.
export async function getStaticProps() {
  const { alumni } = await getRoster()
  const people = alumni.map(toPerson)
  const years = [...new Set(people.map((person) => person.year))].sort().reverse()

  return {
    props: {
      batches: years.map((year) => {
        const leaders = people.filter((person) => person.year === year)
        return { year, label: sessionLabel(year), leaders, disciplines: disciplineCounts(leaders) }
      }),
    },
    revalidate: 3600,
  }
}

function BatchSelector({ batches, value, onChange }) {
  const options = batches.map((batch) => ({ id: batch.year, label: batch.label, count: batch.leaders.length }))
  return (
    <div className="flex flex-col items-start gap-[10px] lg:items-end">
      <p className="font-code text-[11px] uppercase leading-[15px] tracking-[0.08em] text-muted">Batch</p>
      <FilterPills label="Choose a batch" options={options} value={value} onChange={onChange} />
    </div>
  )
}

export default function HallOfFame({ batches }) {
  const [year, setYear] = useState(batches[0]?.year)
  const batch = batches.find((entry) => entry.year === year)

  return (
    <Page className="pb-8">
      <Seo path="/hall-of-fame" />
      <PageHeader
        eyebrow="~/hall-of-fame"
        title={
          <>
            The leaders who
            <br />
            <Accent>built</Accent> SWC.
          </>
        }
        lead="A tribute to the heads who led the committee, kept here batch by batch."
        aside={batch && <BatchSelector batches={batches} value={year} onChange={setYear} />}
      />

      {batch ? (
        // Keyed by batch so choosing another one replays the card entrance.
        <div key={batch.year} className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-2 lg:grid-cols-4 lg:gap-6">
          {batch.leaders.map((person, index) => (
            <PersonCard
              key={person.id}
              person={person}
              variant="alumni"
              priority={index < COLUMNS}
              delay={(index < COLUMNS ? 0.4 : 0.1) + (index % COLUMNS) * 0.07}
            />
          ))}
          <TributeTile batch={batch.label} leaders={batch.leaders.length} disciplines={batch.disciplines} delay={0.15} />
        </div>
      ) : (
        <p className="py-20 font-ui text-[17px] leading-[28px] text-mist">The first batch will be added here soon.</p>
      )}
    </Page>
  )
}
