<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="container mx-auto p-4 prose lg:prose-xl">
    <!-- Introduction Section -->
    <section>
      <h1 class="text-2xl md:text-4xl font-bold mb-4">{{ t("about-me.introduction") }}</h1>
      <p>{{ t("about-me.bio-1") }}</p>
      <br>
      <p>{{ t("about-me.bio-2") }}</p>
    </section>
    <div class="divider divider-primary" />
    <!-- Why Reach Out Section -->
    <section class="mt-8">
      <h2 class="text-2xl md:text-3xl font-semibold mb-3">{{ t("about-me.why") }}</h2>
      <p>{{ t("about-me.why-bio") }}</p>
    </section>
    <div class="divider divider-primary" />
    <!-- Progressive Mindset Section -->
    <section class="mt-8">
      <h2 class="text-2xl md:text-3xl font-semibold mb-3">{{ t("about-me.progressive") }}</h2>
      <p>{{ t("about-me.progressive-bio-1") }}</p>
      <br>
      <p>{{ t("about-me.progressive-bio-2") }}</p>
      <br>
      <p>{{ t("about-me.progressive-bio-3") }}</p>
    </section>
    <div class="divider divider-primary" />
    <!-- Which Frameworks Section -->
    <section class="mt-8">
      <h2 class="text-2xl md:text-3xl font-semibold mb-3">{{ t("about-me.frameworks") }}</h2>
      <p>{{ t("about-me.frameworks-list-title") }}</p>
      <br>
      <ul class="list-disc pl-6">
        <li>
          <strong>{{ t("tech.vue") }}:</strong> {{ t("about-me.vue") }}
        </li>
        <li>
          <strong>{{ t("tech.react") }}:</strong> {{ t("about-me.react") }}
        </li>
        <li>
          <strong>{{ t("tech.full-stack") }}:</strong> {{ t("about-me.full-stack") }}
        </li>
        <li>
          <strong>{{ t("tech.legacy") }}:</strong> {{ t("about-me.legacy") }}
        </li>
        <li>
          <strong>{{ t("tech.cloud") }}:</strong> {{ t("about-me.cloud") }}
        </li>
        <li>
          <strong>{{ t("tech.test-docs") }}:</strong> {{ t("about-me.test-docs") }}
        </li>
      </ul>
      <br>
      <p>{{ t("about-me.frameworks-bio") }}</p>
    </section>
  </div>
</template>
