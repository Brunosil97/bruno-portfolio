<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const avatarUrl = ref<string>('');

onMounted(() => {
  // Try to get avatar from localStorage first (from GithubStats component)
  const storedGithubData = localStorage.getItem('githubData');
  if (storedGithubData) {
    const githubData = JSON.parse(storedGithubData);
    avatarUrl.value = githubData.avatar;
  } else {
    // Fallback: fetch directly from GitHub API
    fetch('https://api.github.com/users/Brunosil97')
      .then(res => res.json())
      .then(data => {
        avatarUrl.value = data.avatar_url;
      })
      .catch(() => {
        // Ultimate fallback
        avatarUrl.value = 'https://avatars.githubusercontent.com/u/41350516';
      });
  }
});
</script>

<template>
  <div class="container mx-auto p-2 sm:p-4 max-w-6xl">
    <!-- Hero Introduction Section -->
    <div class="hero bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-box mb-4 sm:mb-8 shadow-2xl relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="hero-content text-center py-8 sm:py-16 px-2 sm:px-4 relative z-10">
        <div class="max-w-4xl">
          <div class="avatar online mb-4 sm:mb-6">
            <div class="w-20 h-20 sm:w-32 sm:h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 sm:ring-offset-4">
              <img v-if="avatarUrl" :src="avatarUrl" alt="Bruno Silva" />
              <div v-else class="bg-primary text-primary-content w-full h-full flex items-center justify-center">
                <span class="text-3xl sm:text-5xl font-bold">BS</span>
              </div>
            </div>
          </div>
          <h1 class="text-2xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {{ t("about-me.introduction") }}
          </h1>
          <p class="text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4 max-w-3xl mx-auto px-2 sm:px-0">{{ t("about-me.bio-1") }}</p>
          <p class="text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">{{ t("about-me.bio-2") }}</p>

          <!-- Stats -->
          <div class="stats stats-vertical sm:stats-horizontal shadow mt-6 sm:mt-8 bg-base-100/80 backdrop-blur w-full sm:w-auto">
            <div class="stat place-items-center px-2 sm:px-4 py-2 sm:py-4">
              <div class="stat-title text-xs sm:text-sm">Experience</div>
              <div class="stat-value text-primary text-2xl sm:text-4xl">5+</div>
              <div class="stat-desc text-xs sm:text-sm">Years in Industry</div>
            </div>
            <div class="stat place-items-center px-2 sm:px-4 py-2 sm:py-4">
              <div class="stat-title text-xs sm:text-sm">Role</div>
              <div class="stat-value text-secondary text-lg sm:text-2xl">Senior</div>
              <div class="stat-desc text-xs sm:text-sm">Software Engineer</div>
            </div>
            <div class="stat place-items-center px-2 sm:px-4 py-2 sm:py-4">
              <div class="stat-title text-xs sm:text-sm">Focus</div>
              <div class="stat-value text-accent text-lg sm:text-2xl">AI</div>
              <div class="stat-desc text-xs sm:text-sm">Innovation & Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Reach Out Section -->
    <div class="card bg-base-200 shadow-xl mb-4 sm:mb-8 border-l-4 border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div class="card-body p-4 sm:p-8">
        <h2 class="card-title text-xl sm:text-3xl mb-2 sm:mb-4 flex-wrap">
          <div class="rounded-full bg-primary/20 p-1.5 sm:p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          {{ t("about-me.why") }}
        </h2>
        <p class="text-sm sm:text-base leading-relaxed">{{ t("about-me.why-bio") }}</p>
        <div class="card-actions justify-start sm:justify-end mt-3 sm:mt-4 flex-wrap gap-2">
          <div class="badge badge-primary badge-outline text-xs sm:text-sm">Full Product Lifecycle</div>
          <div class="badge badge-primary badge-outline text-xs sm:text-sm">Scalable Solutions</div>
        </div>
      </div>
    </div>

    <!-- Progressive Mindset Section -->
    <div class="card bg-gradient-to-br from-accent/10 to-accent/5 shadow-xl mb-4 sm:mb-8 border-l-4 border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div class="card-body p-4 sm:p-8">
        <h2 class="card-title text-xl sm:text-3xl mb-2 sm:mb-4 flex-wrap">
          <div class="rounded-full bg-accent/20 p-1.5 sm:p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          {{ t("about-me.progressive") }}
        </h2>
        <div class="space-y-3 sm:space-y-4">
          <div class="flex items-start gap-2 sm:gap-3">
            <div class="badge badge-accent mt-1 text-xs sm:text-sm">1</div>
            <p class="text-sm sm:text-base leading-relaxed flex-1">{{ t("about-me.progressive-bio-1") }}</p>
          </div>
          <div class="flex items-start gap-2 sm:gap-3">
            <div class="badge badge-accent mt-1 text-xs sm:text-sm">2</div>
            <p class="text-sm sm:text-base leading-relaxed flex-1">{{ t("about-me.progressive-bio-2") }}</p>
          </div>
          <div class="flex items-start gap-2 sm:gap-3">
            <div class="badge badge-accent mt-1 text-xs sm:text-sm">3</div>
            <p class="text-sm sm:text-base leading-relaxed flex-1">{{ t("about-me.progressive-bio-3") }}</p>
          </div>
        </div>
        <div class="card-actions justify-start sm:justify-end mt-3 sm:mt-4 flex-wrap gap-2">
          <div class="badge badge-accent badge-outline text-xs sm:text-sm">Continuous Learning</div>
          <div class="badge badge-accent badge-outline text-xs sm:text-sm">Innovation</div>
          <div class="badge badge-accent badge-outline text-xs sm:text-sm">Future-Ready</div>
        </div>
      </div>
    </div>

    <!-- Which Frameworks Section -->
    <div class="card bg-base-200 shadow-xl border-l-4 border-secondary">
      <div class="card-body p-4 sm:p-8">
        <h2 class="card-title text-xl sm:text-3xl mb-2 sm:mb-4 flex-wrap">
          <div class="rounded-full bg-secondary/20 p-1.5 sm:p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          {{ t("about-me.frameworks") }}
        </h2>
        <p class="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{{ t("about-me.frameworks-list-title") }}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div class="card bg-base-200 hover:bg-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-primary">
            <div class="card-body p-3 sm:p-4">
              <h3 class="font-bold flex items-center gap-2 text-sm sm:text-base flex-wrap">
                <span class="badge badge-primary badge-xs sm:badge-sm">Vue.js</span>
                {{ t("tech.vue") }}
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed mt-2 opacity-80">{{ t("about-me.vue") }}</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-primary">
            <div class="card-body p-3 sm:p-4">
              <h3 class="font-bold flex items-center gap-2 text-sm sm:text-base flex-wrap">
                <span class="badge badge-primary badge-xs sm:badge-sm">React</span>
                {{ t("tech.react") }}
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed mt-2 opacity-80">{{ t("about-me.react") }}</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-primary">
            <div class="card-body p-3 sm:p-4">
              <h3 class="font-bold flex items-center gap-2 text-sm sm:text-base flex-wrap">
                <span class="badge badge-primary badge-xs sm:badge-sm">Full-Stack</span>
                {{ t("tech.full-stack") }}
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed mt-2 opacity-80">{{ t("about-me.full-stack") }}</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-secondary">
            <div class="card-body p-3 sm:p-4">
              <h3 class="font-bold flex items-center gap-2 text-sm sm:text-base flex-wrap">
                <span class="badge badge-secondary badge-xs sm:badge-sm">Legacy</span>
                {{ t("tech.legacy") }}
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed mt-2 opacity-80">{{ t("about-me.legacy") }}</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-secondary">
            <div class="card-body p-3 sm:p-4">
              <h3 class="font-bold flex items-center gap-2 text-sm sm:text-base flex-wrap">
                <span class="badge badge-secondary badge-xs sm:badge-sm">Cloud</span>
                {{ t("tech.cloud") }}
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed mt-2 opacity-80">{{ t("about-me.cloud") }}</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-secondary">
            <div class="card-body p-3 sm:p-4">
              <h3 class="font-bold flex items-center gap-2 text-sm sm:text-base flex-wrap">
                <span class="badge badge-secondary badge-xs sm:badge-sm">Testing</span>
                {{ t("tech.test-docs") }}
              </h3>
              <p class="text-xs sm:text-sm leading-relaxed mt-2 opacity-80">{{ t("about-me.test-docs") }}</p>
            </div>
          </div>
        </div>

        <div class="alert shadow-lg bg-base-300 p-3 sm:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-secondary">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="text-xs sm:text-sm leading-relaxed">{{ t("about-me.frameworks-bio") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
