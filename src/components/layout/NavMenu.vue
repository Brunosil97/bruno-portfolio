
<script setup lang="ts">
const emit = defineEmits(['link-clicked'])
</script>

<template>
  <ul class="menu bg-base-200 min-h-full w-60">
    <li>
      <h2 class="menu-title">Getting Started</h2>
      <ul>
        <li>
          <router-link to="/docs/about" exact-active-class="menu-active" @click="emit('link-clicked')">
            About Me
          </router-link>
        </li>
        <li>
          <router-link to="/docs/contact" exact-active-class="menu-active" @click="emit('link-clicked')">
            Contact
          </router-link>
        </li>
        <li>
          <router-link to="/docs/work" exact-active-class="menu-active" @click="emit('link-clicked')">
            Work Experience
          </router-link>
        </li>
        <li>
          <router-link to="/docs/skills" exact-active-class="menu-active" @click="emit('link-clicked')">
            Skills
          </router-link>
        </li>
        <li>
          <router-link to="/docs/projects" exact-active-class="menu-active" @click="emit('link-clicked')">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/docs/blogs" exact-active-class="menu-active" @click="emit('link-clicked')">
            Blogs
          </router-link>
        </li>
        <li>
          <router-link to="/docs/faqs" exact-active-class="menu-active" @click="emit('link-clicked')">
            FAQs
          </router-link>
        </li>
        <li>
          <router-link to="/docs/cv" exact-active-class="menu-active" @click="emit('link-clicked')">
            CV
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>