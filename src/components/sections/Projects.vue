<script setup lang="ts">
import { ref } from 'vue';
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

const proProjects = ref<ProfessionalProject[]>([
  {
    url: 'https://heikocbd.com/',
    title: 'Heiko CBD',
    descriptions: [
      "This is a live e-commerce website built for a client specialising in premium CBD products for the UK health and lifestyle market.",
      "The site features a modern, responsive design and an intuitive user interface that ensures smooth navigation and a secure checkout process. It integrates advanced product management and filtering options to deliver personalised shopping experiences. With a focus on conversion optimisation.",
      "The website not only significantly boosts sales but also strengthens brand engagement and trust."
    ],
  },
  {
    url: 'https://heikoeducation.com/journals',
    title: 'Heiko Education',
    descriptions: [
      "Heiko Education is an innovative educational platform created for the same client as HeikoCBD.",
      "Additionally, the site features easy-to-use contact options to allow users to connect with Heiko directly for further inquiries.",
      "Serving as an online hub, this site offers a curated collection of blogs, articles, and resources that provide insightful information about CBD, health, and lifestyle.",
      "Additionally, the site features easy-to-use contact options to allow users to connect with Heiko directly for further inquiries."
    ],
  }
]);

const perProjects = ref<PersonalProject[]>([
  {
    url: "https://localhost/rain-or-shine",
    imgSrc: "https://github.com/Brunosil97/rain-or-shine-frontend/blob/main/src/assets/dashboard.png?raw=true",
    title: "Rain Or Shine",
    backend: "https://github.com/Brunosil97/rain-or-shine-backend",
    frontend: "https://github.com/Brunosil97/rain-or-shine-frontend",
    descriptions: [
      "Rain Or Shine is a responsive weather forecasting application built with Vue 3 and Vite. It connects with the Rain Or Shine backend to deliver detailed weather forecasts including an overview of today's weather and hourly data.",
      "The application employs the Vuetify UI library to offer a modern, intuitive interface that adapts seamlessly to both desktop and mobile screens.",
      "The backend service is developed using Deno, a secure and modern runtime for JavaScript and TypeScript, and integrates with the OpenWeatherMap API to fetch precise city geocoding and weather details via the One Call API.",
      "The main focus of this project was to practice my API development skills and venture into learning about Deno. Specifically Deno 2."
    ]
  }
])
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>
    <div class="divider divider-primary mb-8">Professional</div>
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

    <div class="divider divider-primary mt-8 mb-8">Personal</div>

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