<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { calculatePolygonInsetKnotPoints, calculatePolygon } from './inset-knot.ts'
import { getElementDimensions } from '../services/element-dimentions.ts'

type Variant = 'primary' | 'secondary' | 'tertiary'

const props = withDefaults(
  defineProps<{
    variant?: Variant
  }>(),
  {
    variant: 'primary',
  },
)

const variantClasses: Record<Variant, string> = {
  primary: 'px-6 py-1 bg-primary hover:bg-primary-hover',
  secondary: 'px-6 py-1 bg-secondary hover:bg-secondary-hover',
  tertiary: 'px-5 py-1 bg-primary hover:bg-primary-hover',
}

// SIZES
const buttonRef = ref<HTMLButtonElement | null>(null)
const width = ref(0)
const height = ref(0)

onMounted(() => {
  ;[width.value, height.value] = getElementDimensions(buttonRef.value)
})

const strokeWidth = 1.5
const inset = 2
const shape = computed(() => calculatePolygon(width.value, height.value))
const line = computed(() =>
  calculatePolygonInsetKnotPoints(width.value, height.value, strokeWidth, inset),
)

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    ref="buttonRef"
    class="relative rounded-md font-bold transition-colors text-background font-serif"
    :class="`${variantClasses[props.variant]}`"
    :style="{ clipPath: shape }"
    @click="$emit('click', $event)"
  >
    <svg
      class="absolute inset-0 h-full w-full"
      :class="`${props.variant === 'tertiary' ? 'hidden' : 'block'}`"
      :viewBox="`0 0 ${width} ${height}`"
    >
      <polygon
        :points="line"
        fill="none"
        stroke="var(--color-background)"
        :stroke-width="`${strokeWidth}`"
      />
    </svg>

    <slot />
  </button>
</template>
