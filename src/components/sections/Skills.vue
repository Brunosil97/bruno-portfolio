<script setup lang="ts">
import { ref, computed } from "vue";
import { Check, X } from "lucide-vue-next";

interface Skill {
  title: string;
  src: string;
  usedProffessionally: boolean;
  value: number;
}

// Skills Data Arrays
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
    value: 75,
  },
  {
    title: "Zend",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zend/zend-original.svg",
    usedProffessionally: true,
    value: 50,
  },
  {
    title: "Rails",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    usedProffessionally: false,
    value: 25,
  },
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
    value: 25,
  },
]);

const designStyling = ref<Skill[]>([
  {
    title: "Vuetify",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    usedProffessionally: true,
    value: 75,
  },
  {
    title: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    usedProffessionally: true,
    value: 75,
  },
]);

const testingAndDocumentation = ref<Skill[]>([
  {
    title: "Vitest",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "Storybook",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "Confluence",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
    usedProffessionally: true,
    value: 100,
  },
]);

const toolChains = ref<Skill[]>([
  {
    title: "Vite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "Bun",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    usedProffessionally: false,
    value: 25,
  },
  {
    title: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    usedProffessionally: true,
    value: 75,
  },
  {
    title: "Deno",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg",
    usedProffessionally: false,
    value: 25,
  },
  {
    title: "Yarn",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "NPM",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    usedProffessionally: true,
    value: 75,
  },
  {
    title: "ESLint",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "SonarQube",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
    usedProffessionally: true,
    value: 50,
  },
]);

const cloudAndInfra = ref<Skill[]>([
  {
    title: "Azure",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    usedProffessionally: true,
    value: 100,
  },
  {
    title: "Cloudflare",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
    usedProffessionally: true,
    value: 50,
  },
  {
    title: "Terraform",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    usedProffessionally: true,
    value: 50,
  },
]);

// Filter option: default is empty string (shows all)
const filterOption = ref<string>("");

// Computed filtering for each category
const filteredFrameworks = computed(() => {
  if (filterOption.value === "Intermediate") {
    return frameworks.value.filter(skill => skill.value <= 50);
  } else if (filterOption.value === "Proficient") {
    return frameworks.value.filter(skill => skill.value > 50);
  } else if (filterOption.value === "WorkPlace") {
    return frameworks.value.filter(skill => skill.usedProffessionally);
  }
  return frameworks.value;
});

const filteredLanguages = computed(() => {
  if (filterOption.value === "Intermediate") {
    return languages.value.filter(skill => skill.value <= 50);
  } else if (filterOption.value === "Proficient") {
    return languages.value.filter(skill => skill.value > 50);
  } else if (filterOption.value === "WorkPlace") {
    return languages.value.filter(skill => skill.usedProffessionally);
  }
  return languages.value;
});

const filteredDesignStyling = computed(() => {
  if (filterOption.value === "Intermediate") {
    return designStyling.value.filter(skill => skill.value <= 50);
  } else if (filterOption.value === "Proficient") {
    return designStyling.value.filter(skill => skill.value > 50);
  } else if (filterOption.value === "WorkPlace") {
    return designStyling.value.filter(skill => skill.usedProffessionally);
  }
  return designStyling.value;
});

const filteredToolChains = computed(() => {
  if (filterOption.value === "Intermediate") {
    return toolChains.value.filter(skill => skill.value <= 50);
  } else if (filterOption.value === "Proficient") {
    return toolChains.value.filter(skill => skill.value > 50);
  } else if (filterOption.value === "WorkPlace") {
    return toolChains.value.filter(skill => skill.usedProffessionally);
  }
  return toolChains.value;
});

const filteredTestingAndDocumentation = computed(() => {
  if (filterOption.value === "Intermediate") {
    return testingAndDocumentation.value.filter(skill => skill.value <= 50);
  } else if (filterOption.value === "Proficient") {
    return testingAndDocumentation.value.filter(skill => skill.value > 50);
  } else if (filterOption.value === "WorkPlace") {
    return testingAndDocumentation.value.filter(skill => skill.usedProffessionally);
  }
  return testingAndDocumentation.value;
});

const filteredCloudAndInfra = computed(() => {
  if (filterOption.value === "Intermediate") {
    return cloudAndInfra.value.filter(skill => skill.value <= 50);
  } else if (filterOption.value === "Proficient") {
    return cloudAndInfra.value.filter(skill => skill.value > 50);
  } else if (filterOption.value === "WorkPlace") {
    return cloudAndInfra.value.filter(skill => skill.usedProffessionally);
  }
  return cloudAndInfra.value;
});
</script>

