<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { GithubStats, ContributionsResult } from './_types/stats';
import { TrendingDown, TrendingUp } from 'lucide-vue-next';
import { Octokit } from '@octokit/rest';
import { graphql } from '@octokit/graphql';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { isMobile } = defineProps<{ isMobile?: boolean }>();

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

/**
 * Fetch public GitHub stats for a user
 */
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
  } finally {
    githubLoading.value = false;
  }
}

/**
 * Helper: Fetch contributions for a given period by start and end ISO dates
 *
 * @param start Start date in ISO format
 * @param end End date in ISO format
 */
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

/**
 * Fetch contributions for a specific year
 *
 * @param year Year to fetch contributions for
 */
const fetchContributionsForYear = async(year: number): Promise<number> => {
  const start = new Date(year, 0, 1).toISOString();
  const end = new Date(year, 11, 31).toISOString();

  return await fetchContributionsForPeriod(start, end);
}

/**
 * Fetch contributions for the rolling year (365 days) from today
 */
const fetchRollingYearContributions = async(): Promise<number> => {
  const now = new Date();
  const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

  return await fetchContributionsForPeriod(oneYearAgo.toISOString(), now.toISOString());
}

/**
 * Fetch all the relevant GitHub contributions and stats
 */
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
    // Fetch contributions for each year in the range
    const contributionsPerYear = await Promise.all(
      years.map(year => fetchContributionsForYear(year))
    );
    // Calculate all-time contributions
    allTimeContributions.value = contributionsPerYear.reduce((sum, count) => sum + count, 0);
  } catch (error: any) {
    errorContributions.value = error;
  } finally {
    loadingContributions.value = false;
  }
}

/**
 * Load stored data from localStorage and check if it's still valid
 */
const loadStoredData = (): boolean => {
  const storedTimestamp = localStorage.getItem('githubDataTimestamp');
  // Check if timestamp exists and is a valid number
  if (storedTimestamp) {
    const timestamp = parseInt(storedTimestamp, 10);
    // Check if data is less than CACHE_DURATION old
    if (Date.now() - timestamp < CACHE_DURATION) {
      const storedGithubData = localStorage.getItem('githubData');
      const storedCurrentYear = localStorage.getItem('currentYearContributions');
      const storedLastYear = localStorage.getItem('lastYearContributions');
      const storedAllTime = localStorage.getItem('allTimeContributions');
      // Check if all required data exists
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
        <div class="stat-title">{{ t("stats.total") }}</div>
        <div class="stat-value text-primary" :class="{ 'text-sm': isMobile }">
          {{ githubData.publicRepos }}
        </div>
        <div class="stat-title">
          <i18n-t keypath="stats.github-name">
            <template #name>{{ githubData.name }}</template>
          </i18n-t>
        </div>
        <div class="stat-desc">
          <i18n-t keypath="stats.github-bio">
            <template #bio>{{ githubData.bio }}</template>
          </i18n-t>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title">{{ t("stats.total-contributions") }}</div>
        <div class="stat-value text-primary" :class="{ 'text-sm': isMobile }">
          {{ allTimeContributions }}
        </div>
        <div class="stat-desc">{{ t("stats.start-date") }} &mdash; {{ t("common.now") }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">{{ t("stats.last-year") }}</div>
        <div class="stat-value text-primary" :class="{ 'text-sm': isMobile }">
          {{ currentYearContributions }}
        </div>
        <div class="stat-desc flex items-center space-x-2">
          <TrendingUp class="mr-2" v-if="percentageChange > 0" :size="16" color="#00FF00" />
          <TrendingDown class="mr-2" v-else :size="16" color="#FF0000" />
          {{ difference }} ({{ percentageChange }}%)
        </div>
      </div>
    </div>
  </aside>
</template>