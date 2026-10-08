// Commit activity for the swciitg GitHub organisation, shaped for the home page heatmap.
// Server side only: call from getStaticProps.

const ORG = 'swciitg';
const API = 'https://api.github.com';
const WEEKS = 53;
const DAY_MS = 86400000;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function gh(path, token) {
  const res = await fetch(API + path, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'swc-website',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return res;
}

async function listRepos(token) {
  const repos = [];
  for (let page = 1; page <= 10; page++) {
    const res = await gh(`/orgs/${ORG}/repos?type=public&per_page=100&page=${page}`, token);
    if (!res.ok) throw new Error(`GitHub repos request failed: ${res.status}`);
    const batch = await res.json();
    repos.push(...batch);
    if (batch.length < 100) break;
  }
  return repos;
}

// GitHub computes these stats lazily and answers 202 until they are ready.
async function commitActivity(repo, token) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const res = await gh(`/repos/${ORG}/${repo}/stats/commit_activity`, token);
    if (res.status === 200) return res.json();
    if (res.status === 204) return [];
    if (res.status !== 202) throw new Error(`GitHub stats request failed for ${repo}: ${res.status}`);
    await sleep(2000);
  }
  throw new Error(`GitHub stats for ${repo} were not ready in time`);
}

async function mapPool(items, size, fn) {
  const results = new Array(items.length);
  let next = 0;
  let failed = false;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      // One failure discards the whole result, so the other workers stop taking new items.
      while (next < items.length && !failed) {
        const index = next++;
        try {
          results[index] = await fn(items[index]);
        } catch (error) {
          failed = true;
          throw error;
        }
      }
    })
  );
  return results;
}

const isoDate = (ms) => new Date(ms).toISOString().slice(0, 10);

function levelFor(count, thresholds) {
  if (count === 0) return 0;
  if (count <= thresholds[0]) return 1;
  if (count <= thresholds[1]) return 2;
  if (count <= thresholds[2]) return 3;
  return 4;
}

export function formatDay(iso, { weekday = true, year = true } = {}) {
  const date = new Date(iso + 'T00:00:00Z');
  const parts = [`${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`];
  if (year) parts.push(String(date.getUTCFullYear()));
  const label = parts.join(' ');
  return weekday ? `${WEEKDAYS[date.getUTCDay()]}, ${label}` : label;
}

function buildActivity(perRepo, now) {
  const counts = new Map();
  const repoTotals = [];

  for (const { name, weeks } of perRepo) {
    let total = 0;
    for (const week of weeks) {
      week.days.forEach((count, dayIndex) => {
        if (!count) return;
        const key = isoDate(week.week * 1000 + dayIndex * DAY_MS);
        counts.set(key, (counts.get(key) || 0) + count);
        total += count;
      });
    }
    if (total > 0) repoTotals.push({ name, commits: total });
  }

  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const thisSunday = today - new Date(today).getUTCDay() * DAY_MS;
  const firstSunday = thisSunday - (WEEKS - 1) * 7 * DAY_MS;

  const nonZero = [];
  for (let ms = firstSunday; ms <= today; ms += DAY_MS) {
    const count = counts.get(isoDate(ms)) || 0;
    if (count > 0) nonZero.push(count);
  }
  nonZero.sort((a, b) => a - b);
  const quantile = (q) => nonZero[Math.min(nonZero.length - 1, Math.floor(q * nonZero.length))] || 0;
  const thresholds = [quantile(0.25), quantile(0.5), quantile(0.75)];

  const weeks = [];
  const months = [];
  let total = 0;
  let activeDays = 0;
  let streak = 0;
  let longestStreak = 0;
  let busiest = null;
  let lastMonth = -1;

  for (let w = 0; w < WEEKS; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const ms = firstSunday + (w * 7 + d) * DAY_MS;
      const date = isoDate(ms);
      if (ms > today) {
        days.push({ date, count: 0, level: -1 });
        continue;
      }
      const count = counts.get(date) || 0;
      days.push({ date, count, level: levelFor(count, thresholds) });
      total += count;
      if (count > 0) {
        activeDays++;
        streak++;
        longestStreak = Math.max(longestStreak, streak);
        if (!busiest || count > busiest.count) busiest = { date, count, week: w, day: d };
      } else {
        streak = 0;
      }
    }
    const month = new Date(firstSunday + w * 7 * DAY_MS).getUTCMonth();
    if (month !== lastMonth) {
      months.push({ week: w, label: MONTHS[month] });
      lastMonth = month;
    }
    weeks.push(days);
  }

  // A label needs room for three characters; drop one that would collide with the next.
  const spacedMonths = months.filter((m, i) => i === months.length - 1 || months[i + 1].week - m.week >= 2);

  const start = new Date(firstSunday);
  const end = new Date(today);
  const monthYear = (date) => `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;

  return {
    org: ORG,
    total,
    activeDays,
    longestStreak,
    busiest: busiest && {
      ...busiest,
      label: formatDay(busiest.date),
      shortLabel: formatDay(busiest.date, { weekday: false, year: false }),
    },
    repoCount: repoTotals.length,
    topRepos: repoTotals.sort((a, b) => b.commits - a.commits).slice(0, 5),
    range: `${monthYear(start)} – ${monthYear(end)}`,
    from: isoDate(firstSunday),
    to: isoDate(today),
    months: spacedMonths,
    weeks,
    fetchedAt: now.toISOString(),
  };
}

export async function fetchGithubActivity({ token = process.env.GITHUB_TOKEN, now = new Date() } = {}) {
  const repos = await listRepos(token);
  const cutoff = now.getTime() - (WEEKS + 1) * 7 * DAY_MS;
  const recent = repos.filter((repo) => !repo.fork && repo.pushed_at && new Date(repo.pushed_at).getTime() >= cutoff);

  const perRepo = await mapPool(recent, 6, async (repo) => ({
    name: repo.name,
    weeks: await commitActivity(repo.name, token),
  }));

  return buildActivity(perRepo, now);
}
