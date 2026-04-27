<template>
  <svg
    v-if="svg"
    :viewBox="svg.viewBox"
    :class="cls"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, idx) in svg.paths" :key="idx" :d="d" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  class: { type: String, default: '' },
})

const ICONS = {
  chevronDown: { viewBox: '0 0 24 24', paths: ['M6 9l6 6 6-6'] },
  x: { viewBox: '0 0 24 24', paths: ['M6 6l12 12', 'M18 6L6 18'] },
  menu: { viewBox: '0 0 24 24', paths: ['M4 7h16', 'M4 12h16', 'M4 17h16'] },
  search: { viewBox: '0 0 24 24', paths: ['M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z', 'M21 21l-4.3-4.3'] },
  cart: { viewBox: '0 0 24 24', paths: ['M3 3h2l.5 3', 'M7 13h10l4-8H6.5', 'M7 13l-1.2 6h12.2', 'M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'] },
  bag: { viewBox: '0 0 24 24', paths: ['M6 7h12l-1 14H7L6 7Z', 'M9 7a3 3 0 0 1 6 0'] },
  sparkles: { viewBox: '0 0 24 24', paths: ['M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z', 'M19 13l.9 2.6L22.5 16l-2.6.9L19 19.5l-.9-2.6L15.5 16l2.6-.9L19 13Z'] },
  book: { viewBox: '0 0 24 24', paths: ['M4 5a3 3 0 0 1 3-3h12v18H7a3 3 0 0 0-3 3V5Z', 'M7 2v18'] },
  trophy: { viewBox: '0 0 24 24', paths: ['M8 4h8v3a4 4 0 0 1-8 0V4Z', 'M6 4H4v3a4 4 0 0 0 4 4', 'M18 4h2v3a4 4 0 0 1-4 4', 'M12 11v4', 'M8 21h8', 'M9 15h6'] },
  rocket: { viewBox: '0 0 24 24', paths: ['M14 4c3 0 6 3 6 6 0 6-6 10-6 10S8 16 8 10c0-3 3-6 6-6Z', 'M14 4c-2 2-3 4-3 6', 'M10 14l-3 3v-4l2-2', 'M14 14l3 3v-4l-2-2'] },
  trash: { viewBox: '0 0 24 24', paths: ['M4 7h16', 'M10 11v6', 'M14 11v6', 'M6 7l1 14h10l1-14', 'M9 7V4h6v3'] },
  arrowUp: { viewBox: '0 0 24 24', paths: ['M12 19V5', 'M5 12l7-7 7 7'] },
}

const svg = computed(() => ICONS[props.name] || null)
const cls = computed(() => props.class || 'size-5')
</script>

