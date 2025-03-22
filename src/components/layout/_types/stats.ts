interface GithubStats {
  publicRepos: number;
  followers: number;
  following: number;
  publicGists: number;
  avatar: string;
  name: null | string;
  bio: null | string;
}

interface ContributionsResult {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
      };
    };
  };
}

export type { GithubStats, ContributionsResult };