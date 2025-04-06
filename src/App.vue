<script setup lang="ts">
import { onMounted } from 'vue';
import AppBody from './components/layout/AppBody.vue';
import { useI18n } from 'vue-i18n';

const { locale, availableLocales, fallbackLocale } = useI18n({ useScope: 'global' });

onMounted(() => {
  // Get the user's language from the browser
  const userLang = navigator.language || fallbackLocale;
  // If the exact language is available, use it
  if (availableLocales.includes(userLang)) {
    locale.value = userLang;
  } else {
    // Otherwise, check the base language (e.g. "en" from "en-US")
    const baseLang = userLang.split('-')[0];
    // If the base language is available, use it
    if (availableLocales.includes(baseLang)) {
      locale.value = baseLang;
    } else {
      // Fallback to English if no match is found
      locale.value = fallbackLocale;
    }
  }
});
</script>

<template>
  <!-- The container now has pb-16 to ensure content doesn't hide behind the footer -->
  <div class="bg-base-200 min-h-screen pb-16">
    <!-- Nav Bar & Router View -->
    <app-body />
  </div>
</template>