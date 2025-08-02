<script setup lang="ts">
import { computed, reactive, onMounted, ref } from 'vue';
import { ExternalLink } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Track current slide index for each project carousel
const carouselIndexes = reactive<Record<string, number>>({});

// Track active filter: 'all', 'professional', or 'personal'
const activeFilter = ref<'all' | 'professional' | 'personal'>('professional');

interface ProfessionalProject {
  url: string;
  title: string;
  descriptions: string[];
}

interface PersonalProject {
  url: string;
  imgSrc?: string;
  images?: string[];
  title: string;
  backend?: string;
  frontend?: string;
  descriptions: string[];
}

// Reactive object to keep track of each iframe's load status using project title as key.
const iframeStatus = reactive<Record<string, boolean>>({});

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

// Ensure that for each professional project, we initialise its load status to false.
onMounted(() => {
  proProjects.value.forEach((project: ProfessionalProject) => {
    iframeStatus[project.title] = false;
  });
  // Initialize carousel indexes for personal projects
  perProjects.value.forEach((project: PersonalProject) => {
    if (project.images && project.images.length > 0) {
      carouselIndexes[project.title] = 0;
    }
  });
});

const nextSlide = (projectTitle: string, totalSlides: number) => {
  carouselIndexes[projectTitle] = (carouselIndexes[projectTitle] + 1) % totalSlides;
};

const prevSlide = (projectTitle: string, totalSlides: number) => {
  carouselIndexes[projectTitle] = carouselIndexes[projectTitle] === 0
    ? totalSlides - 1
    : carouselIndexes[projectTitle] - 1;
};

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
  },
  {
    url: "https://localhost/bookhub",
    images: [
      "https://github.com/Brunosil97/bookhub-frontend/blob/main/public/landing_page.png?raw=true",
      "https://github.com/Brunosil97/bookhub-frontend/blob/main/public/grid_view.png?raw=true",
      "https://github.com/Brunosil97/bookhub-frontend/blob/main/public/my_books.png?raw=true",
      "https://github.com/Brunosil97/bookhub-frontend/blob/main/public/analytics.png?raw=true",
      "https://github.com/Brunosil97/bookhub-frontend/blob/main/public/settings.png?raw=true",

    ],
    title: "BookHub",
    backend: "https://github.com/Brunosil97/bookhub-backend",
    frontend: "https://github.com/Brunosil97/bookhub-frontend",
    descriptions: [
      t("projects.bookhub-desc"),
      t("projects.bookhub-desc-2"),
      t("projects.bookhub-desc-3"),
      t("projects.bookhub-desc-4"),
    ]
  },
  {
    url: "https://brunosil97.github.io/whos-better-at-rivals/",
    images: [
      "https://github.com/Brunosil97/whos-better-at-rivals/blob/main/public/landing_page.png?raw=true",
      "https://github.com/Brunosil97/whos-better-at-rivals/blob/main/public/rankings.png?raw=true",
      "https://github.com/Brunosil97/whos-better-at-rivals/blob/main/public/table.png?raw=true",
      "https://github.com/Brunosil97/whos-better-at-rivals/blob/main/public/recent_matches.png?raw=true",
    ],
    title: "Who's Better?",
    frontend: "https://github.com/Brunosil97/whos-better-at-rivals",
    descriptions: [
      t("projects.whos-better-desc"),
      t("projects.whos-better-desc-2"),
      t("projects.whos-better-desc-3"),
    ]
  }
])

