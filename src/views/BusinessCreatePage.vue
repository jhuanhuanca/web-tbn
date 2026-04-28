<template>
  <section class="bg-tbn-neutral">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-black/5 sm:p-10">
        <div class="inline-flex items-center gap-2 rounded-full bg-tbn-light/10 px-3 py-1 text-xs font-extrabold text-tbn-dark ring-1 ring-tbn-light/20">
          Negocio
        </div>
        <h1 class="mt-5 text-3xl font-extrabold tracking-tight text-tbn-dark sm:text-4xl">
          Cómo crear mi negocio
        </h1>
        <p class="mt-3 max-w-3xl text-sm text-tbn-dark/70 sm:text-base">
          Guía práctica (demo) para iniciar de forma profesional: enfoque, sistema y duplicación. Aquí puedes conectar tu
          onboarding real, PDFs, videos y rutas de capacitación.
        </p>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article class="rounded-3xl bg-tbn-neutral p-6 ring-1 ring-black/5">
            <div class="text-xs font-extrabold text-tbn-dark/60">Paso 1</div>
            <div class="mt-2 text-lg font-extrabold text-tbn-dark">Define tu meta</div>
            <p class="mt-2 text-sm text-tbn-dark/70">
              Establece un objetivo mensual y el porqué. Eso guía tu consistencia y comunicación.
            </p>
          </article>
          <article class="rounded-3xl bg-tbn-neutral p-6 ring-1 ring-black/5">
            <div class="text-xs font-extrabold text-tbn-dark/60">Paso 2</div>
            <div class="mt-2 text-lg font-extrabold text-tbn-dark">Producto + historia</div>
            <p class="mt-2 text-sm text-tbn-dark/70">
              Elige 1–2 productos base y crea una historia breve (problema → solución → resultado).
            </p>
          </article>
          <article class="rounded-3xl bg-tbn-neutral p-6 ring-1 ring-black/5">
            <div class="text-xs font-extrabold text-tbn-dark/60">Paso 3</div>
            <div class="mt-2 text-lg font-extrabold text-tbn-dark">Duplica el sistema</div>
            <p class="mt-2 text-sm text-tbn-dark/70">
              Repite un proceso simple: invitar → presentar → seguimiento → cierre → capacitación.
            </p>
          </article>
        </div>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <RouterLink
            to="/negocio"
            class="inline-flex h-12 items-center justify-center rounded-2xl bg-black/5 px-6 text-sm font-extrabold text-tbn-dark ring-1 ring-black/10 transition hover:bg-black/10"
          >
            Volver a Negocio
          </RouterLink>
          <RouterLink
            to="/productos"
            class="inline-flex h-12 items-center justify-center rounded-2xl bg-tbn-light px-6 text-sm font-extrabold text-white shadow-soft ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
          >
            Ver productos
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

