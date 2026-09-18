<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { calculatePolygon } from './inset-knot.ts'
import { getElementDimensions } from '../../services/element-dimentions.ts'

const active = defineModel<boolean>({ default: false })

const stateClasses = computed(() =>
  active.value ? 'bg-primary' : 'bg-tertiary hover:bg-secondary',
)

// SIZES
const buttonRef = ref<HTMLButtonElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  ;[width.value, height.value] = getElementDimensions(buttonRef.value)
})

const shape = computed(() => calculatePolygon(width.value, height.value))
</script>

<template>
  <button
    ref="buttonRef"
    type="button"
    role="switch"
    class="relative px-4 font-bold text-background font-serif"
    :class="`${stateClasses}`"
    :style="{ clipPath: shape }"
    :aria-checked="active"
    @click="active = !active"
  >
    <slot />
  </button>
</template>
