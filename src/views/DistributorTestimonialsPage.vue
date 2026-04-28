<template>
  <section class="bg-tbn-neutral">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-black/5 sm:p-10">
        <div class="inline-flex items-center gap-2 rounded-full bg-tbn-light/10 px-3 py-1 text-xs font-extrabold text-tbn-dark ring-1 ring-tbn-light/20">
          Negocio
        </div>
        <h1 class="mt-5 text-3xl font-extrabold tracking-tight text-tbn-dark sm:text-4xl">
          Testimonios de distribuidores
        </h1>
        <p class="mt-3 max-w-3xl text-sm text-tbn-dark/70 sm:text-base">
          Historias de ejemplo que reflejan disciplina, procesos y resultados. (Demo)
        </p>
      </div>

      <div class="mt-8">
        <Testimonials />
      </div>
    </div>
  </section>
</template>

<script setup>
import Testimonials from '../components/Testimonials.vue'
</script>

