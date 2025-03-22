<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { Github, Linkedin, Book, ChevronDown } from 'lucide-vue-next';
import { motion } from "motion-v";

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
const dotVariants = {
  jump: {
    y: -30,
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    selectedTheme.value = JSON.parse(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', selectedTheme.value);
  }
});

watch(selectedTheme, (newTheme) => {
  localStorage.setItem('theme', JSON.stringify(newTheme));
  document.documentElement.setAttribute('data-theme', newTheme);
});
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <div class="flex items-center">
        <router-link class="btn btn-ghost text-xl" to="/">Bruno Silva</router-link>
        <motion.div
          class="container ml-2 mt-5"
          animate="jump"
          :transition="{ staggerChildren: -0.2, staggerDirection: -1 }"
        >
          <motion.div class="dot" :variants="dotVariants" />
          <motion.div class="dot" :variants="dotVariants" />
          <motion.div class="dot" :variants="dotVariants" />
        </motion.div>
      </div>
    </div>
    <div class="flex-none">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn m-1">
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
      <ul class="menu menu-horizontal px-1">
        <div class="tooltip tooltip-bottom" data-tip="GitHub">
          <a class="btn btn-neutral" href="https://github.com/Brunosil97" target="_blank">
            <Github :size="16" />
          </a>
        </div>
        <div class="tooltip tooltip-bottom ml-2" data-tip="LinkedIn">
          <a class="btn btn-info" href="https://www.linkedin.com/in/bruno-silvino-silva/" target="_blank">
            <Linkedin :size="16" />
          </a>
        </div>
        <div class="tooltip tooltip-bottom ml-2" data-tip="Medium">
          <a class="btn btn-accent" href="https://medium.com/@brunosilvinosilva" target="_blank">
            <Book :size="16" />
          </a>
        </div>
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