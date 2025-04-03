
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(['link-clicked'])
</script>

<template>
  <ul class="menu bg-base-200 min-h-full w-60">
    <li>
      <h2 class="menu-title">{{ t("common.getting-started") }}</h2>
      <ul>
        <li>
          <router-link to="/docs/about" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.about-me") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/contact" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.contact") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/work" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.work-experience") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/skills" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.skills") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/projects" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.projects") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/blogs" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.blogs") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/faqs" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.faq") }}
          </router-link>
        </li>
        <li>
          <router-link to="/docs/cv" exact-active-class="menu-active" @click="emit('link-clicked')">
            {{ t("domain.cv") }}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>