// Computed properties to show/hide sections based on filter
const showProfessional = computed(() => activeFilter.value === 'all' || activeFilter.value === 'professional');
const showPersonal = computed(() => activeFilter.value === 'all' || activeFilter.value === 'personal');
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">{{ t("domain.projects") }}</h1>

    <!-- Filter Buttons -->
    <div class="join mb-6">
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': activeFilter === 'professional' }"
        @click="activeFilter = 'professional'"
      >
        {{ t("common.professional") }}
      </button>
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': activeFilter === 'personal' }"
        @click="activeFilter = 'personal'"
      >
        {{ t("common.personal") }}
      </button>
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': activeFilter === 'all' }"
        @click="activeFilter = 'all'"
      >
        {{ t("common.all") }}
      </button>
    </div>

    <div v-if="showProfessional" class="divider divider-primary mb-8">{{ t("common.professional") }}</div>
    <!-- Professional Projects Section -->
    <template v-if="showProfessional" v-for="(project, index) in proProjects" :key="project.title">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Left Column: DaisyUI Browser Mockup with iframe (spanning 2 columns on desktop) -->
        <div class="mockup-browser bg-base-100 lg:col-span-2">
          <div class="mockup-browser-toolbar">
            <div class="input">{{ project.url }}</div>
          </div>
         <!-- Loader: Shown while iframe is loading -->
         <div
            v-if="!iframeStatus[project.title]"
            class="flex justify-center items-center h-96"
          >
            <span class="loading loading-spinner text-primary" />
          </div>
          <!-- Iframe: Hidden until loaded -->
          <iframe
            v-show="iframeStatus[project.title]"
            :src="project.url"
            class="w-full h-96"
            frameborder="0"
            @load="iframeStatus[project.title] = true"
          />
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
          <p :key="description" v-for="description in project.descriptions" class="mt-4">
            {{ description }}
          </p>
        </div>
      </div>
      <!-- Divider between projects; not rendered after the last project -->
      <div v-if="index < proProjects.length - 1" class="divider divider-secondary my-8" />
    </template>

    <div v-if="showPersonal" class="divider divider-primary mt-8 mb-8">{{ t("common.personal") }}</div>
    <!-- Personal Projects Section -->
    <template v-if="showPersonal" v-for="(project, index) in perProjects" :key="project.title">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Left Column: DaisyUI Browser Mockup with image/carousel (spanning 2 columns on desktop) -->
        <div class="mockup-browser bg-base-100 lg:col-span-2">
          <div class="mockup-browser-toolbar">
            <div class="input">{{ project.url }}</div>
          </div>

          <!-- Single Image Display -->
          <div v-if="project.imgSrc">
            <img :src="project.imgSrc" alt="project_image"/>
          </div>

          <!-- Carousel for Multiple Images -->
          <div v-else-if="project.images && project.images.length > 0" class="carousel w-full relative">
            <div v-for="(image, imgIndex) in project.images" :key="imgIndex"
                 class="carousel-item w-full"
                 v-show="(carouselIndexes[project.title] ?? 0) === imgIndex">
              <img :src="image" class="w-full" :alt="`${project.title} screenshot ${imgIndex + 1}`" />
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button @click="prevSlide(project.title, project.images.length)" class="btn btn-circle">❮</button>
              <button @click="nextSlide(project.title, project.images.length)" class="btn btn-circle">❯</button>
            </div>
          </div>
        </div>

        <!-- Right Column: Project Description -->
        <div class="flex flex-col items-start">
          <div class="flex items-center space-x-3 md:space-x-4 flex-wrap gap-2">
            <h2 class="text-1xl font-bold md:text-2xl">{{ project.title }}</h2>
            <a v-if="project.backend" :href="project.backend" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
              {{ t("tech.backend") }}
              <ExternalLink :size="16" />
            </a>
            <a v-if="project.frontend" :href="project.frontend" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
              {{ t("tech.frontend") }}
              <ExternalLink :size="16" />
            </a>
          </div>

          <p :key="description" v-for="description in project.descriptions" class="mt-4">
            {{ description }}
          </p>
        </div>
      </div>
      <!-- Divider between projects; not rendered after the last project -->
      <div v-if="index < perProjects.length - 1" class="divider divider-secondary my-8" />
    </template>
  </div>
</template>