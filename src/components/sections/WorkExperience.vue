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
    borderColor: "border-blue-500"
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
    borderColor: "border-blue-500"
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
    borderColor: "border-blue-500"
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
    borderColor: "border-blue-500"
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
    borderColor: "border-blue-500"
  },
  {
    version: t('work-experience.v0-5-0'),
    status: t('work-experience.v0-5-0-status'),
    description: t('work-experience.v0-5-0-description'),
    points: [],
    borderColor: "border-gray-400"
  },
  {
    version: t('work-experience.v0-4-0'),
    status: t('work-experience.v0-4-0-status'),
    description: t('work-experience.v0-4-0-description'),
    points: [],
    borderColor: "border-gray-400"
  },
  {
    version: t('work-experience.v0-3-0'),
    status: t('work-experience.v0-3-0-status'),
    description: t('work-experience.v0-3-0-description'),
    points: [ t('work-experience.v0-3-0-point-1') ],
    borderColor: "border-gray-400"
  },
  {
    version: t('work-experience.v0-2-0'),
    status: t('work-experience.v0-2-0-status'),
    description: t('work-experience.v0-2-0-description'),
    points: [],
    borderColor: "border-gray-400"
  },
  {
    version: t('work-experience.v0-1-0'),
    status: t('work-experience.v0-1-0-status'),
    description: t('work-experience.v0-1-0-description'),
    points: [],
    borderColor: "border-gray-400"
  }
]);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">{{ t('work-experience.title') }}</h1>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li v-for="(entry, index) in changelogEntries" :key="entry.version">
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            :class="['w-5 h-5', index === 0 ? 'text-primary' : entry.borderColor === 'border-blue-500' ? 'text-blue-500' : 'text-gray-400']"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div :class="[index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end', 'mb-10']">
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
            <div class="card-body">
              <div class="flex items-center gap-2" :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                <h2 class="card-title text-xl">
                  {{ entry.version }}
                </h2>
                <div v-if="index === 0" class="badge badge-primary badge-lg">{{ t('common.now') }}</div>
              </div>
              <div class="divider my-1"></div>
              <p class="text-sm opacity-70 font-semibold">{{ entry.status }}</p>
              <p class="mt-2">{{ entry.description }}</p>
              <ul v-if="entry.points.length" class="menu menu-xs bg-base-100 rounded-box mt-3 p-2">
                <li v-for="(point, pointIndex) in entry.points" :key="pointIndex">
                  <a class="cursor-default hover:bg-base-200">{{ point }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr v-if="index < changelogEntries.length - 1" />
      </li>
    </ul>
  </div>
</template>