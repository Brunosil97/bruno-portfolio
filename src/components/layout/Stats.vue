<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { TrendingDown, TrendingUp } from 'lucide-vue-next';
import { Octokit } from '@octokit/rest';
import { graphql } from '@octokit/graphql';

const loading = ref(true);
const error = ref('');
const githubData = ref({
  publicRepos: 0,
  followers: 0,
  following: 0,
  publicGists: 0,
  avatar: '',
  name: '',
  bio: '',
});
const currentYearContributions = ref(0);
const allTimeContributions = ref(0);
const loadingContributions = ref(false);
const errorContributions = ref('');
const lastYearContributions = ref(0);

// Hardcoded token (for demo purposes only—ensure to secure this in production)
const token = import.meta.env.VITE_GITHUB_TOKEN;

const difference = computed(() => Math.abs(currentYearContributions.value - lastYearContributions.value));
const percentageChange = computed(() => {
  if (lastYearContributions.value === 0) return 0;

  const percentage = ((currentYearContributions.value - lastYearContributions.value) / lastYearContributions.value) * 100;
  return parseFloat(percentage.toFixed(1));
});

// Fetch public stats from GitHub's REST API (public endpoint)
async function fetchPublicStats() {
  try {
    const octokit = new Octokit();
    const { data } = await octokit.request('GET /users/{username}', {
      username: 'Brunosil97',
    });
    console.warn(data)
    githubData.value = {
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      publicGists: data.public_gists,
      avatar: data.avatar_url,
      name: data.name,
      bio: data.bio,
    };
  } catch (err: any) {
    error.value = 'Error fetching public stats';
    console.error(err);
  }
}

// New helper: fetch contributions for a given period defined by start and end ISO dates
async function fetchContributionsForPeriod(start: string, end: string): Promise<number> {
  const query = `
    query($start: DateTime!, $end: DateTime!) {
      user(login: "Brunosil97") {
        contributionsCollection(from: $start, to: $end) {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;
  const result = await graphql(query, {
    headers: { authorization: `token ${token}` },
    start,
    end,
  });
  return result.user.contributionsCollection.contributionCalendar.totalContributions;
}

// Fetch contributions for a specific calendar year
async function fetchContributionsForYear(year: number): Promise<number> {
  const start = new Date(year, 0, 1).toISOString();    // January 1st
  const end = new Date(year, 11, 31).toISOString();      // December 31st
  return await fetchContributionsForPeriod(start, end);
}

// Fetch contributions for a rolling 365-day period ending today
async function fetchRollingYearContributions(): Promise<number> {
  const now = new Date();
  const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
  return await fetchContributionsForPeriod(oneYearAgo.toISOString(), now.toISOString());
}

async function fetchContributions() {
  try {
    if (!token) {
      throw new Error('GitHub token not set');
    }

    // Fetch contributions for the rolling 365-day period (current year contributions)
    currentYearContributions.value = await fetchRollingYearContributions();

    // Fetch last calendar year's contributions
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    lastYearContributions.value = await fetchContributionsForYear(lastYear);

    // Calculate all-time contributions from a defined start year (e.g., 2019) to current year
    const startYear = 2019;
    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
    const contributionsPerYear = await Promise.all(
      years.map(year => fetchContributionsForYear(year))
    );
    allTimeContributions.value = contributionsPerYear.reduce((sum, count) => sum + count, 0);
  } catch (err: any) {
    console.error(err);
    errorContributions.value = 'Error fetching contributions';
  } finally {
    loadingContributions.value = false;
  }
}
onMounted(async () => {
  await Promise.all([fetchPublicStats()]);
  loading.value = false;
});
</script>

<template>
  <aside class="w-64 bg-base-200 p-4">
    <div class="stats stats-vertical shadow">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img :src="githubData.avatar" />
            </div>
          </div>
        </div>
        <div class="stat-title">Total Repositories</div>
        <div class="stat-value text-primary">{{ githubData.publicRepos }}</div>
        <div class="stat-title">{{ githubData.name }}</div>
        <div class="stat-desc">{{ githubData.bio }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Total Contributions</div>
        <div class="stat-value text-primary">{{ allTimeContributions }}</div>
        <div class="stat-desc">Oct 5th 2019 - Now</div>
      </div>
      <div class="stat">
        <div class="stat-title">Current Year</div>
        <div class="stat-value text-primary">{{ currentYearContributions }}</div>
        <div class="stat-desc flex items-center space-x-2">
          <TrendingUp class="mr-2" v-if="percentageChange > 0" :size="16" color="#00FF00" />
          <TrendingDown class="mr-2" v-else :size="16" color="#FF0000" />
          {{ difference }} ({{ percentageChange }}%)
        </div>
      </div>
    </div>
  </aside>
</template>