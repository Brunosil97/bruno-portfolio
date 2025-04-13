<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>
    <div class="divider divider-primary mb-8">Professional</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Left Column: DaisyUI Browser Mockup with iframe (spanning 2 columns on desktop) -->
      <div class="mockup-browser bg-base-100 lg:col-span-2">
        <div class="mockup-browser-toolbar">
          <div class="input">https://heikocbd.com/</div>
        </div>
        <iframe src="https://heikocbd.com/" class="w-full h-150" frameborder="0"></iframe>
      </div>
      <!-- Right Column: Project Description -->
      <div class="flex flex-col items-start">
        <div class="flex items-center space-x-4">
          <h2 class="text-1xl font-bold md:text-2xl">Heiko CBD</h2>
          <a href="https://heikocbd.com/" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
            Live
            <ExternalLink :size="16" />
          </a>
        </div>
        <p class="mt-4">
          This is a live e-commerce website built for a client specialising in premium CBD products for the UK health and lifestyle market.

        </p>
        <p class="mt-4">
          The site features a modern, responsive design and an intuitive user interface that ensures smooth navigation and a secure checkout process. It integrates advanced product management and filtering options to deliver personalised shopping experiences. With a focus on conversion optimisation.
        </p>
        <p class="mt-4">
          The website not only significantly boosts sales but also strengthens brand engagement and trust.
        </p>
      </div>
    </div>
    <div class="divider divider-secondary"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Left Column: DaisyUI Browser Mockup with iframe (spanning 2 columns on desktop) -->
      <div class="mockup-browser bg-base-100 lg:col-span-2">
        <div class="mockup-browser-toolbar">
          <div class="input">https://heikoeducation.com/journals</div>
        </div>
        <iframe src="https://heikoeducation.com/journals" class="w-full h-150" frameborder="0"></iframe>
      </div>
      <!-- Right Column: Project Description -->
      <div class="flex flex-col items-start">
        <div class="flex items-center space-x-4">
          <h2 class="text-1xl font-bold md:text-2xl">Heiko Education</h2>
          <a href="https://heikoeducation.com/journals" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
            Live
            <ExternalLink :size="16" />
          </a>
        </div>
        <p class="mt-4">
          Heiko Education is an innovative educational platform created for the same client as HeikoCBD.
          Additionally, the site features easy-to-use contact options to allow users to connect with Heiko directly for further inquiries.
        </p>
        <p class="mt-4">
          Serving as an online hub, this site offers a curated collection of blogs, articles, and resources that provide insightful information about CBD, health, and lifestyle.
        </p>
        <p class="mt-4">
          Additionally, the site features easy-to-use contact options to allow users to connect with Heiko directly for further inquiries.
        </p>
      </div>
    </div>

    <div class="divider divider-primary mt-8 mb-8">Personal</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Left Column: DaisyUI Browser Mockup with iframe (spanning 2 columns on desktop) -->
      <div class="mockup-browser bg-base-100 lg:col-span-2">
        <div class="mockup-browser-toolbar">
          <div class="input">https://localhost/rain-or-shine</div>
        </div>
        <img src="https://github.com/Brunosil97/rain-or-shine-frontend/blob/main/src/assets/dashboard.png?raw=true" alt="project_image"/>
      </div>
      <!-- Right Column: Project Description -->
      <div class="flex flex-col items-start">
        <div class="flex items-center space-x-3 md:space-x-4">
          <h2 class="text-1xl font-bold md:text-2xl">Rain Or Shine</h2>
          <a href="https://github.com/Brunosil97/rain-or-shine-backend" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
            Backend
            <ExternalLink :size="16" />
          </a>
          <a href="https://github.com/Brunosil97/rain-or-shine-frontend" target="_blank" class="btn btn-primary btn-xs md:btn-sm">
            Frontend
            <ExternalLink :size="16" />
          </a>
        </div>

        <p class="mt-4">
          Rain Or Shine is a responsive weather forecasting application built with Vue 3 and Vite. It connects with the Rain Or Shine backend to deliver detailed weather forecasts including an overview of today's weather and hourly data.
        </p>
        <p class="mt-4">
          The application employs the Vuetify UI library to offer a modern, intuitive interface that adapts seamlessly to both desktop and mobile screens.
        </p>
        <p class="mt-4">
          The backend service is developed using Deno, a secure and modern runtime for JavaScript and TypeScript, and integrates with the OpenWeatherMap API to fetch precise city geocoding and weather details via the One Call API.
        </p>
        <p class="mt-4">
          The main focus of this project was to practice my API development skills and venture into learning about Deno. Specifically Deno 2.
        </p>
      </div>
    </div>
  </div>
</template>