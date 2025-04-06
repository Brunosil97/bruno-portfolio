<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { AlignLeft, Settings } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

import NavMenu from './NavMenu.vue';
import GithubStats from './GithubStats.vue';
import ThemeDropdown from '../settings/ThemeDropdown.vue';
import LanguageDropdown from '../settings/LanguageDropdown.vue';
import ResourceOptions from '../settings/ResourceOptions.vue';

const { t } = useI18n();

const closeDrawer = () => {
  const drawerToggle = document.getElementById("mobile-drawer") as HTMLInputElement;
  if (drawerToggle) drawerToggle.checked = false;
};

// Get current route and compute if we should show the video
const route = useRoute();
const showVideo = computed(() => route.path !== "/");

</script>

<template>
  <div class="drawer">
    <input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar with video background -->
      <div class="navbar sticky top-0 z-30  bg-base-100 w-full relative">
        <!-- Video Background (behind navbar content) -->
        <video
          v-if="showVideo"
          autoplay
          muted
          loop
          class="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="../../assets/background.mp4" type="video/mp4" />
          {{ t("domain.video-not-supported") }}
        </video>
        <!-- Navbar Content -->
        <div class="relative z-10 flex items-center w-full">
          <!-- Left Trigger (Mobile) -->
          <div class="flex-none lg:hidden">
            <label for="mobile-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <AlignLeft :size="26" color="white" />
            </label>
          </div>
          <!-- Desktop Title (visible on sm and up) -->
          <div class="hidden sm:flex mx-2 flex-1 px-2">
            <router-link class="btn text-xl" to="/">
              {{ t("common.name") }}
            </router-link>
          </div>
          <!-- Mobile Title (visible below sm) -->
          <div v-if="showVideo" class="sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <router-link class="btn text-xl" to="/">
              {{ t("common.name") }}
            </router-link>
          </div>
          <!-- Mobile Right Drawer -->
          <div class="flex lg:hidden drawer drawer-end" style="justify-content: flex-end">
            <input id="mobile-right-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <label for="mobile-right-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <Settings :size="26" color="white" />
              </label>
            </div>
            <div class="drawer-side">
              <label for="mobile-right-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
              <ul class="menu bg-base-200 min-h-full w-60 p-4">
                <!-- Divider -->
                <div class="divider divider-primary">{{ t("common.settings") }}</div>
                <!-- Mobile Change -->
                <theme-dropdown is-mobile />
                <!-- Language Change -->
                <language-dropdown is-mobile />
                <!-- Divider -->
                <div class="divider divider-primary">{{ t("common.resources") }}</div>
                <!-- Resource Options -->
                <resource-options is-mobile />
              </ul>
            </div>
          </div>
          <!-- Desktop Navbar items -->
          <div class="hidden sm:flex">
            <ul class="menu menu-horizontal">
              <!-- Theme Change -->
              <theme-dropdown />
              <!-- Language Change -->
              <language-dropdown />
              <!-- Resource Options -->
              <resource-options />
            </ul>
          </div>
        </div>
      </div>
      <!-- Main Page Content -->
      <router-view />
    </div>
    <!-- Drawer Sidebar: Increase its z-index so it covers the content -->
    <div class="drawer-side z-50">
      <label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay" />
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <nav-menu @link-clicked="closeDrawer" />
        <div class="divider divider-primary">{{ t("common.stats") }}</div>
        <github-stats />
      </ul>
    </div>
  </div>
</template>