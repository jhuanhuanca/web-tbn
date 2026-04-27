<template>
  <div class="min-h-dvh bg-white">
    <div class="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <div class="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-tbn-light/30 blur-3xl"></div>
      <div class="absolute top-56 -left-24 h-[24rem] w-[24rem] rounded-full bg-tbn-dark/10 blur-3xl"></div>
      <div class="absolute -bottom-24 right-0 h-[30rem] w-[30rem] rounded-full bg-tbn-light/20 blur-3xl"></div>
    </div>
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
    <CartDrawer />
    <FloatingCartButton />
    <FloatingDock />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatingDock from './components/FloatingDock.vue'
import CartDrawer from './components/CartDrawer.vue'
import FloatingCartButton from './components/FloatingCartButton.vue'
</script>
