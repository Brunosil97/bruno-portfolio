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
  <div class="container mx-auto p-4 max-w-6xl">
    <!-- Hero Introduction Section -->
    <div class="hero bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-box mb-8 shadow-2xl relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="hero-content text-center py-16 relative z-10">
        <div class="max-w-4xl">
          <div class="avatar online mb-6">
            <div class="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
              <img v-if="avatarUrl" :src="avatarUrl" alt="Bruno Silva" />
              <div v-else class="bg-primary text-primary-content w-full h-full flex items-center justify-center">
                <span class="text-5xl font-bold">BS</span>
              </div>
            </div>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {{ t("about-me.introduction") }}
          </h1>
          <p class="text-lg leading-relaxed mb-4 max-w-3xl mx-auto">{{ t("about-me.bio-1") }}</p>
          <p class="text-lg leading-relaxed max-w-3xl mx-auto">{{ t("about-me.bio-2") }}</p>

          <!-- Stats -->
          <div class="stats shadow mt-8 bg-base-100/80 backdrop-blur">
            <div class="stat place-items-center">
              <div class="stat-title">Experience</div>
              <div class="stat-value text-primary">5+</div>
              <div class="stat-desc">Years in Industry</div>
            </div>
            <div class="stat place-items-center">
              <div class="stat-title">Role</div>
              <div class="stat-value text-secondary text-2xl">Senior</div>
              <div class="stat-desc">Software Engineer</div>
            </div>
            <div class="stat place-items-center">
              <div class="stat-title">Focus</div>
              <div class="stat-value text-accent text-2xl">AI</div>
              <div class="stat-desc">Innovation & Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why Reach Out Section -->
    <div class="card bg-base-200 shadow-xl mb-8 border-l-4 border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">
          <div class="rounded-full bg-primary/20 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          {{ t("about-me.why") }}
        </h2>
        <p class="text-base leading-relaxed">{{ t("about-me.why-bio") }}</p>
        <div class="card-actions justify-end mt-4">
          <div class="badge badge-primary badge-outline">Full Product Lifecycle</div>
          <div class="badge badge-primary badge-outline">Scalable Solutions</div>
        </div>
      </div>
    </div>

    <!-- Progressive Mindset Section -->
    <div class="card bg-gradient-to-br from-accent/10 to-accent/5 shadow-xl mb-8 border-l-4 border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">
          <div class="rounded-full bg-accent/20 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          {{ t("about-me.progressive") }}
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="badge badge-accent mt-1">1</div>
            <p class="text-base leading-relaxed flex-1">{{ t("about-me.progressive-bio-1") }}</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="badge badge-accent mt-1">2</div>
            <p class="text-base leading-relaxed flex-1">{{ t("about-me.progressive-bio-2") }}</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="badge badge-accent mt-1">3</div>
            <p class="text-base leading-relaxed flex-1">{{ t("about-me.progressive-bio-3") }}</p>
          </div>
        </div>
        <div class="card-actions justify-end mt-4">
          <div class="badge badge-accent badge-outline">Continuous Learning</div>
          <div class="badge badge-accent badge-outline">Innovation</div>
          <div class="badge badge-accent badge-outline">Future-Ready</div>
        </div>
      </div>
    </div>

    <!-- Which Frameworks Section -->
    <div class="card bg-base-200 shadow-xl border-l-4 border-info">
      <div class="card-body">
        <h2 class="card-title text-3xl mb-4">
          <div class="rounded-full bg-info/20 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          {{ t("about-me.frameworks") }}
        </h2>
        <p class="text-base leading-relaxed mb-6">{{ t("about-me.frameworks-list-title") }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div class="card bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="card-body p-4">
              <h3 class="font-bold text-success flex items-center gap-2">
                <span class="badge badge-success badge-sm">Vue.js</span>
                {{ t("tech.vue") }}
              </h3>
              <p class="text-sm leading-relaxed mt-2">{{ t("about-me.vue") }}</p>
              <div class="flex gap-1 mt-3">
                <div class="w-full bg-success/20 rounded-full h-2">
                  <div class="bg-success h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-gradient-to-br from-info/10 to-info/5 border border-info/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="card-body p-4">
              <h3 class="font-bold text-info flex items-center gap-2">
                <span class="badge badge-info badge-sm">React</span>
                {{ t("tech.react") }}
              </h3>
              <p class="text-sm leading-relaxed mt-2">{{ t("about-me.react") }}</p>
              <div class="flex gap-1 mt-3">
                <div class="w-full bg-info/20 rounded-full h-2">
                  <div class="bg-info h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="card-body p-4">
              <h3 class="font-bold text-primary flex items-center gap-2">
                <span class="badge badge-primary badge-sm">Full-Stack</span>
                {{ t("tech.full-stack") }}
              </h3>
              <p class="text-sm leading-relaxed mt-2">{{ t("about-me.full-stack") }}</p>
              <div class="flex gap-1 mt-3">
                <div class="w-full bg-primary/20 rounded-full h-2">
                  <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="card-body p-4">
              <h3 class="font-bold text-warning flex items-center gap-2">
                <span class="badge badge-warning badge-sm">Legacy</span>
                {{ t("tech.legacy") }}
              </h3>
              <p class="text-sm leading-relaxed mt-2">{{ t("about-me.legacy") }}</p>
              <div class="flex gap-1 mt-3">
                <div class="w-full bg-warning/20 rounded-full h-2">
                  <div class="bg-warning h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="card-body p-4">
              <h3 class="font-bold text-accent flex items-center gap-2">
                <span class="badge badge-accent badge-sm">Cloud</span>
                {{ t("tech.cloud") }}
              </h3>
              <p class="text-sm leading-relaxed mt-2">{{ t("about-me.cloud") }}</p>
              <div class="flex gap-1 mt-3">
                <div class="w-full bg-accent/20 rounded-full h-2">
                  <div class="bg-accent h-2 rounded-full" style="width: 88%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="card-body p-4">
              <h3 class="font-bold text-secondary flex items-center gap-2">
                <span class="badge badge-secondary badge-sm">Testing</span>
                {{ t("tech.test-docs") }}
              </h3>
              <p class="text-sm leading-relaxed mt-2">{{ t("about-me.test-docs") }}</p>
              <div class="flex gap-1 mt-3">
                <div class="w-full bg-secondary/20 rounded-full h-2">
                  <div class="bg-secondary h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="alert alert-info shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="text-sm leading-relaxed">{{ t("about-me.frameworks-bio") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
