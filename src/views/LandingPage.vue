<script lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div class="relative hero min-h-screen overflow-hidden">
    <!-- Video Background -->
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="../assets/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-overlay"></div>
    <div class="relative hero-content text-neutral-content text-center glass">
      <div>
        <h1 class="mb-5 text-5xl font-bold">Bruno Silva</h1>
        <p class="mb-5">
          Unleashing Bruno: the dynamic tech companion that powers modern web development with precision and style.
        </p>
        <router-link to="/docs/about" class="btn btn-neutral mt-4">
          Get Started
          <ArrowRight />
        </router-link>
      </div>
    </div>
  </div>
</template>
