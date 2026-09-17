<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { calculatePolygonInsetKnotPoints } from './action/inset-knot'
import type { LineCharacter } from './line-character'
import { getElementDimensions } from '../services/element-dimentions'

const defaultCharacter: LineCharacter = {
  icon: '../assets/app-logo-small.png',
  name: 'Léorsha Carcinos',
  profile: 'Guerrière',
  race: 'Humaine',
  level: 2,
}

const props = withDefaults(
  defineProps<{
    character?: LineCharacter
  }>(),
  {
    character: () => ({
      icon: '../assets/app-logo-small.png',
      name: 'Léorsha Carcinos',
      profile: 'Guerrière',
      race: 'Humaine',
      level: 2,
    }),
  },
)

// ----------------------------------------------------------------------------------------------------------------------------
// SIZE RECORDING
// ----------------------------------------------------------------------------------------------------------------------------
const lineRef = ref<HTMLElement | null>(null)
const width = ref(0)
const height = ref(0)
const strokeWidth = 2
let observer: ResizeObserver | null = null // allows lineRef to be updated on each change

onMounted(() => {
  if (!lineRef.value) return
  observer = new ResizeObserver(() => {
    ;[width.value, height.value] = getElementDimensions(lineRef.value)
  })
  observer.observe(lineRef.value)
})

onUnmounted(() => observer?.disconnect())

const line = computed(() => calculatePolygonInsetKnotPoints(width.value, height.value, strokeWidth))
// ----------------------------------------------------------------------------------------------------------------------------
</script>

<template>
  <div ref="lineRef" class="relative">
    <div class="flex px-6 py-1 gap-1 justify-between items-center">
      <img src="../assets/app-logo-small.png" alt="avatar" />
      <span class="align-middle">{{ character.name }}</span>
      <span class="flex gap-1">
        <span>{{ character.profile }}</span>
        <span>{{ character.race }}</span>
      </span>
      <span>Niv. {{ character.level }}</span>
    </div>

    <svg class="absolute inset-0 h-full w-full" :viewBox="`0 0 ${width} ${height}`">
      <polygon
        :points="line"
        fill="none"
        stroke="var(--color-tertiary)"
        :stroke-width="`${strokeWidth}`"
      />
    </svg>
  </div>
</template>
