<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

</script>

<template>
  <div class="relative hero min-h-screen overflow-hidden">
    <!-- Video Background -->
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="../assets/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="relative">
      <div class="text-center">
        <h1 class="mb-5 text-5xl font-bold text-white">Bruno Silva</h1>
        <p class="mb-5 text-white font-bold">
          The dynamic tech companion that powers modern web development with precision and style.
        </p>
        <router-link to="/docs/about" class="btn btn-success mt-4">
          Get Started
          <ArrowRight />
        </router-link>
      </div>

      <!-- Cards Container -->
      <div class="flex flex-col md:flex-row justify-center gap-4 mt-8">
        <!-- Approachable Card -->
        <div class="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 focus:scale-105">
          <div class="card-body">
            <h2 class="card-title">Approachable</h2>
            <p>
              Communicates complex technical concepts in a clear, accessible way.
              His portfolio, styled as a comprehensive documentation, invites developers and clients alike to explore and reach out.
            </p>
            <div class="card-actions justify-end">
              <router-link class="btn btn-primary" to="/docs/contact">
                Contact
                <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
        <!-- Performant Card -->
        <div class="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 focus:scale-105">
          <div class="card-body">
            <h2 class="card-title">Performant</h2>
            <p>
              Delivers solutions that are built for speed and efficiency.
              His work leverages modern frameworks and best practices to ensure every project runs smoothly with minimal overhead.
            </p>
            <div class="card-actions justify-end">
              <router-link class="btn btn-secondary" to="/docs/work">
                Work Experience
                <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
        <!-- Versatile Card -->
        <div class="card bg-base-100 w-96 shadow-sm transition-transform duration-300 hover:scale-105 focus:scale-105">
          <div class="card-body">
            <h2 class="card-title">Versatile</h2>
            <p>
              With a skill set that spans the full spectrum of web development.
              From front-end frameworks like Vue and React to full-stack solutions and cloud integrations, his adaptable approach meets the needs of any project.
            </p>
            <div class="card-actions justify-end">
              <router-link class="btn btn-accent" to="/docs/skills">
                Skills
                <ArrowRight :size="16" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
