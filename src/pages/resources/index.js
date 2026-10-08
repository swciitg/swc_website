import Seo from '@/components/Seo'
import Page, { PageHeader } from '@/components/ui/Page'
import { Accent } from '@/components/ui/SectionHeader'
import Chip from '@/components/ui/Chip'
import CalloutBar from '@/components/ui/CalloutBar'
import TrackCard from '@/components/resources/TrackCard'
import { TRACKS } from '@/data/resources'
import { GITHUB_URL } from '@/data/site'

const COLUMNS = 3

export default function Resources() {
  return (
    <Page className="pb-8">
      <Seo path="/resources" />
      <PageHeader
        eyebrow="~/resources"
        title={
          <>
            Learn the stack
            <br />
            we <Accent>ship</Accent> with.
          </>
        }
        lead="Six tracks the team actually builds with. Pick one and start where you are."
        aside={<Chip dot="lime">{TRACKS.length} tracks · free</Chip>}
      />

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:mt-2 lg:grid-cols-3">
        {TRACKS.map((track, index) => (
          // The first row follows the header in; later rows stagger as they scroll into view.
          <TrackCard
            key={track.id}
            track={track}
            index={index + 1}
            delay={(index < COLUMNS ? 0.45 : 0.1) + (index % COLUMNS) * 0.08}
          />
        ))}
      </div>

      <div className="pt-6">
        <CalloutBar href={`${GITHUB_URL}/swc_website/issues`} action="Suggest it on GitHub">
          Know a better resource for one of these tracks?
        </CalloutBar>
      </div>
    </Page>
  )
}
