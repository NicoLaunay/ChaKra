<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '../components/Button.vue'

const router = useRouter()

function goTo(route: string) {
  router.push(route)
}
</script>

<template>
  <Button variant="primary">Primaire</Button>
  <Button variant="secondary">Secondaire</Button>
  <Button variant="tertiary">Tertiaire</Button>
  <Button variant="primary" @click="goTo('/creation')">Nouveau PJ</Button>
</template>
