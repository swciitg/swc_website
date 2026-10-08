import Reveal from '@/components/ui/Reveal'
import Chip from '@/components/ui/Chip'

/** Placeholder card for a post that has been announced but not published. */
export default function UpcomingPost({ post, delay = 0 }) {
  return (
    <Reveal
      as="article"
      y={22}
      delay={delay}
      fade={0.44}
      move={0.55}
      className="flex flex-col items-start gap-4 rounded-[24px] border border-dashed border-line p-5 pb-6 lg:px-6 lg:pb-7 lg:pt-6"
    >
      <div aria-hidden className="h-[180px] w-full rounded-[14px] bg-surface" />
      <div className="flex flex-wrap gap-2">
        <Chip dot={post.color} tone="mist">
          {post.category}
        </Chip>
        <Chip tone="mist" className="!bg-surface !text-muted">
          Coming soon
        </Chip>
      </div>
      <h2 className="font-ui text-[20px] font-semibold leading-[25px] tracking-[-0.02em] text-mist lg:text-[22px] lg:leading-7">{post.title}</h2>
      <span aria-hidden className="h-[10px] w-full max-w-[300px] rounded-[5px] bg-raised" />
      <span aria-hidden className="h-[10px] w-2/3 max-w-[200px] rounded-[5px] bg-raised" />
    </Reveal>
  )
}
