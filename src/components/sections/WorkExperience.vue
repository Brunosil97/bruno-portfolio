<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
// Build changelog entries using translation keys.
const changelogEntries = [
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
];
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">{{ t('work-experience.title') }}</h1>
    <div class="space-y-8">
      <div
        v-for="(entry, index) in changelogEntries"
        :key="entry.version"
        :class="['border-l-4 pl-4', entry.borderColor]"
      >
        <h2 class="text-2xl font-bold">
          {{ entry.version }}
          <template v-if="index === 0">
            : {{ t('common.now') }}
          </template>
        </h2>
        <p class="mt-2">
          <strong>{{ entry.status }}: </strong>{{ entry.description }}
        </p>
        <ul v-if="entry.points.length" class="list-disc pl-6 mt-2">
          <li v-for="(point, index) in entry.points" :key="index">{{ point }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>