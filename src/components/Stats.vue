<template>
  <section class="bg-tbn-neutral">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-black/5 sm:p-10">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tight text-tbn-dark">Estadísticas</h2>
            <p class="mt-2 max-w-2xl text-sm text-tbn-dark/70 sm:text-base">
              Métricas para transmitir confianza y visión. Animación de conteo al entrar en pantalla.
            </p>
          </div>
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-tbn-dark/60">
            <span class="size-2 rounded-full bg-tbn-light"></span>
            Actualizado hoy (demo)
          </div>
        </div>

        <div ref="rootEl" class="mt-10 grid gap-4 sm:grid-cols-3">
          <div
            v-for="s in stats"
            :key="s.label"
            class="rounded-3xl bg-tbn-neutral p-6 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            <div class="text-xs font-semibold text-tbn-dark/60">{{ s.label }}</div>
            <div class="mt-2 flex items-end gap-2">
              <div class="text-4xl font-extrabold tracking-tight text-tbn-dark">
                {{ s.prefix }}{{ formatStat(s, display[s.key]) }}{{ s.suffix }}
              </div>
            </div>
            <div class="mt-3 text-sm text-tbn-dark/70">{{ s.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const rootEl = ref(null)
const display = reactive({
  years: 0,
  users: 0,
  countries: 0,
})

const stats = [
  {
    key: 'years',
    label: 'Experiencia',
    prefix: '+',
    suffix: ' años',
    value: 10,
    description: 'Estructura, procesos y soporte con enfoque a resultados.',
  },
  {
    key: 'users',
    label: 'Usuarios',
    prefix: '+',
    suffix: '',
    value: 50000,
    description: 'Comunidad en crecimiento con herramientas de seguimiento.',
    format: (n) => new Intl.NumberFormat('es-MX').format(n),
  },
  {
    key: 'countries',
    label: 'Presencia',
    prefix: '+',
    suffix: ' países',
    value: 10,
    description: 'Expansión con operación clara y visión internacional.',
  },
]

let io
let raf = 0
let hasPlayed = false

function animate() {
  const duration = 1100
  const start = performance.now()

  const from = { years: 0, users: 0, countries: 0 }
  const to = {
    years: stats.find((s) => s.key === 'years').value,
    users: stats.find((s) => s.key === 'users').value,
    countries: stats.find((s) => s.key === 'countries').value,
  }

  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration)
    const ease = 1 - Math.pow(1 - t, 3)

    display.years = Math.round(from.years + (to.years - from.years) * ease)
    display.users = Math.round(from.users + (to.users - from.users) * ease)
    display.countries = Math.round(from.countries + (to.countries - from.countries) * ease)

    if (t < 1) raf = requestAnimationFrame(tick)
  }

  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      if (hasPlayed) return
      hasPlayed = true
      animate()
      io.disconnect()
    },
    { threshold: 0.25 }
  )

  if (rootEl.value) io.observe(rootEl.value)
})

onBeforeUnmount(() => {
  if (io) io.disconnect()
  if (raf) cancelAnimationFrame(raf)
})

function formatStat(stat, value) {
  if (typeof stat.format === 'function') return stat.format(value)
  return value
}
</script>
