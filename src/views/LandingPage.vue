<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="relative hero min-h-screen overflow-hidden">
    <!-- Video Background -->
    <video
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      poster="/img/desktop-poster.png"
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/video/background.mp4" type="video/mp4" />
      {{ t("domain.video-not-supported") }}
    </video>
    <div class="relative hero-content flex-col px-4 sm:px-8">
      <div class="text-center">
        <h1 class="mb-5 text-3xl sm:text-5xl font-bold text-white">
          {{ t("common.name") }}
        </h1>
        <p class="mb-5 px-2 sm:px-0 text-sm sm:text-base text-white font-bold">
          {{ t("landing-page.intro") }}
        </p>
        <router-link to="/docs/about" class="btn btn-success mt-4 btn-sm sm:btn-lg">
          {{ t("common.get-started") }}
          <ArrowRight />
        </router-link>
      </div>

      <!-- Cards Container -->
      <div class="flex flex-col items-center md:flex-row md:items-stretch justify-center gap-4 mt-8 w-full">
        <!-- Approachable Card -->
        <div class="card bg-base-100 card-xs sm:card-lg w-full max-w-xs sm:w-96 shadow-sm transition-transform duration-300 hover:scale-105 focus:scale-105">
          <div class="card-body">
            <h2 class="card-title text-sm sm:text-base">{{ t("landing-page.approachable") }}</h2>
            <p class="text-xs sm:text-sm">
              {{ t("landing-page.approachable-bio") }}
            </p>
            <div class="card-actions justify-end">
              <router-link class="btn btn-primary btn-xs sm:btn-md" to="/docs/contact">
                {{ t("domain.contact") }}
                <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
        <!-- Performant Card -->
        <div class="card bg-base-100 card-xs sm:card-lg w-full max-w-xs sm:w-96 shadow-sm transition-transform duration-300 hover:scale-105 focus:scale-105">
          <div class="card-body">
            <h2 class="card-title text-sm sm:text-base">{{ t("landing-page.performant") }}</h2>
            <p class="text-xs sm:text-sm">
              {{ t("landing-page.performant-bio") }}
            </p>
            <div class="card-actions justify-end">
              <router-link class="btn btn-secondary btn-xs sm:btn-md" to="/docs/work">
                {{ t("domain.work-experience") }}
                <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
        <!-- Versatile Card -->
        <div class="card bg-base-100 card-xs sm:card-lg w-full max-w-xs sm:w-96 shadow-sm transition-transform duration-300 hover:scale-105 focus:scale-105">
          <div class="card-body">
            <h2 class="card-title text-sm sm:text-base">{{ t("landing-page.versatile") }}</h2>
            <p class="text-xs sm:text-sm">
              {{ t("landing-page.versatile-bio") }}
            </p>
            <div class="card-actions justify-end">
              <router-link class="btn btn-accent btn-xs sm:btn-md" to="/docs/skills">
                {{ t("domain.skills") }}
                <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
