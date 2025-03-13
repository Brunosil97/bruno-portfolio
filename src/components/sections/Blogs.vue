<script setup lang="ts">
import { ref } from 'vue';
import { ExternalLink } from 'lucide-vue-next';

const blogs = ref([
{
    title: "Why Move from Vuex to Pinia for State Management?",
    subtitle: "State management is at the heart of any non-trivial Vue application...",
    date: "Mar 13, 2025",
    src: "https://medium.com/brunosilvinosilva/why-move-from-vuex-to-pinia-for-state-management-cffeb35528c6",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*0AOZYiXskCvFgcmF.jpg",
    published: true,
  },
  {
    title: "Storybook & Chromatic: Empowering UI Excellence",
    subtitle: "Cultivating a UI-First development culture",
    date: "Jul 11, 2023",
    src: "https://medium.com/brunosilvinosilva/storybook-and-chromatic-empowering-ui-excellence-14c432e71718",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*fowx8D8hKMuY-74I.png",
    published: true,
  },
  {
    title: "Elon's open letter and the need for government intervention?",
    subtitle: "An open letter with signatures from hundreds of the biggest...",
    date: "Apr 2, 2023",
    src: "https://medium.com/brunosilvinosilva/pause-on-ai-elons-open-letter-and-the-need-for-government-intervention-fc3024dc2419",
    image: "https://miro.medium.com/v2/resize:fit:1180/format:webp/0*Mjod2rk7UJfRo4rq.png",
    published: true,
  },
  {
    title: "A beginners guide to Artificial Intelligence",
    subtitle: "AI has become one of the most talked-about technologies in recent times...",
    date: "April 2, 2023",
    src: "https://medium.com/brunosilvinosilva/a-beginners-guide-to-artificial-intelligence-5b8196b87b52",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*rNhhoQWNAkxXojk7.jpg",
    published: true,
  },
  {
    title: "Vue 2 to Vue 3: A migration story",
    subtitle: "Vue 3 was released in September 2020, and it brings a lot of new features...",
    date: "Mar 28, 2023",
    src: "https://medium.com/brunosilvinosilva/vue-2-to-vue-3-a-migration-story-4af46cb9c097",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*K0e4jNxhfuYd2cVq.png",
    published: false,
  },
  {
    title: "Starting a Vue with Vite project within a Docker Container",
    subtitle: "Developing Vue applications within a Docker container is a great way to...",
    date: "Mar 28, 2023",
    src: "https://medium.com/brunosilvinosilva/starting-a-vue-with-vite-project-within-a-docker-container-c8c8e5ea72fa",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*_RwtwBbQ9tOosrpc",
    published: false,
  },
  {
    title: "From the Dramatic Arts to the Tech Industry",
    subtitle: 'My Journey of changing career paths in a year',
    date: "Mar 7, 2021",
    src: "https://medium.com/brunosilvinosilva/from-the-dramatic-arts-to-the-tech-industry-9984b59d67dd",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*NhBR_4MY0QUTZIAA.jpg",
    published: false,
  },
  {
    title: "The Strategy Design Pattern",
    subtitle: "The Strategy Design Pattern is a behavioral design pattern that enables...",
    date: "Nov 12, 2020",
    src: "https://medium.com/swlh/the-strategy-design-pattern-85782f1ecc24",
    image: "https://miro.medium.com/v2/resize:fit:1280/format:webp/0*W5DwTZHbObjnfOaH.png",
    published: true,
  },
  {
    title: "Entity Framework: Building an ASP Web Application (MVC)",
    subtitle: "If you're writing a new ASP.NET Core application that needs to work with relational data...",
    date: "Nov 2, 2020",
    src: "https://medium.com/swlh/entity-framework-building-an-asp-web-application-mvc-1af09a450e88",
    image: "https://miro.medium.com/v2/resize:fit:1200/format:webp/0*08bsUxGq5YGlofxO.png",
    published: true,
  },
  {
    title: "Learning React Hooks: What are Hooks?",
    subtitle: "I have recently had the pleasure of graduating from Flatiron a couple...",
    date: "Jun 12, 2020",
    src: "https://medium.com/brunosilvinosilva/learning-react-hooks-what-are-hooks-551a9c40c1b1",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*_cZD3UC7xlmpjm2o",
    published: false,
  },
  {
    title: "React: Component Lifecycles",
    subtitle: "What is a component lifecycle?",
    date: "May 5, 2020",
    src: "https://medium.com/brunosilvinosilva/react-component-lifecycles-69a5669d5cb3",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*IcxPn73VCUXo-MD8.png",
    published: false,
  },
  {
    title: "Working with React",
    subtitle: "Intro to Components and State",
    date: "April 14, 2020",
    src: "https://medium.com/brunosilvinosilva/working-with-react-7c04d810046a",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*-5zj0lhefT85Zg3f.png",
    published: false,
  },
  {
    title: "Theatre Junkie: Using API's in Rails",
    subtitle: "It's now my fourth week working on Rails at Flatiron and it's time to embark...",
    date: "Mar 4, 2020",
    src: "https://medium.com/brunosilvinosilva/theatre-junkie-using-apis-in-rails-15e54aeeb0a9",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YxcMcGQpBd8jvaI5YJVMyg.png",
    published: false,
  },
  {
    title: "Module Inheritance: To Include or to Extend?",
    subtitle: "During most of my time working through OOP, I would endlessy find myself...",
    date: "Feb 12, 2020",
    src: "https://medium.com/brunosilvinosilva/module-inheritance-to-include-or-to-extend-fc7f40025a24",
    image: "https://miro.medium.com/v2/resize:fit:794/format:webp/1*8dec9vTJ73Wp97biBEvizg.png",
    published: false,
  },
]);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8">Blogs</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="(blog, index) in blogs"
        :key="index"
        class="card bg-base-100 shadow-md transition-transform duration-300 hover:scale-105 focus:scale-105"
        tabindex="0"
      >
        <figure>
          <img
            class="w-full h-48 object-cover"
            :src="blog.image"
            :alt="`Thumbnail for ${blog.title}_${index}`"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ blog.title }}</h2>
          <p class="text-sm">{{ blog.subtitle }}</p>
          <p class="text-xs text-gray-500">
            {{ blog.date }}
            <div v-if="blog.published" class="badge badge-outline badge-secondary badge-sm">Published</div>
          </p>
          <div class="card-actions justify-end mt-2">
            <a :href="blog.src" target="_blank" class="btn btn-primary btn-sm">
              Read More
              <ExternalLink :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>