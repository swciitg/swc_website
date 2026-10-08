import { useState } from 'react'
import { CONTACT } from '@/data/site'

/**
 * Email capture for the first post. The site has no mailing-list service, so submitting opens
 * the visitor's mail app with a ready request to the committee. A mailto link cannot choose the
 * sender, so the address they typed goes in the message body.
 */
export default function NotifyForm() {
  const [email, setEmail] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Notify me about the first SWC blog post')
    const body = encodeURIComponent(`Please let me know when the first post is out.\n\nMy email: ${email}`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submit} className="flex w-full flex-col items-start gap-3 lg:w-auto">
      <label htmlFor="notify-email" className="font-ui text-[15px] font-medium leading-[18px] text-text">
        Get the first post in your inbox
      </label>
      <div className="flex w-full items-center gap-2 rounded-full border border-line bg-raised py-[6px] pl-4 pr-[6px] transition-colors duration-200 focus-within:border-muted lg:pl-5">
        <input
          id="notify-email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@iitg.ac.in"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 bg-transparent font-ui text-[15px] leading-[18px] text-text placeholder:text-muted focus:outline-none lg:w-[220px] lg:flex-none"
        />
        <button
          type="submit"
          className="shrink-0 whitespace-nowrap rounded-full bg-lime px-4 py-3 font-ui text-[15px] font-medium leading-[18px] text-ink transition-colors duration-200 hover:bg-[#deff9c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime lg:px-5"
        >
          Notify me
        </button>
      </div>
    </form>
  )
}
