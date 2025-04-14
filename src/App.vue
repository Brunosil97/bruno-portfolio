<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import AppBody from './components/layout/AppBody.vue';

const { locale, availableLocales, fallbackLocale } = useI18n({ useScope: 'global' });

onMounted(() => {
  // Ensure fallbackLocale is a string; otherwise, default to 'en'
  const fallback: string = typeof fallbackLocale === 'string' ? fallbackLocale : 'en';
  const userLang: string = navigator.language || fallback;

  if (availableLocales.includes(userLang)) {
    locale.value = userLang;
  } else {
    const baseLang = userLang.split('-')[0];
    if (availableLocales.includes(baseLang)) {
      locale.value = baseLang;
    } else {
      locale.value = fallback;
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