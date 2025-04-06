<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ChevronDown, Languages } from 'lucide-vue-next';

interface Locales {
  code: string;
  label: string;
  iso: string;
};

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  }
});

const { locale } = useI18n({ useScope: "global" });

const languages = ref<Locales[]>([
  { code: "en", label: "English", iso: "gb" },
  { code: "pt-PT", label: "Português", iso: "pt" },
  { code: "de", label: "Deutsch", iso: "de"},
  { code: "es", label: "Español", iso: "es" },
  { code: "fr", label: "français", iso: "fr" },
  { code: "it", label: "Italiano", iso: "it" },
  { code: "ko", label: "한국인", iso: "kr" },
  { code: "zh", label: "中國人", iso: "cn"},
  { code: "ja", label: "日本語", iso: "jp" },
]);

const changeLocale = (lang: string) => {
  locale.value = lang;
};

const buttonClasses = computed(() => {
  const classes = ["btn", "mr-2", "btn-sm", "sm:btn"];
  if (props.isMobile) {
    classes.push("btn-primary", "btn-wide");
  }
  return classes.join(" ");
});
</script>

<template>
  <div class="dropdown" :class="{ 'mt-4': isMobile }">
    <div tabindex="0" role="button" :class="buttonClasses">
      <Languages :size="16" />
      <ChevronDown />
    </div>

    <ul
      tabindex="0"
      class="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl max-h-80 overflow-y-auto"
    >
      <li v-for="(language) in languages" :key="language.code">
        <button
          class="btn btn-sm btn-block btn-ghost w-full justify-left"
          :class="{ 'btn-active btn-primary': locale === language.code }"
          @click="changeLocale(language.code)"
        >
          <flag :iso="language.iso" />
          {{ language.label }}
        </button>
      </li>
    </ul>
  </div>
</template>