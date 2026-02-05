<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const VITE_APP_NAME = import.meta.env.VITE_APP_NAME
console.log("VITE_APP_NAME", VITE_APP_NAME)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-[clamp(1.5rem,3vw,3rem)] font-bold text-center text-green-600">
      {{ VITE_APP_NAME }}
    </h1>
    <p class="text-center mt-4 text-gray-600">
    hello world
    </p>
    <p class="text-center mt-2 text-gray-500">
    hello world
    </p>
    <HelloWorld msg="Vue3 + TS + Tailwind + Jest" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
