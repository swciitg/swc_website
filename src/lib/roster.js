// Team and Hall of Fame records from the backend, with a committed snapshot as the fallback.
// Server side only: call from getStaticProps.

import snapshot from '@/data/team-snapshot.json'
import { ARCHIVED_ALUMNI } from '@/data/alumni'

function backendBase() {
  const raw = (process.env.BACKEND_BASE_URL || '').replace(/\/+$/, '')
  if (!raw) return null
  return raw.endsWith('/api') ? raw : `${raw}/api`
}

async function fetchList(endpoint) {
  const base = backendBase()
  if (!base) return null
  try {
    const res = await fetch(`${base}/${endpoint}`, { signal: AbortSignal.timeout(8000) })
    if (!res.ok) return null
    const data = await res.json()
    // An empty list is a real answer (everyone was removed); only a failed request falls back to the snapshot.
    return Array.isArray(data) ? data : null
  } catch {
    return null
  }
}

const byId = (a, b) => (a.id ?? 0) - (b.id ?? 0)
// Newest batch first, then the stored order inside each batch.
const byBatch = (a, b) => b.year.localeCompare(a.year) || byId(a, b)

// Backend records win: an archived batch is only added for a year the backend does not have.
function withArchive(alumni) {
  const years = new Set(alumni.map((person) => person.year))
  return [...alumni, ...ARCHIVED_ALUMNI.filter((person) => !years.has(person.year))].sort(byBatch)
}

// "2025-26" is the latest batch in the Hall of Fame, so the sitting team is "2026–27".
function nextSession(year) {
  const match = /^(\d{4})-(\d{2})$/.exec(year || '')
  if (!match) return null
  const start = Number(match[1]) + 1
  return `${start}–${String((start + 1) % 100).padStart(2, '0')}`
}

/** Raw records (alumni newest batch first, the rest by id), plus the label of the current session. */
export async function getRoster() {
  const [heads, core, alumni] = await Promise.all([fetchList('headData'), fetchList('coreTeam'), fetchList('hallOfFame')])

  const roster = {
    heads: [...(heads || snapshot.heads)].sort(byId),
    core: [...(core || snapshot.core)].sort(byId),
    alumni: withArchive(alumni || snapshot.hallOfFame),
  }
  const latestYear = roster.alumni.map((person) => person.year).sort().pop()
  return { ...roster, session: nextSession(latestYear) }
}
