<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import NavMenu from './NavMenu.vue';
import GithubStats from './GithubStats.vue';
import { Github, Linkedin, Book, ChevronDown, Menu } from 'lucide-vue-next';

const themes = ref([
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
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
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
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
</script>

<template>
  <div class="drawer">
    <input id="mobile-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Desktop navbar -->
      <div class="navbar bg-base-100 w-full">
        <div class="flex-none lg:hidden">
          <label for="mobile-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <Menu :size="26" />
          </label>
        </div>
        <div class="mx-2 flex flex-1 px-2">
          <router-link class="btn btn-ghost text-xl hidden sm:flex" to="/">Bruno Silva</router-link>
        </div>
        <div class="flex">
          <div class="block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-sm sm:btn mr-2">
                  Theme
                  <ChevronDown />
                </div>
                <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl max-h-80 overflow-y-auto">
                  <li v-for="theme in themes" :key="theme">
                    <input
                      v-model="selectedTheme"
                      type="radio"
                      name="theme-dropdown"
                      class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      :aria-label="theme"
                      :value="theme"
                    />
                  </li>
                </ul>
              </div>
              <div class="tooltip tooltip-bottom" data-tip="GitHub">
              <a class="btn btn-neutral btn-sm sm:btn sm:btn-neutral" href="https://github.com/Brunosil97" target="_blank">
                <Github :size="16" />
              </a>
            </div>
            <div class="tooltip tooltip-bottom ml-2" data-tip="LinkedIn">
              <a class="btn btn-info btn-sm sm:btn" href="https://www.linkedin.com/in/bruno-silvino-silva/" target="_blank">
                <Linkedin :size="16" />
              </a>
            </div>
            <div class="tooltip tooltip-bottom ml-2" data-tip="Medium">
              <a class="btn btn-accent btn-sm sm:btn" href="https://medium.com/@brunosilvinosilva" target="_blank">
                <Book :size="16" />
              </a>
            </div>
            </ul>
          </div>
        </div>
      </div>
      <!-- Main Page Content -->
      <router-view />
    </div>
    <!-- Contains mobile drawer navigation and stats -->
    <div class="drawer-side">
      <label for="mobile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <nav-menu @link-clicked="closeDrawer" />
        <div class="divider divider-primary">Stats</div>
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