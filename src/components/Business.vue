<template>
  <section id="negocio" class="bg-[#ffffff]">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">

        <!-- TEXTO -->
        <div>
          <h2 class="text-4xl font-extrabold leading-tight text-[#222d25]">
            Construye tu negocio con 
            <span class="text-[#54b144]">TBN Living</span>
          </h2>

          <p class="mt-4 max-w-xl text-lg text-[#222d25]/70 leading-relaxed">
            Un modelo moderno diseñado para generar ingresos, liderazgo y crecimiento
            personal con herramientas digitales y una comunidad sólida.
          </p>

          <!-- BOTONES -->
          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#recursos"
              class="inline-flex items-center justify-center rounded-xl bg-[#54b144] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#449a38] hover:shadow-lg active:scale-95"
            >
              Ver recursos
            </a>

            <a
              href="#testimonios"
              class="inline-flex items-center justify-center rounded-xl border border-[#222d25]/20 px-6 py-3 text-sm font-semibold text-[#222d25] transition hover:bg-[#f5f5f5]"
            >
              Historias reales
            </a>
          </div>

          <!-- BLOQUES INFO -->
          <div class="mt-10 grid gap-5 sm:grid-cols-2">

            <div class="rounded-2xl bg-[#f5f5f5] p-6 border border-gray-200">
              <p class="text-sm font-semibold text-[#54b144]">Dashboard</p>
              <p class="mt-1 text-2xl font-extrabold text-[#222d25]">Control total</p>
              <p class="mt-2 text-sm text-[#222d25]/70">
                Visualiza tu progreso, ingresos y actividad en tiempo real.
              </p>
            </div>

            <div class="rounded-2xl bg-[#f5f5f5] p-6 border border-gray-200">
              <p class="text-sm font-semibold text-[#54b144]">Estrategia</p>
              <p class="mt-1 text-2xl font-extrabold text-[#222d25]">Crecimiento</p>
              <p class="mt-2 text-sm text-[#222d25]/70">
                Capacitación continua y herramientas para escalar tu negocio.
              </p>
            </div>

          </div>
        </div>

        <!-- CARDS DERECHA -->
        <div class="grid gap-6 sm:grid-cols-2">

          <article
            v-for="card in cards"
            :key="card.title"
            class="group rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <!-- ICONO -->
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-center size-12 rounded-xl bg-[#54b144]/10">
                
                <!-- ICONOS -->
                <svg v-if="card.icon === 'coins'" viewBox="0 0 24 24" class="size-6 text-[#54b144]" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 3c4 0 8 1 8 3s-4 3-8 3-8-1-8-3 4-3 8-3Z"/>
                  <path d="M20 6v6c0 2-4 3-8 3s-8-1-8-3V6"/>
                </svg>

                <svg v-else-if="card.icon === 'chart'" viewBox="0 0 24 24" class="size-6 text-[#54b144]" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 19V5M4 19h16M7 15l3-3 3 2 4-5"/>
                </svg>

                <svg v-else viewBox="0 0 24 24" class="size-6 text-[#54b144]" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/>
                </svg>

              </div>

              <span class="text-xs font-semibold text-[#222d25]/60 bg-gray-100 px-3 py-1 rounded-full">
                {{ card.badge }}
              </span>
            </div>

            <!-- TEXTO -->
            <h3 class="mt-5 text-xl font-bold text-[#222d25]">
              {{ card.title }}
            </h3>

            <p class="mt-2 text-sm text-[#222d25]/70 leading-relaxed">
              {{ card.description }}
            </p>

            <!-- LINK -->
            <div class="mt-5">
              <a
                href="#recursos"
                class="inline-flex items-center gap-2 text-sm font-semibold text-[#54b144] transition hover:gap-3"
              >
                Explorar
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
const cards = [
  {
    title: 'Ganancias',
    badge: 'Ingresos',
    description: 'Crea un plan de ventas y recompensas con seguimiento claro y metas realistas.',
    icon: 'coins',
  },
  {
    title: 'Libertad financiera',
    badge: 'Escala',
    description: 'Construye un sistema repetible que te permita crecer con estructura y disciplina.',
    icon: 'chart',
  },
  {
    title: 'Crecimiento personal',
    badge: 'Liderazgo',
    description: 'Desarrolla habilidades de comunicación, liderazgo y trabajo en equipo.',
    icon: 'spark',
  },
  {
    title: 'Comunidad',
    badge: 'Apoyo',
    description: 'Conecta con personas alineadas a tus metas y comparte experiencias.',
    icon: 'spark',
  },
]

</script>

