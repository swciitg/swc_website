// Everything the home page reads from outside the repo, with committed snapshots as the fallback.
// Server side only: call from getStaticProps.

import { fetchGithubActivity } from '@/lib/github';
import { getRoster } from '@/lib/roster';
import { toPerson } from '@/lib/people';
import { PRODUCTS } from '@/data/products';
import { TRACKS } from '@/data/resources';
import githubSnapshot from '@/data/github-activity.json';

const GITHUB_TTL_MS = 6 * 60 * 60 * 1000;
let githubCache = null;

// People with a photo on this site, as { name, photo }.
const avatars = (records, count) =>
  records
    .map(toPerson)
    .filter((person) => person.photo)
    .slice(0, count)
    .map(({ name, photo }) => ({ name, photo }));

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
  const [roster, github] = await Promise.all([getRoster(), getGithub()]);
  const team = [...roster.heads, ...roster.core];

  return {
    counts: {
      products: PRODUCTS.length,
      team: team.length,
      tracks: TRACKS.length,
      leaders: roster.alumni.length,
    },
    teamSession: roster.session,
    teamAvatars: avatars(team, 6),
    leaderAvatars: avatars(roster.alumni, 3),
    github,
  };
}
