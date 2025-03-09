<script setup lang="ts">
import { Github, Linkedin, Book } from 'lucide-vue-next';

</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Bruno Silva</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <div class="tooltip tooltip-bottom" data-tip="GitHub">
          <a class="btn btn-neutral" href="https://github.com/Brunosil97" target="_blank">
            <Github :size="16" />
          </a>
        </div>
        <div class="tooltip tooltip-bottom ml-2" data-tip="LinkedIn">
          <a class="btn btn-info" href="https://www.linkedin.com/in/bruno-silvino-silva/" target="_blank">
            <Linkedin :size="16" />
          </a>
        </div>
        <div class="tooltip tooltip-bottom ml-2" data-tip="Medium">
          <a class="btn btn-accent" href="https://medium.com/@brunosilvinosilva" target="_blank">
            <Book :size="16" />
          </a>
        </div>
      </ul>
    </div>
  </div>
</template>