<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavMenu from './NavMenu.vue';
import GithubStats from './GithubStats.vue';
import { Github, Linkedin, Book, ChevronDown, AlignLeft, AlignRight, Languages } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

interface Locales {
  code: string;
  label: string;
  iso: string;
};

const { locale, t } = useI18n({ useScope: "global" });

const themes = ref([
  "light",
  "dark",
  "cupcake",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
]);

const languages = ref<Locales[]>([
  { code: "en", label: "English", iso: "gb" },
  { code: "pt-PT", label: "Português", iso: "pt" },
]);

const selectedTheme = ref('cupcake');

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    selectedTheme.value = JSON.parse(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', selectedTheme.value);
  }
});

watch(selectedTheme, (newTheme: string) => {
  localStorage.setItem('theme', JSON.stringify(newTheme));
  document.documentElement.setAttribute('data-theme', newTheme);
});

const closeDrawer = () => {
  const drawerToggle = document.getElementById("mobile-drawer") as HTMLInputElement;
  if (drawerToggle) drawerToggle.checked = false;
};

// Get current route and compute if we should show the video
const route = useRoute();
const showVideo = computed(() => route.path !== "/");

const changeLocale = (lang: string) => {
  locale.value = lang;
};
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
                <AlignRight :size="26" color="white" />
              </label>
            </div>
            <div class="drawer-side">
              <label for="mobile-right-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
              <ul class="menu bg-base-200 min-h-full w-60 p-4">
                <div class="divider divider-primary">{{ t("common.settings") }}</div>

                <div class="dropdown">
                  <div tabindex="0" role="button" class="btn btn-primary btn-wide btn-sm sm:btn mr-2">
                    {{ t("common.theme") }}
                    <ChevronDown />
                  </div>
                  <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl max-h-80 overflow-y-auto">
                    <li v-for="theme in themes" :key="theme">
                      <input
                        v-model="selectedTheme"
                        type="radio"
                        name="theme-dropdown"
                        class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                        :class="{ 'btn-active': selectedTheme === theme }"
                        :aria-label="theme"
                        :value="theme"
                      />
                    </li>
                  </ul>
                </div>

                <div class="dropdown mt-4">
                  <div tabindex="0" role="button" class="btn btn-primary btn-wide btn-sm sm:btn mr-2">
                    <Languages :size="16" />
                    <ChevronDown />
                  </div>

                  <ul
                    tabindex="0"
                    class="dropdown-content bg-base-300 rounded-box z-10 w-full p-2 shadow-2xl max-h-80 overflow-y-auto"
                  >
                    <li v-for="(language) in languages" :key="language.code">
                      <button
                        class="btn-primary btn btn-sm btn-block btn-ghost w-full text-left"
                        :class="{ 'btn-active': locale === language.code }"
                        @click="changeLocale(language.code)"
                      >
                        <flag :iso="language.iso" />
                        {{ language.label }}
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="divider divider-primary">{{ t("common.resources") }}</div>

                <div class="tooltip tooltip-bottom mb-2" data-tip="GitHub">
                  <a
                    class="btn btn-sm sm:btn btn-wide"
                    style="background-color: black;"
                    href="https://github.com/Brunosil97"
                    target="_blank"
                  >
                    <span class="text-white">{{ t("tech.github") }}</span>
                    <Github :size="16" color="white" />
                  </a>
                </div>
                <div class="tooltip tooltip-bottom mb-2" data-tip="LinkedIn">
                  <a
                    class="btn btn-sm btn-wide sm:btn"
                    style="background-color: #0077B5;"
                    href="https://www.linkedin.com/in/bruno-silvino-silva/"
                    target="_blank"
                  >
                    <span class="text-white">{{ t("tech.linkedin") }}</span>
                    <Linkedin :size="16" color="white" />
                  </a>
                </div>
                <div class="tooltip tooltip-bottom" data-tip="Medium">
                  <a
                    class="btn btn-sm  btn-wide sm:btn"
                    style="background-color: oklch(60% 0.118 184.704)"
                    href="https://medium.com/@brunosilvinosilva"
                    target="_blank"
                  >
                    <span class="text-white">{{ t("tech.medium") }}</span>
                    <Book :size="16" color="white" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <!-- Desktop Navbar items -->
          <div class="hidden sm:flex">
            <ul class="menu menu-horizontal">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-sm sm:btn mr-2">
                  {{ t("common.theme") }}
                  <ChevronDown />
                </div>
                <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl max-h-80 overflow-y-auto">
                  <li v-for="theme in themes" :key="theme">
                    <input
                      v-model="selectedTheme"
                      type="radio"
                      name="theme-dropdown"
                      class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      :class="{ 'btn-active': selectedTheme === theme }"
                      :aria-label="theme"
                      :value="theme"
                    />
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-sm sm:btn mr-2">
                  <Languages :size="16" />
                  <ChevronDown />
                </div>

                <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl max-h-80 overflow-y-auto">
                  <li v-for="(language) in languages" :key="language.code">
                    <button
                      class="btn-primary btn btn-sm btn-block btn-ghost w-full text-left"
                      :class="{ 'btn-active': locale === language.code }"
                      @click="changeLocale(language.code)"
                    >
                      <flag :iso="language.iso" />
                      {{ language.label }}
                    </button>
                  </li>
                </ul>
              </div>

              <div class="tooltip tooltip-bottom" data-tip="GitHub">
                <a
                  class="btn btn-sm sm:btn"
                  style="background-color: black;"
                  href="https://github.com/Brunosil97"
                  target="_blank"
                >
                  <Github :size="16" color="white" />
                </a>
              </div>
              <div class="tooltip tooltip-bottom ml-2" data-tip="LinkedIn">
                <a
                  class="btn btn-sm sm:btn"
                  style="background-color: #0077B5;"
                  href="https://www.linkedin.com/in/bruno-silvino-silva/"
                  target="_blank"
                >
                  <Linkedin :size="16" color="white" />
                </a>
              </div>
              <div class="tooltip tooltip-bottom ml-2" data-tip="Medium">
                <a
                  class="btn btn-sm sm:btn"
                  style="background-color: oklch(60% 0.118 184.704)"
                  href="https://medium.com/@brunosilvinosilva"
                  target="_blank"
                >
                  <Book :size="16" color="white" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <!-- Main Page Content -->
      <router-view />
    </div>
    <!-- Drawer Sidebar: Increase its z-index so it covers the content -->
    <div class="drawer-side z-50">
      <label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <nav-menu @link-clicked="closeDrawer" />
        <div class="divider divider-primary">{{ t("common.stats") }}</div>
        <github-stats />
      </ul>
    </div>
  </div>
</template>

<style>
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff0088;
  will-change: transform;
}
</style>