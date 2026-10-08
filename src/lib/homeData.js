// Everything the home page reads from outside the repo, with committed snapshots as the fallback.
// Server side only: call from getStaticProps.

import { fetchGithubActivity } from '@/lib/github';
import { PRODUCTS } from '@/data/products';
import { TRACKS } from '@/data/resources';
import teamSnapshot from '@/data/team-snapshot.json';
import githubSnapshot from '@/data/github-activity.json';

const GITHUB_TTL_MS = 6 * 60 * 60 * 1000;
let githubCache = null;

function backendBase() {
  const raw = (process.env.BACKEND_BASE_URL || '').replace(/\/+$/, '');
  if (!raw) return null;
  return raw.endsWith('/api') ? raw : `${raw}/api`;
}

async function fetchList(endpoint) {
  const base = backendBase();
  if (!base) return null;
  try {
    const res = await fetch(`${base}/${endpoint}`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : null;
  } catch {
    return null;
  }
}

const byId = (a, b) => (a.id ?? 0) - (b.id ?? 0);
const person = ({ name, pfp }) => ({ name, pfp });

// "2025-26" is the latest batch in the Hall of Fame, so the sitting team is "2026–27".
function nextSession(year) {
  const match = /^(\d{4})-(\d{2})$/.exec(year || '');
  if (!match) return null;
  const start = Number(match[1]) + 1;
  return `${start}–${String((start + 1) % 100).padStart(2, '0')}`;
}

async function getGithub() {
  // Unauthenticated GitHub allows 60 requests an hour and next dev re-runs getStaticProps on
  // every request, so local development without a token reads the snapshot.
  const live = process.env.GITHUB_TOKEN || process.env.NODE_ENV === 'production';
  if (!live) return githubSnapshot;
  if (githubCache && Date.now() - githubCache.at < GITHUB_TTL_MS) return githubCache.data;
  try {
    const data = await fetchGithubActivity();
    githubCache = { at: Date.now(), data };
    return data;
  } catch (error) {
    console.error('GitHub activity fetch failed, using snapshot:', error.message);
    return githubCache ? githubCache.data : githubSnapshot;
  }
}

export async function getHomeData() {
  const [heads, core, hallOfFame, github] = await Promise.all([
    fetchList('headData'),
    fetchList('coreTeam'),
    fetchList('hallOfFame'),
    getGithub(),
  ]);

  const team = [...(heads || teamSnapshot.heads)].sort(byId).concat([...(core || teamSnapshot.core)].sort(byId));
  const leaders = [...(hallOfFame || teamSnapshot.hallOfFame)].sort(byId);
  const latestYear = leaders.map((leader) => leader.year).sort().pop();

  return {
    counts: {
      products: PRODUCTS.length,
      team: team.length,
      tracks: TRACKS.length,
      leaders: leaders.length,
    },
    teamSession: nextSession(latestYear),
    teamAvatars: team.slice(0, 6).map(person),
    leaderAvatars: leaders.slice(0, 3).map(person),
    github,
  };
}
