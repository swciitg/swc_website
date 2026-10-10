import Seo from '@/components/Seo'
import Page from '@/components/ui/Page'
import Hero from '@/components/home/Hero'
import StatsStrip from '@/components/home/StatsStrip'
import FeaturedProducts from '@/components/home/FeaturedProducts'
// import ShippingActivity from '@/components/home/ShippingActivity' // hidden from the home page for now
import About from '@/components/home/About'
import Partner from '@/components/home/Partner'
import Community from '@/components/home/Community'
import { getHomeData } from '@/lib/homeData'

// Team, Hall of Fame and GitHub numbers are read on the server and refreshed hourly without a redeploy.
export async function getStaticProps() {
  return { props: await getHomeData(), revalidate: 3600 }
}

export default function Home({ counts, teamSession, teamAvatars, leaderAvatars, github }) {
  return (
    <Page className="pb-8 sm:pb-16">
      <Seo path="/" />
      <div className="flex flex-col gap-6 pt-5 sm:pt-6">
        <Hero />
        <StatsStrip counts={counts} teamSession={teamSession} teamAvatars={teamAvatars} leaderAvatars={leaderAvatars} />
      </div>
      <FeaturedProducts total={counts.products} />
      {/* <ShippingActivity activity={github} /> */}
      <About counts={counts} teamAvatars={teamAvatars} />
      <Partner />
      <Community />
    </Page>
  )
}
