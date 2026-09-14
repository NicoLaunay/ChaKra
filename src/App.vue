<script setup lang="ts"></script>

<template>
  <div id="header">
    <router-link to="/" class="flex gap-1 items-center">
      <img src="./ui/assets/app-logo-small.png" alt="logo" />
      <h1 class="text-primary font-bold text-xl">ChaKra</h1>
    </router-link>
  </div>
  <router-view />
</template>

<style scoped></style>
