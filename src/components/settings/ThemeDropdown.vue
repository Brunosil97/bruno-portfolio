<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
import { ChevronDown } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  }
});

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

const buttonClasses = computed(() => {
  const classes = ["btn", "mr-2", "btn-sm", "sm:btn"];
  if (props.isMobile) {
    classes.push("btn-primary", "btn-wide");
  }
  return classes.join(" ");
});
</script>

<template>
  <div class="dropdown">
    <div tabindex="0" role="button" :class="buttonClasses">
      {{ t("common.theme") }}
      <ChevronDown />
    </div>

    <ul
      tabindex="0"
      class="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl max-h-80 overflow-y-auto"
    >
      <li v-for="theme in themes" :key="theme">
        <input
          v-model="selectedTheme"
          type="radio"
          name="theme-dropdown"
          class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
          :class="{ 'btn-active btn-primary': selectedTheme === theme }"
          :aria-label="theme"
          :value="theme"
        />
      </li>
    </ul>
  </div>
</template>