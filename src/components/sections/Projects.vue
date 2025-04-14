<script setup lang="ts">
import { computed } from 'vue';
import { ExternalLink } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface ProfessionalProject {
  url: string;
  title: string;
  descriptions: string[];
}

interface PersonalProject {
  url: string;
  imgSrc: string;
  title: string;
  backend: string;
  frontend: string;
  descriptions: string[];
}

const proProjects = computed(() => <ProfessionalProject[]>[
  {
    url: 'https://heikocbd.com/',
    title: 'Heiko CBD',
    descriptions: [
      t("projects.heiko-cbd-desc"),
      t("projects.heiko-cbd-desc-2"),
      t("projects.heiko-cbd-desc-3"),
    ],
  },
  {
    url: 'https://heikoeducation.com/journals',
    title: 'Heiko Education',
    descriptions: [
      t("projects.heiko-education-desc"),
      t("projects.heiko-education-desc-2"),
      t("projects.heiko-education-desc-3"),
      t("projects.heiko-education-desc-4"),
    ],
  }
]);

const perProjects = computed(() => <PersonalProject[]>[
  {
    url: "https://localhost/rain-or-shine",
    imgSrc: "https://github.com/Brunosil97/rain-or-shine-frontend/blob/main/src/assets/dashboard.png?raw=true",
    title: "Rain Or Shine",
    backend: "https://github.com/Brunosil97/rain-or-shine-backend",
    frontend: "https://github.com/Brunosil97/rain-or-shine-frontend",
    descriptions: [
      t("projects.rain-or-shine-desc"),
      t("projects.rain-or-shine-desc-2"),
      t("projects.rain-or-shine-desc-3"),
      t("projects.rain-or-shine-desc-4"),
    ]
  }
])
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">{{ t("domain.projects") }}</h1>
    <div class="divider divider-primary mb-8">{{ t("common.professional") }}</div>
    <!-- Professional Projects Section -->
    <template v-for="(project, index) in proProjects" :key="project.title">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Left Column: DaisyUI Browser Mockup with iframe (spanning 2 columns on desktop) -->
        <div class="mockup-browser bg-base-100 lg:col-span-2">
          <div class="mockup-browser-toolbar">
            <div class="input">{{ project.url }}</div>
          </div>
          <iframe :src="project.url" class="w-full h-150" frameborder="0"></iframe>
        </div>
        <!-- Right Column: Project Description -->
        <div class="flex flex-col items-start">
          <div class="flex items-center space-x-4">
            <h2 class="text-1xl font-bold md:text-2xl">{{ project.title }}</h2>
            <a :href="project.url" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
              {{ t("common.live") }}
              <ExternalLink :size="16" />
            </a>
          </div>
          <p v-for="description in project.descriptions" class="mt-4">
            {{ description }}
          </p>
        </div>
      </div>
      <!-- Divider between projects; not rendered after the last project -->
      <div v-if="index < proProjects.length - 1" class="divider divider-secondary my-8" />
    </template>

    <div class="divider divider-primary mt-8 mb-8">{{ t("common.personal") }}</div>
    <!-- Personal Projects Section -->
    <template v-for="(project, index) in perProjects" :key="project.title">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Left Column: DaisyUI Browser Mockup with iframe (spanning 2 columns on desktop) -->
        <div class="mockup-browser bg-base-100 lg:col-span-2">
          <div class="mockup-browser-toolbar">
            <div class="input">{{ project.url }}</div>
          </div>
          <img :src="project.imgSrc" alt="project_image"/>
        </div>
        <!-- Right Column: Project Description -->
        <div class="flex flex-col items-start">
          <div class="flex items-center space-x-3 md:space-x-4">
            <h2 class="text-1xl font-bold md:text-2xl">{{ project.title }}</h2>
            <a :href="project.backend" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
              {{ t("tech.backend") }}
              <ExternalLink :size="16" />
            </a>
            <a :href="project.frontend" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
              {{ t("tech.frontend") }}
              <ExternalLink :size="16" />
            </a>
          </div>

          <p v-for="description in project.descriptions" class="mt-4">
            {{ description }}
          </p>
        </div>
      </div>
      <!-- Divider between projects; not rendered after the last project -->
      <div v-if="index < perProjects.length - 1" class="divider divider-secondary my-8" />
    </template>
  </div>
</template>