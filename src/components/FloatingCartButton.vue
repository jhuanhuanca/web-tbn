<template>
  <div class="fixed bottom-5 left-5 z-[60]">
    <button
      type="button"
      class="group relative inline-flex items-center gap-3 rounded-[1.4rem] px-4 py-3 text-white shadow-soft ring-1 ring-white/20 transition hover:-translate-y-1 hover:brightness-95 hover:shadow-xl active:translate-y-0"
      style="background-color:#54b144;"
      @click="cart.toggle(true)"
      aria-label="Abrir carrito"
    >
      <span class="grid size-11 place-items-center rounded-2xl bg-black/15 text-white ring-1 ring-white/20">
        <Icon name="cart" class="size-6" />
      </span>
      <span class="hidden sm:block text-left">
        <span class="block text-xs font-extrabold tracking-wide text-white/85">CARRITO</span>
        <span class="block text-sm font-extrabold text-white">
          {{ cart.count }} item<span v-if="cart.count !== 1">s</span>
        </span>
      </span>

      <span
        v-if="cart.count > 0"
        class="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-tbn-dark text-xs font-extrabold text-white shadow-soft ring-2 ring-white"
      >
        {{ cart.count }}
      </span>

      <span class="pointer-events-none absolute inset-0 rounded-[1.4rem] opacity-0 transition group-hover:opacity-100"
        style="background: radial-gradient(circle at 20% 10%, rgba(255,255,255,0.35), transparent 60%);"
      ></span>
    </button>
  </div>
</template>

<script setup>
import { useCart } from '../stores/cart'
import Icon from './Icon.vue'

const cart = useCart()
</script>

