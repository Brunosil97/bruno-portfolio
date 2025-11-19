<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
// Build changelog entries using translation keys.
const changelogEntries = computed(() => [
  {
    version: t('work-experience.v3-2-0'),
    status: t('work-experience.v3-2-0-status'),
    description: t('work-experience.v3-2-0-description'),
    points: [
      t('work-experience.v3-2-0-point-1'),
      t('work-experience.v3-2-0-point-2'),
      t('work-experience.v3-2-0-point-3'),
      t('work-experience.v3-2-0-point-4'),
      t('work-experience.v3-2-0-point-5'),
      t('work-experience.v3-2-0-point-6')
    ],
    color: "primary",
    badgeColor: "badge-primary",
    iconColor: "text-primary",
    cardBg: "bg-gradient-to-br from-primary/10 to-secondary/10"
  },
  {
    version: t('work-experience.v3-1-0'),
    status: t('work-experience.v3-1-0-status'),
    description: t('work-experience.v3-1-0-description'),
    points: [
      t('work-experience.v3-1-0-point-1'),
      t('work-experience.v3-1-0-point-2'),
      t('work-experience.v3-1-0-point-3'),
      t('work-experience.v3-1-0-point-4'),
      t('work-experience.v3-1-0-point-5')
    ],
    color: "primary",
    badgeColor: "badge-primary",
    iconColor: "text-primary",
    cardBg: "bg-gradient-to-br from-primary/10 to-secondary/10"
  },
  {
    version: t('work-experience.v3-0-0'),
    status: t('work-experience.v3-0-0-status'),
    description: t('work-experience.v3-0-0-description'),
    points: [
      t('work-experience.v3-0-0-point-1'),
      t('work-experience.v3-0-0-point-2'),
      t('work-experience.v3-0-0-point-3')
    ],
    color: "primary",
    badgeColor: "badge-primary",
    iconColor: "text-primary",
    cardBg: "bg-gradient-to-br from-primary/10 to-secondary/10"
  },
  {
    version: t('work-experience.v2-0-0'),
    status: t('work-experience.v2-0-0-status'),
    description: t('work-experience.v2-0-0-description'),
    points: [
      t('work-experience.v2-0-0-point-1'),
      t('work-experience.v2-0-0-point-2'),
      t('work-experience.v2-0-0-point-3')
    ],
    color: "accent",
    badgeColor: "badge-accent",
    iconColor: "text-accent",
    cardBg: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    version: t('work-experience.v1-0-0'),
    status: t('work-experience.v1-0-0-status'),
    description: t('work-experience.v1-0-0-description'),
    points: [
      t('work-experience.v1-0-0-point-1'),
      t('work-experience.v1-0-0-point-2'),
      t('work-experience.v1-0-0-point-3')
    ],
    color: "accent",
    badgeColor: "badge-accent",
    iconColor: "text-accent",
    cardBg: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    version: t('work-experience.v0-5-0'),
    status: t('work-experience.v0-5-0-status'),
    description: t('work-experience.v0-5-0-description'),
    points: [],
    color: "neutral",
    badgeColor: "badge-neutral",
    iconColor: "text-neutral",
    cardBg: "bg-base-200"
  },
  {
    version: t('work-experience.v0-4-0'),
    status: t('work-experience.v0-4-0-status'),
    description: t('work-experience.v0-4-0-description'),
    points: [],
    color: "neutral",
    badgeColor: "badge-neutral",
    iconColor: "text-neutral",
    cardBg: "bg-base-200"
  },
  {
    version: t('work-experience.v0-3-0'),
    status: t('work-experience.v0-3-0-status'),
    description: t('work-experience.v0-3-0-description'),
    points: [ t('work-experience.v0-3-0-point-1') ],
    color: "neutral",
    badgeColor: "badge-neutral",
    iconColor: "text-neutral",
    cardBg: "bg-base-200"
  },
  {
    version: t('work-experience.v0-2-0'),
    status: t('work-experience.v0-2-0-status'),
    description: t('work-experience.v0-2-0-description'),
    points: [],
    color: "neutral",
    badgeColor: "badge-neutral",
    iconColor: "text-neutral",
    cardBg: "bg-base-200"
  },
  {
    version: t('work-experience.v0-1-0'),
    status: t('work-experience.v0-1-0-status'),
    description: t('work-experience.v0-1-0-description'),
    points: [],
    color: "neutral",
    badgeColor: "badge-neutral",
    iconColor: "text-neutral",
    cardBg: "bg-base-200"
  }
]);
</script>

<template>
  <div class="container mx-auto p-2 sm:p-4">
    <h1 class="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">{{ t('work-experience.title') }}</h1>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li v-for="(entry, index) in changelogEntries" :key="entry.version">
        <div class="timeline-middle">
          <div :class="['rounded-full p-1.5 sm:p-2 shadow-lg', entry.color === 'primary' ? 'bg-primary' : entry.color === 'accent' ? 'bg-accent' : entry.color === 'neutral' ? 'bg-neutral' : `bg-${entry.color}`]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4 sm:w-5 sm:h-5 text-base-100"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div :class="[index % 2 === 0 ? 'timeline-start md:text-end md:me-6' : 'timeline-end md:ms-6', 'mb-6 sm:mb-10 w-full md:max-w-2xl']">
          <div :class="['card shadow-xl hover:shadow-2xl transition-all duration-300 sm:hover:scale-105 border-2 w-full', entry.color === 'primary' ? 'border-primary' : entry.color === 'accent' ? 'border-accent' : entry.color === 'neutral' ? 'border-neutral' : `border-${entry.color}`, entry.cardBg]">
            <div class="card-body p-3 sm:p-6">
              <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap" :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                <h2 class="card-title text-base sm:text-2xl">
                  {{ entry.version }}
                </h2>
                <div v-if="index === 0" :class="['badge badge-xs sm:badge-md animate-pulse text-xs sm:text-sm', entry.badgeColor]">
                  {{ t('common.now') }}
                </div>
                <div :class="['badge badge-xs sm:badge-md text-xs sm:text-sm', entry.badgeColor]">{{ entry.status }}</div>
              </div>
              <div class="divider my-1 sm:my-2"></div>
              <p class="mt-1 sm:mt-2 text-xs sm:text-base leading-relaxed">{{ entry.description }}</p>
              <ul v-if="entry.points.length" class="menu menu-xs sm:menu-sm bg-base-200/50 rounded-box mt-2 sm:mt-4 p-1.5 sm:p-2 w-full">
                <li v-for="(point, pointIndex) in entry.points" :key="pointIndex" class="w-full">
                  <a class="cursor-default hover:bg-base-300/50 text-xs sm:text-sm leading-relaxed py-2 sm:py-3 whitespace-normal flex items-start w-full">
                    <span :class="['badge badge-xs sm:badge-sm mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5', entry.badgeColor]">{{ pointIndex + 1 }}</span>
                    <span class="flex-1 text-left" style="max-width: calc(100% - 2rem);">{{ point }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr v-if="index < changelogEntries.length - 1" :class="entry.iconColor" />
      </li>
    </ul>
  </div>
</template>