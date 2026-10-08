import Seo from '@/components/Seo'
import Page, { PageHeader } from '@/components/ui/Page'
import { Accent } from '@/components/ui/SectionHeader'
import Terminal from '@/components/ui/Terminal'
import NotifyForm from '@/components/blog/NotifyForm'
import UpcomingPost from '@/components/blog/UpcomingPost'
import { UPCOMING_POSTS } from '@/data/blog'

const EMPTY_OUTPUT = [
  { text: '0 posts found', color: 'muted' },
  { text: 'first drop is in the works. check back soon', color: 'pink' },
]

export default function Blogs() {
  return (
    <Page className="pb-8">
      <Seo path="/blogs" />
      <PageHeader
        eyebrow="~/blog"
        title={
          <>
            Notes from the
            <br />
            <Accent>build</Accent> room.
          </>
        }
        lead="Posts from the Students' Web Committee about how we design, build and ship. The first one is on its way."
      />

      <div className="flex flex-col gap-5 lg:mt-2 lg:gap-6">
        <Terminal command="swc blog --list" output={EMPTY_OUTPUT}>
          <NotifyForm />
        </Terminal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {UPCOMING_POSTS.map((post, index) => (
            <UpcomingPost key={post.id} post={post} delay={0.6 + index * 0.1} />
          ))}
        </div>
      </div>
    </Page>
  )
}
