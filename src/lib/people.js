// Shaping of team and alumni records. Pure functions, safe on the server and in the browser.

export const DISCIPLINES = {
  engineering: { label: 'Engineering', color: 'teal' },
  design: { label: 'Design & growth', color: 'pink' },
  product: { label: 'Product & ops', color: 'lime' },
}

const RULES = [
  ['engineering', /webmaster|frontend|backend|app\b/i],
  ['design', /design|growth|event/i],
]

/** Discipline for a role title. Secretaries, coordinators, product and operations fall under product. */
export function disciplineOf(role = '') {
  const match = RULES.find(([, pattern]) => pattern.test(role))
  return match ? match[0] : 'product'
}

const LEAD_ROLE = /secretary|coordinator/i
export const isLead = (person) => LEAD_ROLE.test(person.role)

const IMAGE_FILE = /\.(avif|webp|png|jpe?g)$/i

/**
 * Photos are stored as absolute URLs to this site's own public folder. Returning the path lets
 * next/image resize them; anything that is not an image on this site means "no photo".
 */
function localPhoto(url = '') {
  const path = url.replace(/^https?:\/\/swc\.iitg\.ac\.in/i, '')
  return path.startsWith('/swc/') && IMAGE_FILE.test(path) ? path : null
}

export function toPerson(record) {
  const role = (record.por || record.role || '').trim()
  return {
    id: record.id,
    name: record.name.trim(),
    role,
    degree: (record.degree || '').trim().replace(/^btech/i, 'BTech'),
    photo: localPhoto(record.pfp),
    discipline: disciplineOf(role),
    ...(record.year ? { year: record.year } : {}),
  }
}

export const initials = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

/** [{ id, label, color, count }] for the disciplines present in a list of people. */
export function disciplineCounts(people) {
  return Object.entries(DISCIPLINES)
    .map(([id, discipline]) => ({ id, ...discipline, count: people.filter((person) => person.discipline === id).length }))
    .filter((entry) => entry.count > 0)
}

/** Leads first, then engineering, design and product, keeping the stored order inside each group. */
export function byDiscipline(people) {
  const order = Object.keys(DISCIPLINES)
  return [...people].sort((a, b) => order.indexOf(a.discipline) - order.indexOf(b.discipline) || a.id - b.id)
}

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
export const inWords = (count) => WORDS[count] ?? String(count)

/** "2025-26" as stored becomes "2025–26" for display. */
export const sessionLabel = (year = '') => year.replace('-', '–')
