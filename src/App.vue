<script setup lang="ts">
import Burger from './ui/components/action/Burger.vue'
</script>

<template>
  <div
    id="header"
    class="flex justify-between items-center mb-5 px-5 py-4 border-b border-b-secondary"
  >
    <router-link to="/" class="flex gap-1 items-center">
      <img src="./ui/assets/app-logo-small.png" alt="logo" />
      <h1 class="text-primary font-bold text-xl">ChaKra</h1>
    </router-link>
    <Burger />
  </div>
  <div class="px-5">
    <router-view />
  </div>
</template>

<style scoped></style>
