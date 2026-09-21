<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getElementDimensions } from '../../services/element-dimentions'

type Color = 'primary' | 'secondary' | 'tertiary' | 'background'

const props = withDefaults(
  defineProps<{
    color?: Color
    strokeWidth?: number
    markerSize?: number
  }>(),
  {
    color: 'primary',
    strokeWidth: 2,
    markerSize: 2,
  },
)

// SIZES
const separatorRef = ref<HTMLElement | null>(null)
const width = ref(0)
const height = props.markerSize * 4
let bin = 0

onMounted(() => {
  ;[width.value, bin] = getElementDimensions(separatorRef.value)
})
</script>

<template>
  <svg
    ref="separatorRef"
    class="w-full"
    :style="{ height: `${height + strokeWidth}px` }"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <!-- LEFT MARKER -->
    <polygon
      :points="`
      ${height + strokeWidth / 2},${height / 2} 
      ${height / 2 + strokeWidth / 2},${height} 
      ${strokeWidth / 2},${height / 2} 
      ${height / 2 + strokeWidth / 2},0 
      `"
      fill="none"
      :stroke="`var(--color-${props.color}`"
      :stroke-width="`${strokeWidth}`"
    />
    <!-- LINE -->
    <line
      :x1="`${height + strokeWidth / 2}`"
      :y1="`${height / 2}`"
      :x2="`${width - height - strokeWidth / 2}`"
      :y2="`${height / 2}`"
      :stroke="`var(--color-${props.color}`"
      :stroke-width="`${strokeWidth}`"
    />
    <!-- RIGHT MARKER -->
    <polygon
      :points="`
      ${width - height / 2 - strokeWidth / 2},0 
      ${width - strokeWidth / 2},${height / 2} 
      ${width - height / 2 - strokeWidth / 2},${height} 
      ${width - height - strokeWidth / 2},${height / 2} 
      )`"
      fill="none"
      :stroke="`var(--color-${props.color}`"
      :stroke-width="`${strokeWidth}`"
    />
  </svg>
</template>
