<template>
  <section id="recursos" class="bg-[#f5f5f5]">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

      <!-- CONTENEDOR PRINCIPAL -->
      <div class="rounded-[2rem] bg-[#222d25] p-10 text-white shadow-xl">

        <!-- HEADER -->
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 class="text-4xl font-extrabold">
              Recursos <span class="text-[#54b144]">TBN Living</span>
            </h2>
            <p class="mt-3 max-w-2xl text-lg text-white/70 leading-relaxed">
              Todo lo que necesitas para crecer: capacitación, herramientas y comunidad
              en un solo lugar.
            </p>
          </div>

          <a
            href="#productos"
            class="inline-flex items-center justify-center rounded-xl bg-[#54b144] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#449a38] hover:shadow-lg active:scale-95"
          >
            Ver productos
          </a>
        </div>

        <!-- GRID -->
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <article
            v-for="r in resources"
            :key="r.title"
            class="group rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-lg"
          >

            <!-- ICONO + BADGE -->
            <div class="flex items-center justify-between">

              <div class="flex items-center justify-center size-12 rounded-xl bg-[#54b144]/20">

                <!-- ICONOS -->
                <svg v-if="r.kind === 'video'" viewBox="0 0 24 24" class="size-6 text-[#54b144]" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 10l4-2v8l-4-2M3 6h12v12H3z"/>
                </svg>

                <svg v-else-if="r.kind === 'tool'" viewBox="0 0 24 24" class="size-6 text-[#54b144]" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"/>
                </svg>

                <svg v-else viewBox="0 0 24 24" class="size-6 text-[#54b144]" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5"/>
                </svg>

              </div>

              <span class="text-xs font-semibold text-white/80 bg-white/10 px-3 py-1 rounded-full">
                {{ r.badge }}
              </span>

            </div>

            <!-- TEXTO -->
            <h3 class="mt-6 text-xl font-bold text-white">
              {{ r.title }}
            </h3>

            <p class="mt-2 text-sm text-white/70 leading-relaxed">
              {{ r.description }}
            </p>

            <!-- CTA -->
            <div class="mt-6">
              <a
                href="#"
                class="inline-flex items-center gap-2 text-sm font-semibold text-[#54b144] transition-all group-hover:gap-3"
              >
                {{ r.cta }}
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h12M13 6l6 6-6 6"/>
                </svg>
              </a>
            </div>

          </article>

        </div>

      </div>

    </div>
  </section>
</template>
<script setup>
const resources = [
  {
    badge: 'Aprende',
    title: 'Capacitaciones',
    description: 'Entrenamientos semanales en ventas, liderazgo y uso del portal.',
    cta: 'Ver calendario',
    kind: 'video',
  },
  {
    badge: 'Opera',
    title: 'Herramientas',
    description: 'Materiales listos: guías, scripts y recursos descargables.',
    cta: 'Abrir herramientas',
    kind: 'tool',
  },
  {
    badge: 'Conecta',
    title: 'Comunidad',
    description: 'Grupos, eventos y acompañamiento para mantener consistencia.',
    cta: 'Entrar a comunidad',
    kind: 'users',
  },
]
</script>