<template>
  <div class="container mx-auto p-0 sm:p-6">
    <!-- DaisyUI Filter Buttons -->
    <div class="join ml-4 mb-6">
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': filterOption === '' }"
        @click="filterOption = ''"
      >
        All
      </button>
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': filterOption === 'Intermediate' }"
        @click="filterOption = 'Intermediate'"
      >
        Intermediate
      </button>
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': filterOption === 'Proficient' }"
        @click="filterOption = 'Proficient'"
      >
        Proficient
      </button>
      <button
        class="btn btn-soft btn-primary btn-sm sm:btn-md"
        :class="{ 'btn-active': filterOption === 'WorkPlace' }"
        @click="filterOption = 'WorkPlace'"
      >
        Work Place
      </button>
    </div>

    <!-- Frameworks -->
    <h1 class="text font-bold ml-4 mb-4">Frameworks:</h1>
    <div
      v-for="framework in filteredFrameworks"
      :key="framework.title"
      class="stats bg-base-100 border border-base-400 ml-4 mb-4"
    >
      <div class="stat">
        <div class="stat-title font-bold">{{ framework.title }}</div>
        <div class="stat-value">
          <img width="100px" :src="framework.src" alt="" />
        </div>
        <div class="stat-actions">
          <div
            class="badge badge-sm"
            :class="framework.usedProffessionally ? 'badge-success' : 'badge-error'"
          >
            Pro
            <Check v-if="framework.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title font-bold">Proficiency</div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input
              type="range"
              min="0"
              max="100"
              :value="framework.value"
              class="range range-sm range-success pointer-events-none"
              step="25"
            />
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

    <!-- Languages -->
    <h1 class="text font-bold ml-4 mb-4">Languages:</h1>
    <div
      v-for="language in filteredLanguages"
      :key="language.title"
      class="stats bg-base-100 border border-base-400 ml-4 mb-4"
    >
      <div class="stat">
        <div class="stat-title font-bold">{{ language.title }}</div>
        <div class="stat-value">
          <img width="100px" :src="language.src" alt="" />
        </div>
        <div class="stat-actions">
          <div
            class="badge badge-sm"
            :class="language.usedProffessionally ? 'badge-success' : 'badge-error'"
          >
            Pro
            <Check v-if="language.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title font-bold">Proficiency</div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input
              type="range"
              min="0"
              max="100"
              :value="language.value"
              class="range range-sm range-success pointer-events-none"
              step="25"
            />
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

    <!-- Design & Styling -->
    <h1 class="text font-bold ml-4 mb-4">Design & Styling:</h1>
    <div
      v-for="style in filteredDesignStyling"
      :key="style.title"
      class="stats bg-base-100 border border-base-400 ml-4 mb-4"
    >
      <div class="stat">
        <div class="stat-title font-bold">{{ style.title }}</div>
        <div class="stat-value">
          <img width="100px" :src="style.src" alt="" />
        </div>
        <div class="stat-actions">
          <div
            class="badge badge-sm"
            :class="style.usedProffessionally ? 'badge-success' : 'badge-error'"
          >
            Pro
            <Check v-if="style.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title font-bold">Proficiency</div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input
              type="range"
              min="0"
              max="100"
              :value="style.value"
              class="range range-sm range-success pointer-events-none"
              step="25"
            />
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

    <!-- Development Toolchain -->
    <h1 class="text font-bold ml-4 mb-4">Development Toolchain:</h1>
    <div
      v-for="tool in filteredToolChains"
      :key="tool.title"
      class="stats bg-base-100 border border-base-400 ml-4 mb-4"
    >
      <div class="stat">
        <div class="stat-title font-bold">{{ tool.title }}</div>
        <div class="stat-value">
          <img width="100px" :src="tool.src" alt="" />
        </div>
        <div class="stat-actions">
          <div
            class="badge badge-sm"
            :class="tool.usedProffessionally ? 'badge-success' : 'badge-error'"
          >
            Pro
            <Check v-if="tool.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title font-bold">Proficiency</div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input
              type="range"
              min="0"
              max="100"
              :value="tool.value"
              class="range range-sm range-success pointer-events-none"
              step="25"
            />
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

    <!-- Testing & Documentation -->
    <h1 class="text font-bold ml-4 mb-4">Testing & Documentation:</h1>
    <div
      v-for="tool in filteredTestingAndDocumentation"
      :key="tool.title"
      class="stats bg-base-100 border border-base-400 ml-4 mb-4"
    >
      <div class="stat">
        <div class="stat-title font-bold">{{ tool.title }}</div>
        <div class="stat-value">
          <img width="100px" :src="tool.src" alt="" />
        </div>
        <div class="stat-actions">
          <div
            class="badge badge-sm"
            :class="tool.usedProffessionally ? 'badge-success' : 'badge-error'"
          >
            Pro
            <Check v-if="tool.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title font-bold">Proficiency</div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input
              type="range"
              min="0"
              max="100"
              :value="tool.value"
              class="range range-sm range-success pointer-events-none"
              step="25"
            />
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

    <!-- Cloud & Infrastructure -->
    <h1 class="text font-bold ml-4 mb-4">Cloud & Infrastructure:</h1>
    <div
      v-for="tool in filteredCloudAndInfra"
      :key="tool.title"
      class="stats bg-base-100 border border-base-400 ml-4 mb-4"
    >
      <div class="stat">
        <div class="stat-title font-bold">{{ tool.title }}</div>
        <div class="stat-value">
          <img width="100px" :src="tool.src" alt="" />
        </div>
        <div class="stat-actions">
          <div
            class="badge badge-sm"
            :class="tool.usedProffessionally ? 'badge-success' : 'badge-error'"
          >
            Pro
            <Check v-if="tool.usedProffessionally" :size="16" />
            <X v-else :size="16" />
          </div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-title font-bold">Proficiency</div>
        <div class="stat-value">
          <div class="w-full w-56">
            <input
              type="range"
              min="0"
              max="100"
              :value="tool.value"
              class="range range-sm range-success pointer-events-none"
              step="25"
            />
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