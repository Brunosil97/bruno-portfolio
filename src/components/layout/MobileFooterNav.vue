<script setup lang="ts">
import { useRouter } from 'vue-router';
import GithubStats from './githubStats.vue';
import { Github, Home, SquareMenu } from 'lucide-vue-next';

const router = useRouter();
const to = (path: string) => {
  router.push(path);
}
</script>

<template>
  <div class="dock dock-xl sm:hidden">
    <button @click="to('/')">
      <Home :size="20" />
      <span class="dock-label">Home</span>
    </button>

    <button class="dock-active">
      <SquareMenu :size="20" />
      <span class="dock-label">Menu</span>
    </button>

    <button onclick="stats_modal.showModal()">
      <Github :size="20" />
      <span class="dock-label">Stats</span>
    </button>
  </div>

  <dialog id="stats_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-base-200">
      <div class="flex justify-center items-center">
        <github-stats />
      </div>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

