<script setup lang="ts">
import { ref } from "vue";
import { Check, X } from "lucide-vue-next";

interface Skill {
  title: string;
  src: string;
  usedProffessionally: boolean;
  value: number;
}

const frameworks = ref<Skill[]>([
  {
    title: "Vue.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    usedProffessionally: true,
    value: 75,
  },
  {
    title: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    usedProffessionally: true,
    value: 75
  },
  {
    title: "Zend",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zend/zend-original.svg",
    usedProffessionally: true,
    value: 50,
  },
  {
    title: "Rails",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" ,
    usedProffessionally: false,
    value: 25,
  }
]);

const languages = ref<Skill[]>([
  {
    title: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    usedProffessionally: true,
    value: 75,
  },
  {
    title: "C-Sharp",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    usedProffessionally: true,
    value: 60,
  },
  {
    title: "Ruby",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
    usedProffessionally: false,
    value: 30,
  },
]);

</script>
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold ml-4 mb-4">Frameworks:</h1>
    <div v-for="framework in frameworks" :key="framework.title" class="stats bg-base-100 border border-base-400 ml-4 mb-4">
      <div class="stat">
        <div class="stat-title font-bold">{{ framework.title }}</div>
        <div class="stat-value"><img width="100px" :src="framework.src" /></div>
        <div class="stat-actions">
          <div class="badge badge-sm" :class="framework.usedProffessionally ? 'badge-success' : 'badge-error'">
            Pro
            <Check v-if="framework.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>

      <div class="stat">
        <div class="stat-title font-bold">
          Profficency
        </div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input type="range" min="0" max="100" :value="framework.value" class="range range-sm range-success pointer-events-none" step="25" />
            <div class="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div class="flex justify-between px-2.5 mt-2 text-xs">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-4xl font-bold ml-4 mb-4">Languages:</h1>
    <div v-for="language in languages" :key="language.title" class="stats bg-base-100 border border-base-400 ml-4 mb-4">
      <div class="stat">
        <div class="stat-title font-bold">{{ language.title }}</div>
        <div class="stat-value"><img width="100px" :src="language.src" /></div>
        <div class="stat-actions">
          <div class="badge badge-sm" :class="language.usedProffessionally ? 'badge-success' : 'badge-error'">
            Pro
            <Check v-if="language.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>

      <div class="stat">
        <div class="stat-title font-bold">
          Profficency
        </div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input type="range" min="0" max="100" :value="language.value" class="range range-sm range-success pointer-events-none" step="25" />
            <div class="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div class="flex justify-between px-2.5 mt-2 text-xs">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>