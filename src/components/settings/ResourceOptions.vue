<script setup lang="ts">
import { Github, Linkedin, Book } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});

const { t } = useI18n();
</script>

<template>
  <!-- Wrap the social icon divs in a parent container that stacks vertically on mobile and horizontally on larger screens -->
  <div class="flex flex-col sm:flex-row">
    <div class="tooltip tooltip-bottom" :class="{ 'mb-2': isMobile }" data-tip="GitHub">
      <a
        class="btn btn-sm sm:btn btn-wide"
        style="background-color: black;"
        href="https://github.com/Brunosil97"
        target="_blank"
      >
        <span v-if="isMobile" class="text-white">{{ t("tech.github") }}</span>
        <Github :size="16" color="white" />
      </a>
    </div>
    <div class="tooltip tooltip-bottom" :class="{ 'mb-2': isMobile, 'ml-2': !isMobile }" data-tip="LinkedIn">
      <a
        class="btn btn-sm btn-wide sm:btn"
        style="background-color: #0077B5;"
        href="https://www.linkedin.com/in/bruno-silvino-silva/"
        target="_blank"
      >
        <span v-if="isMobile" class="text-white">{{ t("tech.linkedin") }}</span>
        <Linkedin :size="16" color="white" />
      </a>
    </div>
    <div class="tooltip tooltip-bottom" :class="{ 'ml-2': !isMobile }" data-tip="Medium">
      <a
        class="btn btn-sm btn-wide sm:btn"
        style="background-color: oklch(60% 0.118 184.704);"
        href="https://medium.com/@brunosilvinosilva"
        target="_blank"
      >
        <span v-if="isMobile" class="text-white">{{ t("tech.medium") }}</span>
        <Book :size="16" color="white" />
      </a>
    </div>
  </div>
</template>