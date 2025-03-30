<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { GithubStats, ContributionsResult } from './_types/stats';
import { TrendingDown, TrendingUp } from 'lucide-vue-next';
import { Octokit } from '@octokit/rest';
import { graphql } from '@octokit/graphql';

const githubLoading = ref<boolean>(true);
const githubError = ref('');
const githubData = ref<GithubStats>({
  publicRepos: 0,
  followers: 0,
  following: 0,
  publicGists: 0,
  avatar: '',
  name: '',
  bio: '',
});
const currentYearContributions = ref<number>(0);
const allTimeContributions = ref<number>(0);
const loadingContributions = ref<boolean>(false);
const errorContributions = ref<string>('');
const lastYearContributions = ref<number>(0);

// Hardcoded token (for demo purposes only—ensure to secure this in production)
const token = import.meta.env.VITE_GITHUB_TOKEN;
const CACHE_DURATION = 2 * 60 * 60 * 1000;

const difference = computed(() => Math.abs(currentYearContributions.value - lastYearContributions.value));
const percentageChange = computed(() => {
  if (lastYearContributions.value === 0) return 0;

  const percentage = ((currentYearContributions.value - lastYearContributions.value) / lastYearContributions.value) * 100;
  return parseFloat(percentage.toFixed(1));
});

// Fetch public stats from GitHub's REST API (public endpoint)
const fetchPublicStats = async() => {
  try {
    githubLoading.value = true;

    const octokit = new Octokit();
    const { data } = await octokit.request('GET /users/{username}', {
      username: 'Brunosil97',
    });

    githubData.value = {
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      publicGists: data.public_gists,
      avatar: data.avatar_url,
      name: data.name,
      bio: data.bio,
    };
  } catch (error: any) {
    githubError.value = error;
    console.error(error);
  } finally {
    githubLoading.value = false;
  }
}

// New helper: fetch contributions for a given period defined by start and end ISO dates
const fetchContributionsForPeriod = async(start: string, end: string): Promise<number> => {
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
  const result = await graphql<ContributionsResult>(query, {
    headers: { authorization: `token ${token}` },
    start,
    end,
  });
  return result.user.contributionsCollection.contributionCalendar.totalContributions;
}

// Fetch contributions for a specific calendar year
const fetchContributionsForYear = async(year: number): Promise<number> => {
  const start = new Date(year, 0, 1).toISOString();    // January 1st
  const end = new Date(year, 11, 31).toISOString();      // December 31st
  return await fetchContributionsForPeriod(start, end);
}

// Fetch contributions for a rolling 365-day period ending today
const fetchRollingYearContributions = async(): Promise<number> => {
  const now = new Date();
  const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
  return await fetchContributionsForPeriod(oneYearAgo.toISOString(), now.toISOString());
}

const fetchContributions = async() => {
  try {
    if (!token) {
      throw new Error('GitHub token not set');
    }
    loadingContributions.value = true;
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
  } catch (error: any) {
    console.error(error);
    errorContributions.value = error;
  } finally {
    loadingContributions.value = false;
  }
}

// Load stored data from localStorage, return true if data is fresh
const loadStoredData = (): boolean => {
  const storedTimestamp = localStorage.getItem('githubDataTimestamp');
  if (storedTimestamp) {
    const timestamp = parseInt(storedTimestamp, 10);
    // Check if data is less than CACHE_DURATION old
    if (Date.now() - timestamp < CACHE_DURATION) {
      const storedGithubData = localStorage.getItem('githubData');
      const storedCurrentYear = localStorage.getItem('currentYearContributions');
      const storedLastYear = localStorage.getItem('lastYearContributions');
      const storedAllTime = localStorage.getItem('allTimeContributions');

      if (storedGithubData && storedCurrentYear && storedLastYear && storedAllTime) {
        githubData.value = JSON.parse(storedGithubData);
        currentYearContributions.value = Number(storedCurrentYear);
        lastYearContributions.value = Number(storedLastYear);
        allTimeContributions.value = Number(storedAllTime);
        return true;
      }
    }
  }
  return false;
};

onMounted(async () => {
  // Only call APIs if no stored data is found
  const dataLoadedFromStorage = loadStoredData();
  if (!dataLoadedFromStorage) {
    await Promise.all([fetchPublicStats(), fetchContributions()]);
    // After API calls, store data in localStorage
    localStorage.setItem('githubData', JSON.stringify(githubData.value));
    localStorage.setItem(
      'currentYearContributions',
      currentYearContributions.value.toString()
    );
    localStorage.setItem(
      'lastYearContributions',
      lastYearContributions.value.toString()
    );
    localStorage.setItem(
      'allTimeContributions',
      allTimeContributions.value.toString()
    );
    localStorage.setItem('githubDataTimestamp', Date.now().toString());
  }
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
        <div class="stat-title">In Last Year</div>
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