<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

import GithubStats from '../components/layout/GithubStats.vue';
import NavMenu from '../components/layout/NavMenu.vue';

const { t } = useI18n();

// Define the ordered docs paths
const docRoutes = [
  { path: '/docs/about',    label: t("domain.about-me") },
  { path: '/docs/contact',  label: t("domain.contact") },
  { path: '/docs/work',     label: t("domain.work-experience") },
  { path: '/docs/skills',   label: t("domain.skills") },
  { path: '/docs/projects', label: t("domain.projects") },
  { path: '/docs/blogs',    label: t("domain.blogs") },
  { path: '/docs/faqs',     label: t("domain.faq") },
  { path: '/docs/cv',       label: t("domain.cv") },
];

// Create a dictionary to map each path to its index
const docRoutesMap: Record<string, number> = docRoutes.reduce(
  (acc: Record<string, number>, route, idx) => {
    acc[route.path] = idx;
    return acc;
  },
  {} as Record<string, number>
);


const router = useRouter();
const route = useRoute();

// Find the current index based on the active route
const currentIndex = computed(() => {
  const idx = docRoutesMap[route.path];
  // If the path doesn't exist in the map, return -1 as a fallback
  return idx !== undefined ? idx : -1;
});

// Compute the previous route (null if we’re at the first)
const prevRoute = computed(() => {
  if (currentIndex.value > 0) {
    return docRoutes[currentIndex.value - 1];
  }
  return null;
});

// Compute the next route (null if we’re at the last)
const nextRoute = computed(() => {
  if (currentIndex.value < docRoutes.length - 1) {
    return docRoutes[currentIndex.value + 1];
  }
  return null;
});

// Methods to navigate
function goPrev() {
  if (prevRoute.value) {
    router.push(prevRoute.value.path).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    });
  }
}

function goNext() {
  if (nextRoute.value) {
    router.push(nextRoute.value.path).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    });
  }
}
</script>

<template>
  <div class="flex h-full">
    <!-- Left-hand navigation panel styled with DaisyUI menu -->
    <aside class="w-64 bg-base-200 p-4 hidden sm:flex">
      <nav-menu />
    </aside>
    <!-- Main Content Area: Child routes render here -->
    <main class="flex-1 p-4 relative max-w-[100vw] px-6 pb-16 xl:pe-2">
      <!-- Routed content or other page content goes here -->
      <router-view />
      <!-- Navigation buttons underneath router-view -->
      <div class="flex justify-between mt-8">
        <!-- Previous Button -->
        <button
          v-if="prevRoute"
          class="btn"
          @click="goPrev"
        >
          <ArrowLeft />
          <div>
            <span class="hidden sm:inline">{{ $t("common.previous")}}:</span>
            {{ prevRoute.label }}
          </div>
        </button>
        <!-- Next Button -->
        <button
          v-if="nextRoute"
          class="btn btn-neutral ml-auto"
          @click="goNext"
        >
          <div>
            <span class="hidden sm:inline">{{ $t("common.next") }}:</span>
            {{ nextRoute.label }}
          </div>
          <ArrowRight />
        </button>
      </div>
    </main>
    <!-- Right Hand side panel -->
    <div class="hidden sm:flex">
      <github-stats  />
    </div>
  </div>
</template>