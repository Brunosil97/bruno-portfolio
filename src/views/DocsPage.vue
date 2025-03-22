<script setup lang="ts">
import { computed } from 'vue';
import Stats from '../components/layout/Stats.vue';
import { useRouter, useRoute } from 'vue-router';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

// Define the ordered docs paths
const docRoutes = [
  { path: '/docs/about',    label: 'About Me' },
  { path: '/docs/contact',  label: 'Contact' },
  { path: '/docs/work',     label: 'Work Experience' },
  { path: '/docs/skills',   label: 'Skills' },
  { path: '/docs/projects', label: 'Projects' },
  { path: '/docs/blogs',    label: 'Blogs' },
  { path: '/docs/faqs',     label: 'FAQs' },
  { path: '/docs/cv',       label: 'CV' },
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
    router.push(prevRoute.value.path);
  }
}

function goNext() {
  if (nextRoute.value) {
    router.push(nextRoute.value.path);
  }
}
</script>

<template>
  <div class="flex h-full">
    <!-- Left-hand navigation panel styled with DaisyUI menu -->
    <aside class="w-64 bg-base-200 p-4">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li>
          <h2 class="menu-title">Getting Started</h2>
          <ul>
            <li>
              <router-link to="/docs/about" exact-active-class="menu-active">
                About Me
              </router-link>
            </li>
            <li>
              <router-link to="/docs/contact" exact-active-class="menu-active">
                Contact
              </router-link>
            </li>
            <li>
              <router-link to="/docs/work" exact-active-class="menu-active">
                Work Experience
              </router-link>
            </li>
            <li>
              <router-link to="/docs/skills" exact-active-class="menu-active">
                Skills
              </router-link>
            </li>
            <li>
              <router-link to="/docs/projects" exact-active-class="menu-active">
                Projects
              </router-link>
            </li>
            <li>
              <router-link to="/docs/blogs" exact-active-class="menu-active">
                Blogs
              </router-link>
            </li>
            <li>
              <router-link to="/docs/faqs" exact-active-class="menu-active">
                FAQs
              </router-link>
            </li>
            <li>
              <router-link to="/docs/cv" exact-active-class="menu-active">
                CV
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <!-- Main Content Area: Child routes render here -->
    <main class="flex-1 p-4">
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
            Previous:
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
            Next:
            {{ nextRoute.label }}
          </div>
          <ArrowRight />
        </button>
      </div>
    </main>
    <!-- Right Hand side panel -->
    <stats />
  </div>
</template>